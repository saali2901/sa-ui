import type { Meta, StoryObj } from '@storybook/vue3'
import SaSkeleton from './SaSkeleton.vue'

const meta: Meta<typeof SaSkeleton> = {
  title: 'SaSkeleton',
  component: SaSkeleton,
}
export default meta
type Story = StoryObj<typeof SaSkeleton>

export const TextSingle: Story = {
  render: () => ({
    components: { SaSkeleton },
    template: `<SaSkeleton variant="text" />`,
  }),
}

export const TextMultiLine: Story = {
  render: () => ({
    components: { SaSkeleton },
    template: `<SaSkeleton variant="text" :lines="4" />`,
  }),
}

export const Circle: Story = {
  render: () => ({
    components: { SaSkeleton },
    template: `<SaSkeleton variant="circle" />`,
  }),
}

export const CircleLarge: Story = {
  render: () => ({
    components: { SaSkeleton },
    template: `<SaSkeleton variant="circle" width="80px" height="80px" />`,
  }),
}

export const Rectangular: Story = {
  render: () => ({
    components: { SaSkeleton },
    template: `<SaSkeleton variant="rectangular" width="100%" height="120px" />`,
  }),
}

export const CardLayout: Story = {
  render: () => ({
    components: { SaSkeleton },
    template: `
      <div class="max-w-xs space-y-3">
        <SaSkeleton variant="rectangular" width="100%" height="140px" />
        <SaSkeleton variant="text" width="75%" />
        <SaSkeleton variant="text" :lines="2" />
      </div>
    `,
  }),
}
