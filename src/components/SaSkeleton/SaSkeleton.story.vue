<script setup lang="ts">
import SaSkeleton from "./SaSkeleton.vue";
</script>

<template>
  <Story title="SaSkeleton" icon="lucide:loader">
    <Variant title="Text (single line)">
      <SaSkeleton variant="text" />
    </Variant>
    <Variant title="Text (multiple lines)">
      <SaSkeleton variant="text" :lines="4" />
    </Variant>
    <Variant title="Circle">
      <SaSkeleton variant="circle" />
    </Variant>
    <Variant title="Circle (large)">
      <SaSkeleton variant="circle" width="80px" height="80px" />
    </Variant>
    <Variant title="Rectangular">
      <SaSkeleton variant="rectangular" width="100%" height="120px" />
    </Variant>
    <Variant title="Card layout">
      <div class="max-w-xs space-y-3">
        <SaSkeleton variant="rectangular" width="100%" height="140px" />
        <SaSkeleton variant="text" width="75%" />
        <SaSkeleton variant="text" :lines="2" />
      </div>
    </Variant>
  </Story>
</template>
