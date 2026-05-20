import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import SaRadio from './SaRadio.vue'

const meta: Meta<typeof SaRadio> = {
  title: 'SaRadio',
  component: SaRadio,
}
export default meta
type Story = StoryObj<typeof SaRadio>

const options = [
  { label: 'Email', value: 'email' },
  { label: 'Phone', value: 'phone' },
  { label: 'Fax', value: 'fax', disabled: true },
]

export const Vertical: Story = {
  render: () => ({
    components: { SaRadio },
    setup() {
      const selected = ref('email')
      return { selected, options }
    },
    template: `
      <div>
        <SaRadio v-model="selected" :options="options" name="contact-v" />
        <p class="mt-2 text-sm text-muted">Selected: {{ selected }}</p>
      </div>
    `,
  }),
}

export const Horizontal: Story = {
  render: () => ({
    components: { SaRadio },
    setup() {
      const selected = ref('email')
      return { selected, options }
    },
    template: `<SaRadio v-model="selected" :options="options" name="contact-h" direction="horizontal" />`,
  }),
}

export const AllDisabled: Story = {
  render: () => ({
    components: { SaRadio },
    setup() {
      const selected = ref('email')
      return { selected, options }
    },
    template: `<SaRadio v-model="selected" :options="options" name="contact-d" disabled />`,
  }),
}
