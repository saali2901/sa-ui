<script setup lang="ts">
import { tv } from "tailwind-variants";
import type { ButtonHTMLAttributes } from "vue";

defineOptions({ name: "SaButton" });

const buttonVariants = tv({
  base: "px-4 py-2 uppercase font-semibold duration-200",
  variants: {
    size: {
      sm: "text-sm",
      lg: "text-lg",
    },
    color: {
      primary: "bg-primary text-on-primary hover:bg-primary-hover",
      secondary: "bg-secondary hover:bg-secondary-hover text-secondary-text",
      tertiary:
        "border border-tertiary-border text-tertiary-text hover:bg-tertiary-hover",
    },
    disabled: {
      true: "opacity-50 pointer-events-none",
    },
  },
});

interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {
  size?: "sm" | "lg";
  color?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  size: "sm",
  color: "primary",
  disabled: false,
});
</script>

<template>
  <button
    v-bind="$attrs"
    :class="buttonVariants({ size, color, disabled })"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
