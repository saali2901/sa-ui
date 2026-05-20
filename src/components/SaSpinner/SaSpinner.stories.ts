import type { Meta, StoryObj } from '@storybook/vue3'
import SaSpinner from './SaSpinner.vue'

const meta: Meta<typeof SaSpinner> = {
  title: 'SaSpinner',
  component: SaSpinner,
}
export default meta
type Story = StoryObj<typeof SaSpinner>

export const Sizes: Story = {
  render: () => ({
    components: { SaSpinner },
    template: `
      <div class="flex items-center gap-6">
        <SaSpinner size="sm" />
        <SaSpinner size="md" />
        <SaSpinner size="lg" />
      </div>
    `,
  }),
}

export const Colors: Story = {
  render: () => ({
    components: { SaSpinner },
    template: `
      <div class="flex items-center gap-6">
        <SaSpinner color="primary" />
        <SaSpinner color="secondary" />
        <SaSpinner color="muted" />
      </div>
    `,
  }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { SaSpinner },
    template: `<SaSpinner label="Loading data…" />`,
  }),
}
