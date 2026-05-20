<script setup lang="ts">
import { tv } from "tailwind-variants";
import { computed } from "vue";

defineOptions({ name: "SaSwitch" });

const modelValue = defineModel<boolean>({ default: false });

interface Props {
  label?: string;
  subtitle?: string;
  name?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

const props = withDefaults(defineProps<Props>(), {
  label: "",
  subtitle: undefined,
  name: undefined,
  disabled: false,
  size: "md",
});

const inputId = computed(
  () => `sa-switch-${props.name ?? Math.random().toString(36).slice(2, 9)}`,
);

const toggle = () => {
  if (!props.disabled) {
    modelValue.value = !modelValue.value;
  }
};

const trackVariants = tv({
  base: "relative inline-flex shrink-0 cursor-pointer rounded-full duration-200",
  variants: {
    size: {
      sm: "w-8 h-4",
      md: "w-10 h-5",
      lg: "w-12 h-6",
    },
    checked: {
      true: "bg-primary",
      false: "bg-border-strong",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
    },
  },
});

const thumbVariants = tv({
  base: "absolute top-0.5 rounded-full bg-on-primary shadow duration-200",
  variants: {
    size: {
      sm: "w-3 h-3",
      md: "w-4 h-4",
      lg: "w-5 h-5",
    },
    checked: {
      true: "",
      false: "left-0.5",
    },
  },
  compoundVariants: [
    { size: "sm", checked: true, class: "left-[18px]" },
    { size: "md", checked: true, class: "left-[22px]" },
    { size: "lg", checked: true, class: "left-[26px]" },
  ],
});
</script>

<template>
  <!-- With subtitle: full-width row layout -->
  <div
    v-if="subtitle"
    class="flex items-center justify-between w-full select-none"
    :class="{ 'opacity-50 cursor-not-allowed': disabled, 'cursor-pointer': !disabled }"
    @click.prevent="toggle"
  >
    <div class="flex flex-col gap-0.5 pr-4">
      <span class="text-sm font-semibold text-heading">{{ label }}</span>
      <span class="text-xs text-muted">{{ subtitle }}</span>
    </div>
    <input
      :id="inputId"
      v-model="modelValue"
      type="checkbox"
      role="switch"
      :name="name"
      :disabled="disabled"
      class="sr-only"
    />
    <div
      :class="trackVariants({ size, checked: modelValue, disabled })"
      aria-hidden="true"
    >
      <span :class="thumbVariants({ size, checked: modelValue })" />
    </div>
  </div>

  <!-- Without subtitle: original inline layout -->
  <label
    v-else
    :for="inputId"
    class="inline-flex items-center gap-2 select-none"
    :class="{
      'cursor-not-allowed opacity-50': disabled,
      'cursor-pointer': !disabled,
    }"
  >
    <input
      :id="inputId"
      v-model="modelValue"
      type="checkbox"
      role="switch"
      :name="name"
      :disabled="disabled"
      class="sr-only"
    />
    <div
      :class="trackVariants({ size, checked: modelValue, disabled })"
      @click.prevent="toggle"
      aria-hidden="true"
    >
      <span :class="thumbVariants({ size, checked: modelValue })" />
    </div>
    <span v-if="label" class="text-sm text-body">{{ label }}</span>
  </label>
</template>
