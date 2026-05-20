import type { Meta, StoryObj } from '@storybook/vue3'
import { Volume, Volume2 } from 'lucide-vue-next'
import SaSlider from './SaSlider.vue'

const meta: Meta<typeof SaSlider> = {
  title: 'SaSlider',
  component: SaSlider,
}
export default meta
type Story = StoryObj<typeof SaSlider>

export const Default: Story = {
  render: () => ({
    components: { SaSlider },
    template: `<SaSlider :modelValue="50" :min="0" :max="100" />`,
  }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { SaSlider },
    template: `<SaSlider :modelValue="60" :min="0" :max="100" label="Detection Sensitivity" startLabel="Stable" endLabel="Dynamic" />`,
  }),
}

export const WithIcons: Story = {
  render: () => ({
    components: { SaSlider, Volume, Volume2 },
    template: `
      <SaSlider :modelValue="40" :min="0" :max="100" label="Master Game Volume" :startIcon="Volume" :endIcon="Volume2" />
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { SaSlider },
    template: `<SaSlider :modelValue="30" disabled label="Disabled Slider" />`,
  }),
}
