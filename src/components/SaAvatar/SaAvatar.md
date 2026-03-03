# SaAvatar

Displays a user avatar with image or initials fallback.

## Usage

```vue
<script setup>
import { SaAvatar } from "sa-ui";
</script>

<template>
  <SaAvatar name="John Doe" size="lg" />
  <SaAvatar src="https://example.com/photo.jpg" name="Jane" />
</template>
```

## Props

| Prop    | Type                                  | Default     | Description                   |
| ------- | ------------------------------------- | ----------- | ----------------------------- |
| `src`   | `string`                              | —           | Image URL                     |
| `alt`   | `string`                              | `''`        | Image alt text                |
| `name`  | `string`                              | —           | Full name (used for initials) |
| `size`  | `'sm' \| 'md' \| 'lg' \| 'xl'`        | `'md'`      | Avatar size                   |
| `color` | `'primary' \| 'secondary' \| 'muted'` | `'primary'` | Background color for initials |
