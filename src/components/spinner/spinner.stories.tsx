import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './spinner'

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" />
        <p className="text-xs text-muted-foreground">Small</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="md" />
        <p className="text-xs text-muted-foreground">Medium</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <p className="text-xs text-muted-foreground">Large</p>
      </div>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="primary" />
        <p className="text-xs text-muted-foreground">Primary</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="secondary" />
        <p className="text-xs text-muted-foreground">Secondary</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner variant="muted" />
        <p className="text-xs text-muted-foreground">Muted</p>
      </div>
    </div>
  ),
}
