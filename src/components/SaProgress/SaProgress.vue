<script setup lang="ts">
import { tv } from "tailwind-variants";

defineOptions({ name: "SaProgress" });

interface Props {
  value?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "success" | "warning" | "error";
  showLabel?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  value: 0,
  max: 100,
  size: "md",
  color: "primary",
  showLabel: false,
});

const percentage = () =>
  Math.min(100, Math.max(0, (props.value / props.max) * 100));

const trackVariants = tv({
  base: "w-full bg-secondary overflow-hidden rounded-md",
  variants: {
    size: {
      sm: "h-1",
      md: "h-2",
      lg: "h-4",
    },
  },
});

const barVariants = tv({
  base: "h-full rounded-md duration-300 ease-out",
  variants: {
    color: {
      primary: "bg-primary",
      success: "bg-success-text",
      warning: "bg-warning-text",
      error: "bg-error-text",
    },
  },
});
</script>

<template>
  <div class="w-full">
    <div class="flex items-center gap-2">
      <div
        :class="trackVariants({ size })"
        role="progressbar"
        :aria-valuenow="value"
        :aria-valuemin="0"
        :aria-valuemax="max"
      >
        <div
          :class="barVariants({ color })"
          :style="{ width: `${percentage()}%` }"
        />
      </div>
      <span v-if="showLabel" class="text-xs text-muted whitespace-nowrap">
        {{ Math.round(percentage()) }}%
      </span>
    </div>
  </div>
</template>
