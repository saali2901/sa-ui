<script setup lang="ts">
import { tv } from "tailwind-variants";

defineOptions({ name: "SaInput" });

const modelValue = defineModel<string | number>();

const inputVariants = tv({
  base: "w-full border p-2 duration-200 bg-surface text-body placeholder-muted border-border-strong focus:outline-none focus:border-border-focus text-sm",
  variants: {
    disabled: {
      true: "opacity-50 cursor-not-allowed pointer-events-none",
    },
    error: {
      true: "border-error-text focus:border-error-text",
    },
  },
});

interface Props {
  label?: string;
  disabled?: boolean;
  error?: boolean;
}

withDefaults(defineProps<Props>(), {
  disabled: false,
  error: false,
});
</script>

<template>
  <div class="w-full">
    <label v-if="label" class="block text-sm text-muted">
      {{ label }}
    </label>
    <input
      v-model="modelValue"
      :class="inputVariants({ disabled, error })"
      :disabled="disabled"
      v-bind="$attrs"
    />
  </div>
</template>
