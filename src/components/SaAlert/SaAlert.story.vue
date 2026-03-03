<script setup lang="ts">
import SaAlert from "./SaAlert.vue";
</script>

<template>
  <Story title="SaAlert" icon="lucide:alert-circle">
    <Variant title="Info">
      <SaAlert color="info">This is an informational message.</SaAlert>
    </Variant>
    <Variant title="Success">
      <SaAlert color="success">Operation completed successfully.</SaAlert>
    </Variant>
    <Variant title="Warning">
      <SaAlert color="warning">Please review your input carefully.</SaAlert>
    </Variant>
    <Variant title="Error">
      <SaAlert color="error">Something went wrong. Please try again.</SaAlert>
    </Variant>
    <Variant title="Dismissible">
      <SaAlert color="info" dismissible>
        You can dismiss this alert by clicking the X button.
      </SaAlert>
    </Variant>
  </Story>
</template>
