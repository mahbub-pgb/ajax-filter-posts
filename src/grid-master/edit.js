import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { SelectControl, PanelBody, RangeControl, Spinner } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();

    const postTypes = [
        { label: __('Post', 'grid-master'), value: 'post' },
        { label: __('Page', 'grid-master'), value: 'page' },
    ];

    // Fetch posts/pages
    const items = useSelect(
        (select) => {
            const type = attributes.postType || 'post';
            return select('core').getEntityRecords('postType', type, { per_page: -1 });
        },
        [attributes.postType]
    );

    // Loading state
    if (items === undefined) {
        return (
            <div {...blockProps}>
                <Spinner />
                <p>{__('Loading items...', 'grid-master')}</p>
            </div>
        );
    }

    const allItems = items || [];
    const numberOfItems = attributes.numberOfItems || allItems.length;
    const displayedItems = allItems.slice(0, numberOfItems);

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Settings', 'grid-master')}>
                    <SelectControl
                        label={__('Select Type', 'grid-master')}
                        value={attributes.postType || 'post'}
                        options={postTypes}
                        onChange={(postType) => setAttributes({ postType })}
                    />
                    <RangeControl
                        label={__('Number of Items', 'grid-master')}
                        value={attributes.numberOfItems || displayedItems.length}
                        onChange={(value) => setAttributes({ numberOfItems: value })}
                        min={1}
                        max={allItems.length || 1}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                {displayedItems.length > 0 ? (
                    <ul>
                        {displayedItems.map((item) => (
                            <li key={item.id}>{item.title.rendered}</li>
                        ))}
                    </ul>
                ) : allItems.length === 0 ? (
                    <p>{__('No items to display', 'grid-master')}</p>
                ) : null}
            </div>
        </>
    );
}
