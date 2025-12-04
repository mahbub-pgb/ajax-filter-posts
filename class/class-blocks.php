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
        add_shortcode( 'grid_master', [ $this, 'render_shortcode_post' ] );


        // $blocks = new \GridMaster\Blocks();
        // Register Gutenberg blocks on init
        add_action( 'wp_head', function(){

        });
            
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
                'id' => 0, // Post ID
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
            if ( $block['blockName'] === 'create-block/grid-master' ) {
                // Render the block using existing render function
                $output .= $this->render_grid_master_block( $block['attrs'] );
            }
        }

        if ( empty( $output ) ) {
            return '<p>' . esc_html__( 'No Grid Master blocks found in this post.', 'grid-master' ) . '</p>';
        }

        return $output;
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

        // Get manifest data
        $manifest_data = require $manifest_file;

        foreach ( array_keys( $manifest_data ) as $block_name ) {

            // Skip if already registered
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
     *
     * @param array $attributes Block attributes.
     * @return string Rendered block HTML.
     */
    public function render_grid_master_block( $attributes ) {
        // Get attributes with defaults
        $post_type = isset( $attributes['postType'] ) ? sanitize_text_field( $attributes['postType'] ) : 'post';
        $number_of_items = isset( $attributes['numberOfItems'] ) ? absint( $attributes['numberOfItems'] ) : 6;
        $columns = isset( $attributes['columns'] ) ? absint( $attributes['columns'] ) : 3;
        $show_featured_image = isset( $attributes['showFeaturedImage'] ) ? $attributes['showFeaturedImage'] : true;
        $show_excerpt = isset( $attributes['showExcerpt'] ) ? $attributes['showExcerpt'] : true;
        $show_date = isset( $attributes['showDate'] ) ? $attributes['showDate'] : true;
        $show_author = isset( $attributes['showAuthor'] ) ? $attributes['showAuthor'] : true;
        $excerpt_length = isset( $attributes['excerptLength'] ) ? absint( $attributes['excerptLength'] ) : 20;
        $card_border_radius = isset( $attributes['cardBorderRadius'] ) ? esc_attr( $attributes['cardBorderRadius'] ) : '8px';
        $card_background_color = isset( $attributes['cardBackgroundColor'] ) ? esc_attr( $attributes['cardBackgroundColor'] ) : '#ffffff';
        $card_shadow = isset( $attributes['cardShadow'] ) ? $attributes['cardShadow'] : true;
        $title_color = isset( $attributes['titleColor'] ) ? esc_attr( $attributes['titleColor'] ) : '#333333';
        $excerpt_color = isset( $attributes['excerptColor'] ) ? esc_attr( $attributes['excerptColor'] ) : '#666666';
        $meta_color = isset( $attributes['metaColor'] ) ? esc_attr( $attributes['metaColor'] ) : '#999999';
        $image_height = isset( $attributes['imageHeight'] ) ? esc_attr( $attributes['imageHeight'] ) : '200px';
        $enable_pagination = isset( $attributes['enablePagination'] ) ? $attributes['enablePagination'] : false;
        $items_per_page = isset( $attributes['itemsPerPage'] ) ? absint( $attributes['itemsPerPage'] ) : 4;
        
        // Handle padding
        $card_padding = isset( $attributes['cardPadding'] ) ? $attributes['cardPadding'] : array(
            'top' => '20px',
            'right' => '20px',
            'bottom' => '20px',
            'left' => '20px'
        );
        $padding_style = sprintf(
            '%s %s %s %s',
            esc_attr( $card_padding['top'] ),
            esc_attr( $card_padding['right'] ),
            esc_attr( $card_padding['bottom'] ),
            esc_attr( $card_padding['left'] )
        );

        // Get current page for pagination
        $paged = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : 1;
        
        // Query posts/pages
        $args = array(
            'post_type'      => $post_type,
            'post_status'    => 'publish',
            'orderby'        => 'date',
            'order'          => 'DESC',
        );

        // Adjust query based on pagination setting
        if ( $enable_pagination ) {
            $args['posts_per_page'] = $items_per_page;
            $args['paged'] = $paged;
        } else {
            $args['posts_per_page'] = $number_of_items;
        }

        $query = new \WP_Query( $args );

        // Return early if no posts found
        if ( ! $query->have_posts() ) {
            return '<div class="wp-block-create-block-grid-master"><p>' . esc_html__( 'No items to display', 'grid-master' ) . '</p></div>';
        }

        // Build grid styles
        $grid_style = sprintf(
            'display: grid; grid-template-columns: repeat(%d, 1fr); gap: 20px;',
            $columns
        );

        // Build card styles
        $box_shadow = $card_shadow ? '0 2px 8px rgba(0,0,0,0.1)' : 'none';
        $card_style = sprintf(
            'background-color: %s; border-radius: %s; padding: %s; box-shadow: %s; overflow: hidden; transition: transform 0.3s ease, box-shadow 0.3s ease;',
            $card_background_color,
            $card_border_radius,
            $padding_style,
            $box_shadow
        );

        $image_style = sprintf(
            'width: 100%%; height: %s; object-fit: cover; border-radius: 4px; margin-bottom: 15px; display: block;',
            $image_height
        );

        $title_style = sprintf(
            'color: %s; font-size: 20px; font-weight: 600; margin: 0 0 10px 0; line-height: 1.4;',
            $title_color
        );

        $excerpt_style = sprintf(
            'color: %s; font-size: 14px; line-height: 1.6; margin: 0 0 10px 0;',
            $excerpt_color
        );

        $meta_style = sprintf(
            'color: %s; font-size: 12px; display: flex; gap: 10px; margin-top: 10px;',
            $meta_color
        );

        // Build output
        ob_start();
        ?>
        <div class="wp-block-create-block-grid-master">
            <div style="<?php echo esc_attr( $grid_style ); ?>">
                <?php
                while ( $query->have_posts() ) {
                    $query->the_post();
                    $post_id = get_the_ID();
                    ?>
                    <div class="grid-master-card" style="<?php echo esc_attr( $card_style ); ?>">
                        <?php if ( $show_featured_image && has_post_thumbnail() ) : ?>
                            <a href="<?php the_permalink(); ?>" target="_blank" rel="noopener noreferrer">
                                <?php the_post_thumbnail( 'large', array( 'style' => $image_style ) ); ?>
                            </a>
                        <?php endif; ?>

                        <h3 style="<?php echo esc_attr( $title_style ); ?>">
                            <a href="<?php the_permalink(); ?>" target="_blank" style="color: inherit; text-decoration: none;">
                                <?php the_title(); ?>
                            </a>
                        </h3>

                        <?php if ( $show_excerpt ) : ?>
                            <p style="<?php echo esc_attr( $excerpt_style ); ?>">
                                <?php echo esc_html( wp_trim_words( get_the_excerpt(), $excerpt_length, '...' ) ); ?>
                            </p>
                        <?php endif; ?>

                        <?php if ( $show_date || $show_author ) : ?>
                            <div style="<?php echo esc_attr( $meta_style ); ?>">
                                <?php if ( $show_date ) : ?>
                                    <span><?php echo get_the_date(); ?></span>
                                <?php endif; ?>
                                <?php if ( $show_author ) : ?>
                                    <span>• <?php the_author(); ?></span>
                                <?php endif; ?>
                            </div>
                        <?php endif; ?>
                    </div>
                    <?php
                }
                wp_reset_postdata();
                ?>
            </div>

            <?php if ( $enable_pagination && $query->max_num_pages > 1 ) : ?>
                <div class="grid-master-pagination" style="display: flex; justify-content: center; align-items: center; gap: 10px; margin-top: 30px;">
                    <?php
                    $big = 999999999;
                    echo paginate_links( array(
                        'base'      => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
                        'format'    => '?paged=%#%',
                        'current'   => max( 1, $paged ),
                        'total'     => $query->max_num_pages,
                        'prev_text' => __( '« Previous', 'grid-master' ),
                        'next_text' => __( 'Next »', 'grid-master' ),
                        'type'      => 'plain',
                    ) );
                    ?>
                </div>
            <?php endif; ?>
        </div>
        <?php

        return ob_get_clean();
    }
}