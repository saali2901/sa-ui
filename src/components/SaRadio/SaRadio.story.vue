<script setup lang="ts">
import SaRadio from "./SaRadio.vue";
import type { RadioOption } from "@/types";
import { ref } from "vue";

const options: RadioOption[] = [
  { label: "Email", value: "email" },
  { label: "Phone", value: "phone" },
  { label: "Fax", value: "fax", disabled: true },
];

const selected = ref("email");
</script>

<template>
  <Story title="SaRadio" icon="lucide:circle-dot">
    <Variant title="Vertical (default)">
      <SaRadio v-model="selected" :options="options" name="contact-v" />
      <p class="mt-2 text-sm text-muted">Selected: {{ selected }}</p>
    </Variant>
    <Variant title="Horizontal">
      <SaRadio
        v-model="selected"
        :options="options"
        name="contact-h"
        direction="horizontal"
      />
    </Variant>
    <Variant title="All disabled">
      <SaRadio
        v-model="selected"
        :options="options"
        name="contact-d"
        disabled
      />
    </Variant>
  </Story>
</template>
