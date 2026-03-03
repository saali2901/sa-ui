<script setup lang="ts">
import SaToast from "./SaToast.vue";
import SaButton from "../SaButton/SaButton.vue";
import { ref } from "vue";

const toastRef = ref<InstanceType<typeof SaToast> | null>(null);

const addToast = (type: "success" | "error" | "warning" | "info") => {
  const messages: Record<string, string> = {
    success: "Operation completed successfully!",
    error: "Something went wrong. Please try again.",
    warning: "Please check your input.",
    info: "Here is some useful information.",
  };
  toastRef.value?.add(type, messages[type]);
};
</script>

<template>
  <Story title="SaToast" icon="lucide:bell">
    <Variant title="All types">
      <div class="flex flex-wrap gap-2">
        <SaButton color="primary" size="sm" @click="addToast('success')"
          >Success</SaButton
        >
        <SaButton color="secondary" size="sm" @click="addToast('error')"
          >Error</SaButton
        >
        <SaButton color="tertiary" size="sm" @click="addToast('warning')"
          >Warning</SaButton
        >
        <SaButton color="tertiary" size="sm" @click="addToast('info')"
          >Info</SaButton
        >
      </div>
      <SaToast ref="toastRef" position="top-right" />
    </Variant>
  </Story>
</template>
