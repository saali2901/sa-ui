<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { tv } from "tailwind-variants";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

defineOptions({ name: "SaCarousel" });

interface Props {
  /** Total number of slides (driven by slot content) */
  modelValue?: number;
  /** Enable automatic slide advancement */
  autoplay?: boolean;
  /** Autoplay interval in milliseconds */
  interval?: number;
  /** Loop back to start after last slide */
  loop?: boolean;
  /** Show dot indicators */
  showIndicators?: boolean;
  /** Show prev/next arrow buttons */
  showArrows?: boolean;
  /** Pause autoplay on hover */
  pauseOnHover?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  autoplay: false,
  interval: 4000,
  loop: true,
  showIndicators: true,
  showArrows: true,
  pauseOnHover: true,
});

const emit = defineEmits<{
  "update:modelValue": [index: number];
}>();

const slideCount = ref(0);
const currentIndex = ref(props.modelValue);
const isHovered = ref(false);
const trackRef = ref<HTMLElement | null>(null);

// Touch / swipe state
const touchStartX = ref(0);
const touchDeltaX = ref(0);
const isSwiping = ref(false);

watch(
  () => props.modelValue,
  (val) => {
    currentIndex.value = val;
  },
);

// Count slot children on mount
const countSlides = () => {
  if (trackRef.value) {
    slideCount.value = trackRef.value.children.length;
  }
};

onMounted(() => {
  countSlides();
});

const canGoPrev = computed(() => props.loop || currentIndex.value > 0);
const canGoNext = computed(
  () => props.loop || currentIndex.value < slideCount.value - 1,
);

const goTo = (index: number) => {
  if (slideCount.value === 0) return;

  let target = index;
  if (props.loop) {
    target = ((index % slideCount.value) + slideCount.value) % slideCount.value;
  } else {
    target = Math.max(0, Math.min(index, slideCount.value - 1));
  }

  currentIndex.value = target;
  emit("update:modelValue", target);
};

const prev = () => goTo(currentIndex.value - 1);
const next = () => goTo(currentIndex.value + 1);

// Autoplay
let autoplayTimer: ReturnType<typeof setInterval> | null = null;

const startAutoplay = () => {
  if (!props.autoplay) return;
  stopAutoplay();
  autoplayTimer = setInterval(() => {
    if (!isHovered.value || !props.pauseOnHover) {
      next();
    }
  }, props.interval);
};

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
};

watch(
  () => props.autoplay,
  (val) => {
    if (val) startAutoplay();
    else stopAutoplay();
  },
);

onMounted(() => {
  if (props.autoplay) startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});

// Keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
  switch (event.key) {
    case "ArrowLeft":
      event.preventDefault();
      prev();
      break;
    case "ArrowRight":
      event.preventDefault();
      next();
      break;
  }
};

// Touch handlers
const handleTouchStart = (event: TouchEvent) => {
  touchStartX.value = event.touches[0].clientX;
  touchDeltaX.value = 0;
  isSwiping.value = true;
};

const handleTouchMove = (event: TouchEvent) => {
  if (!isSwiping.value) return;
  touchDeltaX.value = event.touches[0].clientX - touchStartX.value;
};

const handleTouchEnd = () => {
  if (!isSwiping.value) return;
  isSwiping.value = false;

  const threshold = 50;
  if (touchDeltaX.value > threshold) {
    prev();
  } else if (touchDeltaX.value < -threshold) {
    next();
  }
  touchDeltaX.value = 0;
};

// Track transform
const trackStyle = computed(() => ({
  transform: `translateX(-${currentIndex.value * 100}%)`,
}));

// Variants
const arrowVariants = tv({
  base: "absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-md text-heading bg-surface border border-border-strong hover:bg-surface-hover cursor-pointer duration-200",
  variants: {
    position: {
      left: "left-3",
      right: "right-3",
    },
    disabled: {
      true: "opacity-30 pointer-events-none",
    },
  },
});

const indicatorVariants = tv({
  base: "w-2 h-2 cursor-pointer duration-200",
  variants: {
    active: {
      true: "bg-primary scale-125",
      false: "bg-border-strong hover:bg-body",
    },
  },
});
</script>

<template>
  <div
    class="relative w-full overflow-hidden"
    role="region"
    aria-roledescription="carousel"
    tabindex="0"
    @keydown="handleKeydown"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @touchstart.passive="handleTouchStart"
    @touchmove.passive="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <!-- Slide track -->
    <div
      ref="trackRef"
      class="flex transition-transform duration-500 ease-out *:w-full *:shrink-0"
      :style="trackStyle"
      aria-live="off"
    >
      <slot />
    </div>

    <!-- Previous arrow -->
    <button
      v-if="showArrows && slideCount > 1"
      :class="arrowVariants({ position: 'left', disabled: !canGoPrev })"
      :disabled="!canGoPrev"
      aria-label="Vorheriges Slide"
      @click="prev"
    >
      <ChevronLeft :size="18" />
    </button>

    <!-- Next arrow -->
    <button
      v-if="showArrows && slideCount > 1"
      :class="arrowVariants({ position: 'right', disabled: !canGoNext })"
      :disabled="!canGoNext"
      aria-label="Nächstes Slide"
      @click="next"
    >
      <ChevronRight :size="18" />
    </button>

    <!-- Dot indicators -->
    <div
      v-if="showIndicators && slideCount > 1"
      class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2"
      role="tablist"
    >
      <button
        v-for="i in slideCount"
        :key="i - 1"
        :class="indicatorVariants({ active: currentIndex === i - 1 })"
        role="tab"
        :aria-selected="currentIndex === i - 1"
        :aria-label="`Slide ${i}`"
        @click="goTo(i - 1)"
      />
    </div>
  </div>
</template>
