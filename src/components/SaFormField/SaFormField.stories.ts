import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import SaFormField from './SaFormField.vue'
import SaInput from '../SaInput/SaInput.vue'
import SaTextarea from '../SaTextarea/SaTextarea.vue'

const meta: Meta<typeof SaFormField> = {
  title: 'SaFormField',
  component: SaFormField,
}
export default meta
type Story = StoryObj<typeof SaFormField>

export const WithLabelAndHint: Story = {
  render: () => ({
    components: { SaFormField, SaInput },
    setup() {
      const email = ref('')
      return { email }
    },
    template: `
      <SaFormField label="Email" hint="We will never share your email.">
        <SaInput v-model="email" placeholder="you@example.com" />
      </SaFormField>
    `,
  }),
}

export const RequiredWithError: Story = {
  render: () => ({
    components: { SaFormField, SaInput },
    setup() {
      const email = ref('')
      return { email }
    },
    template: `
      <SaFormField label="Email" required error="This field is required.">
        <SaInput v-model="email" placeholder="you@example.com" error />
      </SaFormField>
    `,
  }),
}

export const WithTextarea: Story = {
  render: () => ({
    components: { SaFormField, SaTextarea },
    setup() {
      const message = ref('')
      return { message }
    },
    template: `
      <SaFormField label="Message" hint="Max 500 characters.">
        <SaTextarea v-model="message" placeholder="Write something..." />
      </SaFormField>
    `,
  }),
}
