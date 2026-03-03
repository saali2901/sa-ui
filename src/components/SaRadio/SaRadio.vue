<script setup lang="ts">
import { tv } from "tailwind-variants";
import { computed } from "vue";
import type { RadioOption } from "@/types";

defineOptions({ name: "SaRadio" });

const modelValue = defineModel<string | number>();

interface Props {
  options: RadioOption[];
  name?: string;
  disabled?: boolean;
  direction?: "horizontal" | "vertical";
}

const props = withDefaults(defineProps<Props>(), {
  name: undefined,
  disabled: false,
  direction: "vertical",
});

const groupName = computed(
  () => props.name ?? `sa-radio-${Math.random().toString(36).slice(2, 9)}`,
);

const radioVariants = tv({
  base: "relative w-4 h-4 rounded-full border-2 border-border-strong duration-200 flex items-center justify-center",
  variants: {
    checked: {
      true: "border-primary",
      false: "border-border-strong",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
    },
  },
});

const wrapperVariants = tv({
  base: "flex gap-3",
  variants: {
    direction: {
      horizontal: "flex-row flex-wrap",
      vertical: "flex-col",
    },
  },
});
</script>

<template>
  <div :class="wrapperVariants({ direction })" role="radiogroup">
    <label
      v-for="option in options"
      :key="option.value"
      class="inline-flex items-center gap-2 select-none"
      :class="{
        'cursor-not-allowed opacity-50': option.disabled || disabled,
        'cursor-pointer': !option.disabled && !disabled,
      }"
    >
      <input
        v-model="modelValue"
        type="radio"
        :name="groupName"
        :value="option.value"
        :disabled="option.disabled || disabled"
        class="sr-only peer"
      />
      <div
        :class="
          radioVariants({
            checked: modelValue === option.value,
            disabled: option.disabled || disabled,
          })
        "
        aria-hidden="true"
      >
        <span
          v-if="modelValue === option.value"
          class="w-2 h-2 rounded-full bg-primary"
        />
      </div>
      <span class="text-sm text-body">{{ option.label }}</span>
    </label>
  </div>
</template>
