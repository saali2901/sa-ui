<script setup lang="ts">
import SaDivider from "./SaDivider.vue";
</script>

<template>
  <Story title="SaDivider" icon="lucide:minus">
    <Variant title="Horizontal">
      <div class="space-y-4">
        <p>Content above</p>
        <SaDivider />
        <p>Content below</p>
      </div>
    </Variant>
    <Variant title="With label">
      <div class="space-y-4">
        <p>Section A</p>
        <SaDivider label="OR" />
        <p>Section B</p>
      </div>
    </Variant>
    <Variant title="Vertical">
      <div class="flex items-center gap-4 h-8">
        <span>Left</span>
        <SaDivider direction="vertical" />
        <span>Right</span>
      </div>
    </Variant>
  </Story>
</template>
