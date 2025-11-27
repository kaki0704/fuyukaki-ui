import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from './progress'

const meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 60,
  },
  render: (args) => (
    <div className="w-80">
      <Progress {...args} />
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <p className="text-sm text-foreground mb-2">Primary (60%)</p>
        <Progress value={60} variant="primary" />
      </div>
      <div>
        <p className="text-sm text-foreground mb-2">Secondary (75%)</p>
        <Progress value={75} variant="secondary" />
      </div>
      <div>
        <p className="text-sm text-foreground mb-2">Success (90%)</p>
        <Progress value={90} variant="success" />
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <p className="text-sm text-foreground mb-2">Small</p>
        <Progress value={60} size="sm" />
      </div>
      <div>
        <p className="text-sm text-foreground mb-2">Medium</p>
        <Progress value={60} size="md" />
      </div>
      <div>
        <p className="text-sm text-foreground mb-2">Large</p>
        <Progress value={60} size="lg" />
      </div>
    </div>
  ),
}

export const Values: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <p className="text-sm text-foreground mb-2">0%</p>
        <Progress value={0} />
      </div>
      <div>
        <p className="text-sm text-foreground mb-2">25%</p>
        <Progress value={25} />
      </div>
      <div>
        <p className="text-sm text-foreground mb-2">50%</p>
        <Progress value={50} />
      </div>
      <div>
        <p className="text-sm text-foreground mb-2">75%</p>
        <Progress value={75} />
      </div>
      <div>
        <p className="text-sm text-foreground mb-2">100%</p>
        <Progress value={100} />
      </div>
    </div>
  ),
}
