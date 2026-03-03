<script setup lang="ts">
import SaProgress from "./SaProgress.vue";
</script>

<template>
  <Story title="SaProgress" icon="lucide:bar-chart-3">
    <Variant title="Sizes">
      <div class="space-y-4">
        <SaProgress :value="60" size="sm" />
        <SaProgress :value="60" size="md" />
        <SaProgress :value="60" size="lg" />
      </div>
    </Variant>
    <Variant title="Colors">
      <div class="space-y-4">
        <SaProgress :value="80" color="primary" />
        <SaProgress :value="80" color="success" />
        <SaProgress :value="80" color="warning" />
        <SaProgress :value="80" color="error" />
      </div>
    </Variant>
    <Variant title="With label">
      <SaProgress :value="42" :max="100" show-label />
    </Variant>
    <Variant title="Custom max">
      <SaProgress :value="3" :max="10" show-label size="lg" color="success" />
    </Variant>
  </Story>
</template>
