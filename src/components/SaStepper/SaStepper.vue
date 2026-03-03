<script setup lang="ts">
import { Check } from "lucide-vue-next";
import type { StepperStep } from "@/types";

defineOptions({ name: "SaStepper" });

interface Props {
  steps: StepperStep[];
  currentStep?: number;
}

const props = withDefaults(defineProps<Props>(), {
  currentStep: 0,
});
</script>

<template>
  <div class="w-full flex items-start">
    <template v-for="(step, index) in props.steps" :key="index">
      <!-- Step -->
      <div
        class="flex flex-col items-center cursor-pointer"
        :class="
          index === 0 || index === props.steps.length - 1 ? '' : 'shrink-0'
        "
      >
        <!-- Circle -->
        <div
          class="text-xl w-12 h-12 rounded-full border border-border flex items-center justify-center text-body font-semibold"
          :class="{
            'border-primary text-primary': props.currentStep === index,
            'border-primary bg-primary': props.currentStep > index,
          }"
        >
          <span v-if="index >= props.currentStep">{{ index + 1 }}</span>
          <span v-else class="text-on-primary">
            <Check />
          </span>
        </div>

        <!-- Title -->
        <div
          class="text-sm mt-2 text-body font-medium text-center"
          :class="{
            'text-primary':
              props.currentStep === index || props.currentStep > index,
          }"
        >
          {{ step.title }}
        </div>

        <!-- Description -->
        <div
          class="text-xs mt-1 text-muted"
          :class="{ 'text-body': props.currentStep >= index }"
        >
          {{ step.description }}
        </div>
      </div>

      <!-- Connecting line -->
      <div
        v-if="index < props.steps.length - 1"
        class="flex-1 h-0.5 mt-6 mx-2"
        :class="props.currentStep > index ? 'bg-primary' : 'bg-border'"
      />
    </template>
  </div>
</template>
