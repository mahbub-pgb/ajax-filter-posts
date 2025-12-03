<?php
namespace GridMaster;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class Front {

    /**
     * Singleton instance
     */
    private static $instance = null;

    /**
     * Constructor
     */
    private function __construct() {
        // Register Gutenberg block on init
        

        // Optional: debug path
        add_action( 'wp_head', [ $this, 'debug_path' ] );
        add_action( 'init', [ $this, 'create_block_grid_master_block_init' ] );
    }

    /**
     * Get singleton instance
     */
    public static function init() {
        if ( self::$instance === null ) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Optional debug method
     */
    public function debug_path() {
        var_dump( GRIDMASTER_PATH );
    }

    /**
     * Register Gutenberg blocks
     */
    function create_block_grid_master_block_init() {
        if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
            wp_register_block_types_from_metadata_collection( GRIDMASTER_PATH . '/build', GRIDMASTER_PATH . '/build/blocks-manifest.php' );
            return;
        }

        if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
            wp_register_block_metadata_collection( GRIDMASTER_PATH . '/build', GRIDMASTER_PATH . '/build/blocks-manifest.php' );
        }

        $manifest_data = require GRIDMASTER_PATH . '/build/blocks-manifest.php';
        foreach ( array_keys( $manifest_data ) as $block_type ) {
            register_block_type( GRIDMASTER_PATH . "/build/{$block_type}" );
        }
    }

    
}

