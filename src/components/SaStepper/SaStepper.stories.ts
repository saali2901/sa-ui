import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import SaStepper from './SaStepper.vue'

const meta: Meta<typeof SaStepper> = {
  title: 'SaStepper',
  component: SaStepper,
}
export default meta
type Story = StoryObj<typeof SaStepper>

const steps = [
  { title: 'Account', description: 'Create your account' },
  { title: 'Profile', description: 'Set up your profile' },
  { title: 'Preferences', description: 'Configure settings' },
  { title: 'Done', description: 'Complete registration' },
]

export const Interactive: Story = {
  render: () => ({
    components: { SaStepper },
    setup() {
      const current = ref(1)
      return { current, steps }
    },
    template: `
      <div>
        <SaStepper :steps="steps" :current-step="current" />
        <div class="mt-4 flex gap-2">
          <button class="px-3 py-1 text-sm border border-border rounded-md" :disabled="current <= 0" @click="current--">Back</button>
          <button class="px-3 py-1 text-sm bg-primary text-on-primary rounded-md" :disabled="current >= steps.length - 1" @click="current++">Next</button>
        </div>
      </div>
    `,
  }),
}

export const FirstStep: Story = {
  render: () => ({
    components: { SaStepper },
    setup() { return { steps } },
    template: `<SaStepper :steps="steps" :current-step="0" />`,
  }),
}

export const LastStep: Story = {
  render: () => ({
    components: { SaStepper },
    setup() { return { steps } },
    template: `<SaStepper :steps="steps" :current-step="3" />`,
  }),
}
