# SaSkeleton

Loading placeholder with text, circle, and rectangular variants.

## Usage

```vue
<script setup>
import { SaSkeleton } from "sa-ui";
</script>

<template>
  <SaSkeleton variant="text" :lines="3" />
  <SaSkeleton variant="circle" width="60px" height="60px" />
  <SaSkeleton variant="rectangular" width="100%" height="120px" />
</template>
```

## Props

| Prop      | Type                                  | Default  | Description                              |
| --------- | ------------------------------------- | -------- | ---------------------------------------- |
| `variant` | `'text' \| 'circle' \| 'rectangular'` | `'text'` | Shape variant                            |
| `width`   | `string`                              | —        | Custom width (CSS value)                 |
| `height`  | `string`                              | —        | Custom height (CSS value)                |
| `lines`   | `number`                              | `1`      | Number of text lines (text variant only) |

## Notes

- Circle defaults to 3rem × 3rem if no width/height
- Multiple lines: last line is 75% width for natural look
- Animated with `animate-pulse`
