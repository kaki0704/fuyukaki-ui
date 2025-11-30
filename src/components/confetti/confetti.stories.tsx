import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import { useConfetti } from './confetti'

const meta = {
  title: 'Components/Confetti',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => {
    const { fire } = useConfetti()

    return <Button onClick={() => fire({ preset: 'basic' })}>Celebrate! 🎉</Button>
  },
}

export const Fireworks: Story = {
  render: () => {
    const { fire } = useConfetti()

    return <Button onClick={() => fire({ preset: 'fireworks' })}>Fireworks 🎆</Button>
  },
}

export const Snow: Story = {
  render: () => {
    const { fire } = useConfetti()

    return <Button onClick={() => fire({ preset: 'snow' })}>Snow ❄️</Button>
  },
}

export const Burst: Story = {
  render: () => {
    const { fire } = useConfetti()

    return <Button onClick={() => fire({ preset: 'burst' })}>Burst 💥</Button>
  },
}

export const CustomColors: Story = {
  render: () => {
    const { fire } = useConfetti()

    return (
      <div className="flex gap-2">
        <Button onClick={() => fire({ colors: ['#EB6101', '#6A8347'] })}>Persimmon & Leaf</Button>
        <Button
          variant="secondary"
          onClick={() => fire({ colors: ['#ff0000', '#00ff00', '#0000ff'] })}
        >
          RGB Colors
        </Button>
      </div>
    )
  },
}

export const DifferentOrigins: Story = {
  render: () => {
    const { fire } = useConfetti()

    return (
      <div className="flex gap-2">
        <Button onClick={() => fire({ origin: { x: 0, y: 0.6 } })}>Left</Button>
        <Button onClick={() => fire({ origin: { x: 0.5, y: 0.6 } })}>Center</Button>
        <Button onClick={() => fire({ origin: { x: 1, y: 0.6 } })}>Right</Button>
      </div>
    )
  },
}

export const AllPresets: Story = {
  render: () => {
    const { fire } = useConfetti()

    return (
      <div className="flex flex-col gap-2">
        <Button onClick={() => fire({ preset: 'basic' })}>Basic</Button>
        <Button onClick={() => fire({ preset: 'fireworks' })}>Fireworks</Button>
        <Button onClick={() => fire({ preset: 'snow' })}>Snow</Button>
        <Button onClick={() => fire({ preset: 'burst' })}>Burst</Button>
      </div>
    )
  },
}

export const HighIntensity: Story = {
  render: () => {
    const { fire } = useConfetti()

    return (
      <Button
        onClick={() =>
          fire({
            particleCount: 200,
            spread: 120,
            origin: { y: 0.6 },
          })
        }
      >
        Intense Celebration! 🎊
      </Button>
    )
  },
}
