import type { Meta, StoryObj } from '@storybook/vue3'
import SaTable from './SaTable.vue'

const meta: Meta<typeof SaTable> = {
  title: 'SaTable',
  component: SaTable,
}
export default meta
type Story = StoryObj<typeof SaTable>

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role', align: 'center' as const },
]

const rows = [
  { name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { name: 'Bob Smith', email: 'bob@example.com', role: 'Editor' },
  { name: 'Charlie Brown', email: 'charlie@example.com', role: 'Viewer' },
]

export const Default: Story = {
  render: () => ({
    components: { SaTable },
    setup() { return { columns, rows } },
    template: `<SaTable :columns="columns" :rows="rows" />`,
  }),
}

export const Striped: Story = {
  render: () => ({
    components: { SaTable },
    setup() { return { columns, rows } },
    template: `<SaTable :columns="columns" :rows="rows" striped />`,
  }),
}

export const Hoverable: Story = {
  render: () => ({
    components: { SaTable },
    setup() { return { columns, rows } },
    template: `<SaTable :columns="columns" :rows="rows" hoverable />`,
  }),
}

export const EmptyState: Story = {
  render: () => ({
    components: { SaTable },
    setup() { return { columns } },
    template: `<SaTable :columns="columns" :rows="[]" empty-text="No users found." />`,
  }),
}
