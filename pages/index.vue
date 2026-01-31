<template>
  <main>
    <!-- Hero Section with Background Slider -->
    <HeroSection :name="siteData.name" :tagline="siteData.tagline" :projects="featured" />

    <!-- Selected Work Section -->
    <section class="py-8 lg:py-12 bg-brand-black">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <!-- Section Header -->
        <div class="flex items-center justify-between mb-6 lg:mb-8">
          <span class="label-text">Selected Work</span>
          <NuxtLink to="/work" class="link-arrow">
            All Projects
          </NuxtLink>
        </div>

        <!-- Project Grid -->
        <ProjectGrid :projects="featured" />
      </div>
    </section>

    <!-- About Teaser Section -->
    <section class="py-16 lg:py-24 border-t border-white/5">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <!-- Left: Featured Photo -->
          <div class="aspect-[4/5] max-w-md mx-auto lg:mx-0 overflow-hidden rounded-sm">
            <NuxtImg 
              src="/Shinedown/IMG_5487.jpg"
              alt="Shinedown live performance"
              class="w-full h-full object-contain"
            />
          </div>

          <!-- Right: About Content -->
          <div>
            <span class="label-text">About</span>
            <h2 class="mt-4 font-serif text-display-md text-white">
              A decade of documenting live music
            </h2>
            <p class="mt-6 text-base lg:text-lg text-brand-light leading-relaxed max-w-lg">
              Pat Rogers has spent over ten years capturing the energy, emotion, and raw moments 
              of live performance. From arena tours to intimate club shows, the work focuses on 
              finding the extraordinary in every frame.
            </p>
            <p class="mt-4 text-base lg:text-lg text-brand-light leading-relaxed max-w-lg">
              Based in Nashville, TN, available worldwide.
            </p>
            <NuxtLink to="/about" class="link-arrow mt-8 inline-block">
              Full Bio
            </NuxtLink>
          </div>
        </div>
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
