<script setup lang="ts">
import { ref, watch } from "vue";
import { tv } from "tailwind-variants";

defineOptions({ name: "SaTabs" });

export interface TabItem {
  key: string;
  label: string;
  disabled?: boolean;
}

interface Props {
  tabs: TabItem[];
  modelValue?: string;
  variant?: "underline" | "pills";
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  variant: "underline",
});

const emit = defineEmits<{
  "update:modelValue": [key: string];
}>();

const activeTab = ref(props.modelValue || props.tabs[0]?.key || "");

watch(
  () => props.modelValue,
  (val) => {
    if (val) activeTab.value = val;
  },
);

const selectTab = (tab: TabItem) => {
  if (tab.disabled) return;
  activeTab.value = tab.key;
  emit("update:modelValue", tab.key);
};

const tabListVariants = tv({
  base: "flex",
  variants: {
    variant: {
      underline: "border-b border-border gap-0",
      pills: "gap-2",
    },
  },
});

const tabVariants = tv({
  base: "px-4 py-2 text-sm font-medium cursor-pointer transition-colors duration-200 focus:outline-none",
  variants: {
    variant: {
      underline: "border-b-2 -mb-px",
      pills: "rounded-full",
    },
    active: {
      true: "",
      false: "",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed pointer-events-none",
    },
  },
  compoundVariants: [
    {
      variant: "underline",
      active: true,
      class: "text-primary border-primary",
    },
    {
      variant: "underline",
      active: false,
      class: "text-muted border-transparent hover:text-body",
    },
    {
      variant: "pills",
      active: true,
      class: "bg-primary text-on-primary",
    },
    {
      variant: "pills",
      active: false,
      class: "text-muted hover:bg-surface-hover hover:text-body",
    },
  ],
});

const findNextEnabledIndex = (
  currentIndex: number,
  direction: 1 | -1,
): number => {
  let index = currentIndex + direction;
  while (index >= 0 && index < props.tabs.length) {
    if (!props.tabs[index].disabled) return index;
    index += direction;
  }
  return -1;
};

const handleKeydown = (event: KeyboardEvent) => {
  const currentIndex = props.tabs.findIndex((t) => t.key === activeTab.value);

  let nextIndex = -1;
  switch (event.key) {
    case "ArrowRight":
    case "ArrowDown":
      event.preventDefault();
      nextIndex = findNextEnabledIndex(currentIndex, 1);
      break;
    case "ArrowLeft":
    case "ArrowUp":
      event.preventDefault();
      nextIndex = findNextEnabledIndex(currentIndex, -1);
      break;
    case "Home":
      event.preventDefault();
      nextIndex = findNextEnabledIndex(-1, 1);
      break;
    case "End":
      event.preventDefault();
      nextIndex = findNextEnabledIndex(props.tabs.length, -1);
      break;
  }

  if (nextIndex !== -1) {
    selectTab(props.tabs[nextIndex]);
  }
};
</script>

<template>
  <div>
    <!-- Tab list -->
    <div
      :class="tabListVariants({ variant })"
      role="tablist"
      @keydown="handleKeydown"
    >
      <button
        v-for="tab in tabs"
        :key="tab.key"
        :class="
          tabVariants({
            variant,
            active: activeTab === tab.key,
            disabled: tab.disabled,
          })
        "
        role="tab"
        :aria-selected="activeTab === tab.key"
        :aria-disabled="tab.disabled"
        :tabindex="activeTab === tab.key ? 0 : -1"
        @click="selectTab(tab)"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Tab panels -->
    <div class="pt-4" role="tabpanel">
      <template v-for="tab in tabs" :key="tab.key">
        <div v-show="activeTab === tab.key">
          <slot :name="tab.key" />
        </div>
      </template>
    </div>
  </div>
</template>
