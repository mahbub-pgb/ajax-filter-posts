<?php
namespace GridMaster;

class Blocks {

    private static $instance = null;

    /**
     * Init Singleton
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
        add_action( 'init', [ $this, 'register_blocks' ] );
        add_filter( 'block_categories_all', [ $this, 'register_block_category' ], 10, 2 );
        add_filter( 'allowed_block_types_all', [ $this, 'filter_allowed_blocks' ], 10, 2 );

        // Shortcode to render grid style post
        add_shortcode( 'grid_master', [ $this, 'render_shortcode_post' ] );
    }

    /**
     * Register custom block category
     */
    public function register_block_category( $categories, $post ) {
        $grid_category = [
            [
                'slug'  => 'grid',
                'title' => __( 'Grid', 'grid-master' ),
                'icon'  => 'grid-view',
            ],
        ];
        return array_merge( $grid_category, $categories );
    }

    /**
     * Only show Grid blocks in gm_grid_style post type
     */
    public function filter_allowed_blocks( $allowed_blocks, $context ) {

        $registry = \WP_Block_Type_Registry::get_instance()->get_all_registered();
        $grid_blocks = [];
        $all_non_grid = [];

        foreach ( $registry as $name => $type ) {
            if ( isset( $type->category ) && $type->category === 'grid' ) {
                $grid_blocks[] = $name;
            } else {
                $all_non_grid[] = $name;
            }
        }

        // If NOT gm_grid_style → hide grid blocks
        if ( empty( $context->post ) || $context->post->post_type !== 'gm_grid_style' ) {
            return $all_non_grid;
        }

        // If editing gm_grid_style → only allow grid blocks
        return $grid_blocks;
    }

    /**
     * Register all blocks from manifest
     */
    public function register_blocks() {
        $build = GRIDMASTER_PATH . '/build';
        $manifest = $build . '/blocks-manifest.php';

        if ( ! file_exists( $manifest ) ) {
            return;
        }

        $blocks = require $manifest;

        foreach ( array_keys( $blocks ) as $name ) {

            if ( \WP_Block_Type_Registry::get_instance()->is_registered( $name ) ) {
                continue;
            }

            $path = $build . '/' . $name;

            register_block_type( $path, [
                'render_callback' => [ $this, 'render_grid_master_block' ],
            ] );
        }
    }

    /**
     * Shortcode: [grid_master id="123"]
     */
    public function render_shortcode_post( $atts ) {

        $atts = shortcode_atts(
            [ 'id' => 0 ],
            $atts,
            'grid_master'
        );

        $post_id = absint( $atts['id'] );

        if ( ! $post_id ) {
            return '<p>' . __( 'Please provide a valid post ID.', 'grid-master' ) . '</p>';
        }

        $post = get_post( $post_id );

        if ( ! $post || empty( $post->post_content ) ) {
            return '<p>' . __( 'Post not found or empty content.', 'grid-master' ) . '</p>';
        }

        $blocks = parse_blocks( $post->post_content );
        $output = '';

        foreach ( $blocks as $block ) {
            if ( $block['blockName'] === 'create-block/grid-master' ) {
                $output .= $this->render_grid_master_block( $block['attrs'] );
            }
        }

        return $output ?: '<p>' . __( 'No Grid Master blocks found in this post.', 'grid-master' ) . '</p>';
    }

    /**
     * Render callback for Grid Master block
     */
    public function render_grid_master_block( $attributes ) {

        $section_title = $attributes['sectionTitle'] ?? 'Section Title';

        // Style builders
        $section_styles = [];
        $title_styles = [];

        $map = [
            'backgroundColor' => 'background-color',
            'textColor'       => 'color',
            'borderColor'     => 'border-color',
            'borderStyle'     => 'border-style',
            'boxShadow'       => 'box-shadow',
            'alignment'       => 'text-align',
        ];

        foreach ( $map as $attr => $css ) {
            if ( ! empty( $attributes[$attr] ) ) {
                $section_styles[] = "$css: " . esc_attr($attributes[$attr]);
            }
        }

        // Numeric styles
        $numeric = [
            'borderWidth'   => 'border-width',
            'borderRadius'  => 'border-radius',
            'paddingTop'    => 'padding-top',
            'paddingRight'  => 'padding-right',
            'paddingBottom' => 'padding-bottom',
            'paddingLeft'   => 'padding-left',
            'marginTop'     => 'margin-top',
            'marginRight'   => 'margin-right',
            'marginBottom'  => 'margin-bottom',
            'marginLeft'    => 'margin-left',
        ];

        foreach ( $numeric as $attr => $css ) {
            if ( isset( $attributes[$attr] ) ) {
                $section_styles[] = "$css: " . esc_attr( $attributes[$attr] ) . "px";
            }
        }

        // Title styles
        if ( ! empty( $attributes['titleColor'] ) ) {
            $title_styles[] = 'color: ' . esc_attr( $attributes['titleColor'] );
        }
        if ( isset( $attributes['titleFontSize'] ) ) {
            $title_styles[] = 'font-size: ' . esc_attr( $attributes['titleFontSize'] ) . 'px';
        }
        if ( ! empty( $attributes['titleFontWeight'] ) ) {
            $title_styles[] = 'font-weight: ' . esc_attr( $attributes['titleFontWeight'] );
        }

        $section_css = $section_styles ? ' style="' . implode( '; ', $section_styles ) . '"' : '';
        $title_css   = $title_styles   ? ' style="' . implode( '; ', $title_styles ) . '"' : '';

        ob_start();
        ?>

        <div <?php echo get_block_wrapper_attributes(); ?>>
            <section class="grid-style-section"<?= $section_css; ?>>
                <h2 class="section-title"<?= $title_css; ?>><?= esc_html( $section_title ); ?></h2>
                <!-- Add grid content here -->
            </section>
        </div>

        <?php
        return ob_get_clean();
    }
}
