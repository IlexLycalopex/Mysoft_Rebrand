<?php
/**
 * Template Part: Post Card
 *
 * Reusable post card partial for blog/insights archive.
 * Used inside a loop — call with get_template_part().
 *
 * @package Mysoft
 */

$categories = get_the_category();
$cat_name   = $categories ? esc_html( $categories[0]->name ) : 'Insights';
?>

<article <?php post_class( 'post-card' ); ?>>
  <a href="<?php the_permalink(); ?>" class="post-card__inner" style="text-decoration:none;display:flex;flex-direction:column;height:100%;">

    <div class="post-card__image">
      <?php if ( has_post_thumbnail() ) : ?>
        <?php the_post_thumbnail( 'mysoft-card', [ 'class' => 'post-card__img', 'alt' => esc_attr( get_the_title() ) ] ); ?>
      <?php else : ?>
        <div class="grad-block post-card__grad" style="aspect-ratio:16/9;">
          <span class="grad-block__label">Insights</span>
        </div>
      <?php endif; ?>
    </div><!-- /.post-card__image -->

    <div class="post-card__body">
      <span class="eyebrow post-card__category"><?php echo $cat_name; ?></span>
      <h3 class="post-card__title"><?php the_title(); ?></h3>
      <p class="post-card__excerpt"><?php echo wp_trim_words( get_the_excerpt(), 20, '&hellip;' ); ?></p>
      <div class="post-card__meta">
        <span><?php echo get_the_date(); ?></span>
      </div>
    </div><!-- /.post-card__body -->

  </a>
</article>
