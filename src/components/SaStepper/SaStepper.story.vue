<script setup lang="ts">
import SaStepper from "./SaStepper.vue";
import type { StepperStep } from "@/types";
import { ref } from "vue";

const steps: StepperStep[] = [
  { title: "Account", description: "Create your account" },
  { title: "Profile", description: "Set up your profile" },
  { title: "Preferences", description: "Configure settings" },
  { title: "Done", description: "Complete registration" },
];

const current = ref(1);
</script>

<template>
  <Story title="SaStepper" icon="lucide:list-ordered">
    <Variant title="Default">
      <SaStepper :steps="steps" :current-step="current" />
      <div class="mt-4 flex gap-2">
        <button
          class="px-3 py-1 text-sm border border-border rounded"
          :disabled="current <= 0"
          @click="current--"
        >
          Back
        </button>
        <button
          class="px-3 py-1 text-sm bg-primary text-on-primary rounded"
          :disabled="current >= steps.length - 1"
          @click="current++"
        >
          Next
        </button>
      </div>
    </Variant>
    <Variant title="First step">
      <SaStepper :steps="steps" :current-step="0" />
    </Variant>
    <Variant title="Last step">
      <SaStepper :steps="steps" :current-step="3" />
    </Variant>
  </Story>
</template>
