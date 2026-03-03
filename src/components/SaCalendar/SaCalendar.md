# SaCalendar

Date picker calendar with i18n support.

## Usage

```vue
<script setup>
import { SaCalendar } from "sa-ui";
import { ref } from "vue";

const date = ref(null);
</script>

<template>
  <SaCalendar v-model="date" />
</template>
```

## Props

| Prop             | Type           | Default             | Description                 |
| ---------------- | -------------- | ------------------- | --------------------------- |
| `modelValue`     | `Date \| null` | `null`              | Selected date (v-model)     |
| `monthLabels`    | `string[]`     | English months      | Localized month names       |
| `dayLabels`      | `string[]`     | `['Mon', …, 'Sun']` | Localized day abbreviations |
| `todayLabel`     | `string`       | `'Today'`           | Label for today button      |
| `prevMonthLabel` | `string`       | `'Previous month'`  | Aria label for prev button  |
| `nextMonthLabel` | `string`       | `'Next month'`      | Aria label for next button  |

## Events

| Event               | Payload | Description                     |
| ------------------- | ------- | ------------------------------- |
| `update:modelValue` | `Date`  | Emitted when a date is selected |
