import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { 
    SelectControl, 
    PanelBody, 
    RangeControl, 
    Spinner, 
    ToggleControl,
    Button,
    __experimentalBoxControl as BoxControl,
    ColorPalette
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { Fragment } from '@wordpress/element';
import { useState } from 'react';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const [currentPage, setCurrentPage] = useState(1);

    const {
        postType = 'post',
        numberOfItems = 6,
        columns = 3,
        showFeaturedImage = true,
        showExcerpt = true,
        showDate = true,
        showAuthor = true,
        excerptLength = 20,
        cardBorderRadius = '8px',
        cardPadding = { top: '20px', right: '20px', bottom: '20px', left: '20px' },
        cardBackgroundColor = '#ffffff',
        cardShadow = true,
        titleColor = '#333333',
        excerptColor = '#666666',
        metaColor = '#999999',
        imageHeight = '200px',
        enablePagination = false,
        itemsPerPage = 4,
    } = attributes;

    // Post type options
    const postTypes = [
        { label: __('Post', 'grid-master'), value: 'post' },
        { label: __('Page', 'grid-master'), value: 'page' },
    ];

    // Column options
    const columnOptions = [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
    ];

    // Fetch ALL posts or pages to get the total count
    const allItems = useSelect(
        (select) => {
            return select('core').getEntityRecords('postType', postType, {
                per_page: -1, // Get all items to know the total count
                _embed: true, // Enable embedded data for featured images
            });
        },
        [postType]
    );

    // Calculate the actual items to display
    const items = allItems ? allItems.slice(0, numberOfItems) : null;

    // Loading state
    if (!allItems) {
        return (
            <div {...blockProps}>
                <Spinner />
                <p>{__('Loading items...', 'grid-master')}</p>
            </div>
        );
    }

    // Get total count and set max range
    const totalItems = allItems.length;
    const maxItems = totalItems > 0 ? totalItems : 1;

    // Calculate pagination
    const itemsToShow = enablePagination ? itemsPerPage : numberOfItems;
    const totalPages = enablePagination ? Math.ceil(totalItems / itemsPerPage) : 1;
    const startIndex = enablePagination ? (currentPage - 1) * itemsPerPage : 0;
    const endIndex = enablePagination ? startIndex + itemsPerPage : numberOfItems;
    const displayItems = allItems.slice(startIndex, endIndex);

    // Reset to page 1 when changing post type or items per page
    const handlePostTypeChange = (value) => {
        setAttributes({ postType: value });
        setCurrentPage(1);
    };

    const handleItemsPerPageChange = (value) => {
        setAttributes({ itemsPerPage: value });
        setCurrentPage(1);
    };

    // Helper function to get featured image
    const getFeaturedImage = (item) => {
        if (item._embedded && item._embedded['wp:featuredmedia']) {
            return item._embedded['wp:featuredmedia'][0]?.source_url;
        }
        return null;
    };

    // Helper function to get author name
    const getAuthorName = (item) => {
        if (item._embedded && item._embedded.author) {
            return item._embedded.author[0]?.name;
        }
        return '';
    };

    // Helper function to truncate excerpt
    const truncateExcerpt = (text, length) => {
        if (!text) return '';
        const words = text.split(' ');
        if (words.length > length) {
            return words.slice(0, length).join(' ') + '...';
        }
        return text;
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '20px',
        marginTop: '20px',
    };

    const cardStyle = {
        backgroundColor: cardBackgroundColor,
        borderRadius: cardBorderRadius,
        padding: `${cardPadding.top} ${cardPadding.right} ${cardPadding.bottom} ${cardPadding.left}`,
        boxShadow: cardShadow ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    };

    const imageStyle = {
        width: '100%',
        height: imageHeight,
        objectFit: 'cover',
        borderRadius: '4px',
        marginBottom: '15px',
    };

    const titleStyle = {
        color: titleColor,
        fontSize: '20px',
        fontWeight: '600',
        marginBottom: '10px',
        lineHeight: '1.4',
    };

    const excerptStyle = {
        color: excerptColor,
        fontSize: '14px',
        lineHeight: '1.6',
        marginBottom: '10px',
    };

    const metaStyle = {
        color: metaColor,
        fontSize: '12px',
        display: 'flex',
        gap: '10px',
        marginTop: '10px',
    };

    const paginationStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        marginTop: '30px',
    };

    const pageButtonStyle = {
        padding: '8px 12px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        background: '#fff',
        cursor: 'pointer',
        fontSize: '14px',
    };

    const activePageButtonStyle = {
        ...pageButtonStyle,
        background: '#2271b1',
        color: '#fff',
        borderColor: '#2271b1',
    };

    const disabledButtonStyle = {
        ...pageButtonStyle,
        opacity: 0.5,
        cursor: 'not-allowed',
    };

    return (
        <Fragment>
            <InspectorControls>
                <PanelBody title={__('Content Settings', 'grid-master')} initialOpen={true}>
                    <SelectControl
                        label={__('Select Type', 'grid-master')}
                        value={postType}
                        options={postTypes}
                        onChange={handlePostTypeChange}
                    />
                    <p style={{ fontSize: '12px', color: '#666', marginTop: '5px', marginBottom: '10px' }}>
                        {totalItems > 0 
                            ? `${__('Total available:', 'grid-master')} ${totalItems} ${postType === 'post' ? __('posts', 'grid-master') : __('pages', 'grid-master')}`
                            : __('No items found', 'grid-master')
                        }
                    </p>
                    
                    <ToggleControl
                        label={__('Enable Pagination', 'grid-master')}
                        checked={enablePagination}
                        onChange={(value) => {
                            setAttributes({ enablePagination: value });
                            setCurrentPage(1);
                        }}
                        help={enablePagination ? __('Items will be split into pages', 'grid-master') : __('Show a fixed number of items', 'grid-master')}
                    />

                    {enablePagination ? (
                        <RangeControl
                            label={__('Items Per Page', 'grid-master')}
                            value={itemsPerPage}
                            onChange={handleItemsPerPageChange}
                            min={1}
                            max={Math.min(20, maxItems)}
                            help={__(`Total pages: ${totalPages}`, 'grid-master')}
                        />
                    ) : (
                        <RangeControl
                            label={__('Number of Items', 'grid-master')}
                            value={numberOfItems > maxItems ? maxItems : numberOfItems}
                            onChange={(value) => setAttributes({ numberOfItems: value })}
                            min={1}
                            max={maxItems}
                            help={__(`Show 1 to ${maxItems} items`, 'grid-master')}
                        />
                    )}
                    <SelectControl
                        label={__('Columns', 'grid-master')}
                        value={columns}
                        options={columnOptions}
                        onChange={(value) => setAttributes({ columns: parseInt(value) })}
                    />
                </PanelBody>

                <PanelBody title={__('Display Options', 'grid-master')} initialOpen={false}>
                    <ToggleControl
                        label={__('Show Featured Image', 'grid-master')}
                        checked={showFeaturedImage}
                        onChange={(value) => setAttributes({ showFeaturedImage: value })}
                    />
                    {showFeaturedImage && (
                        <RangeControl
                            label={__('Image Height (px)', 'grid-master')}
                            value={parseInt(imageHeight)}
                            onChange={(value) => setAttributes({ imageHeight: `${value}px` })}
                            min={100}
                            max={400}
                        />
                    )}
                    <ToggleControl
                        label={__('Show Excerpt', 'grid-master')}
                        checked={showExcerpt}
                        onChange={(value) => setAttributes({ showExcerpt: value })}
                    />
                    {showExcerpt && (
                        <RangeControl
                            label={__('Excerpt Length (words)', 'grid-master')}
                            value={excerptLength}
                            onChange={(value) => setAttributes({ excerptLength: value })}
                            min={10}
                            max={50}
                        />
                    )}
                    <ToggleControl
                        label={__('Show Date', 'grid-master')}
                        checked={showDate}
                        onChange={(value) => setAttributes({ showDate: value })}
                    />
                    <ToggleControl
                        label={__('Show Author', 'grid-master')}
                        checked={showAuthor}
                        onChange={(value) => setAttributes({ showAuthor: value })}
                    />
                </PanelBody>

                <PanelBody title={__('Card Design', 'grid-master')} initialOpen={false}>
                    <RangeControl
                        label={__('Border Radius (px)', 'grid-master')}
                        value={parseInt(cardBorderRadius)}
                        onChange={(value) => setAttributes({ cardBorderRadius: `${value}px` })}
                        min={0}
                        max={30}
                    />
                    <ToggleControl
                        label={__('Card Shadow', 'grid-master')}
                        checked={cardShadow}
                        onChange={(value) => setAttributes({ cardShadow: value })}
                    />
                    {BoxControl && (
                        <BoxControl
                            label={__('Card Padding', 'grid-master')}                            
                            values={ {
                                    top: '20px',
                                    left: '20px',
                                    right: '20px',
                                    bottom: '20px',
                                    } }
                            onChange={(value) => setAttributes({ cardPadding: value })}
                        />
                    )}
                </PanelBody>

                <PanelBody title={__('Colors', 'grid-master')} initialOpen={false}>
                    <p><strong>{__('Card Background', 'grid-master')}</strong></p>
                    <ColorPalette
                        value={cardBackgroundColor}
                        onChange={(value) => setAttributes({ cardBackgroundColor: value || '#ffffff' })}
                    />
                    <p><strong>{__('Title Color', 'grid-master')}</strong></p>
                    <ColorPalette
                        value={titleColor}
                        onChange={(value) => setAttributes({ titleColor: value || '#333333' })}
                    />
                    <p><strong>{__('Excerpt Color', 'grid-master')}</strong></p>
                    <ColorPalette
                        value={excerptColor}
                        onChange={(value) => setAttributes({ excerptColor: value || '#666666' })}
                    />
                    <p><strong>{__('Meta Color', 'grid-master')}</strong></p>
                    <ColorPalette
                        value={metaColor}
                        onChange={(value) => setAttributes({ metaColor: value || '#999999' })}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                {displayItems.length > 0 ? (
                    <>
                        <div style={gridStyle}>
                            {displayItems.map((item) => {
                                const featuredImage = getFeaturedImage(item);
                                const authorName = getAuthorName(item);
                                const excerpt = item.excerpt?.rendered?.replace(/<[^>]+>/g, '') || '';

                                return (
                                    <div key={item.id} style={cardStyle}>
                                        {showFeaturedImage && featuredImage && (
                                            <img
                                                src={featuredImage}
                                                alt={item.title.rendered}
                                                style={imageStyle}
                                            />
                                        )}
                                        <h3 style={titleStyle}>{item.title.rendered}</h3>
                                        {showExcerpt && excerpt && (
                                            <p style={excerptStyle}>
                                                {truncateExcerpt(excerpt, excerptLength)}
                                            </p>
                                        )}
                                        {(showDate || showAuthor) && (
                                            <div style={metaStyle}>
                                                {showDate && (
                                                    <span>
                                                        {new Date(item.date).toLocaleDateString()}
                                                    </span>
                                                )}
                                                {showAuthor && authorName && (
                                                    <span>• {authorName}</span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {enablePagination && totalPages > 1 && (
                            <div className="grid-master-pagination">
                                <button
                                    className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
                                    onClick={() => setCurrentPage(1)}
                                    disabled={currentPage === 1}
                                >
                                    {__('First', 'grid-master')}
                                </button>
                                <button
                                    className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    {__('Previous', 'grid-master')}
                                </button>
                                <span className="pagination-info">
                                    {__('Page', 'grid-master')} {currentPage} {__('of', 'grid-master')} {totalPages}
                                </span>
                                <button
                                    className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                >
                                    {__('Next', 'grid-master')}
                                </button>
                                <button
                                    className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}
                                    onClick={() => setCurrentPage(totalPages)}
                                    disabled={currentPage === totalPages}
                                >
                                    {__('Last', 'grid-master')}
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <p>{__('No items to display', 'grid-master')}</p>
                )}
            </div>
        </Fragment>
    );
}