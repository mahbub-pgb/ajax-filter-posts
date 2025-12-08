import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	ColorPalette,
	AlignmentToolbar,
	BlockControls
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	RangeControl,
	SelectControl,
	Button,
	__experimentalBoxControl as BoxControl
} from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const {
		sectionTitle,
		titleColor,
		titleFontSize,
		titleFontWeight,
		backgroundColor,
		textColor,
		borderColor,
		borderWidth,
		borderStyle,
		borderRadius,
		paddingTop,
		paddingRight,
		paddingBottom,
		paddingLeft,
		marginTop,
		marginRight,
		marginBottom,
		marginLeft,
		boxShadow,
		alignment
	} = attributes;

	// --------------------
	// Reset Functions
	// --------------------
	const resetTitleStyles = () =>
		setAttributes({
			titleColor: '#000000',
			titleFontSize: 24,
			titleFontWeight: 'bold'
		});

	const resetColors = () =>
		setAttributes({
			backgroundColor: '',
			textColor: ''
		});

	const resetBorder = () =>
		setAttributes({
			borderColor: '',
			borderWidth: 1,
			borderStyle: 'solid',
			borderRadius: 0
		});

	const resetPadding = () =>
		setAttributes({
			paddingTop: 2,
			paddingRight: 2,
			paddingBottom: 2,
			paddingLeft: 2
		});

	const resetMargin = () =>
		setAttributes({
			marginTop: 0,
			marginRight: 0,
			marginBottom: 0,
			marginLeft: 0
		});

	const resetBoxShadow = () => setAttributes({ boxShadow: '' });

	const resetAll = () =>
		setAttributes({
			sectionTitle: 'Section Title',
			titleColor: '#000000',
			titleFontSize: 24,
			titleFontWeight: 'bold',
			backgroundColor: '',
			textColor: '',
			borderColor: '',
			borderWidth: 1,
			borderStyle: 'solid',
			borderRadius: 0,
			paddingTop: 20,
			paddingRight: 20,
			paddingBottom: 20,
			paddingLeft: 20,
			marginTop: 0,
			marginRight: 0,
			marginBottom: 0,
			marginLeft: 0,
			boxShadow: '',
			alignment: 'left'
		});

	// --------------------
	// Build Inline Styles
	// --------------------
	const sectionStyles = {
		backgroundColor: backgroundColor || undefined,
		color: textColor || undefined,
		borderColor: borderColor || undefined,
		borderWidth: borderWidth ? `${borderWidth}px` : undefined,
		borderStyle: borderStyle || undefined,
		borderRadius: borderRadius ? `${borderRadius}px` : undefined,
		paddingTop: paddingTop ? `${paddingTop}px` : undefined,
		paddingRight: paddingRight ? `${paddingRight}px` : undefined,
		paddingBottom: paddingBottom ? `${paddingBottom}px` : undefined,
		paddingLeft: paddingLeft ? `${paddingLeft}px` : undefined,
		marginTop: marginTop ? `${marginTop}px` : undefined,
		marginRight: marginRight ? `${marginRight}px` : undefined,
		marginBottom: marginBottom ? `${marginBottom}px` : undefined,
		marginLeft: marginLeft ? `${marginLeft}px` : undefined,
		boxShadow: boxShadow || undefined,
		textAlign: alignment || undefined
	};

	const titleStyles = {
		color: titleColor || undefined,
		fontSize: titleFontSize ? `${titleFontSize}px` : undefined,
		fontWeight: titleFontWeight || undefined
	};

	// --------------------
	// Render
	// --------------------
	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={alignment}
					onChange={(value) => setAttributes({ alignment: value })}
				/>
			</BlockControls>

			<InspectorControls>
				{/* Reset All */}
				<PanelBody>
					<Button
						isDestructive
						variant="secondary"
						onClick={resetAll}
						style={{ width: '100%' }}
					>
						{__('Reset All Settings', 'grid-title')}
					</Button>
				</PanelBody>

				{/* Content */}
				<PanelBody title={__('Content Settings', 'grid-title')} initialOpen={true}>
					<TextControl
						label={__('Section Title', 'grid-title')}
						value={sectionTitle}
						onChange={(value) => setAttributes({ sectionTitle: value })}
						help={__('Enter the title for this section', 'grid-title')}
					/>
				</PanelBody>

				{/* Title Styling */}
				<PanelBody title={__('Title Styling', 'grid-title')} initialOpen={false}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
						<strong>{__('Title Styling', 'grid-title')}</strong>
						<Button isSmall variant="secondary" onClick={resetTitleStyles}>{__('Reset', 'grid-title')}</Button>
					</div>

					<p><strong>{__('Title Color', 'grid-title')}</strong></p>
					<ColorPalette value={titleColor} onChange={(value) => setAttributes({ titleColor: value })} />

					<RangeControl
						label={__('Title Font Size', 'grid-title')}
						value={titleFontSize}
						onChange={(value) => setAttributes({ titleFontSize: value })}
						min={12}
						max={72}
						step={1}
					/>

					<SelectControl
						label={__('Title Font Weight', 'grid-title')}
						value={titleFontWeight}
						options={[
							{ label: __('Normal', 'grid-title'), value: 'normal' },
							{ label: __('Bold', 'grid-title'), value: 'bold' },
							{ label: __('100 - Thin', 'grid-title'), value: '100' },
							{ label: __('200 - Extra Light', 'grid-title'), value: '200' },
							{ label: __('300 - Light', 'grid-title'), value: '300' },
							{ label: __('400 - Normal', 'grid-title'), value: '400' },
							{ label: __('500 - Medium', 'grid-title'), value: '500' },
							{ label: __('600 - Semi Bold', 'grid-title'), value: '600' },
							{ label: __('700 - Bold', 'grid-title'), value: '700' },
							{ label: __('800 - Extra Bold', 'grid-title'), value: '800' },
							{ label: __('900 - Black', 'grid-title'), value: '900' }
						]}
						onChange={(value) => setAttributes({ titleFontWeight: value })}
					/>
				</PanelBody>

				{/* Colors */}
				<PanelBody title={__('Colors', 'grid-title')} initialOpen={false}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
						<strong>{__('Colors', 'grid-title')}</strong>
						<Button isSmall variant="secondary" onClick={resetColors}>{__('Reset', 'grid-title')}</Button>
					</div>

					<p><strong>{__('Background Color', 'grid-title')}</strong></p>
					<ColorPalette value={backgroundColor} onChange={(value) => setAttributes({ backgroundColor: value })} />
				</PanelBody>

				{/* Border */}
				<PanelBody title={__('Border', 'grid-title')} initialOpen={false}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
						<strong>{__('Border Settings', 'grid-title')}</strong>
						<Button isSmall variant="secondary" onClick={resetBorder}>{__('Reset', 'grid-title')}</Button>
					</div>

					<p><strong>{__('Border Color', 'grid-title')}</strong></p>
					<ColorPalette value={borderColor} onChange={(value) => setAttributes({ borderColor: value })} />

					<RangeControl
						label={__('Border Width', 'grid-title')}
						value={borderWidth}
						onChange={(value) => setAttributes({ borderWidth: value })}
						min={0}
						max={20}
						step={1}
					/>

					<SelectControl
						label={__('Border Style', 'grid-title')}
						value={borderStyle}
						options={[
							{ label: __('Solid', 'grid-title'), value: 'solid' },
							{ label: __('Dashed', 'grid-title'), value: 'dashed' },
							{ label: __('Dotted', 'grid-title'), value: 'dotted' },
							{ label: __('Double', 'grid-title'), value: 'double' },
							{ label: __('Groove', 'grid-title'), value: 'groove' },
							{ label: __('Ridge', 'grid-title'), value: 'ridge' },
							{ label: __('Inset', 'grid-title'), value: 'inset' },
							{ label: __('Outset', 'grid-title'), value: 'outset' },
							{ label: __('None', 'grid-title'), value: 'none' }
						]}
						onChange={(value) => setAttributes({ borderStyle: value })}
					/>

					<RangeControl
						label={__('Border Radius', 'grid-title')}
						value={borderRadius}
						onChange={(value) => setAttributes({ borderRadius: value })}
						min={0}
						max={100}
						step={1}
					/>
				</PanelBody>

				{/* Padding */}
				<PanelBody title={__('Padding', 'grid-title')} initialOpen={false}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
						<strong>{__('Padding', 'grid-title')}</strong>
						<Button isSmall variant="secondary" onClick={resetPadding}>{__('Reset', 'grid-title')}</Button>
					</div>
					{['Top', 'Right', 'Bottom', 'Left'].map((dir) => (
						<RangeControl
							key={dir}
							label={`${__('Padding', 'grid-title')} ${dir}`}
							value={attributes[`padding${dir}`]}
							onChange={(value) => setAttributes({ [`padding${dir}`]: value })}
							min={0}
							max={200}
							step={1}
						/>
					))}
				</PanelBody>

				{/* Margin */}
				<PanelBody title={__('Margin', 'grid-title')} initialOpen={false}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
						<strong>{__('Margin', 'grid-title')}</strong>
						<Button isSmall variant="secondary" onClick={resetMargin}>{__('Reset', 'grid-title')}</Button>
					</div>
					{['Top', 'Right', 'Bottom', 'Left'].map((dir) => (
						<RangeControl
							key={dir}
							label={`${__('Margin', 'grid-title')} ${dir}`}
							value={attributes[`margin${dir}`]}
							onChange={(value) => setAttributes({ [`margin${dir}`]: value })}
							min={0}
							max={200}
							step={1}
						/>
					))}
				</PanelBody>

				{/* Box Shadow */}
				<PanelBody title={__('Box Shadow', 'grid-title')} initialOpen={false}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
						<strong>{__('Box Shadow', 'grid-title')}</strong>
						<Button isSmall variant="secondary" onClick={resetBoxShadow}>{__('Reset', 'grid-title')}</Button>
					</div>

					<SelectControl
						label={__('Shadow Preset', 'grid-title')}
						value={boxShadow}
						options={[
							{ label: __('None', 'grid-title'), value: '' },
							{ label: __('Small', 'grid-title'), value: '0 2px 4px rgba(0,0,0,0.1)' },
							{ label: __('Medium', 'grid-title'), value: '0 4px 6px rgba(0,0,0,0.1)' },
							{ label: __('Large', 'grid-title'), value: '0 10px 15px rgba(0,0,0,0.1)' },
							{ label: __('Extra Large', 'grid-title'), value: '0 20px 25px rgba(0,0,0,0.15)' },
							{ label: __('Inner', 'grid-title'), value: 'inset 0 2px 4px rgba(0,0,0,0.1)' }
						]}
						onChange={(value) => setAttributes({ boxShadow: value })}
					/>

					<TextControl
						label={__('Custom Shadow', 'grid-title')}
						value={boxShadow}
						onChange={(value) => setAttributes({ boxShadow: value })}
						help={__('Enter custom CSS box-shadow value', 'grid-title')}
						placeholder="0 4px 6px rgba(0,0,0,0.1)"
					/>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<section className="grid-title-section" style={sectionStyles}>
					<h2 className="section-title" style={titleStyles}>{sectionTitle}</h2>
					{/* Add your grid content here */}
				</section>
			</div>
		</>
	);
}
