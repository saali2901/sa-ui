<script setup lang="ts">
import SaFormField from "./SaFormField.vue";
import SaInput from "../SaInput/SaInput.vue";
import SaTextarea from "../SaTextarea/SaTextarea.vue";
import { ref } from "vue";

const email = ref("");
const message = ref("");
</script>

<template>
  <Story title="SaFormField" icon="lucide:form-input">
    <Variant title="With label and hint">
      <SaFormField label="Email" hint="We will never share your email.">
        <SaInput v-model="email" placeholder="you@example.com" />
      </SaFormField>
    </Variant>
    <Variant title="Required with error">
      <SaFormField label="Email" required error="This field is required.">
        <SaInput v-model="email" placeholder="you@example.com" error />
      </SaFormField>
    </Variant>
    <Variant title="With textarea">
      <SaFormField label="Message" hint="Max 500 characters.">
        <SaTextarea v-model="message" placeholder="Write something..." />
      </SaFormField>
    </Variant>
  </Story>
</template>
