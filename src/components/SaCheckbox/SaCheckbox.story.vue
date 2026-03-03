<script setup lang="ts">
import SaCheckbox from "./SaCheckbox.vue";
import { ref } from "vue";

const checked = ref(false);
const disabled = ref(true);
</script>

<template>
  <Story title="SaCheckbox" icon="lucide:check-square">
    <Variant title="Default">
      <SaCheckbox
        v-model="checked"
        label="Accept terms and conditions"
        name="terms"
      />
      <p class="mt-2 text-sm text-muted">Value: {{ checked }}</p>
    </Variant>
    <Variant title="Disabled">
      <SaCheckbox
        v-model="disabled"
        label="This is disabled"
        disabled
        name="disabled"
      />
    </Variant>
    <Variant title="Without label">
      <SaCheckbox v-model="checked" name="no-label" />
    </Variant>
  </Story>
</template>
