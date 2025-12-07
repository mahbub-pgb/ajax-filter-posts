import { __ } from '@wordpress/i18n';
import { 
	useBlockProps, 
	InspectorControls,
	ColorPalette,
	InnerBlocks
} from '@wordpress/block-editor';
import { 
	PanelBody, 
	RangeControl,
	SelectControl,
	Button,
	ButtonGroup,
	TabPanel
} from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { 
		layoutDirection,
		layoutDirectionTablet,
		layoutDirectionMobile,
		columns,
		columnsTablet,
		columnsMobile,
		columnGap,
		rowGap,
		alignItems,
		justifyItems,
		backgroundColor,
		paddingTop,
		paddingRight,
		paddingBottom,
		paddingLeft,
		marginTop,
		marginRight,
		marginBottom,
		marginLeft,
		borderColor,
		borderWidth,
		borderStyle,
		borderRadius,
		boxShadow
	} = attributes;

	// Reset functions
	const resetLayout = () => {
		setAttributes({
			layoutDirection: 'horizontal',
			layoutDirectionTablet: 'horizontal',
			layoutDirectionMobile: 'vertical',
			columns: 3,
			columnsTablet: 2,
			columnsMobile: 1,
			columnGap: 20,
			rowGap: 20,
			alignItems: 'stretch',
			justifyItems: 'stretch'
		});
	};

	const resetSpacing = () => {
		setAttributes({
			paddingTop: 0,
			paddingRight: 0,
			paddingBottom: 0,
			paddingLeft: 0,
			marginTop: 0,
			marginRight: 0,
			marginBottom: 0,
			marginLeft: 0
		});
	};

	const resetBorder = () => {
		setAttributes({
			borderColor: '',
			borderWidth: 0,
			borderStyle: 'solid',
			borderRadius: 0
		});
	};

	const resetAll = () => {
		resetLayout();
		resetSpacing();
		resetBorder();
		setAttributes({
			backgroundColor: '',
			boxShadow: ''
		});
	};

	// Build inline styles
	const containerStyles = {
		display: layoutDirection === 'vertical' ? 'flex' : 'grid',
		flexDirection: layoutDirection === 'vertical' ? 'column' : undefined,
		gridTemplateColumns: layoutDirection === 'horizontal' ? `repeat(${columns}, 1fr)` : undefined,
		columnGap: columnGap ? `${columnGap}px` : undefined,
		rowGap: rowGap ? `${rowGap}px` : undefined,
		gap: layoutDirection === 'vertical' ? `${rowGap}px` : undefined,
		alignItems: alignItems || undefined,
		justifyItems: justifyItems || undefined,
		backgroundColor: backgroundColor || undefined,
		paddingTop: paddingTop ? `${paddingTop}px` : undefined,
		paddingRight: paddingRight ? `${paddingRight}px` : undefined,
		paddingBottom: paddingBottom ? `${paddingBottom}px` : undefined,
		paddingLeft: paddingLeft ? `${paddingLeft}px` : undefined,
		marginTop: marginTop ? `${marginTop}px` : undefined,
		marginRight: marginRight ? `${marginRight}px` : undefined,
		marginBottom: marginBottom ? `${marginBottom}px` : undefined,
		marginLeft: marginLeft ? `${marginLeft}px` : undefined,
		borderColor: borderColor || undefined,
		borderWidth: borderWidth ? `${borderWidth}px` : undefined,
		borderStyle: borderStyle || undefined,
		borderRadius: borderRadius ? `${borderRadius}px` : undefined,
		boxShadow: boxShadow || undefined
	};

	const ALLOWED_BLOCKS = ['core/paragraph', 'core/heading', 'core/image', 'core/button', 'core/group'];

	return (
		<>
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

				{/* Layout Settings */}
				<PanelBody title={__('Grid Layout', 'grid-master')} initialOpen={true}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
						<strong>{__('Layout Settings', 'grid-master')}</strong>
						<Button isSmall variant="secondary" onClick={resetLayout}>
							{__('Reset', 'grid-master')}
						</Button>
					</div>

					<TabPanel
						className="grid-responsive-tabs"
						activeClass="is-active"
						tabs={[
							{
								name: 'desktop',
								title: __('Desktop', 'grid-master'),
								className: 'tab-desktop',
							},
							{
								name: 'tablet',
								title: __('Tablet', 'grid-master'),
								className: 'tab-tablet',
							},
							{
								name: 'mobile',
								title: __('Mobile', 'grid-master'),
								className: 'tab-mobile',
							},
						]}
					>
						{(tab) => {
							if (tab.name === 'desktop') {
								return (
									<>
										<SelectControl
											label={__('Layout Direction', 'grid-master')}
											value={layoutDirection}
											options={[
												{ label: __('Horizontal (Side by Side)', 'grid-master'), value: 'horizontal' },
												{ label: __('Vertical (Stack)', 'grid-master'), value: 'vertical' },
											]}
											onChange={(value) => setAttributes({ layoutDirection: value })}
											help={__('Choose how content is displayed', 'grid-master')}
										/>

										{layoutDirection === 'horizontal' && (
											<>
												<p style={{ marginBottom: '16px', marginTop: '16px' }}>
													<strong>{__('Column Presets', 'grid-master')}</strong>
												</p>
												<ButtonGroup style={{ marginBottom: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
													<Button
														variant={columns === 1 ? 'primary' : 'secondary'}
														onClick={() => setAttributes({ columns: 1 })}
													>
														1
													</Button>
													<Button
														variant={columns === 2 ? 'primary' : 'secondary'}
														onClick={() => setAttributes({ columns: 2 })}
													>
														2
													</Button>
													<Button
														variant={columns === 3 ? 'primary' : 'secondary'}
														onClick={() => setAttributes({ columns: 3 })}
													>
														3
													</Button>
													<Button
														variant={columns === 4 ? 'primary' : 'secondary'}
														onClick={() => setAttributes({ columns: 4 })}
													>
														4
													</Button>
													<Button
														variant={columns === 5 ? 'primary' : 'secondary'}
														onClick={() => setAttributes({ columns: 5 })}
													>
														5
													</Button>
													<Button
														variant={columns === 6 ? 'primary' : 'secondary'}
														onClick={() => setAttributes({ columns: 6 })}
													>
														6
													</Button>
												</ButtonGroup>
												<RangeControl
													label={__('Columns (Desktop)', 'grid-master')}
													value={columns}
													onChange={(value) => setAttributes({ columns: value })}
													min={1}
													max={12}
													step={1}
												/>
											</>
										)}
									</>
								);
							} else if (tab.name === 'tablet') {
								return (
									<>
										<SelectControl
											label={__('Layout Direction', 'grid-master')}
											value={layoutDirectionTablet}
											options={[
												{ label: __('Horizontal (Side by Side)', 'grid-master'), value: 'horizontal' },
												{ label: __('Vertical (Stack)', 'grid-master'), value: 'vertical' },
											]}
											onChange={(value) => setAttributes({ layoutDirectionTablet: value })}
											help={__('Layout for tablets (768px - 1024px)', 'grid-master')}
										/>

										{layoutDirectionTablet === 'horizontal' && (
											<RangeControl
												label={__('Columns (Tablet)', 'grid-master')}
												value={columnsTablet}
												onChange={(value) => setAttributes({ columnsTablet: value })}
												min={1}
												max={6}
												step={1}
												help={__('Applies to screens 768px - 1024px', 'grid-master')}
											/>
										)}
									</>
								);
							} else {
								return (
									<>
										<SelectControl
											label={__('Layout Direction', 'grid-master')}
											value={layoutDirectionMobile}
											options={[
												{ label: __('Horizontal (Side by Side)', 'grid-master'), value: 'horizontal' },
												{ label: __('Vertical (Stack)', 'grid-master'), value: 'vertical' },
											]}
											onChange={(value) => setAttributes({ layoutDirectionMobile: value })}
											help={__('Layout for mobile (below 768px)', 'grid-master')}
										/>

										{layoutDirectionMobile === 'horizontal' && (
											<RangeControl
												label={__('Columns (Mobile)', 'grid-master')}
												value={columnsMobile}
												onChange={(value) => setAttributes({ columnsMobile: value })}
												min={1}
												max={3}
												step={1}
												help={__('Applies to screens below 768px', 'grid-master')}
											/>
										)}
									</>
								);
							}
						}}
					</TabPanel>

					<RangeControl
						label={__('Column Gap', 'grid-master')}
						value={columnGap}
						onChange={(value) => setAttributes({ columnGap: value })}
						min={0}
						max={100}
						step={1}
					/>

					<RangeControl
						label={__('Row Gap', 'grid-master')}
						value={rowGap}
						onChange={(value) => setAttributes({ rowGap: value })}
						min={0}
						max={100}
						step={1}
					/>

					<SelectControl
						label={__('Align Items', 'grid-master')}
						value={alignItems}
						options={[
							{ label: __('Stretch', 'grid-master'), value: 'stretch' },
							{ label: __('Start', 'grid-master'), value: 'start' },
							{ label: __('Center', 'grid-master'), value: 'center' },
							{ label: __('End', 'grid-master'), value: 'end' },
						]}
						onChange={(value) => setAttributes({ alignItems: value })}
						help={__('Vertical alignment of grid items', 'grid-master')}
					/>

					<SelectControl
						label={__('Justify Items', 'grid-master')}
						value={justifyItems}
						options={[
							{ label: __('Stretch', 'grid-master'), value: 'stretch' },
							{ label: __('Start', 'grid-master'), value: 'start' },
							{ label: __('Center', 'grid-master'), value: 'center' },
							{ label: __('End', 'grid-master'), value: 'end' },
						]}
						onChange={(value) => setAttributes({ justifyItems: value })}
						help={__('Horizontal alignment of grid items', 'grid-master')}
					/>
				</PanelBody>

				{/* Colors */}
				<PanelBody title={__('Background Color', 'grid-master')} initialOpen={false}>
					<ColorPalette
						value={backgroundColor}
						onChange={(value) => setAttributes({ backgroundColor: value })}
					/>
				</PanelBody>

				{/* Spacing */}
				<PanelBody title={__('Spacing', 'grid-master')} initialOpen={false}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
						<strong>{__('Padding & Margin', 'grid-master')}</strong>
						<Button isSmall variant="secondary" onClick={resetSpacing}>
							{__('Reset', 'grid-master')}
						</Button>
					</div>

					<p><strong>{__('Padding', 'grid-master')}</strong></p>
					<RangeControl
						label={__('Top', 'grid-master')}
						value={paddingTop}
						onChange={(value) => setAttributes({ paddingTop: value })}
						min={0}
						max={200}
					/>
					<RangeControl
						label={__('Right', 'grid-master')}
						value={paddingRight}
						onChange={(value) => setAttributes({ paddingRight: value })}
						min={0}
						max={200}
					/>
					<RangeControl
						label={__('Bottom', 'grid-master')}
						value={paddingBottom}
						onChange={(value) => setAttributes({ paddingBottom: value })}
						min={0}
						max={200}
					/>
					<RangeControl
						label={__('Left', 'grid-master')}
						value={paddingLeft}
						onChange={(value) => setAttributes({ paddingLeft: value })}
						min={0}
						max={200}
					/>

					<p><strong>{__('Margin', 'grid-master')}</strong></p>
					<RangeControl
						label={__('Top', 'grid-master')}
						value={marginTop}
						onChange={(value) => setAttributes({ marginTop: value })}
						min={0}
						max={200}
					/>
					<RangeControl
						label={__('Right', 'grid-master')}
						value={marginRight}
						onChange={(value) => setAttributes({ marginRight: value })}
						min={0}
						max={200}
					/>
					<RangeControl
						label={__('Bottom', 'grid-master')}
						value={marginBottom}
						onChange={(value) => setAttributes({ marginBottom: value })}
						min={0}
						max={200}
					/>
					<RangeControl
						label={__('Left', 'grid-master')}
						value={marginLeft}
						onChange={(value) => setAttributes({ marginLeft: value })}
						min={0}
						max={200}
					/>
				</PanelBody>

				{/* Border */}
				<PanelBody title={__('Border', 'grid-master')} initialOpen={false}>
					<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
						<strong>{__('Border Settings', 'grid-master')}</strong>
						<Button isSmall variant="secondary" onClick={resetBorder}>
							{__('Reset', 'grid-master')}
						</Button>
					</div>

					<p><strong>{__('Border Color', 'grid-master')}</strong></p>
					<ColorPalette
						value={borderColor}
						onChange={(value) => setAttributes({ borderColor: value })}
					/>

					<RangeControl
						label={__('Border Width', 'grid-master')}
						value={borderWidth}
						onChange={(value) => setAttributes({ borderWidth: value })}
						min={0}
						max={20}
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
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<div 
					className="grid-container" 
					style={containerStyles}
					data-layout-direction={layoutDirection}
					data-layout-direction-tablet={layoutDirectionTablet}
					data-layout-direction-mobile={layoutDirectionMobile}
				>
					<InnerBlocks
						allowedBlocks={ALLOWED_BLOCKS}
						template={[
							['core/paragraph', { placeholder: 'Add content here...' }],
							['core/paragraph', { placeholder: 'Add content here...' }],
							['core/paragraph', { placeholder: 'Add content here...' }],
						]}
					/>
				</div>
			</div>
		</>
	);
}