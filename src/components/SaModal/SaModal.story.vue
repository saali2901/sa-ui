<script setup lang="ts">
import SaModal from "./SaModal.vue";
import SaButton from "../SaButton/SaButton.vue";
import { ref } from "vue";

const isOpen = ref(false);
const isOpenNoBackdrop = ref(false);
</script>

<template>
  <Story title="SaModal" icon="lucide:panel-top">
    <Variant title="Default">
      <SaButton @click="isOpen = true">Open Modal</SaButton>
      <SaModal :is-open="isOpen" @close="isOpen = false">
        <template #title>Confirmation</template>
        <template #body>
          Are you sure you want to proceed with this action?
        </template>
        <template #actions>
          <SaButton size="sm" @click="isOpen = false">Confirm</SaButton>
          <SaButton size="sm" color="tertiary" @click="isOpen = false"
            >Cancel</SaButton
          >
        </template>
      </SaModal>
    </Variant>
    <Variant title="No backdrop close">
      <SaButton @click="isOpenNoBackdrop = true"
        >Open (no backdrop close)</SaButton
      >
      <SaModal
        :is-open="isOpenNoBackdrop"
        :close-on-backdrop="false"
        @close="isOpenNoBackdrop = false"
      >
        <template #title>Persistent Modal</template>
        <template #body>
          Click the X button to close this modal. Clicking the backdrop won't
          close it.
        </template>
        <template #actions>
          <SaButton size="sm" @click="isOpenNoBackdrop = false">OK</SaButton>
        </template>
      </SaModal>
    </Variant>
  </Story>
</template>
