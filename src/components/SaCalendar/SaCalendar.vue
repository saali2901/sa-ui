<script setup lang="ts">
import { computed, ref } from "vue";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

defineOptions({ name: "SaCalendar" });

interface Props {
  modelValue?: Date | null;
  minDate?: Date;
  maxDate?: Date;
  monthLabels?: string[];
  dayLabels?: string[];
  todayLabel?: string;
  prevMonthLabel?: string;
  nextMonthLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  monthLabels: () => [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  dayLabels: () => ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  todayLabel: "Today",
  prevMonthLabel: "Previous month",
  nextMonthLabel: "Next month",
});

const emit = defineEmits<{
  "update:modelValue": [date: Date];
}>();

const currentDate = ref<Date>(
  props.modelValue ? new Date(props.modelValue) : new Date(),
);

const monthNames = computed(() => props.monthLabels);
const dayNames = computed(() => props.dayLabels);

// Current month and year
const currentMonth = computed(() => currentDate.value.getMonth());
const currentYear = computed(() => currentDate.value.getFullYear());

// Get days in current month
const daysInMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value + 1, 0).getDate();
});

// Get first day of month (0 = Sunday)
const firstDayOfMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value, 1).getDay();
});

// Generate calendar grid
const calendarDays = computed(() => {
  const days: (number | null)[] = [];

  // Add empty cells for days before month starts
  for (let i = 0; i < firstDayOfMonth.value; i++) {
    days.push(null);
  }

  // Add days of the month
  for (let i = 1; i <= daysInMonth.value; i++) {
    days.push(i);
  }

  return days;
});

// Check if date is today
const isToday = (day: number): boolean => {
  const today = new Date();
  return (
    day === today.getDate() &&
    currentMonth.value === today.getMonth() &&
    currentYear.value === today.getFullYear()
  );
};

// Check if date is selected
const isSelected = (day: number): boolean => {
  if (!props.modelValue) return false;
  return (
    day === props.modelValue.getDate() &&
    currentMonth.value === props.modelValue.getMonth() &&
    currentYear.value === props.modelValue.getFullYear()
  );
};

// Check if date is disabled
const isDisabled = (day: number): boolean => {
  const date = new Date(currentYear.value, currentMonth.value, day);
  if (props.minDate && date < props.minDate) return true;
  if (props.maxDate && date > props.maxDate) return true;
  return false;
};

// Select date
const selectDate = (day: number) => {
  if (!isDisabled(day)) {
    const newDate = new Date(currentYear.value, currentMonth.value, day);
    emit("update:modelValue", newDate);
  }
};

// Navigate months
const previousMonth = () => {
  currentDate.value = new Date(currentYear.value, currentMonth.value - 1, 1);
};

const nextMonth = () => {
  currentDate.value = new Date(currentYear.value, currentMonth.value + 1, 1);
};

// Go to today
const goToToday = () => {
  currentDate.value = new Date();
  emit("update:modelValue", new Date());
};
</script>

<template>
  <div class="w-full max-w-sm border border-border bg-surface p-5">
    <!-- Header with month navigation -->
    <div class="mb-6 flex items-center justify-between">
      <button
        @click="previousMonth"
        class="inline-flex items-center justify-center w-8 h-8 text-body hover:bg-surface-hover transition-colors"
        :aria-label="prevMonthLabel"
      >
        <ChevronLeft :size="20" />
      </button>

      <div class="text-center">
        <h2 class="font-semibold text-lg text-heading">
          {{ monthNames[currentMonth] }} {{ currentYear }}
        </h2>
      </div>

      <button
        @click="nextMonth"
        class="inline-flex items-center justify-center w-8 h-8 text-body hover:bg-surface-hover transition-colors"
        :aria-label="nextMonthLabel"
      >
        <ChevronRight :size="20" />
      </button>
    </div>

    <!-- Today button -->
    <div class="mb-4">
      <button
        @click="goToToday"
        class="w-full px-3 py-1 text-sm text-primary hover:bg-primary-soft transition-colors"
      >
        {{ todayLabel }}
      </button>
    </div>

    <!-- Day names -->
    <div class="mb-2 grid grid-cols-7 gap-1">
      <div
        v-for="day in dayNames"
        :key="day"
        class="text-center text-xs font-semibold text-body py-2"
      >
        {{ day }}
      </div>
    </div>

    <!-- Calendar grid -->
    <div class="grid grid-cols-7 gap-1">
      <button
        v-for="(day, index) in calendarDays"
        :key="index"
        @click="day && selectDate(day)"
        :disabled="day ? isDisabled(day) : true"
        :class="[
          'aspect-square text-sm font-medium transition-colors',
          day === null && 'cursor-default',
          day !== null && !isDisabled(day) && 'cursor-pointer',
          day !== null && isDisabled(day) && 'cursor-not-allowed opacity-40',
          day && isSelected(day)
            ? 'bg-primary text-on-primary font-semibold'
            : day && isToday(day)
              ? 'bg-primary-soft text-primary font-semibold'
              : day && !isDisabled(day)
                ? 'text-body hover:bg-surface-hover'
                : '',
        ]"
      >
        {{ day }}
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Optional: Add smooth transitions */
button:disabled {
  cursor: not-allowed;
}
</style>
