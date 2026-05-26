<?php get_header(); ?>

<?php while (have_posts()) : the_post(); ?>

<section class="post-single-hero">
  <div class="post-single-hero__inner container container--narrow">
    <div class="post-single-hero__categories">
      <?php
      $categories = get_the_category();
      foreach ($categories as $cat) :
      ?>
        <a href="<?php echo esc_url(get_category_link($cat->term_id)); ?>" class="eyebrow post-single-hero__category"><?php echo esc_html($cat->name); ?></a>
      <?php endforeach; ?>
    </div>
    <h1 class="post-single-hero__title"><?php the_title(); ?></h1>
    <div class="post-single-hero__meta">
      <span class="post-single-hero__meta-item"><?php the_author(); ?></span>
      <span class="post-single-hero__meta-item"><?php echo get_the_date(); ?></span>
      <span class="post-single-hero__meta-item"><?php echo ceil(str_word_count(wp_strip_all_tags(get_the_content())) / 200); ?> min read</span>
    </div>
  </div>
</section>

<?php if (has_post_thumbnail()) : ?>
<section class="post-single-image">
  <div class="post-single-image__inner container container--narrow">
    <?php the_post_thumbnail('mysoft-hero', ['class' => 'post-single-image__img']); ?>
  </div>
</section>
<?php else : ?>
<section class="post-single-image">
  <div class="post-single-image__inner container container--narrow">
    <div class="grad-block post-single-image__img" style="aspect-ratio:16/7;">
      <span class="grad-block__label">Insights</span>
    </div>
  </div>
</section>
<?php endif; ?>

<section class="post-single-body">
  <div class="post-single-body__inner container container--narrow">
    <div class="entry-content">
      <?php the_content(); ?>
    </div>
  </div>
</section>

<nav class="post-nav">
  <div class="post-nav__inner container">
    <div class="post-nav__prev">
      <?php previous_post_link('%link', '← %title'); ?>
    </div>
    <div class="post-nav__next">
      <?php next_post_link('%link', '%title →'); ?>
    </div>
  </div>
</nav>

<?php endwhile; ?>

<?php get_footer(); ?>
