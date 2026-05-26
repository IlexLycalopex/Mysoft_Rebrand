<?php
/**
 * Enqueue scripts and styles.
 */

function mysoft_enqueue() {
    $v = wp_get_theme()->get('Version');

    /* Design system tokens */
    wp_enqueue_style(
        'mysoft-design-system',
        get_template_directory_uri() . '/assets/css/design-system.css',
        [], $v
    );

    /* Main components + section patterns */
    wp_enqueue_style(
        'mysoft-main',
        get_template_directory_uri() . '/assets/css/main.css',
        ['mysoft-design-system'], $v
    );

    /* Navigation */
    wp_enqueue_style(
        'mysoft-nav',
        get_template_directory_uri() . '/assets/css/nav.css',
        ['mysoft-main'], $v
    );

    /* Blog styles — archive and single */
    if (is_singular('post') || is_home() || is_archive() || is_search() || is_404()) {
        wp_enqueue_style(
            'mysoft-blog',
            get_template_directory_uri() . '/assets/css/blog.css',
            ['mysoft-main'], $v
        );
    }

    /* Assessment styles — only on the assessment page template */
    if (is_page_template('page-templates/template-assessment.php')) {
        wp_enqueue_style(
            'mysoft-assessment',
            get_template_directory_uri() . '/assets/css/assessment.css',
            ['mysoft-design-system'], $v
        );
        wp_enqueue_script(
            'mysoft-assessment',
            get_template_directory_uri() . '/assets/js/assessment.js',
            [], $v, true
        );
    }

    /* Nav interaction */
    wp_enqueue_script(
        'mysoft-nav',
        get_template_directory_uri() . '/assets/js/nav.js',
        [], $v, true
    );

    /* Hero + tab interactions — front page only */
    if (is_front_page()) {
        wp_enqueue_script(
            'mysoft-hero',
            get_template_directory_uri() . '/assets/js/hero.js',
            [], $v, true
        );
    }

    /* Comments */
    if (is_singular() && comments_open()) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'mysoft_enqueue');
