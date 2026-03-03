# SaSwitch

Toggle switch with form integration and size variants.

## Usage

```vue
<script setup>
import { SaSwitch } from "sa-ui";
import { ref } from "vue";

const darkMode = ref(false);
</script>

<template>
  <SaSwitch v-model="darkMode" label="Dark mode" name="theme" />
</template>
```

## Props

| Prop         | Type                   | Default | Description            |
| ------------ | ---------------------- | ------- | ---------------------- |
| `modelValue` | `boolean`              | `false` | Toggle state (v-model) |
| `label`      | `string`               | `''`    | Label text             |
| `name`       | `string`               | —       | Form field name        |
| `disabled`   | `boolean`              | `false` | Disable the switch     |
| `size`       | `'sm' \| 'md' \| 'lg'` | `'md'`  | Switch size            |

## Events

| Event               | Payload   | Description       |
| ------------------- | --------- | ----------------- |
| `update:modelValue` | `boolean` | Emitted on toggle |

## Accessibility

- Hidden `<input type="checkbox" role="switch">`
- Wrapped in `<label>` for click-anywhere behavior
