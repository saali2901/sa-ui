# SaAlert

A static colored banner for important messages. Use for inline notifications (not for programmatic toasts).

## Usage

```vue
<script setup>
import { SaAlert } from "sa-ui";
</script>

<template>
  <SaAlert color="success">Operation completed.</SaAlert>
  <SaAlert color="error" dismissible @dismiss="handleDismiss">
    Something went wrong.
  </SaAlert>
</template>
```

## Props

| Prop          | Type                                          | Default  | Description             |
| ------------- | --------------------------------------------- | -------- | ----------------------- |
| `color`       | `'success' \| 'error' \| 'warning' \| 'info'` | `'info'` | Color variant           |
| `dismissible` | `boolean`                                     | `false`  | Show dismiss (X) button |

## Slots

| Slot      | Description   |
| --------- | ------------- |
| `default` | Alert message |

## Events

| Event     | Payload | Description                         |
| --------- | ------- | ----------------------------------- |
| `dismiss` | —       | Emitted when dismiss button clicked |
