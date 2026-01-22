<template>
  <div class="py-12 border-y border-white/5">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <p class="label-text text-center mb-6">Featured In</p>
      <div class="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12">
        <span 
          v-for="credit in credits" 
          :key="credit"
          class="text-sm md:text-base font-serif text-brand-muted"
        >
          {{ credit }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  credits: {
    type: Array,
    required: true
  }
})
</script>
