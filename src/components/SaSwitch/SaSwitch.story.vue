<script setup lang="ts">
import SaSwitch from "./SaSwitch.vue";
import { ref } from "vue";

const on = ref(false);
</script>

<template>
  <Story title="SaSwitch" icon="lucide:toggle-left">
    <Variant title="Sizes">
      <div class="space-y-4">
        <SaSwitch v-model="on" label="Small" size="sm" name="sm" />
        <SaSwitch v-model="on" label="Medium (default)" size="md" name="md" />
        <SaSwitch v-model="on" label="Large" size="lg" name="lg" />
      </div>
    </Variant>
    <Variant title="Disabled">
      <SaSwitch
        :model-value="true"
        label="Enabled but disabled"
        disabled
        name="dis"
      />
    </Variant>
    <Variant title="Interactive">
      <SaSwitch v-model="on" label="Dark mode" name="dark" />
      <p class="mt-2 text-sm text-muted">Value: {{ on }}</p>
    </Variant>
  </Story>
</template>
