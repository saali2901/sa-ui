<script setup lang="ts">
import SaAccordion from "./SaAccordion.vue";
import type { AccordionItem } from "@/types";
import { ref } from "vue";

const items: AccordionItem[] = [
  { key: "about", title: "About us" },
  { key: "services", title: "Our Services" },
  { key: "contact", title: "Contact", disabled: true },
];

const openSingle = ref<string[]>([]);
const openMultiple = ref<string[]>([]);
</script>

<template>
  <Story title="SaAccordion" icon="lucide:chevrons-down">
    <Variant title="Single mode">
      <SaAccordion v-model="openSingle" :items="items">
        <template #about>
          <p>We build beautiful UI components for Vue.js applications.</p>
        </template>
        <template #services>
          <p>Design systems, component libraries, and consulting.</p>
        </template>
        <template #contact>
          <p>This item is disabled.</p>
        </template>
      </SaAccordion>
    </Variant>
    <Variant title="Multiple mode">
      <SaAccordion v-model="openMultiple" :items="items" multiple>
        <template #about>
          <p>Multiple items can be open at once.</p>
        </template>
        <template #services>
          <p>Open me too!</p>
        </template>
      </SaAccordion>
    </Variant>
  </Story>
</template>
