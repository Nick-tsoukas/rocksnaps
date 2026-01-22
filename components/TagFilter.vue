<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="tag in tags"
      :key="tag"
      @click="$emit('select', tag)"
      :class="[
        'tag-chip',
        activeTag === tag ? 'tag-chip-active' : 'tag-chip-inactive'
      ]"
      :aria-pressed="activeTag === tag"
    >
      {{ tag }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  tags: {
    type: Array,
    required: true
  },
  activeTag: {
    type: String,
    default: 'All'
  }
})

defineEmits(['select'])
</script>

<style scoped>
.tag-chip {
  @apply px-4 py-2 text-[11px] font-sans font-medium tracking-[0.1em] uppercase
         border rounded-full transition-all duration-200;
}

.tag-chip-active {
  @apply bg-white text-brand-black border-white;
}

.tag-chip-inactive {
  @apply bg-transparent text-brand-light border-white/20
         hover:border-white/40 hover:text-white;
}
</style>
