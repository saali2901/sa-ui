import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import SaTabs from './SaTabs.vue'

const meta: Meta<typeof SaTabs> = {
  title: 'SaTabs',
  component: SaTabs,
}
export default meta
type Story = StoryObj<typeof SaTabs>

const tabs = [
  { key: 'overview', label: 'Overview' },
  { key: 'features', label: 'Features' },
  { key: 'pricing', label: 'Pricing' },
  { key: 'deprecated', label: 'Deprecated', disabled: true },
]

export const Underline: Story = {
  render: () => ({
    components: { SaTabs },
    setup() {
      const activeTab = ref('overview')
      return { activeTab, tabs }
    },
    template: `
      <SaTabs v-model="activeTab" :tabs="tabs">
        <template #overview><p class="p-4">This is the overview content.</p></template>
        <template #features><p class="p-4">Feature list goes here.</p></template>
        <template #pricing><p class="p-4">Pricing details here.</p></template>
      </SaTabs>
    `,
  }),
}

export const Pills: Story = {
  render: () => ({
    components: { SaTabs },
    setup() {
      const activeTab = ref('overview')
      return { activeTab, tabs }
    },
    template: `
      <SaTabs v-model="activeTab" :tabs="tabs" variant="pills">
        <template #overview><p class="p-4">Overview with pills style.</p></template>
        <template #features><p class="p-4">Features with pills style.</p></template>
        <template #pricing><p class="p-4">Pricing with pills style.</p></template>
      </SaTabs>
    `,
  }),
}
