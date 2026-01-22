import projectsData from '~/content/data/projects.json'

export const useProjects = () => {
  const projects = ref(projectsData)

  const tags = computed(() => {
    const uniqueTags = [...new Set(projects.value.map(p => p.tag))]
    return ['All', ...uniqueTags]
  })

  const featured = computed(() => {
    return projects.value.slice(0, 7)
  })

  const filterByTag = (tag) => {
    if (tag === 'All') {
      return projects.value
    }
    return projects.value.filter(p => p.tag === tag)
  }

  const findBySlug = (slug) => {
    return projects.value.find(p => p.slug === slug)
  }

  const getAdjacentProjects = (slug) => {
    const index = projects.value.findIndex(p => p.slug === slug)
    if (index === -1) return { prev: null, next: null }
    
    const prev = index > 0 ? projects.value[index - 1] : projects.value[projects.value.length - 1]
    const next = index < projects.value.length - 1 ? projects.value[index + 1] : projects.value[0]
    
    return { prev, next }
  }

  return {
    projects,
    tags,
    featured,
    filterByTag,
    findBySlug,
    getAdjacentProjects
  }
}
