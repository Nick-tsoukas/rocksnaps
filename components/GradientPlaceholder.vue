<template>
  <div 
    :class="['gradient-placeholder', `variant-${variant}`]"
    :style="computedStyle"
    role="img"
    :aria-label="alt || 'Placeholder image'"
  >
    <div class="gradient-noise" aria-hidden="true"></div>
    <div class="gradient-shimmer" aria-hidden="true"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'square',
    validator: (v) => ['feature', 'tall', 'wide', 'portrait', 'square'].includes(v)
  },
  alt: {
    type: String,
    default: ''
  },
  aspectRatio: {
    type: String,
    default: null
  }
})

const gradients = {
  feature: {
    primary: 'radial-gradient(ellipse 120% 80% at 30% 40%, rgba(147, 51, 234, 0.4) 0%, transparent 60%)',
    secondary: 'radial-gradient(ellipse 100% 60% at 80% 70%, rgba(59, 130, 246, 0.35) 0%, transparent 50%)',
    accent: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, transparent 40%)',
    vignette: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 30%, rgba(0,0,0,0.4) 100%)'
  },
  tall: {
    primary: 'radial-gradient(ellipse 80% 120% at 50% 30%, rgba(99, 102, 241, 0.45) 0%, transparent 55%)',
    secondary: 'radial-gradient(ellipse 60% 80% at 40% 80%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
    accent: 'linear-gradient(180deg, rgba(236, 72, 153, 0.15) 0%, transparent 30%)',
    vignette: 'radial-gradient(ellipse 90% 100% at 50% 50%, transparent 20%, rgba(0,0,0,0.5) 100%)'
  },
  wide: {
    primary: 'radial-gradient(ellipse 150% 80% at 20% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)',
    secondary: 'radial-gradient(ellipse 100% 60% at 90% 40%, rgba(147, 51, 234, 0.35) 0%, transparent 45%)',
    accent: 'linear-gradient(90deg, rgba(251, 146, 60, 0.15) 0%, transparent 30%)',
    vignette: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 35%, rgba(0,0,0,0.45) 100%)'
  },
  portrait: {
    primary: 'radial-gradient(ellipse 70% 90% at 50% 40%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)',
    secondary: 'radial-gradient(ellipse 50% 60% at 50% 70%, rgba(236, 72, 153, 0.25) 0%, transparent 45%)',
    accent: 'linear-gradient(160deg, rgba(251, 191, 36, 0.1) 0%, transparent 25%)',
    vignette: 'radial-gradient(ellipse 80% 90% at 50% 50%, transparent 25%, rgba(0,0,0,0.55) 100%)'
  },
  square: {
    primary: 'radial-gradient(ellipse 90% 90% at 40% 40%, rgba(124, 58, 237, 0.4) 0%, transparent 50%)',
    secondary: 'radial-gradient(ellipse 70% 70% at 70% 60%, rgba(59, 130, 246, 0.3) 0%, transparent 45%)',
    accent: 'linear-gradient(145deg, rgba(236, 72, 153, 0.15) 0%, transparent 35%)',
    vignette: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 30%, rgba(0,0,0,0.45) 100%)'
  }
}

const computedStyle = computed(() => {
  const g = gradients[props.variant]
  const style = {
    background: `${g.vignette}, ${g.accent}, ${g.secondary}, ${g.primary}, #0d0d0d`
  }
  if (props.aspectRatio) {
    style.aspectRatio = props.aspectRatio
  }
  return style
})
</script>

<style scoped>
.gradient-placeholder {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  overflow: hidden;
  transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.gradient-placeholder:hover {
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.gradient-noise {
  position: absolute;
  inset: 0;
  opacity: 0.08;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 150px 150px;
  pointer-events: none;
}

.gradient-shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    110deg,
    transparent 20%,
    rgba(255, 255, 255, 0.03) 40%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.03) 60%,
    transparent 80%
  );
  background-size: 200% 100%;
  animation: shimmer 8s ease-in-out infinite;
  pointer-events: none;
}

@keyframes shimmer {
  0%, 100% {
    background-position: 200% 0;
  }
  50% {
    background-position: -200% 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .gradient-shimmer {
    animation: none;
    background: transparent;
  }
  .gradient-placeholder:hover {
    transform: none;
  }
}

/* Aspect ratio defaults per variant */
.variant-feature {
  aspect-ratio: 16 / 9;
}

.variant-tall {
  aspect-ratio: 3 / 4;
}

.variant-wide {
  aspect-ratio: 2 / 1;
}

.variant-portrait {
  aspect-ratio: 4 / 5;
}

.variant-square {
  aspect-ratio: 1 / 1;
}
</style>
