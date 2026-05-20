<script setup lang="ts">
import { computed } from "vue";

defineOptions({ name: "SaNumberInput" });

const modelValue = defineModel<number>({ default: 0 });

interface Props {
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  min: undefined,
  max: undefined,
  step: 1,
  label: undefined,
  disabled: false,
});

const atMin = computed(() => props.min !== undefined && modelValue.value <= props.min);
const atMax = computed(() => props.max !== undefined && modelValue.value >= props.max);

function decrement() {
  if (props.disabled || atMin.value) return;
  const next = modelValue.value - props.step;
  modelValue.value = props.min !== undefined ? Math.max(props.min, next) : next;
}

function increment() {
  if (props.disabled || atMax.value) return;
  const next = modelValue.value + props.step;
  modelValue.value = props.max !== undefined ? Math.min(props.max, next) : next;
}
</script>

<template>
  <div :class="{ 'opacity-50 pointer-events-none': disabled }">
    <label
      v-if="label"
      class="block uppercase text-xs font-medium tracking-wide text-muted mb-1.5"
    >
      {{ label }}
    </label>
    <div class="inline-flex items-center border border-border-strong rounded-md overflow-hidden">
      <button
        type="button"
        class="px-4 py-2 text-sm font-medium text-muted hover:text-heading hover:bg-surface-hover duration-150 disabled:opacity-40 disabled:pointer-events-none"
        :disabled="atMin || disabled"
        aria-label="Decrease"
        @click="decrement"
      >
        −
      </button>
      <span class="px-5 py-2 text-sm font-medium text-body min-w-[3rem] text-center border-x border-border-strong select-none">
        {{ modelValue }}
      </span>
      <button
        type="button"
        class="px-4 py-2 text-sm font-medium text-muted hover:text-heading hover:bg-surface-hover duration-150 disabled:opacity-40 disabled:pointer-events-none"
        :disabled="atMax || disabled"
        aria-label="Increase"
        @click="increment"
      >
        +
      </button>
    </div>
  </div>
</template>
