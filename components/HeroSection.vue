<template>
  <section class="relative min-h-screen flex items-end pb-16 lg:pb-24 pt-20 overflow-hidden">
    <!-- Background Swiper -->
    <div class="absolute inset-0">
      <Swiper
        :modules="[EffectFade, Autoplay, Pagination]"
        :effect="'fade'"
        :fade-effect="{ crossFade: true }"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :pagination="{ clickable: true, el: '.hero-pagination' }"
        :loop="true"
        :speed="1500"
        class="h-full w-full"
        @slideChange="onSlideChange"
      >
        <SwiperSlide v-for="project in projects" :key="project.slug">
          <div class="slide-bg">
            <NuxtImg 
              :src="project.thumbnail" 
              :alt="project.title"
              class="slide-image"
              loading="eager"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      
      <!-- Overlay gradients -->
      <div class="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/60 to-transparent z-10" />
      <div class="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent z-10" />
    </div>

    <!-- Content -->
    <div class="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 w-full">
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-20">
        <!-- Left: Name & Tagline -->
        <div class="flex-1">
          <h1 class="font-serif text-display-xl text-white drop-shadow-2xl">
            <span class="block">{{ firstName }}</span>
            <span class="block text-white/80">{{ lastName }}</span>
          </h1>
          <p class="mt-6 lg:mt-8 text-base lg:text-lg text-white/80 max-w-md leading-relaxed drop-shadow-lg">
            {{ tagline }}
          </p>
          
          <!-- Current band indicator -->
          <div class="mt-8 flex items-center gap-4">
            <span class="text-[10px] font-semibold tracking-[0.2em] text-white/50 uppercase">Now Showing</span>
            <span class="text-sm font-medium text-white">{{ currentBand }}</span>
          </div>
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
          
          <!-- Pagination -->
          <div class="hero-pagination mt-6 flex justify-center lg:justify-start" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectFade, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  tagline: {
    type: String,
    required: true
  },
  projects: {
    type: Array,
    default: () => []
  }
})

const nameParts = computed(() => props.name.split(' '))
const firstName = computed(() => nameParts.value[0] || '')
const lastName = computed(() => nameParts.value.slice(1).join(' ') || '')

const currentIndex = ref(0)
const currentBand = computed(() => props.projects[currentIndex.value]?.title || '')

const onSlideChange = (swiper) => {
  currentIndex.value = swiper.realIndex
}
</script>

<style scoped>
.slide-bg {
  width: 100%;
  height: 100%;
  position: relative;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transform: scale(1.05);
  animation: slowZoom 10s ease-out forwards;
}

@keyframes slowZoom {
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1.0);
  }
}

.cta-button {
  @apply px-8 py-3 text-[11px] font-sans font-semibold tracking-[0.2em] 
         text-center transition-all duration-300 border backdrop-blur-sm;
}

.cta-primary {
  @apply bg-white text-brand-black border-white
         hover:bg-transparent hover:text-white;
}

.cta-secondary {
  @apply bg-white/10 text-white border-white/30
         hover:border-white hover:bg-white/20;
}

/* Pagination styling */
:deep(.hero-pagination .swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  background: rgba(255,255,255,0.4);
  opacity: 1;
  margin: 0 4px;
  transition: all 0.3s ease;
}

:deep(.hero-pagination .swiper-pagination-bullet-active) {
  background: white;
  width: 24px;
  border-radius: 4px;
}
</style>
