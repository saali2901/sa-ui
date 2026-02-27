<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { tv } from "tailwind-variants";

defineOptions({ name: "SaDropdown" });

export interface DropdownOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

interface Props {
  modelValue?: string | number | null;
  options: DropdownOption[];
  placeholder?: string;
  disabled?: boolean;
  label?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  placeholder: "Hund",
  disabled: false,
  label: "",
});

const emit = defineEmits<{
  "update:modelValue": [value: string | number | null];
  change: [value: string | number | null];
}>();

const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);
const highlightedIndex = ref(-1);

const selectedOption = computed(() => {
  return props.options.find((opt) => opt.value === props.modelValue);
});

const displayValue = computed(() => {
  return selectedOption.value?.label ?? props.placeholder;
});

const triggerVariants = tv({
  base: "flex items-center justify-between w-full border p-2 cursor-pointer duration-200 text-sm",
  variants: {
    open: {
      true: "border-border-focus",
      false: "border-border-strong",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed pointer-events-none",
    },
  },
});

const optionVariants = tv({
  base: "px-4 py-2.5 cursor-pointer duration-150 text-sm",
  variants: {
    selected: {
      true: "bg-secondary text-primary font-medium",
      false: "text-body hover:bg-surface-hover",
    },
    highlighted: {
      true: "bg-surface-hover",
    },
    disabled: {
      true: "text-muted cursor-not-allowed bg-transparent hover:bg-transparent",
    },
  },
});

const toggleDropdown = () => {
  if (!props.disabled) {
    isOpen.value = !isOpen.value;
    if (isOpen.value) {
      const idx = props.options.findIndex(
        (opt) => opt.value === props.modelValue,
      );
      highlightedIndex.value = idx >= 0 ? idx : 0;
    }
  }
};

const selectOption = (option: DropdownOption) => {
  if (option.disabled) return;

  emit("update:modelValue", option.value);
  emit("change", option.value);
  isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

const findNextEnabledIndex = (
  startIndex: number,
  direction: 1 | -1,
): number => {
  let index = startIndex;
  while (index >= 0 && index < props.options.length) {
    if (!props.options[index].disabled) {
      return index;
    }
    index += direction;
  }
  return -1;
};

const handleKeydown = (event: KeyboardEvent) => {
  if (!isOpen.value) {
    if (
      event.key === "Enter" ||
      event.key === " " ||
      event.key === "ArrowDown"
    ) {
      event.preventDefault();
      toggleDropdown();
    }
    return;
  }

  switch (event.key) {
    case "Escape":
      event.preventDefault();
      isOpen.value = false;
      break;
    case "ArrowDown":
      event.preventDefault();
      {
        const nextIndex = findNextEnabledIndex(highlightedIndex.value + 1, 1);
        if (nextIndex !== -1) {
          highlightedIndex.value = nextIndex;
        }
      }
      break;
    case "ArrowUp":
      event.preventDefault();
      {
        const prevIndex = findNextEnabledIndex(highlightedIndex.value - 1, -1);
        if (prevIndex !== -1) {
          highlightedIndex.value = prevIndex;
        }
      }
      break;
    case "Enter":
    case " ":
      event.preventDefault();
      if (
        highlightedIndex.value >= 0 &&
        !props.options[highlightedIndex.value]?.disabled
      ) {
        selectOption(props.options[highlightedIndex.value]);
      }
      break;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="relative w-full" ref="dropdownRef">
    <label v-if="label" class="block text-sm text-muted">
      {{ label }}
    </label>

    <div
      :class="triggerVariants({ open: isOpen, disabled })"
      tabindex="0"
      role="combobox"
      :aria-expanded="isOpen"
      :aria-disabled="disabled"
      @click="toggleDropdown"
      @keydown="handleKeydown"
    >
      <span
        class="flex-1 overflow-hidden text-ellipsis whitespace-nowrap"
        :class="selectedOption ? 'text-primary' : 'text-muted'"
      >
        {{ displayValue }}
      </span>
      <span
        class="ml-2 text-[0.625rem] text-body duration-200"
        :class="{ 'rotate-180': isOpen }"
      >
        ▼
      </span>
    </div>

    <Transition
      enter-active-class="transition-all duration-150 ease-out"
      leave-active-class="transition-all duration-150 ease-in"
      enter-from-class="opacity-0 -translate-y-1"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <ul
        v-if="isOpen"
        class="absolute top-full left-0 right-0 z-50 mt-1 py-1 list-none bg-surface border border-border shadow max-h-60 overflow-y-auto"
        role="listbox"
      >
        <li
          v-for="(option, index) in options"
          :key="option.value"
          :class="
            optionVariants({
              selected: option.value === props.modelValue,
              highlighted:
                index === highlightedIndex && option.value !== props.modelValue,
              disabled: option.disabled,
            })
          "
          role="option"
          :aria-selected="option.value === props.modelValue"
          :aria-disabled="option.disabled"
          @click="selectOption(option)"
          @mouseenter="highlightedIndex = index"
        >
          {{ option.label }}
        </li>
      </ul>
    </Transition>
  </div>
</template>
