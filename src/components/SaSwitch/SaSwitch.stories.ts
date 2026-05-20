import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import SaSwitch from './SaSwitch.vue'

const meta: Meta<typeof SaSwitch> = {
  title: 'SaSwitch',
  component: SaSwitch,
}
export default meta
type Story = StoryObj<typeof SaSwitch>

export const Sizes: Story = {
  render: () => ({
    components: { SaSwitch },
    setup() {
      const on = ref(false)
      return { on }
    },
    template: `
      <div class="space-y-4">
        <SaSwitch v-model="on" label="Small" size="sm" name="sm" />
        <SaSwitch v-model="on" label="Medium (default)" size="md" name="md" />
        <SaSwitch v-model="on" label="Large" size="lg" name="lg" />
      </div>
    `,
  }),
}

export const WithSubtitle: Story = {
  render: () => ({
    components: { SaSwitch },
    setup() {
      const score = ref(true)
      const crowd = ref(false)
      const doubleIn = ref(false)
      const doubleOut = ref(true)
      return { score, crowd, doubleIn, doubleOut }
    },
    template: `
      <div class="flex flex-col divide-y divide-border w-80">
        <div class="py-3">
          <SaSwitch v-model="score" label="Score Announcements" subtitle="Narrate every successful dart hit" />
        </div>
        <div class="py-3">
          <SaSwitch v-model="crowd" label="Ambient Crowd Noise" subtitle="Low background stadium atmosphere" />
        </div>
        <div class="py-3">
          <SaSwitch v-model="doubleIn" label="Double In" subtitle="Players must hit a double to start scoring" />
        </div>
        <div class="py-3">
          <SaSwitch v-model="doubleOut" label="Double Out" subtitle="The final winning dart must be a double" />
        </div>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { SaSwitch },
    template: `<SaSwitch :model-value="true" label="Enabled but disabled" disabled name="dis" />`,
  }),
}

export const Interactive: Story = {
  render: () => ({
    components: { SaSwitch },
    setup() {
      const on = ref(false)
      return { on }
    },
    template: `
      <div>
        <SaSwitch v-model="on" label="Dark mode" name="dark" />
        <p class="mt-2 text-sm text-muted">Value: {{ on }}</p>
      </div>
    `,
  }),
}
