<script setup lang="ts">
import { ref } from "vue";
import { tv } from "tailwind-variants";

defineOptions({ name: "SaTooltip" });

interface Props {
  text: string;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
}

const props = withDefaults(defineProps<Props>(), {
  position: "top",
  delay: 200,
});

const isVisible = ref(false);
let showTimeout: ReturnType<typeof setTimeout> | null = null;
let hideTimeout: ReturnType<typeof setTimeout> | null = null;

const show = () => {
  if (hideTimeout) {
    clearTimeout(hideTimeout);
    hideTimeout = null;
  }
  showTimeout = setTimeout(() => {
    isVisible.value = true;
  }, props.delay);
};

const hide = () => {
  if (showTimeout) {
    clearTimeout(showTimeout);
    showTimeout = null;
  }
  hideTimeout = setTimeout(() => {
    isVisible.value = false;
  }, 100);
};

const tooltipVariants = tv({
  base: "absolute z-50 px-2.5 py-1.5 text-xs font-medium text-tooltip-text bg-tooltip rounded-md whitespace-nowrap pointer-events-none",
  variants: {
    position: {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
      left: "right-full top-1/2 -translate-y-1/2 mr-2",
      right: "left-full top-1/2 -translate-y-1/2 ml-2",
    },
  },
});

const arrowVariants = tv({
  base: "absolute w-2 h-2 bg-tooltip rotate-45",
  variants: {
    position: {
      top: "bottom-[-4px] left-1/2 -translate-x-1/2",
      bottom: "top-[-4px] left-1/2 -translate-x-1/2",
      left: "right-[-4px] top-1/2 -translate-y-1/2",
      right: "left-[-4px] top-1/2 -translate-y-1/2",
    },
  },
});
</script>

<template>
  <div
    class="relative inline-flex"
    @mouseenter="show"
    @mouseleave="hide"
    @focusin="show"
    @focusout="hide"
  >
    <!-- Trigger -->
    <slot />

    <!-- Tooltip -->
    <Transition
      enter-active-class="transition-opacity duration-150 ease-out"
      leave-active-class="transition-opacity duration-150 ease-in"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isVisible && text"
        :class="tooltipVariants({ position })"
        role="tooltip"
      >
        {{ text }}
        <span :class="arrowVariants({ position })" />
      </div>
    </Transition>
  </div>
</template>
