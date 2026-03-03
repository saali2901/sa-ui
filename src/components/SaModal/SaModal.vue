<script setup lang="ts">
import { watch, onUnmounted, ref, nextTick } from "vue";
import { X } from "lucide-vue-next";

defineOptions({ name: "SaModal" });

interface Props {
  isOpen: boolean;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  closeOnBackdrop: true,
  closeOnEscape: true,
});

const emit = defineEmits<{
  close: [];
}>();

const modalRef = ref<HTMLElement | null>(null);

// Escape key handler
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape" && props.closeOnEscape) {
    emit("close");
  }
};

// Focus trap: keep focus inside modal
const handleFocusTrap = (e: KeyboardEvent) => {
  if (e.key !== "Tab" || !modalRef.value) return;

  const focusable = modalRef.value.querySelectorAll<HTMLElement>(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  );
  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
};

// Lock body scroll & add listeners when open
watch(
  () => props.isOpen,
  async (open) => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeydown);
      document.addEventListener("keydown", handleFocusTrap);
      await nextTick();
      // Auto-focus the close button
      modalRef.value?.querySelector<HTMLElement>("button")?.focus();
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("keydown", handleFocusTrap);
    }
  },
);

onUnmounted(() => {
  document.body.style.overflow = "";
  document.removeEventListener("keydown", handleKeydown);
  document.removeEventListener("keydown", handleFocusTrap);
});

const handleBackdropClick = () => {
  if (props.closeOnBackdrop) {
    emit("close");
  }
};
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200 ease-out"
      leave-active-class="transition-opacity duration-200 ease-in"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 flex items-center justify-center z-50"
      >
        <!-- Blurred backdrop -->
        <div
          class="absolute inset-0 bg-black/30 backdrop-blur"
          @click="handleBackdropClick"
        />
        <!-- Modal content -->
        <div
          ref="modalRef"
          class="bg-surface shadow p-6 w-full max-w-md relative z-10 transition-all duration-200"
          role="dialog"
          aria-modal="true"
          @click.stop
        >
          <div class="flex justify-end">
            <button
              class="cursor-pointer text-muted hover:text-body duration-200 p-1"
              aria-label="Close"
              @click="emit('close')"
            >
              <X :size="20" />
            </button>
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
    </Transition>
  </Teleport>
</template>
