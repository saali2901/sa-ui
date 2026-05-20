<script setup lang="ts">
import { tv } from "tailwind-variants";
import { X } from "lucide-vue-next";

defineOptions({ name: "SaTag" });

interface Props {
  color?: "primary" | "secondary" | "success" | "error" | "warning" | "info";
  size?: "sm" | "md";
  removable?: boolean;
}

withDefaults(defineProps<Props>(), {
  color: "primary",
  size: "sm",
  removable: false,
});

const emit = defineEmits<{
  remove: [];
}>();

const tagVariants = tv({
  base: "inline-flex items-center gap-1 rounded-md uppercase tracking-wider font-medium",
  variants: {
    size: {
      sm: "text-xs px-2 py-0.5",
      md: "text-xs px-3 py-1",
    },
    color: {
      primary: "bg-primary-soft text-primary",
      secondary: "bg-secondary text-secondary-text",
      success: "bg-success-soft text-success-text",
      error: "bg-error-soft text-error-text",
      warning: "bg-warning-soft text-warning-text",
      info: "bg-info-soft text-info-text",
    },
  },
});
</script>

<template>
  <span :class="tagVariants({ color, size })">
    <slot />
    <button
      v-if="removable"
      class="inline-flex items-center justify-center shrink-0 cursor-pointer opacity-60 hover:opacity-100 duration-200 ml-0.5"
      aria-label="Remove"
      @click="emit('remove')"
    >
      <X :size="size === 'sm' ? 12 : 14" />
    </button>
  </span>
</template>
