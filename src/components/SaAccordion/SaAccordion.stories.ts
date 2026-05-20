import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import SaAccordion from './SaAccordion.vue'

const meta: Meta<typeof SaAccordion> = {
  title: 'SaAccordion',
  component: SaAccordion,
}
export default meta
type Story = StoryObj<typeof SaAccordion>

const items = [
  { key: 'about', title: 'About us' },
  { key: 'services', title: 'Our Services' },
  { key: 'contact', title: 'Contact', disabled: true },
]

export const SingleMode: Story = {
  render: () => ({
    components: { SaAccordion },
    setup() {
      const open = ref<string[]>([])
      return { open, items }
    },
    template: `
      <SaAccordion v-model="open" :items="items">
        <template #about><p>We build beautiful UI components for Vue.js applications.</p></template>
        <template #services><p>Design systems, component libraries, and consulting.</p></template>
        <template #contact><p>This item is disabled.</p></template>
      </SaAccordion>
    `,
  }),
}

export const MultipleMode: Story = {
  render: () => ({
    components: { SaAccordion },
    setup() {
      const open = ref<string[]>([])
      return { open, items }
    },
    template: `
      <SaAccordion v-model="open" :items="items" multiple>
        <template #about><p>Multiple items can be open at once.</p></template>
        <template #services><p>Open me too!</p></template>
        <template #contact><p>This item is disabled.</p></template>
      </SaAccordion>
    `,
  }),
}
