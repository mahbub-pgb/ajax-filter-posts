import { __ } from '@wordpress/i18n';
import { 
	useBlockProps, 
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	BlockControls,
	AlignmentToolbar,
	ColorPalette
} from '@wordpress/block-editor';
import { 
	PanelBody, 
	Button,
	RangeControl,
	SelectControl,
	TextControl,
	ToggleControl,
	ToolbarButton,
	__experimentalDivider as Divider
} from '@wordpress/components';
import { image as imageIcon } from '@wordpress/icons';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { 
		imageUrl,
		imageId,
		imageAlt,
		imageWidth,
		imageHeight,
		objectFit,
		borderRadius,
		borderWidth,
		borderColor,
		borderStyle,
		boxShadow,
		marginTop,
		marginRight,
		marginBottom,
		marginLeft,
		alignment,
		linkUrl,
		linkTarget
	} = attributes;

	const onSelectImage = (media) => {
		setAttributes({
			imageUrl: media.url,
			imageId: media.id,
			imageAlt: media.alt || ''
		});
	};

	const removeImage = () => {
		setAttributes({
			imageUrl: '',
			imageId: 0,
			imageAlt: ''
		});
	};

	const resetBorder = () => {
		setAttributes({
			borderRadius: 0,
			borderWidth: 0,
			borderColor: '',
			borderStyle: 'solid'
		});
	};

	const resetSpacing = () => {
		setAttributes({
			marginTop: 0,
			marginRight: 0,
			marginBottom: 0,
			marginLeft: 0
		});
	};

	const resetAll = () => {
		setAttributes({
			imageWidth: 100,
			imageHeight: 'auto',
			objectFit: 'cover',
			borderRadius: 0,
			borderWidth: 0,
			borderColor: '',
			borderStyle: 'solid',
			boxShadow: '',
			marginTop: 0,
			marginRight: 0,
			marginBottom: 0,
			marginLeft: 0,
			alignment: 'center',
			linkUrl: '',
			linkTarget: false
		});
	};

	const imageStyles = {
		width: imageWidth ? `${imageWidth}%` : '100%',
		height: imageHeight === 'auto' ? 'auto' : `${imageHeight}px`,
		objectFit: objectFit || 'cover',
		borderRadius: borderRadius ? `${borderRadius}px` : undefined,
		borderWidth: borderWidth ? `${borderWidth}px` : undefined,
		borderColor: borderColor || undefined,
		borderStyle: borderStyle || undefined,
		boxShadow: boxShadow || undefined,
		display: 'block'
	};

	const containerStyles = {
		textAlign: alignment || 'center',
		marginTop: marginTop ? `${marginTop}px` : undefined,
		marginRight: marginRight ? `${marginRight}px` : undefined,
		marginBottom: marginBottom ? `${marginBottom}px` : undefined,
		marginLeft: marginLeft ? `${marginLeft}px` : undefined
	};

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={alignment}
					onChange={(value) => setAttributes({ alignment: value })}
				/>
				{imageUrl && (
					<MediaUploadCheck>
						<ToolbarButton
							icon={imageIcon}
							label={__('Replace Image', 'grid-master')}
							onClick={() => {
								// Trigger media upload
							}}
						/>
					</MediaUploadCheck>
				)}
			</BlockControls>

			<InspectorControls>
				{/* Reset All Button */}
				<PanelBody>
					<Button
						isDestructive
						variant="secondary"
						onClick={resetAll}
						style={{ width: '100%' }}
					>
						{__('Reset All Settings', 'grid-master')}
					</Button>
				</PanelBody>

				{/* Image Settings */}
				<PanelBody title={__('Image Settings', 'grid-master')} initialOpen={true}>
					<TextControl
						label={__('Alt Text', 'grid-master')}
						value={imageAlt}
						onChange={(value) => setAttributes({ imageAlt: value })}
						help={__('Describe the image for accessibility', 'grid-master')}
					/>

					<Divider style={{ margin: '16px 0' }} />

					<RangeControl
						label={__('Width (%)', 'grid-master')}
						value={imageWidth}
						onChange={(value) => setAttributes({ imageWidth: value })}
						min={10}
						max={100}
						step={1}
					/>

					<SelectControl
						label={__('Height', 'grid-master')}
						value={imageHeight}
						options={[
							{ label: __('Auto', 'grid-master'), value: 'auto' },
							{ label: __('200px', 'grid-master'), value: '200' },
							{ label: __('300px', 'grid-master'), value: '300' },
							{ label: __('400px', 'grid-master'), value: '400' },
							{ label: __('500px', 'grid-master'), value: '500' },
							{ label: __('600px', 'grid-master'), value: '600' }
						]}
						onChange={(value) => setAttributes({ imageHeight: value })}
					/>

					<SelectControl
						label={__('Object Fit', 'grid-master')}
						value={objectFit}
						options={[
							{ label: __('Cover', 'grid-master'), value: 'cover' },
							{ label: __('Contain', 'grid-master'), value: 'contain' },
							{ label: __('Fill', 'grid-master'), value: 'fill' },
							{ label: __('None', 'grid-master'), value: 'none' }
						]}
						onChange={(value) => setAttributes({ objectFit: value })}
						help={__('How the image should fit within its container', 'grid-master')}
					/>
				</PanelBody>

				{/* Link Settings */}
				<PanelBody title={__('Link Settings', 'grid-master')} initialOpen={false}>
					<TextControl
						label={__('Link URL', 'grid-master')}
						value={linkUrl}
						onChange={(value) => setAttributes({ linkUrl: value })}
						placeholder="https://example.com"
						help={__('Make the image clickable', 'grid-master')}
					/>

					{linkUrl && (
						<ToggleControl
							label={__('Open in new tab', 'grid-master')}
							checked={linkTarget}
							onChange={(value) => setAttributes({ linkTarget: value })}
						/>
					)}
				</PanelBody>

				{/* Border */}
				<PanelBody title={__('Border', 'grid-master')} initialOpen={false}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
						<strong>{__('Border Settings', 'grid-master')}</strong>
						<Button
							isSmall
							variant="secondary"
							onClick={resetBorder}
						>
							{__('Reset', 'grid-master')}
						</Button>
					</div>

					<p style={{ marginBottom: '8px' }}><strong>{__('Border Color', 'grid-master')}</strong></p>
					<ColorPalette
						value={borderColor}
						onChange={(value) => setAttributes({ borderColor: value })}
					/>

					<Divider style={{ margin: '16px 0' }} />

					<RangeControl
						label={__('Border Width', 'grid-master')}
						value={borderWidth}
						onChange={(value) => setAttributes({ borderWidth: value })}
						min={0}
						max={20}
						step={1}
					/>

					<SelectControl
						label={__('Border Style', 'grid-master')}
						value={borderStyle}
						options={[
							{ label: __('Solid', 'grid-master'), value: 'solid' },
							{ label: __('Dashed', 'grid-master'), value: 'dashed' },
							{ label: __('Dotted', 'grid-master'), value: 'dotted' },
							{ label: __('Double', 'grid-master'), value: 'double' },
							{ label: __('None', 'grid-master'), value: 'none' }
						]}
						onChange={(value) => setAttributes({ borderStyle: value })}
					/>

					<RangeControl
						label={__('Border Radius', 'grid-master')}
						value={borderRadius}
						onChange={(value) => setAttributes({ borderRadius: value })}
						min={0}
						max={100}
						step={1}
					/>
				</PanelBody>

				{/* Box Shadow */}
				<PanelBody title={__('Box Shadow', 'grid-master')} initialOpen={false}>
					<SelectControl
						label={__('Shadow Preset', 'grid-master')}
						value={boxShadow}
						options={[
							{ label: __('None', 'grid-master'), value: '' },
							{ label: __('Small', 'grid-master'), value: '0 2px 4px rgba(0,0,0,0.1)' },
							{ label: __('Medium', 'grid-master'), value: '0 4px 6px rgba(0,0,0,0.1)' },
							{ label: __('Large', 'grid-master'), value: '0 10px 15px rgba(0,0,0,0.1)' },
							{ label: __('Extra Large', 'grid-master'), value: '0 20px 25px rgba(0,0,0,0.15)' }
						]}
						onChange={(value) => setAttributes({ boxShadow: value })}
					/>

					<TextControl
						label={__('Custom Shadow', 'grid-master')}
						value={boxShadow}
						onChange={(value) => setAttributes({ boxShadow: value })}
						placeholder="0 4px 6px rgba(0,0,0,0.1)"
					/>
				</PanelBody>

				{/* Spacing */}
				<PanelBody title={__('Spacing', 'grid-master')} initialOpen={false}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
						<strong>{__('Margin', 'grid-master')}</strong>
						<Button
							isSmall
							variant="secondary"
							onClick={resetSpacing}
						>
							{__('Reset', 'grid-master')}
						</Button>
					</div>

					<RangeControl
						label={__('Top', 'grid-master')}
						value={marginTop}
						onChange={(value) => setAttributes({ marginTop: value })}
						min={0}
						max={200}
						step={1}
					/>

					<RangeControl
						label={__('Right', 'grid-master')}
						value={marginRight}
						onChange={(value) => setAttributes({ marginRight: value })}
						min={0}
						max={200}
						step={1}
					/>

					<RangeControl
						label={__('Bottom', 'grid-master')}
						value={marginBottom}
						onChange={(value) => setAttributes({ marginBottom: value })}
						min={0}
						max={200}
						step={1}
					/>

					<RangeControl
						label={__('Left', 'grid-master')}
						value={marginLeft}
						onChange={(value) => setAttributes({ marginLeft: value })}
						min={0}
						max={200}
						step={1}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<div className="grid-image-container" style={containerStyles}>
					{!imageUrl ? (
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onSelectImage}
								allowedTypes={['image']}
								value={imageId}
								render={({ open }) => (
									<Button
										onClick={open}
										className="grid-image-placeholder"
										variant="secondary"
										style={{
											width: '100%',
											minHeight: '200px',
											display: 'flex',
											flexDirection: 'column',
											alignItems: 'center',
											justifyContent: 'center',
											border: '2px dashed #ccc',
											borderRadius: '4px'
										}}
									>
										<span style={{ fontSize: '48px', marginBottom: '10px' }}>🖼️</span>
										<span>{__('Upload Image', 'grid-master')}</span>
									</Button>
								)}
							/>
						</MediaUploadCheck>
					) : (
						<div className="grid-image-wrapper">
							{linkUrl ? (
								<a href={linkUrl} target={linkTarget ? '_blank' : '_self'} rel={linkTarget ? 'noopener noreferrer' : undefined}>
									<img
										src={imageUrl}
										alt={imageAlt}
										style={imageStyles}
									/>
								</a>
							) : (
								<img
									src={imageUrl}
									alt={imageAlt}
									style={imageStyles}
								/>
							)}
							<div className="grid-image-controls" style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
								<MediaUploadCheck>
									<MediaUpload
										onSelect={onSelectImage}
										allowedTypes={['image']}
										value={imageId}
										render={({ open }) => (
											<Button onClick={open} variant="secondary" size="small">
												{__('Replace', 'grid-master')}
											</Button>
										)}
									/>
								</MediaUploadCheck>
								<Button onClick={removeImage} variant="secondary" isDestructive size="small">
									{__('Remove', 'grid-master')}
								</Button>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}