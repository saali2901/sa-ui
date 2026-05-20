<script setup lang="ts">
import { tv } from "tailwind-variants";
import type { HTMLAttributes } from "vue";

defineOptions({ name: "SaBadge" });

const badgeVariants = tv({
  base: "rounded uppercase tracking-wider font-medium",
  variants: {
    size: {
      sm: "text-xs px-2 py-1",
      lg: "text-xs px-3 py-1.5",
      dot: "p-2",
    },
    color: {
      primary: "bg-primary text-on-primary",
      secondary: "bg-secondary text-secondary-text",
    },
  },
});

interface Props extends /* @vue-ignore */ HTMLAttributes {
  size?: "sm" | "lg" | "dot";
  color?: "primary" | "secondary";
}

withDefaults(defineProps<Props>(), {
  size: "sm",
  color: "primary",
});
</script>

<template>
  <div v-bind="$attrs" :class="badgeVariants({ size, color })">
    <slot />
  </div>
</template>
