import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import SaDropdown from './SaDropdown.vue'

const meta: Meta<typeof SaDropdown> = {
  title: 'SaDropdown',
  component: SaDropdown,
}
export default meta
type Story = StoryObj<typeof SaDropdown>

const options = [
  { value: 'vue', label: 'Vue.js' },
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular', disabled: true },
  { value: 'svelte', label: 'Svelte' },
]

export const Default: Story = {
  render: () => ({
    components: { SaDropdown },
    setup() {
      const selected = ref<string | number | null>(null)
      return { selected, options }
    },
    template: `
      <div>
        <SaDropdown v-model="selected" :options="options" label="Framework" placeholder="Choose a framework" />
        <p class="mt-2 text-sm text-muted">Selected: {{ selected ?? 'None' }}</p>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { SaDropdown },
    setup() {
      const selected = ref<string | number | null>(null)
      return { selected, options }
    },
    template: `<SaDropdown v-model="selected" :options="options" label="Framework" disabled />`,
  }),
}
