import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const blockProps = useBlockProps.save();

    // Save the attributes so PHP can render them
    return (
        <div {...blockProps} 
             data-post-type={attributes.postType} 
             data-number-of-items={attributes.numberOfItems}>
        </div>
    );
}
