import '../src/styles/tailwind.css'
import type { Preview } from '@storybook/vue3'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'app',
      values: [
        { name: 'app', value: '#f4f4f3' },
        { name: 'white', value: '#ffffff' },
      ],
    },
    layout: 'padded',
  },
}

export default preview
