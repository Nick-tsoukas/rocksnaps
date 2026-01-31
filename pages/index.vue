<template>
  <main>
    <!-- Hero Section with Background Slider -->
    <HeroSection :name="siteData.name" :tagline="siteData.tagline" :projects="featured" />

    <!-- Band Showcase Sections -->
    <BandShowcase 
      v-for="(project, index) in featured.slice(0, 6)" 
      :key="project.slug"
      :project="project"
      :alternate="index % 2 === 1"
    />

    <!-- View All Work CTA -->
    <section class="py-16 lg:py-24 border-t border-white/5">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="font-serif text-display-md text-white">
          Explore the full collection
        </h2>
        <p class="mt-4 text-lg text-brand-light max-w-xl mx-auto">
          From arena tours to intimate club shows, discover the complete portfolio.
        </p>
        <NuxtLink to="/work" class="inline-block mt-8 px-10 py-4 bg-white text-brand-black text-sm font-semibold tracking-widest uppercase hover:bg-transparent hover:text-white border border-white transition-all duration-300">
          View All Work
        </NuxtLink>
      </div>
    </section>

    <!-- Credits Strip -->
    <CreditsStrip :credits="siteData.credits" />

    <!-- Contact Teaser Section -->
    <section class="py-20 lg:py-32">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <span class="label-text">Contact</span>
        <h2 class="mt-4 font-serif text-display-lg text-white max-w-2xl">
          Let's create together
        </h2>
        <a 
          :href="`mailto:${siteData.email}`" 
          class="mt-8 inline-block text-lg lg:text-xl text-brand-light hover:text-white transition-colors"
        >
          {{ siteData.email }}
        </a>
      </div>
    </section>
  </main>
</template>

<script setup>
import siteData from '~/content/data/site.json'

const { featured } = useProjects()

useHead({
  title: 'RockSnaps | Pat Rogers — Concert Photography',
  meta: [
    { name: 'description', content: siteData.tagline + ' Professional concert and music photography by Pat Rogers.' },
    { property: 'og:title', content: 'RockSnaps | Pat Rogers — Concert Photography' },
    { property: 'og:description', content: siteData.tagline },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://rocksnaps.com' }
  ]
})
</script>
