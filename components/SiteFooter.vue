<template>
  <footer class="border-t border-white/5 bg-brand-black">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <!-- Left: Brand -->
        <div>
          <NuxtLink 
            to="/" 
            class="text-[11px] font-sans font-semibold tracking-[0.25em] text-white hover:text-brand-light transition-colors"
          >
            ROCKSNAPS
          </NuxtLink>
          <p class="mt-3 text-sm text-brand-muted max-w-xs">
            {{ siteData.tagline }}
          </p>
        </div>

        <!-- Center: Links -->
        <div class="flex items-center gap-8">
          <NuxtLink to="/work" class="footer-link">Work</NuxtLink>
          <NuxtLink to="/about" class="footer-link">About</NuxtLink>
          <NuxtLink to="/contact" class="footer-link">Contact</NuxtLink>
        </div>

        <!-- Right: Social -->
        <div class="flex items-center gap-5">
          <a 
            :href="siteData.instagramUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-brand-muted hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a 
            :href="`mailto:${siteData.email}`"
            class="text-brand-muted hover:text-white transition-colors"
            aria-label="Email"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Bottom -->
      <div class="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p class="text-xs text-brand-muted">
          © {{ new Date().getFullYear() }} {{ siteData.brand }}. All rights reserved.
        </p>
        <p class="text-xs text-brand-muted">
          {{ siteData.name }} — Concert Photography
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import siteData from '~/content/data/site.json'
</script>

<style scoped>
.footer-link {
  @apply text-sm text-brand-muted hover:text-white transition-colors duration-200;
}
</style>
