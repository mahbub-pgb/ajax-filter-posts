import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';

registerBlockType( metadata.name, {
	edit: Edit,
	save: ({ attributes }) => {
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

		return (
			<div 
				className="grid-container" 
				style={containerStyles}
				data-layout-direction={layoutDirection}
				data-layout-direction-tablet={layoutDirectionTablet}
				data-layout-direction-mobile={layoutDirectionMobile}
				data-columns={columns}
				data-columns-tablet={columnsTablet}
				data-columns-mobile={columnsMobile}
			>
				<InnerBlocks.Content />
			</div>
		);
	}
} );