<script setup lang="ts">
import SaTag from "./SaTag.vue";
</script>

<template>
  <Story title="SaTag" icon="lucide:tag">
    <Variant title="Colors">
      <div class="flex flex-wrap items-center gap-2">
        <SaTag color="primary">Primary</SaTag>
        <SaTag color="secondary">Secondary</SaTag>
        <SaTag color="success">Success</SaTag>
        <SaTag color="error">Error</SaTag>
        <SaTag color="warning">Warning</SaTag>
        <SaTag color="info">Info</SaTag>
      </div>
    </Variant>
    <Variant title="Sizes">
      <div class="flex items-center gap-2">
        <SaTag size="sm">Small</SaTag>
        <SaTag size="md">Medium</SaTag>
      </div>
    </Variant>
    <Variant title="Removable">
      <div class="flex items-center gap-2">
        <SaTag color="primary" removable>Vue.js</SaTag>
        <SaTag color="success" removable>TypeScript</SaTag>
        <SaTag color="info" removable>Tailwind</SaTag>
      </div>
    </Variant>
  </Story>
</template>
