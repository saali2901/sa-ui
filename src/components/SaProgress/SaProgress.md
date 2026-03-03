# SaProgress

Progress bar with size, color, and optional percentage label.

## Usage

```vue
<script setup>
import { SaProgress } from "sa-ui";
</script>

<template>
  <SaProgress :value="75" />
  <SaProgress :value="3" :max="10" color="success" show-label size="lg" />
</template>
```

## Props

| Prop        | Type                                             | Default     | Description          |
| ----------- | ------------------------------------------------ | ----------- | -------------------- |
| `value`     | `number`                                         | `0`         | Current value        |
| `max`       | `number`                                         | `100`       | Maximum value        |
| `size`      | `'sm' \| 'md' \| 'lg'`                           | `'md'`      | Bar height           |
| `color`     | `'primary' \| 'success' \| 'warning' \| 'error'` | `'primary'` | Bar color            |
| `showLabel` | `boolean`                                        | `false`     | Show percentage text |

## Accessibility

- `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
