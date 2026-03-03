<script setup lang="ts">
import { tv } from "tailwind-variants";
import { computed } from "vue";

defineOptions({ name: "SaCheckbox" });

const modelValue = defineModel<boolean>({ default: false });

interface Props {
  label?: string;
  name?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
  name: undefined,
  disabled: false,
});

const inputId = computed(
  () => `sa-checkbox-${props.name ?? Math.random().toString(36).slice(2, 9)}`,
);

const wrapperVariants = tv({
  base: "inline-flex items-center gap-2 cursor-pointer select-none",
  variants: {
    disabled: {
      true: "opacity-50 cursor-not-allowed",
    },
  },
});

const boxVariants = tv({
  base: "relative w-4 h-4 border border-border-strong duration-200 flex items-center justify-center",
  variants: {
    checked: {
      true: "bg-primary border-primary",
      false: "bg-surface",
    },
  },
});
</script>

<template>
  <label :class="wrapperVariants({ disabled })" :for="inputId">
    <input
      :id="inputId"
      v-model="modelValue"
      type="checkbox"
      :name="name"
      :disabled="disabled"
      class="sr-only peer"
    />
    <div :class="boxVariants({ checked: modelValue })" aria-hidden="true">
      <svg
        v-if="modelValue"
        class="w-3 h-3 text-on-primary"
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
    <span v-if="label" class="text-sm text-muted">
      {{ label }}
    </span>
  </label>
</template>
