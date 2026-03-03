# SaDropdown

Select dropdown with search-free option list, keyboard support, and click-outside dismissal.

## Usage

```vue
<script setup>
import { SaDropdown } from "sa-ui";
import { ref } from "vue";

const options = [
  { value: "vue", label: "Vue.js" },
  { value: "react", label: "React", disabled: true },
];
const selected = ref(null);
</script>

<template>
  <SaDropdown
    v-model="selected"
    :options="options"
    label="Framework"
    placeholder="Choose…"
  />
</template>
```

## Props

| Prop          | Type                       | Default              | Description              |
| ------------- | -------------------------- | -------------------- | ------------------------ |
| `modelValue`  | `string \| number \| null` | `null`               | Selected value (v-model) |
| `options`     | `DropdownOption[]`         | —                    | Available options        |
| `label`       | `string`                   | —                    | Label above dropdown     |
| `placeholder` | `string`                   | `'Select an option'` | Placeholder text         |
| `disabled`    | `boolean`                  | `false`              | Disable the dropdown     |

## Types

```ts
interface DropdownOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}
```

## Events

| Event               | Payload            | Description          |
| ------------------- | ------------------ | -------------------- |
| `update:modelValue` | `string \| number` | Emitted on selection |
