<template>
  <main class="pt-24 lg:pt-32 pb-16 lg:pb-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Header -->
      <header class="mb-12 lg:mb-16">
        <h1 class="font-serif text-display-lg text-white">About Pat Rogers</h1>
      </header>

      <!-- Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <!-- Left: Portrait -->
        <div class="lg:col-span-5">
          <div class="sticky top-32">
            <div class="aspect-[4/5] max-w-md">
              <GradientPlaceholder variant="portrait" alt="Pat Rogers portrait" />
            </div>
          </div>
        </div>

        <!-- Right: Bio Content -->
        <div class="lg:col-span-7">
          <div class="prose-content">
            <p class="text-lg lg:text-xl text-white leading-relaxed">
              Pat Rogers is a concert and music photographer based in Nashville, TN, 
              specializing in capturing the raw energy and intimate moments of live performance.
            </p>

            <p class="mt-6 text-base lg:text-lg text-brand-light leading-relaxed">
              With over a decade of experience shooting tours, festivals, and editorial assignments, 
              Pat has developed a distinctive visual language that balances the chaos of the stage 
              with quiet, contemplative portraits backstage.
            </p>

            <p class="mt-6 text-base lg:text-lg text-brand-light leading-relaxed">
              The work focuses on finding the extraordinary in every frame—whether it's the split-second 
              connection between artist and audience, the golden hour glow across a festival crowd, 
              or the stillness of a dressing room before the show.
            </p>

            <p class="mt-6 text-base lg:text-lg text-brand-light leading-relaxed">
              Available for tour documentation, festival coverage, editorial assignments, 
              and artist portraits worldwide.
            </p>
          </div>

          <!-- Credits Section -->
          <div class="mt-16 pt-12 border-t border-white/10">
            <h2 class="label-text mb-6">Featured In</h2>
            <div class="flex flex-wrap gap-x-6 gap-y-3">
              <span 
                v-for="credit in siteData.credits" 
                :key="credit"
                class="text-base font-serif text-brand-light"
              >
                {{ credit }}
              </span>
            </div>
          </div>

          <!-- Gear Section (Optional) -->
          <div class="mt-12 pt-12 border-t border-white/10">
            <h2 class="label-text mb-6">Gear</h2>
            <ul class="space-y-2 text-sm text-brand-light">
              <li>Sony α1 / α7S III</li>
              <li>24-70mm f/2.8 GM II</li>
              <li>70-200mm f/2.8 GM II</li>
              <li>35mm f/1.4 GM</li>
              <li>85mm f/1.4 GM</li>
            </ul>
          </div>

          <!-- CTA -->
          <div class="mt-16">
            <NuxtLink 
              to="/contact" 
              class="inline-block px-8 py-3 text-[11px] font-sans font-semibold tracking-[0.2em] 
                     bg-white text-brand-black border border-white
                     hover:bg-transparent hover:text-white transition-all duration-300"
            >
              GET IN TOUCH
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import siteData from '~/content/data/site.json'

useHead({
  title: 'About | RockSnaps',
  meta: [
    { name: 'description', content: 'Pat Rogers is a concert and music photographer based in Nashville, TN, specializing in tour documentation, festival coverage, and artist portraits.' },
    { property: 'og:title', content: 'About Pat Rogers | RockSnaps' },
    { property: 'og:description', content: 'Concert and music photographer based in Nashville, TN.' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>
