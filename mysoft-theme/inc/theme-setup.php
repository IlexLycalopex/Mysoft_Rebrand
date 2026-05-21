<?php
/**
 * Theme setup: supports, nav menus, image sizes, editor styles.
 */

function mysoft_setup() {
    load_theme_textdomain('mysoft', get_template_directory() . '/languages');

    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form','comment-form','comment-list','gallery','caption','style','script']);
    add_theme_support('wp-block-styles');
    add_theme_support('align-wide');
    add_theme_support('responsive-embeds');
    add_theme_support('custom-logo', [
        'height'      => 80,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ]);

    register_nav_menus([
        'primary'  => __('Primary Navigation', 'mysoft'),
        'footer'   => __('Footer Navigation',  'mysoft'),
        'mobile'   => __('Mobile Navigation',  'mysoft'),
    ]);

    add_image_size('mysoft-hero',       1440, 720,  true);
    add_image_size('mysoft-card',       780,  440,  true);
    add_image_size('mysoft-thumbnail',  400,  300,  true);
    add_image_size('mysoft-square',     600,  600,  true);

    add_post_type_support('page', 'excerpt');
}
add_action('after_setup_theme', 'mysoft_setup');

/**
 * Excerpt length.
 */
function mysoft_excerpt_length() { return 28; }
add_filter('excerpt_length', 'mysoft_excerpt_length', 999);

function mysoft_excerpt_more() { return '&hellip;'; }
add_filter('excerpt_more', 'mysoft_excerpt_more');

/**
 * Body classes.
 */
function mysoft_body_classes($classes) {
    if (is_singular()) $classes[] = 'is-singular';
    if (is_front_page()) $classes[] = 'is-home';
    return $classes;
}
add_filter('body_class', 'mysoft_body_classes');
