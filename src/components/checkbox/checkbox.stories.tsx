import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
}

export const Checked: Story = {
  args: {
    label: 'Newsletter subscription',
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled and checked',
    disabled: true,
    defaultChecked: true,
  },
}

export const WithoutLabel: Story = {
  args: {},
}

export const FormExample: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-3">
        <p className="text-sm font-medium text-foreground">Select your preferences:</p>
        <Checkbox label="Organic ingredients only" defaultChecked />
        <Checkbox label="Vegetarian options" />
        <Checkbox label="Gluten-free alternatives" />
        <Checkbox label="Local produce" defaultChecked />
      </div>
    </div>
  ),
}
