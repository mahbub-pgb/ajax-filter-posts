<?php
namespace GridMaster;

class Blocks {
    private static $instance = null;

    public static function init() {
        if ( self::$instance === null ) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    private function __construct() {
        add_action( 'init', [ $this, 'register_blocks' ] );
        add_filter( 'block_categories_all', [ $this, 'register_block_category' ], 10, 2 );
        add_filter( 'allowed_block_types_all', [ $this, 'filter_allowed_blocks' ], 10, 2 );
    }
    
    /**
     * Register custom block category
     */
    public function register_block_category( $categories, $post ) {
        return array_merge(
            array(
                array(
                    'slug'  => 'grid',
                    'title' => __( 'Grid', 'grid-master' ),
                    'icon'  => 'grid-view',
                ),
            ),
            $categories
        );
    }
    
    /**
     * Filter allowed blocks based on post type
     */
    public function filter_allowed_blocks( $allowed_blocks, $editor_context ) {
        // Check if we're editing a gm_grid_style post type
        if ( ! empty( $editor_context->post ) && 'gm_grid_style' === $editor_context->post->post_type ) {
            // Get all registered blocks
            $registered_blocks = \WP_Block_Type_Registry::get_instance()->get_all_registered();
            
            // Filter to only include blocks from the 'grid' category
            $grid_blocks = array();
            foreach ( $registered_blocks as $block_name => $block_type ) {
                if ( isset( $block_type->category ) && 'grid' === $block_type->category ) {
                    $grid_blocks[] = $block_name;
                }
            }
            
            // If no grid blocks found, return empty array (no blocks allowed)
            return ! empty( $grid_blocks ) ? $grid_blocks : array();
        }
        
        // For all other post types, allow all blocks
        return $allowed_blocks;
    }
    
    /**
     * Register all blocks
     */
    public function register_blocks() {
        $build_path    = GRIDMASTER_PATH . '/build';
        $manifest_file = $build_path . '/blocks-manifest.php';

        if ( ! file_exists( $manifest_file ) ) {
            return;
        }

        $manifest_data = require $manifest_file;

        foreach ( array_keys( $manifest_data ) as $block_name ) {
            if ( \WP_Block_Type_Registry::get_instance()->is_registered( $block_name ) ) {
                continue;
            }

            $block_path = $build_path . '/' . $block_name;

            register_block_type( $block_path, array(
                'render_callback' => [ $this, 'render_grid_master_block' ],
            ) );
        }
    }
    
    /**
     * Render callback for the Grid Master block.
     */
    public function render_grid_master_block( $attributes ) {
       $section_title = isset($attributes['sectionTitle']) ? esc_html($attributes['sectionTitle']) : 'Section Title';

        // Build inline styles for section
        $section_styles = array();
        if (!empty($attributes['backgroundColor'])) {
            $section_styles[] = 'background-color: ' . esc_attr($attributes['backgroundColor']);
        }
        if (!empty($attributes['textColor'])) {
            $section_styles[] = 'color: ' . esc_attr($attributes['textColor']);
        }
        if (!empty($attributes['borderColor'])) {
            $section_styles[] = 'border-color: ' . esc_attr($attributes['borderColor']);
        }
        if (isset($attributes['borderWidth'])) {
            $section_styles[] = 'border-width: ' . esc_attr($attributes['borderWidth']) . 'px';
        }
        if (!empty($attributes['borderStyle'])) {
            $section_styles[] = 'border-style: ' . esc_attr($attributes['borderStyle']);
        }
        if (isset($attributes['borderRadius'])) {
            $section_styles[] = 'border-radius: ' . esc_attr($attributes['borderRadius']) . 'px';
        }
        if (isset($attributes['paddingTop'])) {
            $section_styles[] = 'padding-top: ' . esc_attr($attributes['paddingTop']) . 'px';
        }
        if (isset($attributes['paddingRight'])) {
            $section_styles[] = 'padding-right: ' . esc_attr($attributes['paddingRight']) . 'px';
        }
        if (isset($attributes['paddingBottom'])) {
            $section_styles[] = 'padding-bottom: ' . esc_attr($attributes['paddingBottom']) . 'px';
        }
        if (isset($attributes['paddingLeft'])) {
            $section_styles[] = 'padding-left: ' . esc_attr($attributes['paddingLeft']) . 'px';
        }
        if (isset($attributes['marginTop'])) {
            $section_styles[] = 'margin-top: ' . esc_attr($attributes['marginTop']) . 'px';
        }
        if (isset($attributes['marginRight'])) {
            $section_styles[] = 'margin-right: ' . esc_attr($attributes['marginRight']) . 'px';
        }
        if (isset($attributes['marginBottom'])) {
            $section_styles[] = 'margin-bottom: ' . esc_attr($attributes['marginBottom']) . 'px';
        }
        if (isset($attributes['marginLeft'])) {
            $section_styles[] = 'margin-left: ' . esc_attr($attributes['marginLeft']) . 'px';
        }
        if (!empty($attributes['boxShadow'])) {
            $section_styles[] = 'box-shadow: ' . esc_attr($attributes['boxShadow']);
        }
        if (!empty($attributes['alignment'])) {
            $section_styles[] = 'text-align: ' . esc_attr($attributes['alignment']);
        }

        // Build inline styles for title
        $title_styles = array();
        if (!empty($attributes['titleColor'])) {
            $title_styles[] = 'color: ' . esc_attr($attributes['titleColor']);
        }
        if (isset($attributes['titleFontSize'])) {
            $title_styles[] = 'font-size: ' . esc_attr($attributes['titleFontSize']) . 'px';
        }
        if (!empty($attributes['titleFontWeight'])) {
            $title_styles[] = 'font-weight: ' . esc_attr($attributes['titleFontWeight']);
        }

        $section_style_attr = !empty($section_styles) ? ' style="' . implode('; ', $section_styles) . '"' : '';
        $title_style_attr = !empty($title_styles) ? ' style="' . implode('; ', $title_styles) . '"' : '';
        
        ob_start();
        ?>
        
        <div <?php echo get_block_wrapper_attributes(); ?>>
            <section class="grid-style-section"<?php echo $section_style_attr; ?>>
                <h2 class="section-title"<?php echo $title_style_attr; ?>><?php echo $section_title; ?></h2>
                <!-- Add your grid content here -->
            </section>
        </div>
        <?php
        return ob_get_clean();
    }
}