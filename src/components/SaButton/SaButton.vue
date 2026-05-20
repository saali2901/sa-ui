<script setup lang="ts">
import { tv } from "tailwind-variants";
import type { ButtonHTMLAttributes } from "vue";
import SaSpinner from "../SaSpinner/SaSpinner.vue";

defineOptions({ name: "SaButton" });

const buttonVariants = tv({
  base: "rounded-md font-medium text-sm duration-200 inline-flex items-center justify-center gap-2 cursor-pointer",
  variants: {
    size: {
      sm: "px-4 py-2 text-sm",
      lg: "px-5 py-2.5 text-base",
    },
    color: {
      primary: "bg-primary text-on-primary hover:bg-primary-hover",
      secondary: "bg-secondary text-secondary-text hover:bg-secondary-hover border border-border-strong",
      tertiary: "text-tertiary-text hover:text-heading hover:underline underline-offset-4",
      ghost: "bg-transparent text-heading border border-border-strong hover:bg-surface-hover",
      destructive: "bg-destructive text-on-primary hover:bg-destructive-hover",
    },
    icon: {
      true: "px-0 aspect-square",
    },
    disabled: {
      true: "opacity-50 pointer-events-none",
    },
  },
  compoundVariants: [
    { icon: true, size: "sm", class: "w-9 h-9" },
    { icon: true, size: "lg", class: "w-11 h-11" },
  ],
});

interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {
  size?: "sm" | "lg";
  color?: "primary" | "secondary" | "tertiary" | "ghost" | "destructive";
  disabled?: boolean;
  loading?: boolean;
  icon?: boolean;
}

withDefaults(defineProps<Props>(), {
  size: "sm",
  color: "primary",
  disabled: false,
  loading: false,
  icon: false,
});
</script>

<template>
  <button
    v-bind="$attrs"
    :class="buttonVariants({ size, color, icon, disabled: disabled || loading })"
    :disabled="disabled || loading"
  >
    <SaSpinner
      v-if="loading"
      size="sm"
      :color="color === 'primary' || color === 'destructive' ? 'white' : 'primary'"
    />
    <slot />
  </button>
</template>
