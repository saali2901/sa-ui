import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import SaInput from './SaInput.vue'

const meta: Meta<typeof SaInput> = {
  title: 'SaInput',
  component: SaInput,
}
export default meta
type Story = StoryObj<typeof SaInput>

export const Default: Story = {
  render: () => ({
    components: { SaInput },
    setup() {
      const text = ref('')
      return { text }
    },
    template: `
      <div>
        <SaInput v-model="text" label="Email" placeholder="sam@throw.gg" />
        <p class="mt-2 text-sm text-muted">Value: {{ text }}</p>
      </div>
    `,
  }),
}

export const WithHint: Story = {
  render: () => ({
    components: { SaInput },
    template: `
      <div class="flex flex-col gap-4 w-72">
        <SaInput label="Email" placeholder="sam@throw.gg" />
        <SaInput label="Password" type="password" placeholder="••••••••">
          <template #hint>
            <a href="#" class="text-xs text-muted hover:text-body duration-150">Forgot?</a>
          </template>
        </SaInput>
      </div>
    `,
  }),
}

export const WithError: Story = {
  render: () => ({
    components: { SaInput },
    setup() {
      const text = ref('')
      return { text }
    },
    template: `<SaInput v-model="text" label="Email" placeholder="you@example.com" error />`,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { SaInput },
    setup() {
      const text = ref('')
      return { text }
    },
    template: `<SaInput v-model="text" label="Disabled" placeholder="Can't type here" disabled />`,
  }),
}
