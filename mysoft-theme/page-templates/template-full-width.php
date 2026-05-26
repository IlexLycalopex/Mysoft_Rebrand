<?php
/**
 * Template Name: Full Width
 * Template Post Type: page
 *
 * Elementor full-width page template.
 * No container constraints — Elementor handles all layout.
 *
 * @package Mysoft
 */

get_header();
?>

<main id="main">
  <?php while ( have_posts() ) : the_post(); ?>
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
      <?php the_content(); ?>
    </article>
  <?php endwhile; ?>
</main>

<?php get_footer(); ?>
