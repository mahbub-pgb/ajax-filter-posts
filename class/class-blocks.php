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

         add_shortcode( 'grid_master', [ $this, 'render_shortcode_post' ] );
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
     * Shortcode to render Grid Master block from a specific post
     * Usage: [grid_master id="123"]
     *
     * @param array $atts Shortcode attributes.
     * @return string Rendered HTML
     */
    public function render_shortcode_post( $atts ) {
        $atts = shortcode_atts(
            [
                'id' => 0, 
            ],
            $atts,
            'grid_master'
        );

        $post_id = absint( $atts['id'] );
        if ( ! $post_id ) {
            return '<p>' . esc_html__( 'Please provide a valid post ID.', 'grid-master' ) . '</p>';
        }

        $post = get_post( $post_id );
        if ( ! $post || empty( $post->post_content ) ) {
            return '<p>' . esc_html__( 'Post not found or empty content.', 'grid-master' ) . '</p>';
        }

        // Parse blocks from post content
        $blocks = parse_blocks( $post->post_content );

        $output = '';

        foreach ( $blocks as $block ) {
            if ( $block['blockName'] === 'create-block/grid-style' ) {
                // Get inner blocks and render them properly
                $inner_blocks_html = '';
                if ( !empty($block['innerBlocks']) ) {
                    foreach ( $block['innerBlocks'] as $inner_block ) {
                        $inner_blocks_html .= render_block( $inner_block );
                    }
                }
                
                // Render the main block with inner content
                $output .= $this->render_grid_master_block( $block['attrs'], $inner_blocks_html, $post_id );
            }
        }

        if ( empty( $output ) ) {
            return '<p>' . esc_html__( 'No Grid Master blocks found in this post.', 'grid-master' ) . '</p>';
        }

        return $output;
    }
    
    /**
     * Filter allowed blocks based on post type
     */
    public function filter_allowed_blocks( $allowed_blocks, $editor_context ) {

        // If we are NOT editing gm_grid_style → hide Grid blocks
        if ( empty( $editor_context->post ) || 'gm_grid_style' !== $editor_context->post->post_type ) {
            // Allow all default blocks EXCEPT Grid category
            $registered_blocks = \WP_Block_Type_Registry::get_instance()->get_all_registered();

            $allowed = [];
            foreach ( $registered_blocks as $block_name => $block_type ) {
                if ( ! isset( $block_type->category ) || $block_type->category !== 'grid' ) {
                    $allowed[] = $block_name;
                }
            }

            return $allowed;
        }

        // If editing gm_grid_style → ONLY show Grid category blocks
        $registered_blocks = \WP_Block_Type_Registry::get_instance()->get_all_registered();

        $grid_blocks = [];
        foreach ( $registered_blocks as $block_name => $block_type ) {
            if ( isset( $block_type->category ) && $block_type->category === 'grid' ) {
                $grid_blocks[] = $block_name;
            }
        }

        return ! empty( $grid_blocks ) ? $grid_blocks : [];
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
     * Render callback for the Grid Style block.
     */
    public function render_grid_master_block( $attributes, $content = '', $block = null ) {
        
        // Get post ID
        $post_id = null;
        if ( is_object($block) && isset($block->context['postId']) ) {
            $post_id = $block->context['postId'];
        } elseif ( is_numeric($block) ) {
            // When called from shortcode
            $post_id = $block;
        } else {
            $post_id = get_the_ID();
        }
        
        // Get post title
        $post_title = get_the_title($post_id);
        
        // Get section title from attributes (use post title if sectionTitle is empty)
        $section_title = isset($attributes['sectionTitle']) && !empty($attributes['sectionTitle']) 
            ? esc_html($attributes['sectionTitle']) 
            : esc_html($post_title);

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

        // Build section style string
        $section_style = !empty($section_styles) ? implode('; ', $section_styles) : '';

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

        $title_style = !empty($title_styles) ? implode('; ', $title_styles) : '';
        
        // Build output
        ob_start();
        ?>
        <div class="wp-block-create-block-grid-style">
            <section class="grid-style-section" style="<?php echo esc_attr( $section_style ); ?>">
                <?php if (!empty($section_title)) : ?>
                    <h2 class="section-title" style="<?php echo esc_attr( $title_style ); ?>">
                        <?php echo $section_title; ?>
                    </h2>
                <?php endif; ?>
                
                <div class="grid-style-content">
                    <?php echo $content; ?>
                </div>
            </section>
        </div>
        <?php
        return ob_get_clean();
    }
}