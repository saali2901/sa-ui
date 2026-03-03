# SaUploadArea

Drag-and-drop file upload area with click-to-browse fallback.

## Usage

```vue
<script setup>
import { SaUploadArea } from "sa-ui";

const onFiles = (event) => {
  console.log(event);
};
</script>

<template>
  <SaUploadArea
    drop-text="Drop images here"
    accept=".png,.jpg"
    multiple
    @changed="onFiles"
  />
</template>
```

## Props

| Prop       | Type      | Default | Description                            |
| ---------- | --------- | ------- | -------------------------------------- |
| `dropText` | `string`  | —       | Custom instruction text                |
| `accept`   | `string`  | —       | Accepted file types (e.g. `.png,.jpg`) |
| `multiple` | `boolean` | `false` | Allow multiple files                   |

## Events

| Event     | Payload | Description                                |
| --------- | ------- | ------------------------------------------ |
| `changed` | `Event` | Emitted when files are selected or dropped |
