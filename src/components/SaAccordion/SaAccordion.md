# SaAccordion

Collapsible content panels for presenting information in a limited space.

## Usage

```vue
<script setup>
import { SaAccordion } from "sa-ui";
import { ref } from "vue";

const items = [
  { key: "faq-1", title: "What is SA UI?" },
  { key: "faq-2", title: "How to install?" },
  { key: "faq-3", title: "Disabled item", disabled: true },
];
const open = ref([]);
</script>

<template>
  <SaAccordion v-model="open" :items="items">
    <template #faq-1>SA UI is a Vue 3 component library.</template>
    <template #faq-2>Install via npm: npm install sa-ui</template>
  </SaAccordion>
</template>
```

## Props

| Prop         | Type              | Default | Description                        |
| ------------ | ----------------- | ------- | ---------------------------------- |
| `items`      | `AccordionItem[]` | —       | Array of accordion items           |
| `modelValue` | `string[]`        | `[]`    | Currently open item keys (v-model) |
| `multiple`   | `boolean`         | `false` | Allow multiple items open at once  |

## Types

```ts
interface AccordionItem {
  key: string;
  title: string;
  disabled?: boolean;
}
```

## Slots

| Slot         | Description                      |
| ------------ | -------------------------------- |
| `[item.key]` | Content for each accordion panel |

## Events

| Event               | Payload    | Description                    |
| ------------------- | ---------- | ------------------------------ |
| `update:modelValue` | `string[]` | Emitted when open items change |
