<?php get_header(); ?>

<section class="section section--white" style="min-height:60vh;display:flex;align-items:center;">
  <div class="container" style="text-align:center;max-width:600px;margin:0 auto;">
    <span class="eyebrow">404 — Page Not Found</span>
    <h1 style="font-family:var(--font-display);font-weight:600;font-size:clamp(2.5rem,5vw,4rem);letter-spacing:-0.025em;color:var(--navy);margin:16px 0 20px;line-height:1.05;">This page doesn't exist.</h1>
    <p style="font-family:var(--font-sans);font-size:18px;line-height:1.65;color:var(--fg-2);margin:0 0 40px;">The page you're looking for may have moved, been renamed, or no longer exists.</p>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
      <a href="<?php echo esc_url(home_url('/')); ?>" class="btn btn--primary btn--lg">Go to homepage <span class="btn-arrow">→</span></a>
      <a href="<?php echo esc_url(get_permalink(get_option('page_for_posts'))); ?>" class="btn btn--ghost btn--lg">Browse Insights</a>
    </div>
  </div>
</section>

<?php get_footer(); ?>
