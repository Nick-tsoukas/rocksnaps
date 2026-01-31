<template>
  <div class="project-grid">
    <!-- Row 1: Hero feature + two stacked -->
    <div v-if="projects[0]" class="col-span-12 md:col-span-7 md:row-span-2">
      <ProjectCard :project="projects[0]" variant="feature" class="h-full" />
    </div>
    <div v-if="projects[1]" class="col-span-6 md:col-span-5">
      <ProjectCard :project="projects[1]" variant="square" />
    </div>
    <div v-if="projects[2]" class="col-span-6 md:col-span-5">
      <ProjectCard :project="projects[2]" variant="square" />
    </div>

    <!-- Row 2: Three equal columns -->
    <div v-if="projects[3]" class="col-span-6 md:col-span-4">
      <ProjectCard :project="projects[3]" variant="tall" />
    </div>
    <div v-if="projects[4]" class="col-span-6 md:col-span-4">
      <ProjectCard :project="projects[4]" variant="tall" />
    </div>
    <div v-if="projects[5]" class="col-span-12 md:col-span-4">
      <ProjectCard :project="projects[5]" variant="tall" />
    </div>

    <!-- Row 3: Wide feature + portrait -->
    <div v-if="projects[6]" class="col-span-12 md:col-span-8">
      <ProjectCard :project="projects[6]" variant="wide" />
    </div>
    <div v-if="projects[7]" class="col-span-12 md:col-span-4">
      <ProjectCard :project="projects[7]" variant="portrait" />
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
.project-grid {
  @apply grid grid-cols-12 gap-3 md:gap-4;
}

.project-grid > div:first-child :deep(.project-card > div:first-child) {
  @apply aspect-[4/5] md:aspect-auto md:h-full;
}

.project-grid > div:first-child :deep(img) {
  @apply h-full;
}
</style>
