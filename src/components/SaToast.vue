<script setup lang="ts">
import { tv } from "tailwind-variants";
import type { HTMLAttributes } from "vue";

defineOptions({ name: "SaToast" });

const toastVariants = tv({
  base: "w-full p-4",
  variants: {
    color: {
      success: "bg-success-soft text-success-text",
      error: "bg-error-soft text-error-text",
      warning: "bg-warning-soft text-warning-text",
      info: "bg-info-soft text-info-text",
    },
  },
});

interface Props extends /* @vue-ignore */ HTMLAttributes {
  color?: "success" | "error" | "warning" | "info";
}

withDefaults(defineProps<Props>(), {
  color: "info",
});
</script>

<template>
  <div v-bind="$attrs" :class="toastVariants({ color })">
    <slot />
  </div>
</template>
