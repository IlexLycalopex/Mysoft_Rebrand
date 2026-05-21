<?php
/**
 * The template for displaying all pages.
 *
 * Elementor-compatible: Elementor manages the content area.
 *
 * @package Mysoft
 */

get_header();
?>

<main id="main" class="page-content">
  <?php while ( have_posts() ) : the_post(); ?>
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
      <div class="entry-content">
        <?php the_content(); ?>
      </div>
    </article>
  <?php endwhile; ?>
</main>

<?php get_footer(); ?>
