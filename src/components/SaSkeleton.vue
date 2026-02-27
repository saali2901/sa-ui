<script setup lang="ts">
defineOptions({
  name: "SaSkeleton",
});
</script>

<template>
  <div class="animate-pulse rounded bg-muted">
    <slot />
  </div>
</template>
