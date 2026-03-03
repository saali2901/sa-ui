# SaCheckbox

Accessible checkbox with native `<input>` and custom styling.

## Usage

```vue
<script setup>
import { SaCheckbox } from "sa-ui";
import { ref } from "vue";

const agreed = ref(false);
</script>

<template>
  <SaCheckbox v-model="agreed" label="I agree" name="terms" />
</template>
```

## Props

| Prop         | Type      | Default | Description             |
| ------------ | --------- | ------- | ----------------------- |
| `modelValue` | `boolean` | `false` | Checked state (v-model) |
| `label`      | `string`  | `''`    | Label text              |
| `name`       | `string`  | —       | Form field name         |
| `disabled`   | `boolean` | `false` | Disable the checkbox    |

## Events

| Event               | Payload   | Description       |
| ------------------- | --------- | ----------------- |
| `update:modelValue` | `boolean` | Emitted on toggle |

## Accessibility

- Uses a real `<input type="checkbox">` with `sr-only` class
- Wrapped in `<label>` for click-anywhere behavior
