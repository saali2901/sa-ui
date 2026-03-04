# Sa UI

A lightweight, accessible Vue 3 component library built with TypeScript, Tailwind CSS 4 and Tailwind Variants.

## Features

- 29 ready-to-use components
- Written in Vue 3 `<script setup>` + TypeScript
- Styled with Tailwind CSS 4 & Tailwind Variants
- Tree-shakable ESM & UMD builds
- Full type declarations out of the box
- Unit tests with Vitest
- Interactive docs with Histoire

## Components

| Category | Components |
| --- | --- |
| **Layout** | Accordion, Card, Divider, Modal, Tabs |
| **Navigation** | Breadcrumb, Dropdown, Pagination, Stepper |
| **Data Entry** | Button, Checkbox, Input, Radio, Switch, Textarea, FormField, UploadArea, Calendar |
| **Data Display** | Avatar, Badge, Carousel, Table, Tag, Tooltip |
| **Feedback** | Alert, Progress, Skeleton, Spinner, Toast |

## Installation

```bash
npm install @saali2901/sa-ui
```

### Peer dependencies

The library requires **Vue ≥ 3.2** as a peer dependency.

## Usage

### Option 1 – Vue Plugin (register all components globally)

```ts
// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import SaUI from "@saali2901/sa-ui";
import "@saali2901/sa-ui/style.css";

const app = createApp(App);
app.use(SaUI);
app.mount("#app");
```

All components are now available in any template without additional imports:

```vue
<template>
  <SaButton color="primary" @click="handleClick">Click me</SaButton>
  <SaInput v-model="name" placeholder="Enter name" />
</template>
```

### Option 2 – Import individual components (tree-shaking)

```ts
// main.ts
import "@saali2901/sa-ui/style.css";
```

```vue
<script setup lang="ts">
import { SaButton, SaInput } from "@saali2901/sa-ui";
</script>

<template>
  <SaButton color="primary" @click="handleClick">Click me</SaButton>
  <SaInput v-model="name" placeholder="Enter name" />
</template>
```

> **Note:** The CSS (`@saali2901/sa-ui/style.css`) must be imported once in either variant – typically in `main.ts` or your root layout.

### TypeScript Types

All prop types are included and can be imported as needed:

```ts
import type {
  AccordionItem,
  BreadcrumbItem,
  DropdownOption,
  TabItem,
  TableColumn,
  StepperStep,
  RadioOption,
  ToastMessage,
} from "@saali2901/sa-ui";
```

### Composables

```ts
import { useClickOutside } from "@saali2901/sa-ui";
```

## License

MIT