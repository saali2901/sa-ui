import type { Meta, StoryObj } from '@storybook/vue3'
import SaUploadArea from './SaUploadArea.vue'

const meta: Meta<typeof SaUploadArea> = {
  title: 'SaUploadArea',
  component: SaUploadArea,
}
export default meta
type Story = StoryObj<typeof SaUploadArea>

export const Default: Story = {
  render: () => ({
    components: { SaUploadArea },
    template: `<SaUploadArea />`,
  }),
}

export const CustomTextAndAccept: Story = {
  render: () => ({
    components: { SaUploadArea },
    template: `<SaUploadArea drop-text="Drop images here or click to browse" accept=".png,.jpg,.jpeg,.webp" />`,
  }),
}

export const MultipleFiles: Story = {
  render: () => ({
    components: { SaUploadArea },
    template: `<SaUploadArea drop-text="Upload multiple documents" accept=".pdf,.doc,.docx" multiple />`,
  }),
}
