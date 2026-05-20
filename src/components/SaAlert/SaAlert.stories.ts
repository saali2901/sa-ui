import type { Meta, StoryObj } from '@storybook/vue3'
import SaAlert from './SaAlert.vue'

const meta: Meta<typeof SaAlert> = {
  title: 'SaAlert',
  component: SaAlert,
}
export default meta
type Story = StoryObj<typeof SaAlert>

export const Info: Story = {
  render: () => ({
    components: { SaAlert },
    template: `<SaAlert color="info">This is an informational message.</SaAlert>`,
  }),
}

export const Success: Story = {
  render: () => ({
    components: { SaAlert },
    template: `<SaAlert color="success">Operation completed successfully.</SaAlert>`,
  }),
}

export const Warning: Story = {
  render: () => ({
    components: { SaAlert },
    template: `<SaAlert color="warning">Please review your input carefully.</SaAlert>`,
  }),
}

export const Error: Story = {
  render: () => ({
    components: { SaAlert },
    template: `<SaAlert color="error">Something went wrong. Please try again.</SaAlert>`,
  }),
}

export const Dismissible: Story = {
  render: () => ({
    components: { SaAlert },
    template: `<SaAlert color="info" dismissible>You can dismiss this alert by clicking the X button.</SaAlert>`,
  }),
}
