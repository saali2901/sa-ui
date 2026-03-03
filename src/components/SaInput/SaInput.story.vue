<script setup lang="ts">
import SaInput from "./SaInput.vue";
import { ref } from "vue";

const text = ref("");
</script>

<template>
  <Story title="SaInput" icon="lucide:text-cursor-input">
    <Variant title="Default">
      <SaInput v-model="text" label="Username" placeholder="Enter username" />
      <p class="mt-2 text-sm text-muted">Value: {{ text }}</p>
    </Variant>
    <Variant title="With error">
      <SaInput
        v-model="text"
        label="Email"
        placeholder="you@example.com"
        error
      />
    </Variant>
    <Variant title="Disabled">
      <SaInput
        v-model="text"
        label="Disabled"
        placeholder="Can't type here"
        disabled
      />
    </Variant>
  </Story>
</template>
