# SaStepper

Step indicator for multi-step workflows.

## Usage

```vue
<script setup>
import { SaStepper } from "sa-ui";

const steps = [
  { title: "Account", description: "Create account" },
  { title: "Profile", description: "Set up profile" },
  { title: "Done", description: "Complete" },
];
</script>

<template>
  <SaStepper :steps="steps" :current-step="1" />
</template>
```

## Props

| Prop          | Type            | Default | Description                      |
| ------------- | --------------- | ------- | -------------------------------- |
| `steps`       | `StepperStep[]` | —       | Array of step definitions        |
| `currentStep` | `number`        | —       | Zero-based index of current step |

## Types

```ts
interface StepperStep {
  title: string;
  description: string;
}
```
