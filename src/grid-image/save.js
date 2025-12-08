import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { 
		imageUrl,
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

	if (!imageUrl) {
		return null;
	}

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

	const imageStyleString = Object.entries(imageStyles)
		.filter(([, value]) => value !== undefined)
		.map(([key, value]) => `${key.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)}: ${value}`)
		.join('; ');

	const containerStyleString = Object.entries(containerStyles)
		.filter(([, value]) => value !== undefined)
		.map(([key, value]) => `${key.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`)}: ${value}`)
		.join('; ');

	return (
		<div {...useBlockProps.save()}>
			<div className="grid-image-container" style={containerStyleString}>
				{linkUrl ? (
					<a 
						href={linkUrl} 
						target={linkTarget ? '_blank' : '_self'} 
						rel={linkTarget ? 'noopener noreferrer' : undefined}
					>
						<img
							src={imageUrl}
							alt={imageAlt}
							style={imageStyleString}
						/>
					</a>
				) : (
					<img
						src={imageUrl}
						alt={imageAlt}
						style={imageStyleString}
					/>
				)}
			</div>
		</div>
	);
}