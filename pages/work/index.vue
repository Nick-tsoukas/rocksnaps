<template>
  <main class="pt-24 lg:pt-32 pb-16 lg:pb-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Header -->
      <header class="mb-12 lg:mb-16">
        <h1 class="font-serif text-display-lg text-white">Work</h1>
        <p class="mt-4 text-lg text-brand-light max-w-xl">
          A curated selection of concert photography, tour documentation, and artist portraits.
        </p>
      </header>

      <!-- Filters -->
      <div class="mb-10 lg:mb-14">
        <TagFilter 
          :tags="tags" 
          :active-tag="activeTag" 
          @select="handleTagSelect" 
        />
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <ProjectCard 
          v-for="project in filteredProjects" 
          :key="project.slug" 
          :project="project"
          :variant="getVariant(project)"
        />
      </div>

      <!-- Empty State -->
      <div v-if="filteredProjects.length === 0" class="text-center py-20">
        <p class="text-brand-light">No projects found for this filter.</p>
      </div>
    </div>
  </main>
</template>

<script setup>
const { tags, filterByTag } = useProjects()

const activeTag = ref('All')
const filteredProjects = computed(() => filterByTag(activeTag.value))

const handleTagSelect = (tag) => {
  activeTag.value = tag
}

const variants = ['square', 'tall', 'wide', 'portrait']
const getVariant = (project) => {
  const index = filteredProjects.value.indexOf(project)
  return variants[index % variants.length]
}

useHead({
  title: 'Work | RockSnaps',
  meta: [
    { name: 'description', content: 'Browse concert photography, tour documentation, and artist portraits by Pat Rogers.' },
    { property: 'og:title', content: 'Work | RockSnaps' },
    { property: 'og:description', content: 'Concert photography portfolio by Pat Rogers.' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>
