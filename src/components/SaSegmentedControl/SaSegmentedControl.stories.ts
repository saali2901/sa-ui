import type { Meta, StoryObj } from '@storybook/vue3'
import SaSegmentedControl from './SaSegmentedControl.vue'

const meta: Meta<typeof SaSegmentedControl> = {
  title: 'SaSegmentedControl',
  component: SaSegmentedControl,
}
export default meta
type Story = StoryObj<typeof SaSegmentedControl>

export const Default: Story = {
  render: () => ({
    components: { SaSegmentedControl },
    data: () => ({ value: 'double' }),
    template: `
      <SaSegmentedControl
        v-model="value"
        :options="[
          { value: 'straight', label: 'Straight' },
          { value: 'double', label: 'Double' },
          { value: 'master', label: 'Master' },
        ]"
      />
    `,
  }),
}

export const TwoOptions: Story = {
  render: () => ({
    components: { SaSegmentedControl },
    data: () => ({ value: 'right' }),
    template: `
      <SaSegmentedControl
        v-model="value"
        :options="[
          { value: 'right', label: 'Right' },
          { value: 'left', label: 'Left' },
        ]"
      />
    `,
  }),
}

export const TimePeriod: Story = {
  render: () => ({
    components: { SaSegmentedControl },
    data: () => ({ value: '90d' }),
    template: `
      <SaSegmentedControl
        v-model="value"
        :options="[
          { value: '7d', label: '7d' },
          { value: '30d', label: '30d' },
          { value: '90d', label: '90d' },
          { value: '1y', label: '1y' },
          { value: 'all', label: 'All' },
        ]"
      />
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { SaSegmentedControl },
    template: `
      <SaSegmentedControl
        modelValue="double"
        disabled
        :options="[
          { value: 'straight', label: 'Straight' },
          { value: 'double', label: 'Double' },
          { value: 'master', label: 'Master' },
        ]"
      />
    `,
  }),
}
