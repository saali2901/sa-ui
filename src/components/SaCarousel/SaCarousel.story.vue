<script setup lang="ts">
import SaCarousel from "./SaCarousel.vue";
import { ref } from "vue";

const currentSlide = ref(0);
</script>

<template>
  <Story title="SaCarousel" icon="lucide:gallery-horizontal">
    <Variant title="Default">
      <SaCarousel v-model="currentSlide" class="max-w-lg">
        <div class="bg-primary-soft flex items-center justify-center h-48">
          <span class="text-2xl font-bold text-primary">Slide 1</span>
        </div>
        <div class="bg-success-soft flex items-center justify-center h-48">
          <span class="text-2xl font-bold text-success-text">Slide 2</span>
        </div>
        <div class="bg-warning-soft flex items-center justify-center h-48">
          <span class="text-2xl font-bold text-warning-text">Slide 3</span>
        </div>
      </SaCarousel>
    </Variant>
    <Variant title="Autoplay">
      <SaCarousel
        v-model="currentSlide"
        autoplay
        :interval="3000"
        class="max-w-lg"
      >
        <div class="bg-info-soft flex items-center justify-center h-48">
          <span class="text-xl">Auto 1</span>
        </div>
        <div class="bg-error-soft flex items-center justify-center h-48">
          <span class="text-xl">Auto 2</span>
        </div>
        <div class="bg-primary-soft flex items-center justify-center h-48">
          <span class="text-xl">Auto 3</span>
        </div>
      </SaCarousel>
    </Variant>
    <Variant title="No arrows, no loop">
      <SaCarousel
        v-model="currentSlide"
        :show-arrows="false"
        :loop="false"
        class="max-w-lg"
      >
        <div class="bg-surface-hover flex items-center justify-center h-48">
          <span>First</span>
        </div>
        <div class="bg-surface-hover flex items-center justify-center h-48">
          <span>Last</span>
        </div>
      </SaCarousel>
    </Variant>
  </Story>
</template>
