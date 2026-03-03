<script setup lang="ts">
import SaSpinner from "./SaSpinner.vue";
</script>

<template>
  <Story title="SaSpinner" icon="lucide:loader-2">
    <Variant title="Sizes">
      <div class="flex items-center gap-6">
        <SaSpinner size="sm" />
        <SaSpinner size="md" />
        <SaSpinner size="lg" />
      </div>
    </Variant>
    <Variant title="Colors">
      <div class="flex items-center gap-6">
        <SaSpinner color="primary" />
        <SaSpinner color="secondary" />
        <SaSpinner color="muted" />
      </div>
    </Variant>
    <Variant title="With label">
      <SaSpinner label="Loading data…" />
    </Variant>
  </Story>
</template>
