import type { Meta, StoryObj } from '@storybook/vue3'
import SaDivider from './SaDivider.vue'

const meta: Meta<typeof SaDivider> = {
  title: 'SaDivider',
  component: SaDivider,
}
export default meta
type Story = StoryObj<typeof SaDivider>

export const Horizontal: Story = {
  render: () => ({
    components: { SaDivider },
    template: `
      <div class="space-y-4">
        <p>Content above</p>
        <SaDivider />
        <p>Content below</p>
      </div>
    `,
  }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { SaDivider },
    template: `
      <div class="space-y-4">
        <p>Section A</p>
        <SaDivider label="OR" />
        <p>Section B</p>
      </div>
    `,
  }),
}

export const Vertical: Story = {
  render: () => ({
    components: { SaDivider },
    template: `
      <div class="flex items-center gap-4 h-8">
        <span>Left</span>
        <SaDivider direction="vertical" />
        <span>Right</span>
      </div>
    `,
  }),
}
