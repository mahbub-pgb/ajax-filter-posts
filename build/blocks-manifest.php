<?php
// This file is generated. Do not modify it manually.
return array(
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
			'marginBottom' => array(
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
