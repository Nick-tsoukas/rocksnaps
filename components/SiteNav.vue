<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-brand-black/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Brand -->
        <NuxtLink 
          to="/" 
          class="text-[11px] font-sans font-semibold tracking-[0.25em] text-white hover:text-brand-light transition-colors"
        >
          ROCKSNAPS
        </NuxtLink>

        <!-- Center Nav -->
        <div class="hidden md:flex items-center gap-10">
          <NuxtLink 
            to="/work" 
            class="nav-link"
            :class="{ 'text-white': $route.path.startsWith('/work') }"
          >
            WORK
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="nav-link"
            :class="{ 'text-white': $route.path === '/about' }"
          >
            ABOUT
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="nav-link"
            :class="{ 'text-white': $route.path === '/contact' }"
          >
            CONTACT
          </NuxtLink>
        </div>

        <!-- Right Side -->
        <div class="flex items-center gap-6">
          <a 
            :href="siteData.instagramUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="nav-link hidden sm:block"
            aria-label="Instagram"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a 
            :href="`mailto:${siteData.email}`"
            class="nav-link hidden sm:block"
            aria-label="Email"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
          <!-- Mobile Menu Button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 -mr-2 text-brand-light hover:text-white transition-colors"
            :aria-expanded="mobileMenuOpen"
            aria-label="Toggle menu"
          >
            <svg v-if="!mobileMenuOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div 
        v-if="mobileMenuOpen" 
        class="md:hidden bg-brand-black/95 backdrop-blur-md border-b border-white/5"
      >
        <div class="px-6 py-6 space-y-4">
          <NuxtLink 
            to="/work" 
            class="block nav-link text-base"
            @click="mobileMenuOpen = false"
          >
            WORK
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="block nav-link text-base"
            @click="mobileMenuOpen = false"
          >
            ABOUT
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="block nav-link text-base"
            @click="mobileMenuOpen = false"
          >
            CONTACT
          </NuxtLink>
          <div class="flex items-center gap-6 pt-4 border-t border-white/10">
            <a 
              :href="siteData.instagramUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="nav-link"
              aria-label="Instagram"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              :href="`mailto:${siteData.email}`"
              class="nav-link"
              aria-label="Email"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import siteData from '~/content/data/site.json'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>

<style scoped>
.nav-link {
  @apply text-[11px] font-sans font-medium tracking-[0.15em] text-brand-light 
         hover:text-white transition-colors duration-200;
}
</style>
