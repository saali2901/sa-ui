<script setup lang="ts">
import { tv } from "tailwind-variants";

defineOptions({ name: "SaInput" });

const modelValue = defineModel<string | number>();

const inputVariants = tv({
  base: "w-full border rounded-md px-3 py-2 duration-200 bg-surface text-body placeholder-muted border-border-strong focus:outline-none focus:border-border-focus text-sm",
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
    <div v-if="label || $slots.hint" class="flex items-center justify-between mb-1.5">
      <label class="uppercase text-xs font-medium tracking-wide text-muted">
        {{ label }}
      </label>
      <slot name="hint" />
    </div>
    <input
      v-model="modelValue"
      :class="inputVariants({ disabled, error })"
      :disabled="disabled"
      v-bind="$attrs"
    />
  </div>
</template>
