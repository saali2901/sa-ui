# SaBadge

Small status indicator or label.

## Usage

```vue
<script setup>
import { SaBadge } from "sa-ui";
</script>

<template>
  <SaBadge>New</SaBadge>
  <SaBadge color="secondary" size="lg">Updated</SaBadge>
  <SaBadge size="dot" />
</template>
```

## Props

| Prop    | Type                       | Default     | Description   |
| ------- | -------------------------- | ----------- | ------------- |
| `size`  | `'sm' \| 'lg' \| 'dot'`    | `'sm'`      | Badge size    |
| `color` | `'primary' \| 'secondary'` | `'primary'` | Color variant |

## Slots

| Slot      | Description   |
| --------- | ------------- |
| `default` | Badge content |
