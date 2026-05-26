<?php
/**
 * WordPress loop fallback — handled by front-page.php and page.php in normal use.
 */
get_header();
?>
<main id="main" style="padding-top:var(--nav-h);">
  <div class="section section--white">
    <div class="container">
      <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <h1 class="section-title"><?php the_title(); ?></h1>
        <div class="post-single__body" style="margin:0;padding:0;">
          <div class="entry-content"><?php the_content(); ?></div>
        </div>
      <?php endwhile; endif; ?>
    </div>
  </div>
</main>
<?php get_footer(); ?>
