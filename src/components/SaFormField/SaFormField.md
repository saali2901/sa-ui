# SaFormField

Wrapper component for form inputs providing label, error message, and hint text.

## Usage

```vue
<script setup>
import { SaFormField, SaInput } from "sa-ui";
import { ref } from "vue";

const email = ref("");
</script>

<template>
  <SaFormField
    label="Email"
    required
    error="Invalid email"
    hint="We'll never share it"
  >
    <SaInput v-model="email" placeholder="you@example.com" />
  </SaFormField>
</template>
```

## Props

| Prop       | Type      | Default | Description                              |
| ---------- | --------- | ------- | ---------------------------------------- |
| `label`    | `string`  | —       | Label text                               |
| `error`    | `string`  | —       | Error message (takes priority over hint) |
| `hint`     | `string`  | —       | Hint text (hidden when error present)    |
| `required` | `boolean` | `false` | Show red asterisk after label            |

## Slots

| Slot      | Description           |
| --------- | --------------------- |
| `default` | Form input element(s) |
