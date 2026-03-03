<script setup lang="ts">
import SaButton from "./SaButton.vue";
</script>

<template>
  <Story title="SaButton" icon="lucide:mouse-pointer-click">
    <Variant title="Colors">
      <div class="flex items-center gap-3">
        <SaButton color="primary">Primary</SaButton>
        <SaButton color="secondary">Secondary</SaButton>
        <SaButton color="tertiary">Tertiary</SaButton>
      </div>
    </Variant>
    <Variant title="Sizes">
      <div class="flex items-center gap-3">
        <SaButton size="sm">Small</SaButton>
        <SaButton size="lg">Large</SaButton>
      </div>
    </Variant>
    <Variant title="Disabled">
      <SaButton disabled>Disabled</SaButton>
    </Variant>
    <Variant title="Loading">
      <div class="flex items-center gap-3">
        <SaButton loading>Loading…</SaButton>
        <SaButton color="secondary" loading>Loading…</SaButton>
      </div>
    </Variant>
  </Story>
</template>
