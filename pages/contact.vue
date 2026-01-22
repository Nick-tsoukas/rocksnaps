<template>
  <main class="pt-24 lg:pt-32 pb-16 lg:pb-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Header -->
      <header class="mb-12 lg:mb-16">
        <h1 class="font-serif text-display-lg text-white">Let's create together</h1>
        <p class="mt-4 text-lg text-brand-light max-w-xl">
          Available for tour documentation, festival coverage, editorial assignments, and artist portraits.
        </p>
      </header>

      <!-- Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <!-- Left: Contact Card -->
        <div>
          <div class="p-8 lg:p-10 border border-white/10 rounded-sm bg-white/[0.02]">
            <h2 class="label-text mb-6">Get in Touch</h2>
            
            <!-- Email -->
            <div class="mb-8">
              <p class="text-sm text-brand-muted mb-2">Email</p>
              <a 
                :href="`mailto:${siteData.email}`"
                class="text-xl lg:text-2xl text-white hover:text-purple-400 transition-colors"
              >
                {{ siteData.email }}
              </a>
            </div>

            <!-- Instagram -->
            <div class="mb-10">
              <p class="text-sm text-brand-muted mb-2">Instagram</p>
              <a 
                :href="siteData.instagramUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="text-lg text-white hover:text-purple-400 transition-colors inline-flex items-center gap-2"
              >
                @rocksnaps
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>

            <!-- Primary CTA -->
            <a 
              :href="`mailto:${siteData.email}?subject=Photography%20Inquiry`"
              class="inline-block w-full text-center px-8 py-4 text-[11px] font-sans font-semibold tracking-[0.2em] 
                     bg-white text-brand-black border border-white
                     hover:bg-transparent hover:text-white transition-all duration-300"
            >
              SEND AN EMAIL
            </a>
          </div>

          <!-- Location -->
          <div class="mt-8 p-6 border border-white/10 rounded-sm bg-white/[0.02]">
            <p class="text-sm text-brand-muted mb-1">Based in</p>
            <p class="text-white">Nashville, TN</p>
            <p class="text-sm text-brand-light mt-2">Available worldwide</p>
          </div>
        </div>

        <!-- Right: What to Include -->
        <div>
          <h2 class="label-text mb-6">What to Include</h2>
          <p class="text-brand-light mb-8">
            To help provide an accurate quote and availability, please include as much of the following as possible:
          </p>

          <ul class="space-y-4">
            <li class="flex items-start gap-4">
              <span class="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-xs text-brand-light shrink-0 mt-0.5">1</span>
              <div>
                <p class="text-white font-medium">Event Details</p>
                <p class="text-sm text-brand-light mt-1">Type of event (tour, festival, editorial, portraits)</p>
              </div>
            </li>
            <li class="flex items-start gap-4">
              <span class="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-xs text-brand-light shrink-0 mt-0.5">2</span>
              <div>
                <p class="text-white font-medium">Dates & Location</p>
                <p class="text-sm text-brand-light mt-1">When and where the shoot will take place</p>
              </div>
            </li>
            <li class="flex items-start gap-4">
              <span class="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-xs text-brand-light shrink-0 mt-0.5">3</span>
              <div>
                <p class="text-white font-medium">Venue</p>
                <p class="text-sm text-brand-light mt-1">Venue name and capacity if applicable</p>
              </div>
            </li>
            <li class="flex items-start gap-4">
              <span class="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-xs text-brand-light shrink-0 mt-0.5">4</span>
              <div>
                <p class="text-white font-medium">Budget Range</p>
                <p class="text-sm text-brand-light mt-1">Helps tailor the proposal to your needs</p>
              </div>
            </li>
            <li class="flex items-start gap-4">
              <span class="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-xs text-brand-light shrink-0 mt-0.5">5</span>
              <div>
                <p class="text-white font-medium">Deliverables</p>
                <p class="text-sm text-brand-light mt-1">Number of final images, turnaround time, usage rights needed</p>
              </div>
            </li>
          </ul>

          <!-- Optional Contact Form UI -->
          <div class="mt-12 p-8 border border-white/10 rounded-sm bg-white/[0.02]">
            <h3 class="label-text mb-6">Quick Message</h3>
            <form @submit.prevent class="space-y-4">
              <div>
                <label for="name" class="block text-sm text-brand-light mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white 
                         placeholder-brand-muted focus:border-white/30 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label for="email" class="block text-sm text-brand-light mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white 
                         placeholder-brand-muted focus:border-white/30 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label for="message" class="block text-sm text-brand-light mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4"
                  class="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white 
                         placeholder-brand-muted focus:border-white/30 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <p class="text-xs text-brand-muted">
                Form is for display only. Please use the email button above to get in touch.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import siteData from '~/content/data/site.json'

useHead({
  title: 'Contact | RockSnaps',
  meta: [
    { name: 'description', content: 'Get in touch with Pat Rogers for concert photography, tour documentation, festival coverage, and artist portraits. Based in Nashville, TN, available worldwide.' },
    { property: 'og:title', content: 'Contact | RockSnaps' },
    { property: 'og:description', content: 'Book Pat Rogers for your next concert photography project.' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>
