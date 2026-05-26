<?php get_header(); ?>

<section class="blog-hero">
  <div class="blog-hero__inner container">
    <span class="eyebrow"><?php
      if (is_category()) {
        echo 'Category';
      } elseif (is_tag()) {
        echo 'Tag';
      } else {
        echo 'Insights';
      }
    ?></span>
    <h1 class="blog-hero__title"><?php
      if (is_category()) {
        single_cat_title();
      } elseif (is_tag()) {
        single_tag_title();
      } elseif (is_author()) {
        the_author();
      } else {
        echo 'Finance &amp; Operations Insights';
      }
    ?></h1>
    <p class="blog-hero__desc">Practical thinking on ERP, AI adoption, and finance transformation for mid-market organisations.</p>
  </div>
</section>

<section class="blog-archive">
  <div class="blog-archive__inner container">
    <?php if (have_posts()) : ?>
      <div class="blog-archive__grid">
        <?php while (have_posts()) : the_post(); ?>
          <?php get_template_part('template-parts/content/content-card'); ?>
        <?php endwhile; ?>
      </div>
      <div class="pagination">
        <?php echo paginate_links(['prev_text' => '← Previous', 'next_text' => 'Next →']); ?>
      </div>
    <?php else : ?>
      <p>No posts found.</p>
    <?php endif; ?>
  </div>
</section>

<?php get_footer(); ?>
