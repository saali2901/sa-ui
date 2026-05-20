import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import SaCarousel from './SaCarousel.vue'

const meta: Meta<typeof SaCarousel> = {
  title: 'SaCarousel',
  component: SaCarousel,
}
export default meta
type Story = StoryObj<typeof SaCarousel>

export const Default: Story = {
  render: () => ({
    components: { SaCarousel },
    setup() {
      const current = ref(0)
      return { current }
    },
    template: `
      <SaCarousel v-model="current" class="max-w-lg">
        <div class="bg-primary-soft flex items-center justify-center h-48">
          <span class="text-2xl font-bold">Slide 1</span>
        </div>
        <div class="bg-success-soft flex items-center justify-center h-48">
          <span class="text-2xl font-bold text-success-text">Slide 2</span>
        </div>
        <div class="bg-warning-soft flex items-center justify-center h-48">
          <span class="text-2xl font-bold text-warning-text">Slide 3</span>
        </div>
      </SaCarousel>
    `,
  }),
}

export const Autoplay: Story = {
  render: () => ({
    components: { SaCarousel },
    setup() {
      const current = ref(0)
      return { current }
    },
    template: `
      <SaCarousel v-model="current" autoplay :interval="3000" class="max-w-lg">
        <div class="bg-info-soft flex items-center justify-center h-48"><span class="text-xl">Auto 1</span></div>
        <div class="bg-error-soft flex items-center justify-center h-48"><span class="text-xl">Auto 2</span></div>
        <div class="bg-primary-soft flex items-center justify-center h-48"><span class="text-xl">Auto 3</span></div>
      </SaCarousel>
    `,
  }),
}

export const NoArrows: Story = {
  render: () => ({
    components: { SaCarousel },
    setup() {
      const current = ref(0)
      return { current }
    },
    template: `
      <SaCarousel v-model="current" :show-arrows="false" :loop="false" class="max-w-lg">
        <div class="bg-surface-hover flex items-center justify-center h-48"><span>First</span></div>
        <div class="bg-surface-hover flex items-center justify-center h-48"><span>Last</span></div>
      </SaCarousel>
    `,
  }),
}
