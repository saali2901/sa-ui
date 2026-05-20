import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import SaTextarea from './SaTextarea.vue'

const meta: Meta<typeof SaTextarea> = {
  title: 'SaTextarea',
  component: SaTextarea,
}
export default meta
type Story = StoryObj<typeof SaTextarea>

export const Default: Story = {
  render: () => ({
    components: { SaTextarea },
    setup() {
      const text = ref('')
      return { text }
    },
    template: `
      <div>
        <SaTextarea v-model="text" label="Description" placeholder="Write something…" />
        <p class="mt-2 text-sm text-muted">{{ text.length }} characters</p>
      </div>
    `,
  }),
}

export const WithError: Story = {
  render: () => ({
    components: { SaTextarea },
    setup() {
      const text = ref('')
      return { text }
    },
    template: `<SaTextarea v-model="text" label="Bio" error placeholder="Too short…" />`,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { SaTextarea },
    template: `<SaTextarea model-value="Can't edit this" label="Read only" disabled />`,
  }),
}
