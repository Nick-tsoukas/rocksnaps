<template>
  <section class="relative min-h-[70vh] lg:min-h-[80vh] flex items-end pb-16 lg:pb-24 pt-20">
    <!-- Background gradient -->
    <div class="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/10" />
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
      <!-- Bottom fade to blend with next section -->
      <div class="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
    </div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 w-full">
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-20">
        <!-- Left: Name & Tagline -->
        <div class="flex-1">
          <h1 class="font-serif text-display-xl text-white">
            <span class="block">{{ firstName }}</span>
            <span class="block text-brand-light/80">{{ lastName }}</span>
          </h1>
          <p class="mt-6 lg:mt-8 text-base lg:text-lg text-brand-light max-w-md leading-relaxed">
            {{ tagline }}
          </p>
        </div>

        <!-- Right: CTAs -->
        <div class="flex flex-col sm:flex-row lg:flex-col gap-4 lg:pb-4">
          <NuxtLink 
            to="/work" 
            class="cta-button cta-primary"
          >
            VIEW WORK
          </NuxtLink>
          <NuxtLink 
            to="/contact" 
            class="cta-button cta-secondary"
          >
            BOOK A SHOOT
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  tagline: {
    type: String,
    required: true
  }
})

const nameParts = computed(() => props.name.split(' '))
const firstName = computed(() => nameParts.value[0] || '')
const lastName = computed(() => nameParts.value.slice(1).join(' ') || '')
</script>

<style scoped>
.cta-button {
  @apply px-8 py-3 text-[11px] font-sans font-semibold tracking-[0.2em] 
         text-center transition-all duration-300 border;
}

.cta-primary {
  @apply bg-white text-brand-black border-white
         hover:bg-transparent hover:text-white;
}

.cta-secondary {
  @apply bg-transparent text-white border-white/30
         hover:border-white hover:bg-white/5;
}
</style>
