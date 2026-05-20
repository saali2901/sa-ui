import type { Meta, StoryObj } from '@storybook/vue3'
import { Undo2, X, PencilLine, Trash2 } from 'lucide-vue-next'
import SaButton from './SaButton.vue'

const meta: Meta<typeof SaButton> = {
  title: 'SaButton',
  component: SaButton,
}
export default meta
type Story = StoryObj<typeof SaButton>

export const Colors: Story = {
  render: () => ({
    components: { SaButton },
    template: `
      <div class="flex items-center gap-3">
        <SaButton color="primary">Primary</SaButton>
        <SaButton color="secondary">Secondary</SaButton>
        <SaButton color="ghost">Ghost</SaButton>
        <SaButton color="tertiary">Tertiary</SaButton>
        <SaButton color="destructive">Destructive</SaButton>
      </div>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { SaButton },
    template: `
      <div class="flex items-center gap-3">
        <SaButton size="sm">Small</SaButton>
        <SaButton size="lg">Large</SaButton>
      </div>
    `,
  }),
}

export const WithIcons: Story = {
  render: () => ({
    components: { SaButton, Undo2, X, PencilLine },
    template: `
      <div class="flex items-center gap-3">
        <SaButton color="ghost"><Undo2 :size="14" /> Undo</SaButton>
        <SaButton color="ghost"><X :size="14" /> Bust</SaButton>
        <SaButton color="primary"><PencilLine :size="14" /> Manual Input</SaButton>
      </div>
    `,
  }),
}

export const IconOnly: Story = {
  render: () => ({
    components: { SaButton, Trash2, PencilLine },
    template: `
      <div class="flex items-center gap-3">
        <SaButton color="ghost" icon><PencilLine :size="16" /></SaButton>
        <SaButton color="destructive" icon><Trash2 :size="16" /></SaButton>
        <SaButton color="primary" icon size="lg"><PencilLine :size="18" /></SaButton>
      </div>
    `,
  }),
}

export const ActionPair: Story = {
  render: () => ({
    components: { SaButton },
    template: `
      <div class="flex items-center gap-3">
        <SaButton color="ghost">Discard Changes</SaButton>
        <SaButton color="primary">Save System Config</SaButton>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { SaButton },
    template: `
      <div class="flex items-center gap-3">
        <SaButton disabled>Disabled Primary</SaButton>
        <SaButton color="ghost" disabled>Disabled Ghost</SaButton>
      </div>
    `,
  }),
}

export const Loading: Story = {
  render: () => ({
    components: { SaButton },
    template: `
      <div class="flex items-center gap-3">
        <SaButton loading>Loading…</SaButton>
        <SaButton color="secondary" loading>Loading…</SaButton>
        <SaButton color="destructive" loading>Deleting…</SaButton>
      </div>
    `,
  }),
}
