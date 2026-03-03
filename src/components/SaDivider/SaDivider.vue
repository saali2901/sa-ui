<script setup lang="ts">
import { tv } from "tailwind-variants";

defineOptions({ name: "SaDivider" });

interface Props {
  direction?: "horizontal" | "vertical";
  label?: string;
}

withDefaults(defineProps<Props>(), {
  direction: "horizontal",
  label: undefined,
});

const dividerVariants = tv({
  base: "border-border",
  variants: {
    direction: {
      horizontal: "w-full border-t",
      vertical: "h-full border-l inline-block",
    },
  },
});
</script>

<template>
  <div
    v-if="label && direction === 'horizontal'"
    class="flex items-center gap-3 w-full"
    role="separator"
  >
    <div class="flex-1 border-t border-border" />
    <span class="text-xs text-muted whitespace-nowrap">{{ label }}</span>
    <div class="flex-1 border-t border-border" />
  </div>
  <div v-else :class="dividerVariants({ direction })" role="separator" />
</template>
