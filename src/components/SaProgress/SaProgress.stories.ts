import type { Meta, StoryObj } from '@storybook/vue3'
import SaProgress from './SaProgress.vue'

const meta: Meta<typeof SaProgress> = {
  title: 'SaProgress',
  component: SaProgress,
}
export default meta
type Story = StoryObj<typeof SaProgress>

export const Sizes: Story = {
  render: () => ({
    components: { SaProgress },
    template: `
      <div class="space-y-4">
        <SaProgress :value="60" size="sm" />
        <SaProgress :value="60" size="md" />
        <SaProgress :value="60" size="lg" />
      </div>
    `,
  }),
}

export const Colors: Story = {
  render: () => ({
    components: { SaProgress },
    template: `
      <div class="space-y-4">
        <SaProgress :value="80" color="primary" />
        <SaProgress :value="80" color="success" />
        <SaProgress :value="80" color="warning" />
        <SaProgress :value="80" color="error" />
      </div>
    `,
  }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { SaProgress },
    template: `<SaProgress :value="42" :max="100" show-label />`,
  }),
}

export const CustomMax: Story = {
  render: () => ({
    components: { SaProgress },
    template: `<SaProgress :value="3" :max="10" show-label size="lg" color="success" />`,
  }),
}
