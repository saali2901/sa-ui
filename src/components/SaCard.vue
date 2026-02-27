<script setup lang="ts">
defineOptions({ name: "SaCard" });
</script>

<template>
  <div class="max-w-100 overflow-hidden bg-surface-muted">
    <!-- Image -->
    <div
      v-if="$slots.image"
      class="[&>img]:w-full [&>img]:h-auto [&>img]:object-cover"
    >
      <slot name="image" />
    </div>
    <!-- Content -->
    <div class="p-4">
      <div v-if="$slots.title" class="mb-2 text-2xl font-semibold">
        <slot name="title" />
      </div>
      <div v-if="$slots.body" class="mb-4 text-sm text-justify text-body">
        <slot name="body" />
      </div>
      <div v-if="$slots.actions" class="flex gap-2">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>
