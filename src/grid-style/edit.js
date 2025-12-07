import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { sectionTitle } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Section Settings', 'grid-style')} initialOpen={true}>
					<TextControl
						label={__('Section Title', 'grid-style')}
						value={sectionTitle}
						onChange={(value) => setAttributes({ sectionTitle: value })}
						help={__('Enter the title for this section', 'grid-style')}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<section className="grid-style-section">
					<h2 className="section-title">{sectionTitle}</h2>
					{/* Add your grid content here */}
				</section>
			</div>
		</>
	);
}