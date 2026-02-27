<script setup lang="ts">
import { X } from "lucide-vue-next";

defineOptions({
  name: "SaModal",
});

defineEmits(["close"]);

defineProps({
  isOpen: Boolean,
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <!-- Blurred backdrop -->
      <div class="absolute inset-0 bg-black/10 backdrop-blur"></div>
      <!-- Modal content -->
      <div class="bg-surface shadow p-6 w-full max-w-md relative">
        <div class="flex justify-end">
          <X
            class="cursor-pointer text-muted hover:text-body duration-200"
            @click="$emit('close')"
          />
        </div>
        <div
          v-if="$slots.title"
          class="mb-2 text-xl font-semibold text-heading"
        >
          <slot name="title" />
        </div>
        <div v-if="$slots.body" class="mb-6 text-sm text-body">
          <slot name="body" />
        </div>
        <div class="flex gap-2">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </Teleport>
</template>
