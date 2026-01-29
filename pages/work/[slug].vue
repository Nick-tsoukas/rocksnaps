<template>
  <main class="pt-24 lg:pt-32 pb-16 lg:pb-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Back Link -->
      <NuxtLink to="/work" class="link-arrow mb-8 inline-block rotate-180-arrow">
        Back to Work
      </NuxtLink>

      <!-- Project Header -->
      <header class="mb-12 lg:mb-16">
        <div class="flex flex-wrap items-center gap-3 mb-4">
          <span class="label-text">{{ project?.tag }}</span>
          <span class="text-brand-muted text-xs">{{ project?.year }}</span>
        </div>
        <h1 class="font-serif text-display-lg text-white">{{ project?.title }}</h1>
        <p class="mt-4 text-lg text-brand-light max-w-2xl">
          {{ project?.description }}
        </p>
      </header>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        <!-- Real images when available -->
        <template v-if="project?.images?.length">
          <div v-for="(image, index) in project.images" :key="index" class="gallery-item">
            <NuxtImg 
              :src="image"
              :alt="`${project.title} gallery image ${index + 1}`"
              width="800"
              height="600"
              sizes="sm:50vw md:33vw lg:25vw"
              class="w-full aspect-[4/3] object-cover rounded-sm"
              loading="lazy"
            />
          </div>
        </template>
        <!-- Placeholder fallback -->
        <template v-else>
          <div v-for="i in 12" :key="i" class="gallery-item">
            <GradientPlaceholder 
              :variant="getPlaceholderVariant(i)" 
              :alt="`Gallery image ${i} placeholder`"
            />
          </div>
        </template>
      </div>

      <!-- Prev/Next Navigation -->
      <nav class="mt-16 lg:mt-24 pt-8 border-t border-white/10">
        <div class="flex items-center justify-between">
          <NuxtLink 
            v-if="adjacentProjects.prev"
            :to="`/work/${adjacentProjects.prev.slug}`"
            class="group flex items-center gap-3"
          >
            <svg class="w-5 h-5 text-brand-muted group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7"/>
            </svg>
            <div>
              <span class="label-text block">Previous</span>
              <span class="text-sm text-white group-hover:text-brand-light transition-colors">
                {{ adjacentProjects.prev.title }}
              </span>
            </div>
          </NuxtLink>
          <div v-else></div>

          <NuxtLink 
            v-if="adjacentProjects.next"
            :to="`/work/${adjacentProjects.next.slug}`"
            class="group flex items-center gap-3 text-right"
          >
            <div>
              <span class="label-text block">Next</span>
              <span class="text-sm text-white group-hover:text-brand-light transition-colors">
                {{ adjacentProjects.next.title }}
              </span>
            </div>
            <svg class="w-5 h-5 text-brand-muted group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"/>
            </svg>
          </NuxtLink>
          <div v-else></div>
        </div>
      </nav>
    </div>
  </main>
</template>

<script setup>
const route = useRoute()
const { findBySlug, getAdjacentProjects } = useProjects()

const project = computed(() => findBySlug(route.params.slug))
const adjacentProjects = computed(() => getAdjacentProjects(route.params.slug))

const variants = ['square', 'tall', 'wide', 'portrait', 'feature']
const getPlaceholderVariant = (index) => {
  return variants[index % variants.length]
}

// 404 if project not found
if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project not found'
  })
}

useHead({
  title: computed(() => `${project.value?.title || 'Project'} | RockSnaps`),
  meta: [
    { name: 'description', content: computed(() => project.value?.description || '') },
    { property: 'og:title', content: computed(() => `${project.value?.title} | RockSnaps`) },
    { property: 'og:description', content: computed(() => project.value?.description || '') },
    { property: 'og:type', content: 'website' }
  ]
})
</script>

<style scoped>
.rotate-180-arrow::after {
  content: '←';
  @apply ml-1;
}

.rotate-180-arrow::before {
  content: none;
}

.gallery-item:nth-child(3n+1) {
  @apply md:col-span-2 lg:col-span-1;
}

.gallery-item:nth-child(5n) {
  @apply lg:col-span-2;
}
</style>
