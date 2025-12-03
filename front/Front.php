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
     * Get singleton instance
     */
    public static function init() {
        if ( self::$instance === null ) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Constructor
     */
    private function __construct() {
        // Register Gutenberg blocks on init
        add_action( 'init', [ $this, 'register_blocks' ] );
    }

    /**
     * Register Gutenberg blocks from build folder
     */
    public function register_blocks() {
        $build_path    = GRIDMASTER_PATH . '/build';
        $manifest_file = $build_path . '/blocks-manifest.php';

        if ( ! file_exists( $manifest_file ) ) {
            return; // Do nothing if manifest is missing
        }

        // Use new WP 6.8 method if available
        if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
            wp_register_block_types_from_metadata_collection(
                $build_path,
                $manifest_file,
                array(
                    'render_callback' => [ __CLASS__, 'render_grid_master_block' ],
                )
            );
            return;
        }

        // Fallback for older WP versions
        if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
            wp_register_block_metadata_collection(
                $build_path,
                $manifest_file
            );
        }

        $manifest_data = require $manifest_file;
        foreach ( array_keys( $manifest_data ) as $block_type ) {
            register_block_type(
                $build_path . "/{$block_type}",
                array(
                    'render_callback' => [ $this, 'render_grid_master_block' ],
                )
            );
        }
    }

    /**
     * Render callback for frontend
     */
    public function render_grid_master_block( $attributes ) {
        $post_type = ! empty( $attributes['postType'] ) ? $attributes['postType'] : 'post';
        $number    = ! empty( $attributes['numberOfItems'] ) ? intval( $attributes['numberOfItems'] ) : 5;

        $query = new \WP_Query([
            'post_type'      => $post_type,
            'posts_per_page' => $number,
        ]);

        if ( ! $query->have_posts() ) {
            return '<p>' . esc_html__( 'No items to display', 'grid-master' ) . '</p>';
        }

        $html = '<ul class="grid-master-items">';
        while ( $query->have_posts() ) {
            $query->the_post();
            $html .= '<li>' . esc_html( get_the_title() ) . '</li>';
        }
        wp_reset_postdata();
        $html .= '</ul>';

        return $html;
    }
}
