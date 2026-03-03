# SaSpinner

CSS-based loading spinner with size, color, and label options.

## Usage

```vue
<script setup>
import { SaSpinner } from "sa-ui";
</script>

<template>
  <SaSpinner />
  <SaSpinner size="lg" color="secondary" label="Loading data…" />
</template>
```

## Props

| Prop    | Type                                             | Default     | Description                 |
| ------- | ------------------------------------------------ | ----------- | --------------------------- |
| `size`  | `'sm' \| 'md' \| 'lg'`                           | `'md'`      | Spinner size                |
| `color` | `'primary' \| 'secondary' \| 'muted' \| 'white'` | `'primary'` | Spinner color               |
| `label` | `string`                                         | `''`        | Visible label below spinner |

## Accessibility

- `role="status"` for screen reader announcements
- `sr-only` fallback text when no label provided
