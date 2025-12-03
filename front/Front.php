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

    
}

