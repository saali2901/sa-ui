<script setup lang="ts">
import SaUploadArea from "./SaUploadArea.vue";
</script>

<template>
  <Story title="SaUploadArea" icon="lucide:upload">
    <Variant title="Default">
      <SaUploadArea />
    </Variant>
    <Variant title="Custom text + accept">
      <SaUploadArea
        drop-text="Drop images here or click to browse"
        accept=".png,.jpg,.jpeg,.webp"
      />
    </Variant>
    <Variant title="Multiple files">
      <SaUploadArea
        drop-text="Upload multiple documents"
        accept=".pdf,.doc,.docx"
        multiple
      />
    </Variant>
  </Story>
</template>
