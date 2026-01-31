<template>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
    <div 
      v-for="(image, index) in images" 
      :key="index" 
      class="gallery-item cursor-pointer"
      @click="openLightbox(index)"
    >
      <NuxtImg 
        :src="image"
        :alt="`${title} gallery image ${index + 1}`"
        sizes="sm:50vw md:33vw lg:25vw"
        class="w-full object-contain rounded-sm hover:opacity-90 transition-opacity bg-brand-black/50"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup>
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const props = defineProps({
  images: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    default: 'Gallery'
  }
})

let lightbox = null

const getImageDimensions = (src) => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight })
    img.onerror = () => resolve({ width: 1920, height: 1280 })
    img.src = src
  })
}

const openLightbox = async (index) => {
  if (!lightbox) {
    const dataSource = await Promise.all(
      props.images.map(async (src) => {
        const dims = await getImageDimensions(src)
        return {
          src: src,
          width: dims.width,
          height: dims.height,
          alt: `${props.title} photo`
        }
      })
    )
    
    lightbox = new PhotoSwipeLightbox({
      dataSource,
      showHideAnimationType: 'zoom',
      pswpModule: () => import('photoswipe'),
      bgOpacity: 0.95,
      padding: { top: 20, bottom: 20, left: 20, right: 20 },
      wheelToZoom: true,
      arrowPrev: true,
      arrowNext: true,
      zoom: true,
      close: true,
      counter: true,
      imageClickAction: 'zoom',
      tapAction: 'zoom'
    })
    
    lightbox.init()
  }
  
  lightbox.loadAndOpen(index)
}

onUnmounted(() => {
  if (lightbox) {
    lightbox.destroy()
    lightbox = null
  }
})
</script>

<style>
.pswp {
  --pswp-bg: #0a0a0a;
}

.pswp__button {
  color: #fff;
}

.pswp__counter {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  letter-spacing: 0.05em;
}

.gallery-item:nth-child(3n+1) {
  @apply md:col-span-2 lg:col-span-1;
}

.gallery-item:nth-child(5n) {
  @apply lg:col-span-2;
}
</style>
