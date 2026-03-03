<script setup lang="ts">
import SaCalendar from "./SaCalendar.vue";
import { ref } from "vue";

const selectedDate = ref<Date | null>(new Date());
</script>

<template>
  <Story title="SaCalendar" icon="lucide:calendar">
    <Variant title="Default">
      <SaCalendar v-model="selectedDate" />
      <p class="mt-2 text-sm text-muted">
        Selected: {{ selectedDate?.toLocaleDateString() ?? "None" }}
      </p>
    </Variant>
    <Variant title="Custom labels (German)">
      <SaCalendar
        v-model="selectedDate"
        :month-labels="[
          'Jan',
          'Feb',
          'Mär',
          'Apr',
          'Mai',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Okt',
          'Nov',
          'Dez',
        ]"
        :day-labels="['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']"
        today-label="Heute"
        prev-month-label="Vorheriger Monat"
        next-month-label="Nächster Monat"
      />
    </Variant>
  </Story>
</template>
