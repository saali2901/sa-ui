<script setup lang="ts">
import { Check } from "lucide-vue-next";
import { PropType } from "vue";

defineOptions({
  name: "SaStepper",
});

defineProps({
  steps: Array as PropType<
    {
      title: string;
      description: string;
    }[]
  >,
  currentStep: Number,
});
</script>

<template>
  <div class="w-full flex items-start">
    <template v-for="(step, index) in steps" :key="index">
      <!-- Step -->
      <div
        class="flex flex-col items-center cursor-pointer"
        :class="index === 0 || index === steps!.length - 1 ? '' : 'shrink-0'"
      >
        <!-- Rounded -->
        <div
          class="text-xl w-12 h-12 rounded-full border border-border flex items-center justify-center text-body font-semibold"
          :class="{
            'border-primary text-primary': currentStep === index,
            'border-primary bg-primary ': currentStep! > index,
          }"
        >
          <span v-if="index >= currentStep!">{{ index + 1 }}</span>
          <span v-else class="text-on-primary">
            <Check />
          </span>
        </div>

        <!-- Title -->
        <div
          class="text-sm mt-2 text-body font-medium text-center"
          :class="{
            'text-primary': currentStep === index || currentStep! > index,
          }"
        >
          {{ step.title }}
        </div>

        <!-- Description -->
        <div
          class="text-xs mt-1 text-muted"
          :class="{
            'text-body': currentStep! >= index,
          }"
        >
          {{ step.description }}
        </div>
      </div>

      <!-- Connecting line -->
      <div
        v-if="index < steps!.length - 1"
        class="flex-1 h-0.5 mt-6 mx-2"
        :class="currentStep! > index ? 'bg-primary' : 'bg-border'"
      ></div>
    </template>
  </div>
</template>
