<template>
  <div class="project-grid">
    <!-- Row 1: Three equal tall cards - clean, balanced -->
    <div v-if="projects[0]" class="col-span-6 md:col-span-4">
      <ProjectCard :project="projects[0]" variant="tall" />
    </div>
    <div v-if="projects[1]" class="col-span-6 md:col-span-4">
      <ProjectCard :project="projects[1]" variant="tall" />
    </div>
    <div v-if="projects[2]" class="col-span-12 md:col-span-4">
      <ProjectCard :project="projects[2]" variant="tall" />
    </div>

    <!-- Row 2: Wide cinematic + portrait -->
    <div v-if="projects[3]" class="col-span-12 md:col-span-8">
      <ProjectCard :project="projects[3]" variant="wide" />
    </div>
    <div v-if="projects[4]" class="col-span-12 md:col-span-4">
      <ProjectCard :project="projects[4]" variant="tall" />
    </div>

    <!-- Row 3: Three equal cards -->
    <div v-if="projects[5]" class="col-span-6 md:col-span-4">
      <ProjectCard :project="projects[5]" variant="tall" />
    </div>
    <div v-if="projects[6]" class="col-span-6 md:col-span-4">
      <ProjectCard :project="projects[6]" variant="tall" />
    </div>
    <div v-if="projects[7]" class="col-span-12 md:col-span-4">
      <ProjectCard :project="projects[7]" variant="tall" />
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
  @apply grid grid-cols-12 gap-2 md:gap-3;
}
</style>
