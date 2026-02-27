<script setup lang="ts">
import { tv } from "tailwind-variants";
import type { InputHTMLAttributes } from "vue";

defineOptions({ name: "SaInput" });

const inputVariants = tv({
  base: "w-full border p-2 duration-200 text-body placeholder-muted border-border-strong focus:outline-none focus:border-border-focus text-sm",
  variants: {
    disabled: {
      true: "opacity-50 cursor-not-allowed pointer-events-none",
    },
  },
});

interface Props extends /* @vue-ignore */ InputHTMLAttributes {
  label?: string;
  disabled?: boolean;
}

defineProps<Props>();
</script>

<template>
  <div class="w-full">
    <label v-if="label" class="block text-sm text-muted">
      {{ label }}
    </label>
    <input
      :class="inputVariants({ disabled })"
      :disabled="disabled"
      v-bind="$attrs"
    />
  </div>
</template>
