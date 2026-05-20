import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import SaPagination from './SaPagination.vue'

const meta: Meta<typeof SaPagination> = {
  title: 'SaPagination',
  component: SaPagination,
}
export default meta
type Story = StoryObj<typeof SaPagination>

export const FewPages: Story = {
  render: () => ({
    components: { SaPagination },
    setup() {
      const page = ref(1)
      return { page }
    },
    template: `
      <div>
        <SaPagination v-model="page" :total-pages="5" />
        <p class="mt-2 text-sm text-muted">Page: {{ page }}</p>
      </div>
    `,
  }),
}

export const ManyPages: Story = {
  render: () => ({
    components: { SaPagination },
    setup() {
      const page = ref(10)
      return { page }
    },
    template: `
      <div>
        <SaPagination v-model="page" :total-pages="50" />
        <p class="mt-2 text-sm text-muted">Page: {{ page }}</p>
      </div>
    `,
  }),
}

export const CustomSiblingCount: Story = {
  render: () => ({
    components: { SaPagination },
    setup() {
      const page = ref(10)
      return { page }
    },
    template: `<SaPagination v-model="page" :total-pages="50" :sibling-count="2" />`,
  }),
}
