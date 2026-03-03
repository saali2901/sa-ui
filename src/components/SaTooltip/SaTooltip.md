# SaTooltip

Hover/focus tooltip with configurable position and delay.

## Usage

```vue
<script setup>
import { SaTooltip, SaButton } from "sa-ui";
</script>

<template>
  <SaTooltip text="Save changes" position="top">
    <SaButton>Save</SaButton>
  </SaTooltip>
</template>
```

## Props

| Prop       | Type                                     | Default | Description      |
| ---------- | ---------------------------------------- | ------- | ---------------- |
| `text`     | `string`                                 | —       | Tooltip text     |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Tooltip position |
| `delay`    | `number`                                 | `200`   | Show delay (ms)  |

## Slots

| Slot      | Description     |
| --------- | --------------- |
| `default` | Trigger element |

## Accessibility

- `role="tooltip"` on tooltip content
- Triggers on `mouseenter`/`mouseleave` and `focusin`/`focusout`
