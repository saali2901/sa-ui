<script setup lang="ts">
import { Upload } from "lucide-vue-next";
import { ref } from "vue";

defineOptions({ name: "SaUploadArea" });

interface Props {
  dropText?: string;
  accept?: string;
  multiple?: boolean;
}

withDefaults(defineProps<Props>(), {
  dropText: "Drop your file here",
  accept: undefined,
  multiple: false,
});

const emit = defineEmits<{
  changed: [files: FileList];
}>();

const input = ref<HTMLInputElement | null>(null);
const isDragging = ref(false);

const handleClick = () => {
  input.value?.click();
};

const handleDragOver = (e: DragEvent) => {
  e.preventDefault();
  isDragging.value = true;
};

const handleDragLeave = () => {
  isDragging.value = false;
};

const handleDrop = (e: DragEvent) => {
  e.preventDefault();
  isDragging.value = false;

  const files = e.dataTransfer?.files;
  if (files) {
    emit("changed", files);
    if (input.value) {
      input.value.files = files;
    }
  }
};

const handleInputChange = (e: Event) => {
  const files = (e.target as HTMLInputElement).files;
  if (files) {
    emit("changed", files);
  }
};
</script>

<template>
  <div
    @click="handleClick"
    @dragover="handleDragOver"
    @dragleave="handleDragLeave"
    @drop="handleDrop"
    :class="
      isDragging
        ? 'bg-surface-hover border-border-focus'
        : 'bg-surface border-border-strong'
    "
    class="w-full border-dashed border-2 rounded-md h-32 flex flex-col items-center justify-center text-muted cursor-pointer transition-colors duration-200 gap-1"
  >
    <Upload />
    <div class="text-sm">{{ dropText }}</div>
    <input
      ref="input"
      type="file"
      class="hidden"
      :accept="accept"
      :multiple="multiple"
      @change="handleInputChange"
    />
  </div>
</template>
