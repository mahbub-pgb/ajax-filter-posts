<?php
// This file is generated. Do not modify it manually.
return array(
	'grid-master' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/grid-master',
		'version' => '0.1.0',
		'title' => 'Grid Master',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Grid Master block with customizable card design for posts and pages.',
		'attributes' => array(
			'postType' => array(
				'type' => 'string',
				'default' => 'post'
			),
			'numberOfItems' => array(
				'type' => 'number',
				'default' => 6
			),
			'columns' => array(
				'type' => 'number',
				'default' => 3
			),
			'showFeaturedImage' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showExcerpt' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showDate' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showAuthor' => array(
				'type' => 'boolean',
				'default' => true
			),
			'excerptLength' => array(
				'type' => 'number',
				'default' => 20
			),
			'cardBorderRadius' => array(
				'type' => 'string',
				'default' => '8px'
			),
			'cardPadding' => array(
				'type' => 'object',
				'default' => array(
					'top' => '20px',
					'right' => '20px',
					'bottom' => '20px',
					'left' => '20px'
				)
			),
			'cardBackgroundColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'cardShadow' => array(
				'type' => 'boolean',
				'default' => true
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => '#333333'
			),
			'excerptColor' => array(
				'type' => 'string',
				'default' => '#666666'
			),
			'metaColor' => array(
				'type' => 'string',
				'default' => '#999999'
			),
			'imageHeight' => array(
				'type' => 'string',
				'default' => '200px'
			),
			'enablePagination' => array(
				'type' => 'boolean',
				'default' => false
			),
			'itemsPerPage' => array(
				'type' => 'number',
				'default' => 4
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'grid-master',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	)
);
