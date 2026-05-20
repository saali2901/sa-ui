<script setup lang="ts">
import { tv } from "tailwind-variants";
import type { TextareaHTMLAttributes } from "vue";

defineOptions({ name: "SaTextarea" });

const modelValue = defineModel<string>();

const textareaVariants = tv({
  base: "w-full border rounded-md px-3 py-2 duration-200 bg-surface text-body placeholder-muted border-border-strong focus:outline-none focus:border-border-focus text-sm resize-y min-h-[80px]",
  variants: {
    disabled: {
      true: "opacity-50 cursor-not-allowed pointer-events-none",
    },
    error: {
      true: "border-error-text focus:border-error-text",
    },
  },
});

interface Props extends /* @vue-ignore */ TextareaHTMLAttributes {
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
    <label v-if="label" class="block uppercase text-xs font-medium tracking-wide text-muted mb-1.5">
      {{ label }}
    </label>
    <textarea
      v-model="modelValue"
      :class="textareaVariants({ disabled, error })"
      :disabled="disabled"
      v-bind="$attrs"
    />
  </div>
</template>
