import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import SaCalendar from './SaCalendar.vue'

const meta: Meta<typeof SaCalendar> = {
  title: 'SaCalendar',
  component: SaCalendar,
}
export default meta
type Story = StoryObj<typeof SaCalendar>

export const Default: Story = {
  render: () => ({
    components: { SaCalendar },
    setup() {
      const selectedDate = ref<Date | null>(new Date())
      return { selectedDate }
    },
    template: `
      <div>
        <SaCalendar v-model="selectedDate" />
        <p class="mt-2 text-sm text-muted">Selected: {{ selectedDate?.toLocaleDateString() ?? 'None' }}</p>
      </div>
    `,
  }),
}

export const GermanLabels: Story = {
  render: () => ({
    components: { SaCalendar },
    setup() {
      const selectedDate = ref<Date | null>(new Date())
      return { selectedDate }
    },
    template: `
      <SaCalendar
        v-model="selectedDate"
        :month-labels="['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez']"
        :day-labels="['Mo','Di','Mi','Do','Fr','Sa','So']"
        today-label="Heute"
        prev-month-label="Vorheriger Monat"
        next-month-label="Nächster Monat"
      />
    `,
  }),
}
