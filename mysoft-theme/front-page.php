<?php
/**
 * Front Page Template
 *
 * @package Mysoft
 */

get_header(); ?>

<main id="main">
	<?php get_template_part( 'template-parts/sections/hero' ); ?>
	<?php get_template_part( 'template-parts/sections/stats-band' ); ?>
	<?php get_template_part( 'template-parts/sections/solutions' ); ?>
	<?php get_template_part( 'template-parts/sections/journey' ); ?>
	<?php get_template_part( 'template-parts/sections/why-mysoft' ); ?>
	<?php get_template_part( 'template-parts/sections/testimonials' ); ?>
	<?php get_template_part( 'template-parts/sections/assessment-cta' ); ?>
</main>

<?php get_footer();
