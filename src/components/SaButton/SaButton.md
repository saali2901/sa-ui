# SaButton

Versatile button component with size, color, disabled and loading states.

## Usage

```vue
<script setup>
import { SaButton } from "sa-ui";
</script>

<template>
  <SaButton>Click me</SaButton>
  <SaButton color="secondary" size="lg">Large</SaButton>
  <SaButton loading>Saving…</SaButton>
  <SaButton disabled>Disabled</SaButton>
</template>
```

## Props

| Prop       | Type                                     | Default     | Description                   |
| ---------- | ---------------------------------------- | ----------- | ----------------------------- |
| `size`     | `'sm' \| 'lg'`                           | `'sm'`      | Button size                   |
| `color`    | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Color variant                 |
| `disabled` | `boolean`                                | `false`     | Disable the button            |
| `loading`  | `boolean`                                | `false`     | Show spinner & disable button |

## Slots

| Slot      | Description  |
| --------- | ------------ |
| `default` | Button label |

## Notes

- When `loading` is true, a `SaSpinner` is automatically shown
- All native `<button>` attributes are forwarded via `v-bind="$attrs"`
