# SaTag

Small colored chip/tag, optionally removable.

## Usage

```vue
<script setup>
import { SaTag } from "sa-ui";
</script>

<template>
  <SaTag color="primary">Vue.js</SaTag>
  <SaTag color="success" removable @remove="handleRemove">TypeScript</SaTag>
</template>
```

## Props

| Prop        | Type                                                                      | Default     | Description            |
| ----------- | ------------------------------------------------------------------------- | ----------- | ---------------------- |
| `color`     | `'primary' \| 'secondary' \| 'success' \| 'error' \| 'warning' \| 'info'` | `'primary'` | Color variant          |
| `size`      | `'sm' \| 'md'`                                                            | `'sm'`      | Tag size               |
| `removable` | `boolean`                                                                 | `false`     | Show remove (X) button |

## Slots

| Slot      | Description |
| --------- | ----------- |
| `default` | Tag label   |

## Events

| Event    | Payload | Description                        |
| -------- | ------- | ---------------------------------- |
| `remove` | —       | Emitted when remove button clicked |
