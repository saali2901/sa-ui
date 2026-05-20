import type { Meta, StoryObj } from '@storybook/vue3'
import SaTooltip from './SaTooltip.vue'
import SaButton from '../SaButton/SaButton.vue'

const meta: Meta<typeof SaTooltip> = {
  title: 'SaTooltip',
  component: SaTooltip,
}
export default meta
type Story = StoryObj<typeof SaTooltip>

export const Positions: Story = {
  render: () => ({
    components: { SaTooltip, SaButton },
    template: `
      <div class="flex flex-wrap items-center gap-6 p-12">
        <SaTooltip text="Top tooltip" position="top">
          <SaButton size="sm">Top</SaButton>
        </SaTooltip>
        <SaTooltip text="Bottom tooltip" position="bottom">
          <SaButton size="sm">Bottom</SaButton>
        </SaTooltip>
        <SaTooltip text="Left tooltip" position="left">
          <SaButton size="sm">Left</SaButton>
        </SaTooltip>
        <SaTooltip text="Right tooltip" position="right">
          <SaButton size="sm">Right</SaButton>
        </SaTooltip>
      </div>
    `,
  }),
}

export const CustomDelay: Story = {
  render: () => ({
    components: { SaTooltip, SaButton },
    template: `
      <div class="p-12">
        <SaTooltip text="I appear after 500ms" :delay="500">
          <SaButton size="sm" color="secondary">Hover me (slow)</SaButton>
        </SaTooltip>
      </div>
    `,
  }),
}
