<script setup lang="ts">
import { tv } from "tailwind-variants";
import { X } from "lucide-vue-next";
import type { HTMLAttributes } from "vue";

defineOptions({ name: "SaAlert" });

const alertVariants = tv({
  base: "w-full p-4 flex items-start gap-3 text-sm",
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
  dismissible?: boolean;
}

withDefaults(defineProps<Props>(), {
  color: "info",
  dismissible: false,
});

const emit = defineEmits<{
  dismiss: [];
}>();
</script>

<template>
  <div v-bind="$attrs" :class="alertVariants({ color })" role="alert">
    <div class="flex-1">
      <slot />
    </div>
    <button
      v-if="dismissible"
      class="shrink-0 cursor-pointer opacity-70 hover:opacity-100 duration-200"
      aria-label="Dismiss"
      @click="emit('dismiss')"
    >
      <X :size="16" />
    </button>
  </div>
</template>
