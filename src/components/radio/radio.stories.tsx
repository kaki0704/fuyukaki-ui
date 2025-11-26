import type { Meta, StoryObj } from '@storybook/react'
import { Label } from '../label'
import { Radio, RadioGroup } from './radio'

const meta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Option 1',
    name: 'option',
  },
}

export const Checked: Story = {
  args: {
    label: 'Selected option',
    name: 'option',
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
  },
}

export const RadioGroupExample: Story = {
  render: () => (
    <div className="space-y-3">
      <Label>Select your preferred delivery method</Label>
      <RadioGroup>
        <Radio label="Standard shipping (5-7 days)" name="shipping" defaultChecked />
        <Radio label="Express shipping (2-3 days)" name="shipping" />
        <Radio label="Local pickup (Same day)" name="shipping" />
      </RadioGroup>
    </div>
  ),
}

export const ProductOptions: Story = {
  render: () => (
    <div className="w-[350px] space-y-6">
      <div className="space-y-3">
        <Label>Coffee roast level</Label>
        <RadioGroup>
          <Radio label="Light roast" name="roast" />
          <Radio label="Medium roast" name="roast" defaultChecked />
          <Radio label="Dark roast" name="roast" />
        </RadioGroup>
      </div>
      <div className="space-y-3">
        <Label>Package size</Label>
        <RadioGroup>
          <Radio label="250g - Perfect for trying" name="size" />
          <Radio label="500g - Most popular" name="size" defaultChecked />
          <Radio label="1kg - Best value" name="size" />
        </RadioGroup>
      </div>
    </div>
  ),
}
