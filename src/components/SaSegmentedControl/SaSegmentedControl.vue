<script setup lang="ts">
import type { SegmentedControlOption } from "@/types";

defineOptions({ name: "SaSegmentedControl" });

const modelValue = defineModel<string | number>();

interface Props {
  options: SegmentedControlOption[];
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  disabled: false,
});
</script>

<template>
  <div
    class="inline-flex items-center bg-surface-muted rounded-md p-1 gap-1"
    :class="{ 'opacity-50 pointer-events-none': disabled }"
    role="group"
  >
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      class="px-4 py-1.5 text-sm rounded duration-150 cursor-pointer"
      :class="
        modelValue === option.value
          ? 'bg-surface font-semibold text-heading shadow-sm'
          : 'text-muted hover:text-body'
      "
      :aria-pressed="modelValue === option.value"
      @click="modelValue = option.value"
    >
      {{ option.label }}
    </button>
  </div>
</template>
