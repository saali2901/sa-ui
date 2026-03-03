# SaCard

Content container with image, title, body and actions slots.

## Usage

```vue
<script setup>
import { SaCard, SaButton } from "sa-ui";
</script>

<template>
  <SaCard>
    <template #image>
      <img src="/photo.jpg" alt="Sample" />
    </template>
    <template #title>Card Title</template>
    <template #body>Card description text.</template>
    <template #actions>
      <SaButton size="sm">Action</SaButton>
    </template>
  </SaCard>
</template>
```

## Slots

| Slot      | Description                  |
| --------- | ---------------------------- |
| `image`   | Optional image section (top) |
| `title`   | Card heading                 |
| `body`    | Card body text               |
| `actions` | Action buttons (bottom)      |

## Notes

- Empty slots are automatically hidden
- Add `class="max-w-sm"` etc. to control width
