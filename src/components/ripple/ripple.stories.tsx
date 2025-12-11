import type { Meta, StoryObj } from '@storybook/react'
import { Ripple } from './ripple'

const meta = {
  title: 'Components/Ripple',
  component: Ripple,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="relative flex h-[400px] w-[400px] items-center justify-center overflow-hidden rounded-lg border bg-background">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Ripple>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const SmallCircles: Story = {
  args: {
    mainCircleSize: 100,
    numCircles: 5,
  },
}

export const LargeCircles: Story = {
  args: {
    mainCircleSize: 150,
    numCircles: 10,
  },
}

export const HighOpacity: Story = {
  args: {
    mainCircleOpacity: 0.5,
  },
}

export const CustomColor: Story = {
  args: {
    color: 'var(--color-primary)',
  },
}

export const WithContent: Story = {
  render: () => (
    <div className="relative flex h-[400px] w-[400px] items-center justify-center overflow-hidden rounded-lg border bg-background">
      <Ripple />
      <div className="z-10 flex flex-col items-center gap-2">
        <div className="rounded-full bg-primary p-4 text-primary-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-label="Clock icon"
            role="img"
          >
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>
        <p className="text-sm font-medium text-foreground">Loading...</p>
      </div>
    </div>
  ),
}
