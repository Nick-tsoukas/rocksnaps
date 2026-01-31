<template>
  <div class="masonry-grid">
    <!-- Left column - dramatic tall shots -->
    <div class="masonry-col">
      <div v-if="projects[0]" class="masonry-item masonry-hero">
        <ProjectCard :project="projects[0]" variant="hero" />
      </div>
      <div v-if="projects[3]" class="masonry-item">
        <ProjectCard :project="projects[3]" variant="wide" />
      </div>
      <div v-if="projects[6]" class="masonry-item">
        <ProjectCard :project="projects[6]" variant="tall" />
      </div>
    </div>

    <!-- Right column - varied rhythm -->
    <div class="masonry-col">
      <div v-if="projects[1]" class="masonry-item">
        <ProjectCard :project="projects[1]" variant="square" />
      </div>
      <div v-if="projects[2]" class="masonry-item">
        <ProjectCard :project="projects[2]" variant="tall" />
      </div>
      <div v-if="projects[4]" class="masonry-item">
        <ProjectCard :project="projects[4]" variant="wide" />
      </div>
      <div v-if="projects[5]" class="masonry-item">
        <ProjectCard :project="projects[5]" variant="square" />
      </div>
      <div v-if="projects[7]" class="masonry-item">
        <ProjectCard :project="projects[7]" variant="tall" />
      </div>
    </div>
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
.masonry-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
}

@media (min-width: 768px) {
  .masonry-grid {
    grid-template-columns: 1.2fr 1fr;
    gap: 0.75rem;
  }
}

.masonry-col {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

@media (min-width: 768px) {
  .masonry-col {
    gap: 0.75rem;
  }
}

.masonry-item {
  position: relative;
}

.masonry-hero :deep(.project-card > div:first-child) {
  aspect-ratio: 3 / 4;
}

@media (min-width: 768px) {
  .masonry-hero :deep(.project-card > div:first-child) {
    aspect-ratio: 4 / 5;
  }
}
</style>
