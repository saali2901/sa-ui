<script setup lang="ts">
import { computed } from "vue";
import { tv } from "tailwind-variants";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

defineOptions({ name: "SaPagination" });

interface Props {
  modelValue: number;
  totalPages: number;
  siblingCount?: number;
  previousLabel?: string;
  nextLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  siblingCount: 1,
  previousLabel: "Previous",
  nextLabel: "Next",
});

const emit = defineEmits<{
  "update:modelValue": [page: number];
}>();

const goTo = (page: number) => {
  if (page >= 1 && page <= props.totalPages) {
    emit("update:modelValue", page);
  }
};

// Generate page range with ellipsis
const pages = computed(() => {
  const total = props.totalPages;
  const current = props.modelValue;
  const sibling = props.siblingCount;

  const range = (start: number, end: number) =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

  // If total pages is small enough, show all
  if (total <= 5 + sibling * 2) {
    return range(1, total);
  }

  const leftSibling = Math.max(current - sibling, 1);
  const rightSibling = Math.min(current + sibling, total);

  const showLeftDots = leftSibling > 2;
  const showRightDots = rightSibling < total - 1;

  if (!showLeftDots && showRightDots) {
    const leftRange = range(1, 3 + sibling * 2);
    return [...leftRange, "...", total];
  }

  if (showLeftDots && !showRightDots) {
    const rightRange = range(total - (2 + sibling * 2), total);
    return [1, "...", ...rightRange];
  }

  const middleRange = range(leftSibling, rightSibling);
  return [1, "...", ...middleRange, "...", total];
});

const buttonVariants = tv({
  base: "inline-flex items-center justify-center w-9 h-9 text-sm font-medium duration-200",
  variants: {
    active: {
      true: "bg-primary text-on-primary",
      false: "text-body hover:bg-surface-hover",
    },
    disabled: {
      true: "opacity-40 pointer-events-none",
    },
  },
});
</script>

<template>
  <nav
    class="flex items-center gap-1"
    role="navigation"
    aria-label="Pagination"
  >
    <!-- Previous -->
    <button
      :class="buttonVariants({ disabled: modelValue <= 1 })"
      :disabled="modelValue <= 1"
      :aria-label="previousLabel"
      @click="goTo(modelValue - 1)"
    >
      <ChevronLeft :size="16" />
    </button>

    <!-- Page numbers -->
    <template v-for="(page, index) in pages" :key="index">
      <span
        v-if="page === '...'"
        class="inline-flex items-center justify-center w-9 h-9 text-sm text-muted"
      >
        …
      </span>
      <button
        v-else
        :class="buttonVariants({ active: page === modelValue })"
        :aria-current="page === modelValue ? 'page' : undefined"
        @click="goTo(page as number)"
      >
        {{ page }}
      </button>
    </template>

    <!-- Next -->
    <button
      :class="buttonVariants({ disabled: modelValue >= totalPages })"
      :disabled="modelValue >= totalPages"
      :aria-label="nextLabel"
      @click="goTo(modelValue + 1)"
    >
      <ChevronRight :size="16" />
    </button>
  </nav>
</template>
