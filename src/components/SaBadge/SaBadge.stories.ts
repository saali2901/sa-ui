import type { Meta, StoryObj } from '@storybook/vue3'
import SaBadge from './SaBadge.vue'

const meta: Meta<typeof SaBadge> = {
  title: 'SaBadge',
  component: SaBadge,
}
export default meta
type Story = StoryObj<typeof SaBadge>

export const Sizes: Story = {
  render: () => ({
    components: { SaBadge },
    template: `
      <div class="flex items-center gap-3">
        <SaBadge size="sm">Small</SaBadge>
        <SaBadge size="lg">Large</SaBadge>
        <SaBadge size="dot" />
      </div>
    `,
  }),
}

export const Colors: Story = {
  render: () => ({
    components: { SaBadge },
    template: `
      <div class="flex items-center gap-3">
        <SaBadge color="primary">Primary</SaBadge>
        <SaBadge color="secondary">Secondary</SaBadge>
      </div>
    `,
  }),
}
