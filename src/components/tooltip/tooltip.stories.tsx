import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import { Tooltip } from './tooltip'

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Top: Story = {
  args: {
    content: 'This is a tooltip',
    side: 'top',
    children: <Button>Hover me</Button>,
  },
}

export const Bottom: Story = {
  args: {
    content: 'Tooltip on bottom',
    side: 'bottom',
    children: <Button>Hover me</Button>,
  },
}

export const Left: Story = {
  args: {
    content: 'Tooltip on left',
    side: 'left',
    children: <Button>Hover me</Button>,
  },
}

export const Right: Story = {
  args: {
    content: 'Tooltip on right',
    side: 'right',
    children: <Button>Hover me</Button>,
  },
}

export const LongContent: Story = {
  args: {
    content: 'This organic product is sourced from local farmers',
    side: 'top',
    children: <Button>Learn more</Button>,
  },
}

export const AllDirections: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-20">
      <Tooltip content="Top tooltip" side="top">
        <Button variant="outline">Top</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" side="right">
        <Button variant="outline">Right</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" side="bottom">
        <Button variant="outline">Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" side="left">
        <Button variant="outline">Left</Button>
      </Tooltip>
    </div>
  ),
}

export const ProductInfo: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Tooltip content="100% organic certification">
        <span className="text-sm text-foreground cursor-help underline decoration-dotted">
          Organic
        </span>
      </Tooltip>
      <Tooltip content="Locally sourced within 50km">
        <span className="text-sm text-foreground cursor-help underline decoration-dotted">
          Local
        </span>
      </Tooltip>
      <Tooltip content="Fair trade certified">
        <span className="text-sm text-foreground cursor-help underline decoration-dotted">
          Fair Trade
        </span>
      </Tooltip>
    </div>
  ),
}
