# SaCarousel

Slide-based carousel with autoplay, keyboard navigation, touch/swipe and dot indicators.

## Usage

```vue
<script setup>
import { SaCarousel } from "sa-ui";
import { ref } from "vue";

const slide = ref(0);
</script>

<template>
  <SaCarousel v-model="slide" autoplay>
    <div>Slide 1</div>
    <div>Slide 2</div>
    <div>Slide 3</div>
  </SaCarousel>
</template>
```

## Props

| Prop             | Type      | Default | Description                   |
| ---------------- | --------- | ------- | ----------------------------- |
| `modelValue`     | `number`  | `0`     | Current slide index (v-model) |
| `autoplay`       | `boolean` | `false` | Enable auto-advance           |
| `interval`       | `number`  | `4000`  | Autoplay interval (ms)        |
| `loop`           | `boolean` | `true`  | Loop back to start            |
| `showIndicators` | `boolean` | `true`  | Show dot indicators           |
| `showArrows`     | `boolean` | `true`  | Show prev/next arrows         |
| `pauseOnHover`   | `boolean` | `true`  | Pause autoplay on hover       |

## Slots

| Slot      | Description                                    |
| --------- | ---------------------------------------------- |
| `default` | Slide elements (each direct child = one slide) |

## Events

| Event               | Payload  | Description             |
| ------------------- | -------- | ----------------------- |
| `update:modelValue` | `number` | Emitted on slide change |

## Accessibility

- `role="region"` with `aria-roledescription="carousel"`
- Arrow key navigation (Left/Right)
- Touch/swipe support
