# SaTabs

Tab navigation with underline and pills variants.

## Usage

```vue
<script setup>
import { SaTabs } from "sa-ui";
import { ref } from "vue";

const tabs = [
  { key: "overview", label: "Overview" },
  { key: "features", label: "Features" },
  { key: "api", label: "API", disabled: true },
];
const active = ref("overview");
</script>

<template>
  <SaTabs v-model="active" :tabs="tabs">
    <template #overview>Overview content</template>
    <template #features>Features content</template>
  </SaTabs>
</template>
```

## Props

| Prop         | Type                     | Default       | Description              |
| ------------ | ------------------------ | ------------- | ------------------------ |
| `tabs`       | `TabItem[]`              | —             | Tab definitions          |
| `modelValue` | `string`                 | —             | Active tab key (v-model) |
| `variant`    | `'underline' \| 'pills'` | `'underline'` | Visual style             |

## Types

```ts
interface TabItem {
  key: string;
  label: string;
  disabled?: boolean;
}
```

## Slots

| Slot        | Description                |
| ----------- | -------------------------- |
| `[tab.key]` | Content panel for each tab |

## Events

| Event               | Payload  | Description           |
| ------------------- | -------- | --------------------- |
| `update:modelValue` | `string` | Emitted on tab change |

## Accessibility

- `role="tablist"` on tab container
- `role="tab"` with `aria-selected` on each tab
- `role="tabpanel"` on content
