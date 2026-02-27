<script setup lang="ts">
defineOptions({ name: "SaBreadcrumb" });

defineProps<{
  items: Array<{ label: string; href?: string }>;
}>();
</script>

<template>
  <div v-bind="$attrs">
    <nav class="flex items-center space-x-2 text-sm">
      <template v-for="(item, index) in items" :key="index">
        <a
          v-if="item.href"
          :href="item.href"
          class="text-muted hover:text-primary hover:cursor-pointer"
        >
          {{ item.label }}
        </a>
        <span
          v-else
          class="text-muted hover:text-primary hover:cursor-pointer"
          >{{ item.label }}</span
        >
        <span v-if="index < items.length - 1" class="text-muted">\</span>
      </template>
    </nav>
  </div>
</template>
