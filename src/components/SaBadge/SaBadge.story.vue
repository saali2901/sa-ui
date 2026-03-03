<script setup lang="ts">
import SaBadge from "./SaBadge.vue";
</script>

<template>
  <Story title="SaBadge" icon="lucide:badge">
    <Variant title="Sizes">
      <div class="flex items-center gap-3">
        <SaBadge size="sm">Small</SaBadge>
        <SaBadge size="lg">Large</SaBadge>
        <SaBadge size="dot" />
      </div>
    </Variant>
    <Variant title="Colors">
      <div class="flex items-center gap-3">
        <SaBadge color="primary">Primary</SaBadge>
        <SaBadge color="secondary">Secondary</SaBadge>
      </div>
    </Variant>
  </Story>
</template>
