# SaInput

Text input with label, error state, and all native input attributes.

## Usage

```vue
<script setup>
import { SaInput } from "sa-ui";
import { ref } from "vue";

const name = ref("");
</script>

<template>
  <SaInput v-model="name" label="Name" placeholder="Enter name" />
  <SaInput v-model="name" label="Email" error />
</template>
```

## Props

| Prop         | Type               | Default | Description           |
| ------------ | ------------------ | ------- | --------------------- |
| `modelValue` | `string \| number` | —       | Input value (v-model) |
| `label`      | `string`           | —       | Label text            |
| `disabled`   | `boolean`          | `false` | Disable the input     |
| `error`      | `boolean`          | `false` | Show error border     |

## Events

| Event               | Payload            | Description      |
| ------------------- | ------------------ | ---------------- |
| `update:modelValue` | `string \| number` | Emitted on input |

## Notes

- All native `<input>` attributes (placeholder, type, etc.) are forwarded via `v-bind="$attrs"`
