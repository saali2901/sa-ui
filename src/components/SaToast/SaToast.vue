<script setup lang="ts">
import { tv } from "tailwind-variants";
import { X } from "lucide-vue-next";
import { ref, onUnmounted } from "vue";
import type { ToastMessage, ToastPosition } from "@/types";

defineOptions({ name: "SaToast" });

interface Props {
  position?: ToastPosition;
}

const props = withDefaults(defineProps<Props>(), {
  position: "top-right",
});

const toasts = ref<
  (ToastMessage & { timer?: ReturnType<typeof setTimeout> })[]
>([]);
let nextId = 0;

const add = (type: ToastMessage["type"], message: string, duration = 4000) => {
  const id = nextId++;
  const toast: ToastMessage & { timer?: ReturnType<typeof setTimeout> } = {
    id,
    type,
    message,
    duration,
  };

  if (duration > 0) {
    toast.timer = setTimeout(() => remove(id), duration);
  }

  toasts.value.push(toast);
  return id;
};

const remove = (id: number) => {
  const index = toasts.value.findIndex((t) => t.id === id);
  if (index !== -1) {
    const toast = toasts.value[index];
    if (toast.timer) clearTimeout(toast.timer);
    toasts.value.splice(index, 1);
  }
};

const clear = () => {
  toasts.value.forEach((t) => {
    if (t.timer) clearTimeout(t.timer);
  });
  toasts.value = [];
};

// Expose methods for programmatic use via template ref
defineExpose({ add, remove, clear });

onUnmounted(() => {
  clear();
});

const toastVariants = tv({
  base: "flex items-center gap-3 px-4 py-3 text-sm shadow-lg border border-border min-w-[300px] max-w-[420px]",
  variants: {
    type: {
      success: "bg-success-soft text-success-text",
      error: "bg-error-soft text-error-text",
      warning: "bg-warning-soft text-warning-text",
      info: "bg-info-soft text-info-text",
    },
  },
});

const positionClasses: Record<ToastPosition, string> = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
};
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed z-100 flex flex-col gap-2 pointer-events-none"
      :class="positionClasses[props.position]"
    >
      <TransitionGroup
        enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-200 ease-in"
        enter-from-class="opacity-0 translate-y-2"
        leave-to-class="opacity-0 translate-x-4"
        move-class="transition-transform duration-300"
      >
        <div
          v-for="toast in toasts"
          :key="toast.id"
          :class="toastVariants({ type: toast.type })"
          class="pointer-events-auto"
          role="alert"
        >
          <span class="flex-1">{{ toast.message }}</span>
          <button
            class="shrink-0 cursor-pointer opacity-70 hover:opacity-100 duration-200"
            aria-label="Dismiss"
            @click="remove(toast.id)"
          >
            <X :size="14" />
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>
