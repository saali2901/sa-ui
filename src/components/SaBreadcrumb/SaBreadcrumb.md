# SaBreadcrumb

Navigation breadcrumb trail with configurable separator.

## Usage

```vue
<script setup>
import { SaBreadcrumb } from "sa-ui";

const items = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Detail" },
];
</script>

<template>
  <SaBreadcrumb :items="items" />
  <SaBreadcrumb :items="items" separator="›" />
</template>
```

## Props

| Prop        | Type               | Default | Description         |
| ----------- | ------------------ | ------- | ------------------- |
| `items`     | `BreadcrumbItem[]` | —       | Breadcrumb items    |
| `separator` | `string`           | `'/'`   | Separator character |

## Types

```ts
interface BreadcrumbItem {
  label: string;
  href?: string; // Omit for current page (last item)
}
```

## Accessibility

- Uses `<nav aria-label="Breadcrumb">`
- Last item gets `aria-current="page"` when it has no `href`
