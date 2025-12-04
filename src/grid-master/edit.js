import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InspectorControls
} from '@wordpress/block-editor';

import {
    PanelBody,
    SelectControl,
    RangeControl,
    ColorPalette,
    ToggleControl,
    Spinner
} from '@wordpress/components';

import { useSelect } from '@wordpress/data';
import { Fragment } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
    const {
        postType = 'post',
        numberOfItems = 6,
        showImage = true,
        cardBg,
        cardTextColor,
        cardPadding = 15,
        cardRadius = 10
    } = attributes;

    const blockProps = useBlockProps({
        className: 'gm-post-grid'
    });

    // Post types for dropdown
    const postTypes = [
        { label: __('Post', 'grid-master'), value: 'post' },
        { label: __('Page', 'grid-master'), value: 'page' },
    ];

    // Fetch posts/pages
    const items = useSelect(
        (select) =>
            select('core').getEntityRecords('postType', postType, {
                per_page: numberOfItems
            }),
        [postType, numberOfItems]
    );

    // Loading
    if (items === undefined) {
        return (
            <div {...blockProps}>
                <Spinner />
                <p>{__('Loading items...', 'grid-master')}</p>
            </div>
        );
    }

    const allItems = items || [];

    return (
        <Fragment>
            {/* ----------------------------------------------------
                SIDEBAR SETTINGS
            ---------------------------------------------------- */}
            <InspectorControls>
                <PanelBody title={__('Content Settings', 'grid-master')}>
                    <SelectControl
                        label={__('Select Post Type', 'grid-master')}
                        value={postType}
                        options={postTypes}
                        onChange={(value) => setAttributes({ postType: value })}
                    />

                    <RangeControl
                        label={__('Number of Items', 'grid-master')}
                        value={numberOfItems}
                        onChange={(value) => setAttributes({ numberOfItems: value })}
                        min={1}
                        max={20}
                    />

                    <ToggleControl
                        label={__('Show Featured Image', 'grid-master')}
                        checked={showImage}
                        onChange={(value) => setAttributes({ showImage: value })}
                    />
                </PanelBody>

                <PanelBody title={__('Card Design', 'grid-master')} initialOpen={false}>
                    <p><strong>{__('Card Background', 'grid-master')}</strong></p>
                    <ColorPalette
                        value={cardBg}
                        onChange={(value) => setAttributes({ cardBg: value })}
                    />

                    <p><strong>{__('Text Color', 'grid-master')}</strong></p>
                    <ColorPalette
                        value={cardTextColor}
                        onChange={(value) => setAttributes({ cardTextColor: value })}
                    />

                    <RangeControl
                        label={__('Card Padding', 'grid-master')}
                        value={cardPadding}
                        onChange={(value) => setAttributes({ cardPadding: value })}
                        min={5}
                        max={40}
                    />

                    <RangeControl
                        label={__('Card Border Radius', 'grid-master')}
                        value={cardRadius}
                        onChange={(value) => setAttributes({ cardRadius: value })}
                        min={0}
                        max={40}
                    />
                </PanelBody>
            </InspectorControls>

            {/* ----------------------------------------------------
                BLOCK FRONT (EDITOR PREVIEW)
            ---------------------------------------------------- */}
            <div {...blockProps} style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
                {allItems.length > 0 ? (
                    allItems.map((item) => {
                        const featuredImage =
                            item._embedded?.['wp:featuredmedia']?.[0]?.source_url;

                        return (
                            <div
                                key={item.id}
                                className="gm-card"
                                style={{
                                    background: cardBg || '#ffffff',
                                    color: cardTextColor || '#000',
                                    padding: cardPadding,
                                    borderRadius: cardRadius,
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                                }}
                            >
                                {showImage && featuredImage && (
                                    <img
                                        src={featuredImage}
                                        alt=""
                                        style={{
                                            width: '100%',
                                            borderRadius: cardRadius
                                        }}
                                    />
                                )}

                                <h3 style={{ marginTop: '10px' }}>
                                    {item.title.rendered}
                                </h3>

                                {item.excerpt && (
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: item.excerpt.rendered
                                        }}
                                    />
                                )}
                            </div>
                        );
                    })
                ) : (
                    <p>{__('No items found.', 'grid-master')}</p>
                )}
            </div>
        </Fragment>
    );
}
