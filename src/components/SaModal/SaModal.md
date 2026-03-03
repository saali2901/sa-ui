# SaModal

Accessible modal dialog with backdrop blur, focus trap, scroll lock, and keyboard support.

## Usage

```vue
<script setup>
import { SaModal, SaButton } from "sa-ui";
import { ref } from "vue";

const isOpen = ref(false);
</script>

<template>
  <SaButton @click="isOpen = true">Open</SaButton>
  <SaModal :is-open="isOpen" @close="isOpen = false">
    <template #title>Confirm</template>
    <template #body>Are you sure?</template>
    <template #actions>
      <SaButton @click="isOpen = false">Yes</SaButton>
    </template>
  </SaModal>
</template>
```

## Props

| Prop              | Type      | Default | Description             |
| ----------------- | --------- | ------- | ----------------------- |
| `isOpen`          | `boolean` | —       | Show/hide the modal     |
| `closeOnBackdrop` | `boolean` | `true`  | Close on backdrop click |
| `closeOnEscape`   | `boolean` | `true`  | Close on Escape key     |

## Slots

| Slot      | Description    |
| --------- | -------------- |
| `title`   | Modal heading  |
| `body`    | Modal content  |
| `actions` | Action buttons |

## Events

| Event   | Payload | Description                     |
| ------- | ------- | ------------------------------- |
| `close` | —       | Emitted when close is requested |

## Accessibility

- `role="dialog"` with `aria-modal="true"`
- Focus trap (Tab cycling)
- Body scroll lock when open
- Escape key to close
- Auto-focuses close button on open
