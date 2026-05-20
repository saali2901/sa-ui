import type { Meta, StoryObj } from '@storybook/vue3'
import SaAvatar from './SaAvatar.vue'

const meta: Meta<typeof SaAvatar> = {
  title: 'SaAvatar',
  component: SaAvatar,
}
export default meta
type Story = StoryObj<typeof SaAvatar>

export const Initials: Story = {
  render: () => ({
    components: { SaAvatar },
    template: `
      <div class="flex items-center gap-3">
        <SaAvatar name="John Doe" size="sm" />
        <SaAvatar name="John Doe" size="md" />
        <SaAvatar name="John Doe" size="lg" />
        <SaAvatar name="John Doe" size="xl" />
      </div>
    `,
  }),
}

export const Colors: Story = {
  render: () => ({
    components: { SaAvatar },
    template: `
      <div class="flex items-center gap-3">
        <SaAvatar name="Primary" color="primary" />
        <SaAvatar name="Secondary" color="secondary" />
        <SaAvatar name="Muted" color="muted" />
      </div>
    `,
  }),
}

export const WithImage: Story = {
  render: () => ({
    components: { SaAvatar },
    template: `<SaAvatar src="https://i.pravatar.cc/100" name="Jane Smith" size="lg" />`,
  }),
}

export const Fallback: Story = {
  render: () => ({
    components: { SaAvatar },
    template: `<SaAvatar />`,
  }),
}
