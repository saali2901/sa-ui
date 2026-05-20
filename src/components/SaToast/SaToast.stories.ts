import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import SaToast from './SaToast.vue'
import SaButton from '../SaButton/SaButton.vue'

const meta: Meta<typeof SaToast> = {
  title: 'SaToast',
  component: SaToast,
}
export default meta
type Story = StoryObj<typeof SaToast>

export const AllTypes: Story = {
  render: () => ({
    components: { SaToast, SaButton },
    setup() {
      const toastRef = ref<InstanceType<typeof SaToast> | null>(null)
      const messages: Record<string, string> = {
        success: 'Operation completed successfully!',
        error: 'Something went wrong. Please try again.',
        warning: 'Please check your input.',
        info: 'Here is some useful information.',
      }
      const addToast = (type: 'success' | 'error' | 'warning' | 'info') => {
        toastRef.value?.add(type, messages[type])
      }
      return { toastRef, addToast }
    },
    template: `
      <div>
        <div class="flex flex-wrap gap-2">
          <SaButton color="primary" size="sm" @click="addToast('success')">Success</SaButton>
          <SaButton color="secondary" size="sm" @click="addToast('error')">Error</SaButton>
          <SaButton color="secondary" size="sm" @click="addToast('warning')">Warning</SaButton>
          <SaButton color="secondary" size="sm" @click="addToast('info')">Info</SaButton>
        </div>
        <SaToast ref="toastRef" position="top-right" />
      </div>
    `,
  }),
}
