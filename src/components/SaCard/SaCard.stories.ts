import type { Meta, StoryObj } from '@storybook/vue3'
import SaCard from './SaCard.vue'
import SaButton from '../SaButton/SaButton.vue'

const meta: Meta<typeof SaCard> = {
  title: 'SaCard',
  component: SaCard,
}
export default meta
type Story = StoryObj<typeof SaCard>

export const FullCard: Story = {
  render: () => ({
    components: { SaCard, SaButton },
    template: `
      <SaCard class="max-w-sm">
        <template #image>
          <img src="https://picsum.photos/400/200" alt="Sample" />
        </template>
        <template #title>Card Title</template>
        <template #body>
          This is the card body content. It provides additional detail and context about the card subject.
        </template>
        <template #actions>
          <SaButton size="sm">Action</SaButton>
          <SaButton size="sm" color="tertiary">Cancel</SaButton>
        </template>
      </SaCard>
    `,
  }),
}

export const WithoutImage: Story = {
  render: () => ({
    components: { SaCard },
    template: `
      <SaCard class="max-w-sm">
        <template #title>Simple Card</template>
        <template #body>A card without an image section.</template>
      </SaCard>
    `,
  }),
}

export const TitleOnly: Story = {
  render: () => ({
    components: { SaCard },
    template: `
      <SaCard class="max-w-sm">
        <template #title>Minimal Card</template>
      </SaCard>
    `,
  }),
}
