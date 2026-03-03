<script setup lang="ts">
defineOptions({ name: "SaFormField" });

interface Props {
  label?: string;
  error?: string;
  hint?: string;
  required?: boolean;
}

withDefaults(defineProps<Props>(), {
  label: undefined,
  error: undefined,
  hint: undefined,
  required: false,
});
</script>

<template>
  <div class="w-full flex flex-col gap-1">
    <label v-if="label" class="block text-sm font-medium text-body">
      {{ label }}
      <span v-if="required" class="text-error-text">*</span>
    </label>

    <slot />

    <p v-if="error" class="text-xs text-error-text">
      {{ error }}
    </p>
    <p v-else-if="hint" class="text-xs text-muted">
      {{ hint }}
    </p>
  </div>
</template>
