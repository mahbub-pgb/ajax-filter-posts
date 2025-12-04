<?php
namespace GridMaster;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

class Front {

    

    /**
     * Constructor
     */
    private function __construct() {
        // Register Gutenberg blocks on init
        // add_action( 'wp_head', [ $this, 'head' ] );
    }

    public function head(){
        // var_dump( 'test' );
    }
}
