<template>
  <div class="project-grid">
    <NuxtLink 
      v-for="project in projects.slice(0, 8)" 
      :key="project.slug"
      :to="`/work/${project.slug}`"
      class="project-item group"
    >
      <div class="project-image-wrap">
        <NuxtImg 
          :src="project.thumbnail" 
          :alt="project.title"
          class="project-image"
          loading="lazy"
        />
      </div>
      <div class="project-info">
        <h3 class="project-title">{{ project.title }}</h3>
        <span class="project-tag">{{ project.tag }}</span>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  projects: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (min-width: 768px) {
  .project-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
}

.project-item {
  display: block;
}

.project-image-wrap {
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border-radius: 4px;
  background: rgba(255,255,255,0.05);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-item:hover .project-image {
  transform: scale(1.05);
}

.project-info {
  margin-top: 0.75rem;
}

.project-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  margin: 0;
  transition: color 0.3s ease;
}

.project-item:hover .project-title {
  color: rgba(255,255,255,0.7);
}

.project-tag {
  display: block;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
  margin-top: 0.25rem;
}
</style>
