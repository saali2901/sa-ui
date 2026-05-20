<script setup lang="ts">
import type { BreadcrumbItem } from "@/types";

defineOptions({ name: "SaBreadcrumb" });

interface Props {
  items: BreadcrumbItem[];
  separator?: string;
}

withDefaults(defineProps<Props>(), {
  separator: "/",
});
</script>

<template>
  <div v-bind="$attrs">
    <nav class="flex items-center text-sm" aria-label="Breadcrumb">
      <template v-for="(item, index) in items" :key="index">
        <a
          v-if="item.href"
          :href="item.href"
          class="text-muted hover:text-body duration-150"
        >
          {{ item.label }}
        </a>
        <span
          v-else
          class="text-heading font-medium"
          :aria-current="index === items.length - 1 ? 'page' : undefined"
        >
          {{ item.label }}
        </span>
        <span
          v-if="index < items.length - 1"
          class="text-muted mx-2 select-none"
          aria-hidden="true"
        >
          {{ separator }}
        </span>
      </template>
    </nav>
  </div>
</template>
