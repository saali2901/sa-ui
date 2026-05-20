import type { Meta, StoryObj } from '@storybook/vue3'
import SaBreadcrumb from './SaBreadcrumb.vue'

const meta: Meta<typeof SaBreadcrumb> = {
  title: 'SaBreadcrumb',
  component: SaBreadcrumb,
}
export default meta
type Story = StoryObj<typeof SaBreadcrumb>

const items = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Detail' },
]

export const Default: Story = {
  render: () => ({
    components: { SaBreadcrumb },
    setup() { return { items } },
    template: `<SaBreadcrumb :items="items" />`,
  }),
}

export const CustomSeparator: Story = {
  render: () => ({
    components: { SaBreadcrumb },
    setup() { return { items } },
    template: `<SaBreadcrumb :items="items" separator="›" />`,
  }),
}

export const ArrowSeparator: Story = {
  render: () => ({
    components: { SaBreadcrumb },
    setup() { return { items } },
    template: `<SaBreadcrumb :items="items" separator="→" />`,
  }),
}
