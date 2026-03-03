<script setup lang="ts">
import SaAvatar from "./SaAvatar.vue";
</script>

<template>
  <Story title="SaAvatar" icon="lucide:user-circle">
    <Variant title="Initials">
      <div class="flex items-center gap-3">
        <SaAvatar name="John Doe" size="sm" />
        <SaAvatar name="John Doe" size="md" />
        <SaAvatar name="John Doe" size="lg" />
        <SaAvatar name="John Doe" size="xl" />
      </div>
    </Variant>
    <Variant title="Colors">
      <div class="flex items-center gap-3">
        <SaAvatar name="Primary" color="primary" />
        <SaAvatar name="Secondary" color="secondary" />
        <SaAvatar name="Muted" color="muted" />
      </div>
    </Variant>
    <Variant title="With image">
      <SaAvatar src="https://i.pravatar.cc/100" name="Jane Smith" size="lg" />
    </Variant>
    <Variant title="Single name">
      <SaAvatar name="Alice" />
    </Variant>
    <Variant title="No name (fallback)">
      <SaAvatar />
    </Variant>
  </Story>
</template>
