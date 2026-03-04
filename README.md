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

```ts
// Import components
import { SaButton, SaInput } from "@saali2901/sa-ui";

// Import styles (required)
import "@saali2901/sa-ui/style.css";
```

```vue
<template>
  <SaButton variant="primary" @click="handleClick">
    Click me
  </SaButton>
</template>
```

## License

MIT