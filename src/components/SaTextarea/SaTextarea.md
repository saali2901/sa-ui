# SaTextarea

Multi-line text input with label, error state, and all native textarea attributes.

## Usage

```vue
<script setup>
import { SaTextarea } from "sa-ui";
import { ref } from "vue";

const message = ref("");
</script>

<template>
  <SaTextarea v-model="message" label="Message" placeholder="Write here…" />
  <SaTextarea v-model="message" label="Bio" error />
</template>
```

## Props

| Prop         | Type      | Default | Description          |
| ------------ | --------- | ------- | -------------------- |
| `modelValue` | `string`  | —       | Text value (v-model) |
| `label`      | `string`  | —       | Label text           |
| `disabled`   | `boolean` | `false` | Disable the textarea |
| `error`      | `boolean` | `false` | Show error border    |

## Events

| Event               | Payload  | Description      |
| ------------------- | -------- | ---------------- |
| `update:modelValue` | `string` | Emitted on input |

## Notes

- All native `<textarea>` attributes forwarded via `v-bind="$attrs"`
- Resizable vertically with `resize-y`
