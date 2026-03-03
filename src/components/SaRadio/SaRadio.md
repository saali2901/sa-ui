# SaRadio

Radio button group with vertical/horizontal layout.

## Usage

```vue
<script setup>
import { SaRadio } from "sa-ui";
import { ref } from "vue";

const options = [
  { label: "Email", value: "email" },
  { label: "Phone", value: "phone" },
  { label: "Fax", value: "fax", disabled: true },
];
const selected = ref("email");
</script>

<template>
  <SaRadio v-model="selected" :options="options" name="contact" />
  <SaRadio
    v-model="selected"
    :options="options"
    name="contact-h"
    direction="horizontal"
  />
</template>
```

## Props

| Prop         | Type                         | Default      | Description              |
| ------------ | ---------------------------- | ------------ | ------------------------ |
| `modelValue` | `string \| number`           | —            | Selected value (v-model) |
| `options`    | `RadioOption[]`              | —            | Available options        |
| `name`       | `string`                     | —            | HTML name attribute      |
| `disabled`   | `boolean`                    | `false`      | Disable all options      |
| `direction`  | `'vertical' \| 'horizontal'` | `'vertical'` | Layout direction         |

## Types

```ts
interface RadioOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}
```

## Events

| Event               | Payload            | Description          |
| ------------------- | ------------------ | -------------------- |
| `update:modelValue` | `string \| number` | Emitted on selection |

## Accessibility

- `role="radiogroup"` on wrapper
- Native `<input type="radio">` elements
