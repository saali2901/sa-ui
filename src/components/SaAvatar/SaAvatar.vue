<script setup lang="ts">
import { tv } from "tailwind-variants";
import { computed } from "vue";

defineOptions({ name: "SaAvatar" });

interface Props {
  src?: string;
  alt?: string;
  name?: string;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "muted";
}

const props = withDefaults(defineProps<Props>(), {
  src: undefined,
  alt: "",
  name: undefined,
  size: "md",
  color: "primary",
});

const initials = computed(() => {
  if (!props.name) return "?";
  return props.name
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
});

const avatarVariants = tv({
  base: "inline-flex items-center justify-center rounded-full font-semibold overflow-hidden select-none",
  variants: {
    size: {
      sm: "w-8 h-8 text-xs",
      md: "w-10 h-10 text-sm",
      lg: "w-14 h-14 text-lg",
      xl: "w-20 h-20 text-xl",
    },
    color: {
      primary: "bg-primary text-on-primary",
      secondary: "bg-secondary text-secondary-text",
      muted: "bg-surface-hover text-muted",
    },
  },
});
</script>

<template>
  <div :class="avatarVariants({ size, color })">
    <img
      v-if="src"
      :src="src"
      :alt="alt || name || 'Avatar'"
      class="w-full h-full object-cover"
    />
    <span v-else>{{ initials }}</span>
  </div>
</template>
