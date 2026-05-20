import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import SaModal from './SaModal.vue'
import SaButton from '../SaButton/SaButton.vue'

const meta: Meta<typeof SaModal> = {
  title: 'SaModal',
  component: SaModal,
}
export default meta
type Story = StoryObj<typeof SaModal>

export const Default: Story = {
  render: () => ({
    components: { SaModal, SaButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <SaButton @click="isOpen = true">Open Modal</SaButton>
        <SaModal :is-open="isOpen" @close="isOpen = false">
          <template #title>Confirmation</template>
          <template #body>Are you sure you want to proceed with this action?</template>
          <template #actions>
            <SaButton size="sm" @click="isOpen = false">Confirm</SaButton>
            <SaButton size="sm" color="tertiary" @click="isOpen = false">Cancel</SaButton>
          </template>
        </SaModal>
      </div>
    `,
  }),
}

export const NoBackdropClose: Story = {
  render: () => ({
    components: { SaModal, SaButton },
    setup() {
      const isOpen = ref(false)
      return { isOpen }
    },
    template: `
      <div>
        <SaButton @click="isOpen = true">Open (no backdrop close)</SaButton>
        <SaModal :is-open="isOpen" :close-on-backdrop="false" @close="isOpen = false">
          <template #title>Persistent Modal</template>
          <template #body>Click the X button to close. Backdrop click won't close it.</template>
          <template #actions>
            <SaButton size="sm" @click="isOpen = false">OK</SaButton>
          </template>
        </SaModal>
      </div>
    `,
  }),
}
