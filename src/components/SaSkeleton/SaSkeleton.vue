<script setup lang="ts">
import { tv } from "tailwind-variants";
import { computed } from "vue";

defineOptions({ name: "SaSkeleton" });

interface Props {
  variant?: "text" | "circle" | "rectangular";
  width?: string;
  height?: string;
  lines?: number;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "text",
  width: undefined,
  height: undefined,
  lines: 1,
});

const skeletonVariants = tv({
  base: "animate-pulse bg-surface-hover rounded-md",
  variants: {
    variant: {
      text: "h-4",
      circle: "rounded-full",
      rectangular: "",
    },
  },
});

const customStyle = computed(() => ({
  width: props.width,
  height: props.height,
  ...(props.variant === "circle" && !props.width && !props.height
    ? { width: "3rem", height: "3rem" }
    : {}),
}));
</script>

<template>
  <div v-if="lines > 1" class="flex flex-col gap-2">
    <div
      v-for="i in lines"
      :key="i"
      :class="skeletonVariants({ variant })"
      :style="{
        ...customStyle,
        ...(i === lines ? { width: '75%' } : {}),
      }"
    />
  </div>
  <div v-else :class="skeletonVariants({ variant })" :style="customStyle">
    <slot />
  </div>
</template>
