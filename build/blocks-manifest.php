<?php
// This file is generated. Do not modify it manually.
return array(
	'grid-container' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/grid-container',
		'version' => '0.1.0',
		'title' => 'Grid Container',
		'category' => 'grid',
		'icon' => 'grid-view',
		'description' => 'Create responsive grid layouts with multiple column options.',
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			),
			'color' => array(
				'background' => true,
				'text' => true
			),
			'spacing' => array(
				'padding' => true,
				'margin' => true
			)
		),
		'attributes' => array(
			'layoutDirection' => array(
				'type' => 'string',
				'default' => 'horizontal'
			),
			'layoutDirectionTablet' => array(
				'type' => 'string',
				'default' => 'horizontal'
			),
			'layoutDirectionMobile' => array(
				'type' => 'string',
				'default' => 'vertical'
			),
			'columns' => array(
				'type' => 'number',
				'default' => 3
			),
			'columnsTablet' => array(
				'type' => 'number',
				'default' => 2
			),
			'columnsMobile' => array(
				'type' => 'number',
				'default' => 1
			),
			'columnGap' => array(
				'type' => 'number',
				'default' => 20
			),
			'rowGap' => array(
				'type' => 'number',
				'default' => 20
			),
			'alignItems' => array(
				'type' => 'string',
				'default' => 'stretch'
			),
			'justifyItems' => array(
				'type' => 'string',
				'default' => 'stretch'
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'paddingTop' => array(
				'type' => 'number',
				'default' => 0
			),
			'paddingRight' => array(
				'type' => 'number',
				'default' => 0
			),
			'paddingBottom' => array(
				'type' => 'number',
				'default' => 0
			),
			'paddingLeft' => array(
				'type' => 'number',
				'default' => 0
			),
			'marginTop' => array(
				'type' => 'number',
				'default' => 0
			),
			'marginRight' => array(
				'type' => 'number',
				'default' => 0
			),
			'marginBottom' => array(
				'type' => 'number',
				'default' => 0
			),
			'marginLeft' => array(
				'type' => 'number',
				'default' => 0
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderWidth' => array(
				'type' => 'number',
				'default' => 0
			),
			'borderStyle' => array(
				'type' => 'string',
				'default' => 'solid'
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'boxShadow' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'providesContext' => array(
			'gridContainer/columns' => 'columns'
		),
		'textdomain' => 'grid-master',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'grid-style' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/grid-style',
		'version' => '0.1.0',
		'title' => 'Grid Style',
		'category' => 'grid',
		'icon' => 'grid-view',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'color' => array(
				'background' => true,
				'text' => true,
				'gradients' => true,
				'link' => true
			),
			'spacing' => array(
				'padding' => true,
				'margin' => true,
				'blockGap' => true
			),
			'typography' => array(
				'fontSize' => true,
				'lineHeight' => true,
				'fontWeight' => true,
				'fontStyle' => true,
				'textTransform' => true,
				'letterSpacing' => true
			),
			'border' => array(
				'color' => true,
				'radius' => true,
				'style' => true,
				'width' => true
			),
			'shadow' => true,
			'align' => true,
			'alignWide' => true
		),
		'attributes' => array(
			'sectionTitle' => array(
				'type' => 'string',
				'default' => 'Section Title'
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'titleFontSize' => array(
				'type' => 'number',
				'default' => 24
			),
			'titleFontWeight' => array(
				'type' => 'string',
				'default' => 'bold'
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'textColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'borderWidth' => array(
				'type' => 'number',
				'default' => 1
			),
			'borderStyle' => array(
				'type' => 'string',
				'default' => 'solid'
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'paddingTop' => array(
				'type' => 'number',
				'default' => 2
			),
			'paddingRight' => array(
				'type' => 'number',
				'default' => 2
			),
			'paddingBottom' => array(
				'type' => 'number',
				'default' => 2
			),
			'paddingLeft' => array(
				'type' => 'number',
				'default' => 2
			),
			'marginTop' => array(
				'type' => 'number',
				'default' => 0
			),
			'marginRight' => array(
				'type' => 'number',
				'default' => 0
			),
			'marginBottom' => array(
				'type' => 'number',
				'default' => 0
			),
			'marginLeft' => array(
				'type' => 'number',
				'default' => 0
			),
			'boxShadow' => array(
				'type' => 'string',
				'default' => ''
			),
			'alignment' => array(
				'type' => 'string',
				'default' => 'left'
			)
		),
		'textdomain' => 'grid-style',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	)
);
