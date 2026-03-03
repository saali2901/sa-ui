<script setup lang="ts">
import SaDropdown from "./SaDropdown.vue";
import type { DropdownOption } from "@/types";
import { ref } from "vue";

const options: DropdownOption[] = [
  { value: "vue", label: "Vue.js" },
  { value: "react", label: "React" },
  { value: "angular", label: "Angular", disabled: true },
  { value: "svelte", label: "Svelte" },
];

const selected = ref<string | number | null>(null);
</script>

<template>
  <Story title="SaDropdown" icon="lucide:chevron-down">
    <Variant title="Default">
      <SaDropdown
        v-model="selected"
        :options="options"
        label="Framework"
        placeholder="Choose a framework"
      />
      <p class="mt-2 text-sm text-muted">Selected: {{ selected ?? "None" }}</p>
    </Variant>
    <Variant title="Disabled">
      <SaDropdown
        v-model="selected"
        :options="options"
        label="Framework"
        disabled
      />
    </Variant>
  </Story>
</template>
