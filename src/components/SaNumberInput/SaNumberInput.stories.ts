import type { Meta, StoryObj } from '@storybook/vue3'
import SaNumberInput from './SaNumberInput.vue'

const meta: Meta<typeof SaNumberInput> = {
  title: 'SaNumberInput',
  component: SaNumberInput,
}
export default meta
type Story = StoryObj<typeof SaNumberInput>

export const Default: Story = {
  render: () => ({
    components: { SaNumberInput },
    template: `<SaNumberInput :modelValue="1" />`,
  }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { SaNumberInput },
    template: `
      <div class="flex gap-6">
        <SaNumberInput :modelValue="1" :min="1" :max="10" label="Number of Sets" />
        <SaNumberInput :modelValue="3" :min="1" :max="10" label="Legs per Set" />
      </div>
    `,
  }),
}

export const WithMinMax: Story = {
  render: () => ({
    components: { SaNumberInput },
    template: `<SaNumberInput :modelValue="1" :min="1" :max="5" label="Value (1–5)" />`,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { SaNumberInput },
    template: `<SaNumberInput :modelValue="3" disabled label="Disabled" />`,
  }),
}
