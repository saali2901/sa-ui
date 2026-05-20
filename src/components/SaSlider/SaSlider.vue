<script setup lang="ts">
import type { Component } from "vue";

defineOptions({ name: "SaSlider" });

const modelValue = defineModel<number>({ default: 0 });

interface Props {
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  startLabel?: string;
  endLabel?: string;
  startIcon?: Component;
  endIcon?: Component;
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  min: 0,
  max: 100,
  step: 1,
  label: undefined,
  startLabel: undefined,
  endLabel: undefined,
  startIcon: undefined,
  endIcon: undefined,
  disabled: false,
});
</script>

<template>
  <div class="w-full" :class="{ 'opacity-50 pointer-events-none': disabled }">
    <label
      v-if="label"
      class="block uppercase text-xs font-medium tracking-wide text-muted mb-3"
    >
      {{ label }}
    </label>

    <div class="flex items-center gap-3">
      <component :is="startIcon" v-if="startIcon" class="w-4 h-4 text-muted shrink-0" />
      <span v-else-if="startLabel" class="text-xs text-muted shrink-0">{{ startLabel }}</span>

      <input
        v-model.number="modelValue"
        type="range"
        :min="min"
        :max="max"
        :step="step"
        :disabled="disabled"
        class="sa-slider w-full"
      />

      <component :is="endIcon" v-if="endIcon" class="w-4 h-4 text-muted shrink-0" />
      <span v-else-if="endLabel" class="text-xs text-muted shrink-0">{{ endLabel }}</span>
    </div>
  </div>
</template>

<style scoped>
.sa-slider {
  -webkit-appearance: none;
  appearance: none;
  height: 2px;
  background: var(--color-border-strong);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}

.sa-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-primary);
  cursor: pointer;
  transition: transform 150ms ease;
}

.sa-slider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-primary);
  cursor: pointer;
  border: none;
  transition: transform 150ms ease;
}

.sa-slider::-webkit-slider-thumb:hover {
  transform: scale(1.15);
}

.sa-slider::-moz-range-thumb:hover {
  transform: scale(1.15);
}

.sa-slider:focus-visible::-webkit-slider-thumb {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
</style>
