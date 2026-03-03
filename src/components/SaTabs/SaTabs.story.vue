<script setup lang="ts">
import SaTabs from "./SaTabs.vue";
import type { TabItem } from "@/types";
import { ref } from "vue";

const tabs: TabItem[] = [
  { key: "overview", label: "Overview" },
  { key: "features", label: "Features" },
  { key: "pricing", label: "Pricing" },
  { key: "deprecated", label: "Deprecated", disabled: true },
];

const activeTab = ref("overview");
</script>

<template>
  <Story title="SaTabs" icon="lucide:panel-top-close">
    <Variant title="Default">
      <SaTabs v-model="activeTab" :tabs="tabs">
        <template #overview>
          <p class="p-4">This is the overview content.</p>
        </template>
        <template #features>
          <p class="p-4">Feature list goes here.</p>
        </template>
        <template #pricing>
          <p class="p-4">Pricing details here.</p>
        </template>
      </SaTabs>
    </Variant>
    <Variant title="Pills variant">
      <SaTabs v-model="activeTab" :tabs="tabs" variant="pills">
        <template #overview>
          <p class="p-4">Overview with pills style.</p>
        </template>
        <template #features>
          <p class="p-4">Features with pills style.</p>
        </template>
        <template #pricing>
          <p class="p-4">Pricing with pills style.</p>
        </template>
      </SaTabs>
    </Variant>
  </Story>
</template>
