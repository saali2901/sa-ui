<script setup lang="ts">
import { ref, watch } from "vue";
import { ChevronDown } from "lucide-vue-next";
import type { AccordionItem } from "@/types";

defineOptions({ name: "SaAccordion" });

interface Props {
  items: AccordionItem[];
  multiple?: boolean;
  modelValue?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  multiple: false,
  modelValue: () => [],
});

const emit = defineEmits<{
  "update:modelValue": [keys: string[]];
}>();

const openItems = ref<Set<string>>(new Set(props.modelValue));

watch(
  () => props.modelValue,
  (val) => {
    openItems.value = new Set(val);
  },
);

const isOpen = (key: string) => openItems.value.has(key);

const toggle = (item: AccordionItem) => {
  if (item.disabled) return;

  const newSet = new Set(openItems.value);

  if (newSet.has(item.key)) {
    newSet.delete(item.key);
  } else {
    if (!props.multiple) {
      newSet.clear();
    }
    newSet.add(item.key);
  }

  openItems.value = newSet;
  emit("update:modelValue", Array.from(newSet));
};

// Transition hooks for smooth height animation
const DURATION = 200;

const onBeforeEnter = (el: Element) => {
  const htmlEl = el as HTMLElement;
  htmlEl.style.height = "0";
  htmlEl.style.opacity = "0";
  htmlEl.style.overflow = "hidden";
};

const onEnter = (el: Element, done: () => void) => {
  const htmlEl = el as HTMLElement;
  const height = htmlEl.scrollHeight;
  htmlEl.style.transition = `height ${DURATION}ms ease-out, opacity ${DURATION}ms ease-out`;
  // Force reflow so the browser registers the starting state
  htmlEl.offsetHeight;
  htmlEl.style.height = height + "px";
  htmlEl.style.opacity = "1";
  setTimeout(done, DURATION);
};

const onAfterEnter = (el: Element) => {
  const htmlEl = el as HTMLElement;
  htmlEl.style.height = "";
  htmlEl.style.overflow = "";
  htmlEl.style.transition = "";
};

const onBeforeLeave = (el: Element) => {
  const htmlEl = el as HTMLElement;
  htmlEl.style.height = htmlEl.scrollHeight + "px";
  htmlEl.style.opacity = "1";
  htmlEl.style.overflow = "hidden";
};

const onLeave = (el: Element, done: () => void) => {
  const htmlEl = el as HTMLElement;
  // Force reflow so the browser registers the starting height
  htmlEl.offsetHeight;
  htmlEl.style.transition = `height ${DURATION}ms ease-in, opacity ${DURATION}ms ease-in`;
  htmlEl.style.height = "0";
  htmlEl.style.opacity = "0";
  setTimeout(done, DURATION);
};

const onAfterLeave = (el: Element) => {
  const htmlEl = el as HTMLElement;
  htmlEl.style.height = "";
  htmlEl.style.overflow = "";
  htmlEl.style.transition = "";
  htmlEl.style.opacity = "";
};
</script>

<template>
  <div class="w-full bg-surface">
    <div v-for="item in items" :key="item.key">
      <!-- Header -->
      <button
        class="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium"
        :class="[
          item.disabled
            ? 'opacity-50 cursor-not-allowed text-muted'
            : 'cursor-pointer text-heading hover:bg-surface-hover',
        ]"
        :aria-expanded="isOpen(item.key)"
        :aria-disabled="item.disabled"
        @click="toggle(item)"
      >
        <span>{{ item.title }}</span>
        <ChevronDown
          :size="16"
          class="transition-transform duration-200 text-muted"
          :class="{ 'rotate-180': isOpen(item.key) }"
        />
      </button>

      <!-- Content -->
      <Transition
        :css="false"
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @after-enter="onAfterEnter"
        @before-leave="onBeforeLeave"
        @leave="onLeave"
        @after-leave="onAfterLeave"
      >
        <div v-if="isOpen(item.key)" class="px-4 pb-4 text-sm text-body">
          <slot :name="item.key" />
        </div>
      </Transition>
    </div>
  </div>
</template>
