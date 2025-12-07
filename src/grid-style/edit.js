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
	ToggleControl,
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

	// Reset functions
	const resetTitleStyles = () => {
		setAttributes({
			titleColor: '#000000',
			titleFontSize: 24,
			titleFontWeight: 'bold'
		});
	};

	const resetColors = () => {
		setAttributes({
			backgroundColor: '',
			textColor: ''
		});
	};

	const resetBorder = () => {
		setAttributes({
			borderColor: '',
			borderWidth: 1,
			borderStyle: 'solid',
			borderRadius: 0
		});
	};

	const resetPadding = () => {
		setAttributes({
			paddingTop: 20,
			paddingRight: 20,
			paddingBottom: 20,
			paddingLeft: 20
		});
	};

	const resetMargin = () => {
		setAttributes({
			marginTop: 0,
			marginRight: 0,
			marginBottom: 0,
			marginLeft: 0
		});
	};

	const resetBoxShadow = () => {
		setAttributes({ boxShadow: '' });
	};

	const resetAll = () => {
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
	};

	// Build inline styles
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

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={alignment}
					onChange={(value) => setAttributes({ alignment: value })}
				/>
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
						{__('Reset All Settings', 'grid-style')}
					</Button>
				</PanelBody>

				{/* Content Settings */}
				<PanelBody title={__('Content Settings', 'grid-style')} initialOpen={true}>
					<TextControl
						label={__('Section Title', 'grid-style')}
						value={sectionTitle}
						onChange={(value) => setAttributes({ sectionTitle: value })}
						help={__('Enter the title for this section', 'grid-style')}
					/>
				</PanelBody>

				{/* Title Styling */}
				<PanelBody title={__('Title Styling', 'grid-style')} initialOpen={false}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
						<strong>{__('Title Styling', 'grid-style')}</strong>
						<Button
							isSmall
							variant="secondary"
							onClick={resetTitleStyles}
						>
							{__('Reset', 'grid-style')}
						</Button>
					</div>

					<p><strong>{__('Title Color', 'grid-style')}</strong></p>
					<ColorPalette
						value={titleColor}
						onChange={(value) => setAttributes({ titleColor: value })}
					/>
					
					<RangeControl
						label={__('Title Font Size', 'grid-style')}
						value={titleFontSize}
						onChange={(value) => setAttributes({ titleFontSize: value })}
						min={12}
						max={72}
						step={1}
					/>

					<SelectControl
						label={__('Title Font Weight', 'grid-style')}
						value={titleFontWeight}
						options={[
							{ label: __('Normal', 'grid-style'), value: 'normal' },
							{ label: __('Bold', 'grid-style'), value: 'bold' },
							{ label: __('100 - Thin', 'grid-style'), value: '100' },
							{ label: __('200 - Extra Light', 'grid-style'), value: '200' },
							{ label: __('300 - Light', 'grid-style'), value: '300' },
							{ label: __('400 - Normal', 'grid-style'), value: '400' },
							{ label: __('500 - Medium', 'grid-style'), value: '500' },
							{ label: __('600 - Semi Bold', 'grid-style'), value: '600' },
							{ label: __('700 - Bold', 'grid-style'), value: '700' },
							{ label: __('800 - Extra Bold', 'grid-style'), value: '800' },
							{ label: __('900 - Black', 'grid-style'), value: '900' }
						]}
						onChange={(value) => setAttributes({ titleFontWeight: value })}
					/>
				</PanelBody>

				{/* Colors */}
				<PanelBody title={__('Colors', 'grid-style')} initialOpen={false}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
						<strong>{__('Colors', 'grid-style')}</strong>
						<Button
							isSmall
							variant="secondary"
							onClick={resetColors}
						>
							{__('Reset', 'grid-style')}
						</Button>
					</div>

					<p><strong>{__('Background Color', 'grid-style')}</strong></p>
					<ColorPalette
						value={backgroundColor}
						onChange={(value) => setAttributes({ backgroundColor: value })}
					/>

					<p><strong>{__('Text Color', 'grid-style')}</strong></p>
					<ColorPalette
						value={textColor}
						onChange={(value) => setAttributes({ textColor: value })}
					/>
				</PanelBody>

				{/* Border Settings */}
				<PanelBody title={__('Border', 'grid-style')} initialOpen={false}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
						<strong>{__('Border Settings', 'grid-style')}</strong>
						<Button
							isSmall
							variant="secondary"
							onClick={resetBorder}
						>
							{__('Reset', 'grid-style')}
						</Button>
					</div>

					<p><strong>{__('Border Color', 'grid-style')}</strong></p>
					<ColorPalette
						value={borderColor}
						onChange={(value) => setAttributes({ borderColor: value })}
					/>

					<RangeControl
						label={__('Border Width', 'grid-style')}
						value={borderWidth}
						onChange={(value) => setAttributes({ borderWidth: value })}
						min={0}
						max={20}
						step={1}
					/>

					<SelectControl
						label={__('Border Style', 'grid-style')}
						value={borderStyle}
						options={[
							{ label: __('Solid', 'grid-style'), value: 'solid' },
							{ label: __('Dashed', 'grid-style'), value: 'dashed' },
							{ label: __('Dotted', 'grid-style'), value: 'dotted' },
							{ label: __('Double', 'grid-style'), value: 'double' },
							{ label: __('Groove', 'grid-style'), value: 'groove' },
							{ label: __('Ridge', 'grid-style'), value: 'ridge' },
							{ label: __('Inset', 'grid-style'), value: 'inset' },
							{ label: __('Outset', 'grid-style'), value: 'outset' },
							{ label: __('None', 'grid-style'), value: 'none' }
						]}
						onChange={(value) => setAttributes({ borderStyle: value })}
					/>

					<RangeControl
						label={__('Border Radius', 'grid-style')}
						value={borderRadius}
						onChange={(value) => setAttributes({ borderRadius: value })}
						min={0}
						max={100}
						step={1}
					/>
				</PanelBody>

				{/* Spacing - Padding */}
				<PanelBody title={__('Padding', 'grid-style')} initialOpen={false}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
						<strong>{__('Padding', 'grid-style')}</strong>
						<Button
							isSmall
							variant="secondary"
							onClick={resetPadding}
						>
							{__('Reset', 'grid-style')}
						</Button>
					</div>

					<RangeControl
						label={__('Padding Top', 'grid-style')}
						value={paddingTop}
						onChange={(value) => setAttributes({ paddingTop: value })}
						min={0}
						max={200}
						step={1}
					/>

					<RangeControl
						label={__('Padding Right', 'grid-style')}
						value={paddingRight}
						onChange={(value) => setAttributes({ paddingRight: value })}
						min={0}
						max={200}
						step={1}
					/>

					<RangeControl
						label={__('Padding Bottom', 'grid-style')}
						value={paddingBottom}
						onChange={(value) => setAttributes({ paddingBottom: value })}
						min={0}
						max={200}
						step={1}
					/>

					<RangeControl
						label={__('Padding Left', 'grid-style')}
						value={paddingLeft}
						onChange={(value) => setAttributes({ paddingLeft: value })}
						min={0}
						max={200}
						step={1}
					/>
				</PanelBody>

				{/* Spacing - Margin */}
				<PanelBody title={__('Margin', 'grid-style')} initialOpen={false}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
						<strong>{__('Margin', 'grid-style')}</strong>
						<Button
							isSmall
							variant="secondary"
							onClick={resetMargin}
						>
							{__('Reset', 'grid-style')}
						</Button>
					</div>

					<RangeControl
						label={__('Margin Top', 'grid-style')}
						value={marginTop}
						onChange={(value) => setAttributes({ marginTop: value })}
						min={0}
						max={200}
						step={1}
					/>

					<RangeControl
						label={__('Margin Right', 'grid-style')}
						value={marginRight}
						onChange={(value) => setAttributes({ marginRight: value })}
						min={0}
						max={200}
						step={1}
					/>

					<RangeControl
						label={__('Margin Bottom', 'grid-style')}
						value={marginBottom}
						onChange={(value) => setAttributes({ marginBottom: value })}
						min={0}
						max={200}
						step={1}
					/>

					<RangeControl
						label={__('Margin Left', 'grid-style')}
						value={marginLeft}
						onChange={(value) => setAttributes({ marginLeft: value })}
						min={0}
						max={200}
						step={1}
					/>
				</PanelBody>

				{/* Box Shadow */}
				<PanelBody title={__('Box Shadow', 'grid-style')} initialOpen={false}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
						<strong>{__('Box Shadow', 'grid-style')}</strong>
						<Button
							isSmall
							variant="secondary"
							onClick={resetBoxShadow}
						>
							{__('Reset', 'grid-style')}
						</Button>
					</div>

					<SelectControl
						label={__('Shadow Preset', 'grid-style')}
						value={boxShadow}
						options={[
							{ label: __('None', 'grid-style'), value: '' },
							{ label: __('Small', 'grid-style'), value: '0 2px 4px rgba(0,0,0,0.1)' },
							{ label: __('Medium', 'grid-style'), value: '0 4px 6px rgba(0,0,0,0.1)' },
							{ label: __('Large', 'grid-style'), value: '0 10px 15px rgba(0,0,0,0.1)' },
							{ label: __('Extra Large', 'grid-style'), value: '0 20px 25px rgba(0,0,0,0.15)' },
							{ label: __('Inner', 'grid-style'), value: 'inset 0 2px 4px rgba(0,0,0,0.1)' }
						]}
						onChange={(value) => setAttributes({ boxShadow: value })}
					/>

					<TextControl
						label={__('Custom Shadow', 'grid-style')}
						value={boxShadow}
						onChange={(value) => setAttributes({ boxShadow: value })}
						help={__('Enter custom CSS box-shadow value', 'grid-style')}
						placeholder="0 4px 6px rgba(0,0,0,0.1)"
					/>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<section className="grid-style-section" style={sectionStyles}>
					<h2 className="section-title" style={titleStyles}>
						{sectionTitle}
					</h2>
					{/* Add your grid content here */}
				</section>
			</div>
		</>
	);
}