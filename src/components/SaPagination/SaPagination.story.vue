<script setup lang="ts">
import SaPagination from "./SaPagination.vue";
import { ref } from "vue";

const page = ref(1);
const pageLarge = ref(10);
</script>

<template>
  <Story title="SaPagination" icon="lucide:arrow-left-right">
    <Variant title="Few pages">
      <SaPagination v-model="page" :total-pages="5" />
      <p class="mt-2 text-sm text-muted">Page: {{ page }}</p>
    </Variant>
    <Variant title="Many pages (with ellipsis)">
      <SaPagination v-model="pageLarge" :total-pages="50" />
      <p class="mt-2 text-sm text-muted">Page: {{ pageLarge }}</p>
    </Variant>
    <Variant title="Custom sibling count">
      <SaPagination v-model="pageLarge" :total-pages="50" :sibling-count="2" />
    </Variant>
  </Story>
</template>
