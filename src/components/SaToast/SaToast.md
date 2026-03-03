# SaToast

Programmatic toast notification system with auto-dismiss and multiple positions.

## Usage

```vue
<script setup>
import { SaToast } from "sa-ui";
import { ref } from "vue";

const toastRef = ref();

const notify = () => {
  toastRef.value.add("success", "Saved!", 4000);
};
</script>

<template>
  <button @click="notify">Save</button>
  <SaToast ref="toastRef" position="top-right" />
</template>
```

## Props

| Prop       | Type            | Default       | Description     |
| ---------- | --------------- | ------------- | --------------- |
| `position` | `ToastPosition` | `'top-right'` | Screen position |

## Exposed Methods

| Method   | Signature                              | Description             |
| -------- | -------------------------------------- | ----------------------- |
| `add`    | `(type, message, duration?) => number` | Add a toast, returns ID |
| `remove` | `(id: number) => void`                 | Remove toast by ID      |
| `clear`  | `() => void`                           | Remove all toasts       |

## Types

```ts
type ToastType = "success" | "error" | "warning" | "info";
type ToastPosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left"
  | "top-center"
  | "bottom-center";
```

## Notes

- Uses `<Teleport to="body">` — renders at document root
- Auto-dismiss after `duration` ms (default 4000, pass 0 to disable)
- Animated with `TransitionGroup`
