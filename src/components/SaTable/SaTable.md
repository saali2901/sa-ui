# SaTable

Data table with column configuration, striped/hoverable rows, and empty state.

## Usage

```vue
<script setup>
import { SaTable } from "sa-ui";

const columns = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "role", label: "Role", align: "center" },
];

const rows = [
  { name: "Alice", email: "alice@example.com", role: "Admin" },
  { name: "Bob", email: "bob@example.com", role: "Editor" },
];
</script>

<template>
  <SaTable :columns="columns" :rows="rows" striped hoverable />
</template>
```

## Props

| Prop        | Type               | Default               | Description          |
| ----------- | ------------------ | --------------------- | -------------------- |
| `columns`   | `TableColumn<T>[]` | —                     | Column definitions   |
| `rows`      | `T[]`              | —                     | Row data             |
| `striped`   | `boolean`          | `false`               | Striped row styling  |
| `hoverable` | `boolean`          | `false`               | Hover effect on rows |
| `emptyText` | `string`           | `'No data available'` | Empty state message  |

## Types

```ts
interface TableColumn<T = Record<string, unknown>> {
  key: keyof T & string;
  label: string;
  sortable?: boolean;
  align?: "left" | "center" | "right";
  width?: string;
}
```

## Slots

| Slot         | Description                       |
| ------------ | --------------------------------- |
| `cell-[key]` | Custom cell renderer for a column |
