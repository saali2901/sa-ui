# SaPagination

Page navigation with ellipsis, previous/next buttons, and configurable sibling count.

## Usage

```vue
<script setup>
import { SaPagination } from "sa-ui";
import { ref } from "vue";

const page = ref(1);
</script>

<template>
  <SaPagination v-model="page" :total-pages="50" />
</template>
```

## Props

| Prop            | Type     | Default      | Description                |
| --------------- | -------- | ------------ | -------------------------- |
| `modelValue`    | `number` | —            | Current page (v-model)     |
| `totalPages`    | `number` | —            | Total number of pages      |
| `siblingCount`  | `number` | `1`          | Pages shown around current |
| `previousLabel` | `string` | `'Previous'` | Aria label for prev button |
| `nextLabel`     | `string` | `'Next'`     | Aria label for next button |

## Events

| Event               | Payload  | Description            |
| ------------------- | -------- | ---------------------- |
| `update:modelValue` | `number` | Emitted on page change |

## Accessibility

- `<nav>` with `aria-label="Pagination"`
- `aria-current="page"` on active page button
