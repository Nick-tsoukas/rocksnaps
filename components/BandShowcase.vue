<template>
  <section class="band-showcase" :class="{ 'band-showcase--alt': alternate }">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Band Header -->
      <div class="band-header">
        <NuxtLink :to="`/work/${project.slug}`" class="band-title-link">
          <h2 class="band-title">{{ project.title }}</h2>
        </NuxtLink>
        <p class="band-description">{{ project.description }}</p>
      </div>

      <!-- Main Cover + Grid Layout -->
      <div class="band-content" :class="{ 'band-content--reversed': alternate }">
        <!-- Main Cover Image -->
        <NuxtLink :to="`/work/${project.slug}`" class="band-cover group">
          <div class="band-cover-wrap">
            <NuxtImg 
              :src="project.thumbnail" 
              :alt="project.title"
              class="band-cover-image"
              loading="lazy"
            />
            <div class="band-cover-overlay">
              <span class="view-gallery">View Gallery</span>
            </div>
          </div>
        </NuxtLink>

        <!-- Photo Grid -->
        <div class="band-grid">
          <NuxtLink 
            v-for="(image, index) in gridImages" 
            :key="index"
            :to="`/work/${project.slug}`"
            class="band-grid-item group"
          >
            <NuxtImg 
              :src="image" 
              :alt="`${project.title} photo ${index + 1}`"
              class="band-grid-image"
              loading="lazy"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  alternate: {
    type: Boolean,
    default: false
  }
})

// Get 4 images for the grid (excluding thumbnail)
const gridImages = computed(() => {
  const images = props.project.images || []
  const filtered = images.filter(img => img !== props.project.thumbnail)
  return filtered.slice(0, 4)
})
</script>

<style scoped>
.band-showcase {
  padding: 5rem 0;
  background: transparent;
}

.band-showcase:not(:first-child) {
  border-top: 1px solid rgba(255,255,255,0.05);
}

.band-header {
  margin-bottom: 2rem;
}

.band-title-link {
  display: inline-block;
}

.band-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 400;
  color: white;
  margin: 0;
  transition: color 0.3s ease;
}

.band-title-link:hover .band-title {
  color: rgba(255,255,255,0.7);
}

.band-description {
  font-size: 1rem;
  color: rgba(255,255,255,0.6);
  margin-top: 0.75rem;
  max-width: 600px;
  line-height: 1.6;
}

.band-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .band-content {
    grid-template-columns: 1.5fr 1fr;
    gap: 1.5rem;
  }
}

.band-content--reversed {
  direction: rtl;
}

.band-content--reversed > * {
  direction: ltr;
}

.band-cover {
  display: block;
}

.band-cover-wrap {
  position: relative;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: 4px;
  background: transparent;
}

.band-cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.band-cover:hover .band-cover-image {
  transform: scale(1.05);
}

.band-cover-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 2rem;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.band-cover:hover .band-cover-overlay {
  opacity: 1;
}

.view-gallery {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: white;
  padding: 0.75rem 1.5rem;
  border: 1px solid rgba(255,255,255,0.5);
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;
}

.band-cover:hover .view-gallery {
  background: white;
  color: black;
  border-color: white;
}

.band-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}

@media (min-width: 768px) {
  .band-grid {
    gap: 0.75rem;
  }
}

.band-grid-item {
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 4px;
}

.band-grid-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.band-grid-item:hover .band-grid-image {
  transform: scale(1.08);
}
</style>
