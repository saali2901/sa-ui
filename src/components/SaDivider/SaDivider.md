# SaDivider

Visual separator for content sections, horizontal or vertical.

## Usage

```vue
<script setup>
import { SaDivider } from "sa-ui";
</script>

<template>
  <SaDivider />
  <SaDivider label="OR" />
  <SaDivider direction="vertical" />
</template>
```

## Props

| Prop        | Type                         | Default        | Description                               |
| ----------- | ---------------------------- | -------------- | ----------------------------------------- |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | Divider direction                         |
| `label`     | `string`                     | —              | Optional centered label (horizontal only) |

## Accessibility

- Uses `role="separator"`
