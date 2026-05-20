import type { Meta, StoryObj } from '@storybook/vue3'
import SaTag from './SaTag.vue'

const meta: Meta<typeof SaTag> = {
  title: 'SaTag',
  component: SaTag,
}
export default meta
type Story = StoryObj<typeof SaTag>

export const Colors: Story = {
  render: () => ({
    components: { SaTag },
    template: `
      <div class="flex flex-wrap items-center gap-2">
        <SaTag color="primary">Primary</SaTag>
        <SaTag color="secondary">Secondary</SaTag>
        <SaTag color="success">Success</SaTag>
        <SaTag color="error">Error</SaTag>
        <SaTag color="warning">Warning</SaTag>
        <SaTag color="info">Info</SaTag>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { SaTag },
    template: `
      <div class="flex items-center gap-2">
        <SaTag size="sm">Small</SaTag>
        <SaTag size="md">Medium</SaTag>
      </div>
    `,
  }),
}

export const Removable: Story = {
  render: () => ({
    components: { SaTag },
    template: `
      <div class="flex items-center gap-2">
        <SaTag color="primary" removable>Vue.js</SaTag>
        <SaTag color="success" removable>TypeScript</SaTag>
        <SaTag color="info" removable>Tailwind</SaTag>
      </div>
    `,
  }),
}
