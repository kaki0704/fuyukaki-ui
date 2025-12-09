import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Slider } from './slider'

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState(50)
    return (
      <div className="w-[300px]">
        <Slider value={value} onChange={setValue} />
        <p className="mt-4 text-sm text-muted-foreground">Value: {value}</p>
      </div>
    )
  },
}

export const WithDefaultValue: Story = {
  render: () => (
    <div className="w-[300px]">
      <Slider defaultValue={30} />
    </div>
  ),
}

export const ShowValue: Story = {
  render: () => {
    const [value, setValue] = React.useState(75)
    return (
      <div className="w-[300px]">
        <Slider value={value} onChange={setValue} showValue />
      </div>
    )
  },
}

export const CustomRange: Story = {
  render: () => {
    const [value, setValue] = React.useState(5)
    return (
      <div className="w-[300px]">
        <Slider value={value} onChange={setValue} min={0} max={10} step={1} showValue />
        <p className="mt-4 text-sm text-muted-foreground">Range: 0-10, Step: 1</p>
      </div>
    )
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="w-[300px] space-y-8">
      <div>
        <p className="text-sm font-medium mb-2">Small</p>
        <Slider defaultValue={30} size="sm" />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Medium (default)</p>
        <Slider defaultValue={50} size="md" />
      </div>
      <div>
        <p className="text-sm font-medium mb-2">Large</p>
        <Slider defaultValue={70} size="lg" />
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="w-[300px]">
      <Slider defaultValue={40} disabled />
    </div>
  ),
}

export const Vertical: Story = {
  render: () => {
    const [value, setValue] = React.useState(60)
    return (
      <div className="h-[200px] flex items-center gap-4">
        <Slider value={value} onChange={setValue} orientation="vertical" />
        <p className="text-sm text-muted-foreground">Value: {value}</p>
      </div>
    )
  },
}

export const DecimalStep: Story = {
  render: () => {
    const [value, setValue] = React.useState(0.5)
    return (
      <div className="w-[300px]">
        <Slider value={value} onChange={setValue} min={0} max={1} step={0.1} showValue />
        <p className="mt-4 text-sm text-muted-foreground">Range: 0-1, Step: 0.1</p>
      </div>
    )
  },
}

export const VolumeControl: Story = {
  render: () => {
    const [volume, setVolume] = React.useState(80)
    return (
      <div className="w-[300px]">
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted-foreground"
            role="img"
            aria-label="Volume"
          >
            <title>Volume</title>
            {volume === 0 ? (
              <>
                <polygon points="11,5 6,9 2,9 2,15 6,15 11,19 11,5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </>
            ) : volume < 50 ? (
              <>
                <polygon points="11,5 6,9 2,9 2,15 6,15 11,19 11,5" />
                <path d="M15.54,8.46a5,5,0,0,1,0,7.07" />
              </>
            ) : (
              <>
                <polygon points="11,5 6,9 2,9 2,15 6,15 11,19 11,5" />
                <path d="M19.07,4.93a10,10,0,0,1,0,14.14" />
                <path d="M15.54,8.46a5,5,0,0,1,0,7.07" />
              </>
            )}
          </svg>
          <Slider value={volume} onChange={setVolume} className="flex-1" aria-label="Volume" />
          <span className="text-sm text-muted-foreground w-8 text-right">{volume}</span>
        </div>
      </div>
    )
  },
}

export const PriceRange: Story = {
  render: () => {
    const [price, setPrice] = React.useState(500)
    return (
      <div className="w-[300px]">
        <span id="price-label" className="text-sm font-medium">
          Max Price
        </span>
        <Slider
          value={price}
          onChange={setPrice}
          min={0}
          max={1000}
          step={50}
          className="mt-2"
          aria-labelledby="price-label"
        />
        <div className="flex justify-between mt-2 text-sm text-muted-foreground">
          <span>$0</span>
          <span className="font-medium text-foreground">${price}</span>
          <span>$1000</span>
        </div>
      </div>
    )
  },
}
