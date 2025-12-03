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
		'description' => 'Grid Master block with post/page selection and range control.',
		'attributes' => array(
			'postType' => array(
				'type' => 'string',
				'default' => 'post'
			),
			'numberOfItems' => array(
				'type' => 'number',
				'default' => 5
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
