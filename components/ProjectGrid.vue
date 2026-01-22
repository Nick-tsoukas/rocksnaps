<template>
  <div class="project-grid">
    <!-- Row 1: Medium wide + Tall -->
    <div v-if="projects[0]" class="col-span-12 md:col-span-7">
      <ProjectCard :project="projects[0]" variant="wide" />
    </div>
    <div v-if="projects[1]" class="col-span-12 md:col-span-5">
      <ProjectCard :project="projects[1]" variant="tall" />
    </div>

    <!-- Row 2: Two tall cards -->
    <div v-if="projects[2]" class="col-span-6 md:col-span-5">
      <ProjectCard :project="projects[2]" variant="tall" />
    </div>
    <div v-if="projects[3]" class="col-span-6 md:col-span-7">
      <ProjectCard :project="projects[3]" variant="tall" />
    </div>

    <!-- Row 3: Very wide + Medium -->
    <div v-if="projects[4]" class="col-span-12 md:col-span-8">
      <ProjectCard :project="projects[4]" variant="wide" />
    </div>
    <div v-if="projects[5]" class="col-span-12 md:col-span-4">
      <ProjectCard :project="projects[5]" variant="square" />
    </div>

    <!-- Row 4: Three cards -->
    <div v-if="projects[6]" class="col-span-12 md:col-span-4">
      <ProjectCard :project="projects[6]" variant="square" />
    </div>
    <div v-if="projects[7]" class="col-span-12 md:col-span-4">
      <ProjectCard :project="projects[7]" variant="square" />
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
  @apply grid grid-cols-12 gap-4 md:gap-6;
}
</style>
