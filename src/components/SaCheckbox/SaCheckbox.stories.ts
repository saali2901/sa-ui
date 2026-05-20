import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import SaCheckbox from './SaCheckbox.vue'

const meta: Meta<typeof SaCheckbox> = {
  title: 'SaCheckbox',
  component: SaCheckbox,
}
export default meta
type Story = StoryObj<typeof SaCheckbox>

export const Default: Story = {
  render: () => ({
    components: { SaCheckbox },
    setup() {
      const checked = ref(false)
      return { checked }
    },
    template: `
      <div>
        <SaCheckbox v-model="checked" label="Accept terms and conditions" name="terms" />
        <p class="mt-2 text-sm text-muted">Value: {{ checked }}</p>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { SaCheckbox },
    setup() {
      const checked = ref(true)
      return { checked }
    },
    template: `<SaCheckbox v-model="checked" label="This is disabled" disabled name="disabled" />`,
  }),
}

export const WithoutLabel: Story = {
  render: () => ({
    components: { SaCheckbox },
    setup() {
      const checked = ref(false)
      return { checked }
    },
    template: `<SaCheckbox v-model="checked" name="no-label" />`,
  }),
}
