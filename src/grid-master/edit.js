import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { SelectControl, PanelBody, RangeControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();

    const postTypes = [
        { label: __('Post', 'grid-master'), value: 'post' },
        { label: __('Page', 'grid-master'), value: 'page' },
    ];

    // Get posts or pages dynamically
    const items = useSelect(
        (select) => {
            if (!attributes.postType) return [];
            return select('core').getEntityRecords('postType', attributes.postType, { per_page: -1 });
        },
        [attributes.postType]
    );

    // Limit items based on numberOfItems
    const displayedItems = items ? items.slice(0, attributes.numberOfItems) : [];

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Settings', 'grid-master')}>
                    <SelectControl
                        label={__('Select Type', 'grid-master')}
                        value={attributes.postType}
                        options={postTypes}
                        onChange={(postType) => setAttributes({ postType, selectedId: 0 })}
                    />
                    <RangeControl
                        label={__('Number of Items', 'grid-master')}
                        value={attributes.numberOfItems}
                        onChange={(value) => setAttributes({ numberOfItems: value })}
                        min={1}
                        max={20}
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
                ) : (
                    <p>{__('No items to display', 'grid-master')}</p>
                )}
            </div>
        </>
    );
}
