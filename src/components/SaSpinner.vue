<script setup lang="ts">
import { tv } from "tailwind-variants";
import type { HTMLAttributes } from "vue";

defineOptions({ name: "SaSpinner" });

const spinnerVariants = tv({
  base: "inline-block rounded-full border-2 border-current border-r-transparent animate-spin",
  variants: {
    size: {
      sm: "w-4 h-4",
      md: "w-6 h-6",
      lg: "w-10 h-10",
    },
    color: {
      primary: "text-primary",
      secondary: "text-secondary-text",
      muted: "text-muted",
      white: "text-on-primary",
    },
  },
});

interface Props extends /* @vue-ignore */ HTMLAttributes {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "muted" | "white";
  label?: string;
}

withDefaults(defineProps<Props>(), {
  size: "md",
  color: "primary",
  label: "",
});
</script>

<template>
  <div class="inline-flex flex-col items-center gap-2" role="status">
    <div
      v-bind="$attrs"
      :class="spinnerVariants({ size, color })"
      aria-hidden="true"
    />
    <span v-if="label" class="text-sm text-muted">{{ label }}</span>
    <span class="sr-only">{{ label || "Wird geladen…" }}</span>
  </div>
</template>
