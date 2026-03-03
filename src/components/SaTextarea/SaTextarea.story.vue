<script setup lang="ts">
import SaTextarea from "./SaTextarea.vue";
import { ref } from "vue";

const text = ref("");
</script>

<template>
  <Story title="SaTextarea" icon="lucide:align-left">
    <Variant title="Default">
      <SaTextarea
        v-model="text"
        label="Description"
        placeholder="Write something…"
      />
      <p class="mt-2 text-sm text-muted">{{ text.length }} characters</p>
    </Variant>
    <Variant title="With error">
      <SaTextarea v-model="text" label="Bio" error placeholder="Too short…" />
    </Variant>
    <Variant title="Disabled">
      <SaTextarea model-value="Can't edit this" label="Read only" disabled />
    </Variant>
  </Story>
</template>
