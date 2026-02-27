<script setup lang="ts">
import { tv } from "tailwind-variants";

defineOptions({ name: "SaCheckbox" });

const modelValue = defineModel<boolean>({ default: false });

interface Props {
  label?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
  disabled: false,
});

const toggle = () => {
  if (!props.disabled) {
    modelValue.value = !modelValue.value;
  }
};

const checkboxVariants = tv({
  base: "w-4 h-4 border border-border-strong duration-200 flex items-center justify-center",
  variants: {
    checked: {
      true: "bg-primary border-primary",
      false: "bg-surface",
    },
    disabled: {
      true: "opacity-50 pointer-events-none",
    },
  },
});
</script>

<template>
  <div class="flex items-center gap-2" @click="toggle">
    <div :class="checkboxVariants({ checked: modelValue, disabled })">
      <svg
        v-if="modelValue"
        class="w-3 h-3 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
    <label v-if="label" class="text-sm text-muted select-none">
      {{ label }}
    </label>
  </div>
</template>
