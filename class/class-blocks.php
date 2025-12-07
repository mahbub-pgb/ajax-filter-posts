<?php
/**
 * Blocks Class
 * Handles block registration and rendering
 */

namespace GridMaster;

class Blocks {

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

    private function __construct() {
        add_action( 'init', [ $this, 'register_blocks' ] );
        add_action( 'wp_head', [ $this, 'head' ] );
    }

    public function head(){
        
    }
    
    /**
     * Register all blocks
     */
    public function register_blocks() {
        $build_path    = GRIDMASTER_PATH . '/build';
        $manifest_file = $build_path . '/blocks-manifest.php';

        // Debug: Check if manifest file exists
        if ( ! file_exists( $manifest_file ) ) {
            error_log( 'GridMaster: Manifest file not found at ' . $manifest_file );
            return;
        }

        // Get manifest data
        $manifest_data = require $manifest_file;


        if ( empty( $manifest_data ) ) {
            return;
        }

        foreach ( array_keys( $manifest_data ) as $block_name ) {

            // Skip if already registered
            if ( \WP_Block_Type_Registry::get_instance()->is_registered( $block_name ) ) {
                error_log( 'GridMaster: Block already registered - ' . $block_name );
                continue;
            }

            

            $block_path = $build_path . '/' . $block_name;

            // Debug: Check if block.json exists
            if ( ! file_exists( $block_path . '/block.json' ) ) {
                error_log( 'GridMaster: block.json not found at ' . $block_path . '/block.json' );
                continue;
            }

            $result = register_block_type( $block_path, array(
                'render_callback' => [ $this, 'render_grid_master_block' ],
            ) );

            // var_dump( $result );

        }
    }
    
    /**
     * Render callback for the Grid Master block.
     *
     * @param array $attributes Block attributes.
     * @return string Rendered block HTML.
     */
    public function render_grid_master_block( $attributes ) {
        
        $section_title = isset($attributes['sectionTitle']) ? esc_html($attributes['sectionTitle']) : 'Section Title';
        
        ob_start();
        ?>
        <div <?php echo get_block_wrapper_attributes(); ?>>
            <section class="grid-style-section">
                <h2 class="section-title"><?php echo $section_title; ?></h2>
                <!-- Add your grid content here -->
            </section>
        </div>
        <?php
        return ob_get_clean();
    }
}