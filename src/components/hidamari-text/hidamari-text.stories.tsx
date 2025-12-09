import type { Meta, StoryObj } from '@storybook/react'
import { HidamariText } from './hidamari-text'

const meta = {
  title: 'Components/HidamariText',
  component: HidamariText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Hidamari Text',
  },
} satisfies Meta<typeof HidamariText>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
      <HidamariText>Fuyukaki</HidamariText> UI
    </h1>
  ),
}

export const CustomColors: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <h1 className="text-4xl font-bold tracking-tighter">
        <HidamariText colors={['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4']}>
          Ocean Breeze
        </HidamariText>
      </h1>
      <h1 className="text-4xl font-bold tracking-tighter">
        <HidamariText colors={['#F093FB', '#F5576C', '#4FACFE', '#00F2FE']}>
          Sunset Glow
        </HidamariText>
      </h1>
      <h1 className="text-4xl font-bold tracking-tighter">
        <HidamariText colors={['#667EEA', '#764BA2', '#F093FB', '#F5576C']}>
          Purple Dream
        </HidamariText>
      </h1>
    </div>
  ),
}

export const DifferentSpeeds: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold">
          <HidamariText speed={0.5}>Slow Animation</HidamariText>
        </h1>
        <p className="text-xs text-muted-foreground">speed: 0.5</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold">
          <HidamariText speed={1}>Normal Speed</HidamariText>
        </h1>
        <p className="text-xs text-muted-foreground">speed: 1</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold">
          <HidamariText speed={2}>Fast Animation</HidamariText>
        </h1>
        <p className="text-xs text-muted-foreground">speed: 2</p>
      </div>
    </div>
  ),
}

export const InParagraph: Story = {
  render: () => (
    <p className="max-w-lg text-lg">
      Build your next project with <HidamariText>cutting-edge</HidamariText> technology and{' '}
      <HidamariText>modern design</HidamariText> principles.
    </p>
  ),
}

export const OriginalMagicUI: Story = {
  render: () => (
    <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
      Ship{' '}
      <HidamariText colors={['#FF0080', '#7928CA', '#0070F3', '#38bdf8']}>beautiful</HidamariText>{' '}
      products
    </h1>
  ),
}
