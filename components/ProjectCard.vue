<template>
  <NuxtLink 
    :to="`/work/${project.slug}`"
    class="project-card group block"
  >
    <div class="relative overflow-hidden rounded-sm">
      <NuxtImg 
        v-if="project.thumbnail"
        :src="project.thumbnail"
        :alt="`${project.title} project thumbnail`"
        sizes="sm:100vw md:50vw lg:33vw"
        :class="['w-full object-cover object-top', aspectClass]"
        loading="lazy"
      />
      <GradientPlaceholder 
        v-else
        :variant="variant" 
        :alt="`${project.title} project thumbnail`"
      />
      
      <!-- Overlay on hover -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    
    <!-- Card Info -->
    <div class="mt-4 flex items-end justify-between gap-4">
      <h3 class="text-sm md:text-base font-sans font-medium text-white group-hover:text-brand-light transition-colors">
        {{ project.title }}
      </h3>
      <div class="flex items-center gap-2 shrink-0">
        <span class="label-text">{{ project.tag }}</span>
        <span class="text-brand-muted text-[10px]">{{ project.year }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  variant: {
    type: String,
    default: 'square'
  }
})

const aspectClass = computed(() => {
  const aspects = {
    tall: 'aspect-[3/4]',
    wide: 'aspect-[16/9]',
    square: 'aspect-square',
    feature: 'aspect-[16/9]',
    portrait: 'aspect-[3/4]'
  }
  return aspects[props.variant] || 'aspect-[3/4]'
})
</script>

<style scoped>
.project-card {
  @apply transition-transform duration-300;
}

.project-card:hover {
  @apply -translate-y-1;
}

@media (prefers-reduced-motion: reduce) {
  .project-card:hover {
    transform: none;
  }
}
</style>
