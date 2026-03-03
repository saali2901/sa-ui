<script setup lang="ts">
import SaBreadcrumb from "./SaBreadcrumb.vue";
import type { BreadcrumbItem } from "@/types";

const items: BreadcrumbItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Detail" },
];
</script>

<template>
  <Story title="SaBreadcrumb" icon="lucide:navigation">
    <Variant title="Default separator">
      <SaBreadcrumb :items="items" />
    </Variant>
    <Variant title="Custom separator">
      <SaBreadcrumb :items="items" separator="›" />
    </Variant>
    <Variant title="Arrow separator">
      <SaBreadcrumb :items="items" separator="→" />
    </Variant>
  </Story>
</template>
