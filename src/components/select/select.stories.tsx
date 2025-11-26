import type { Meta, StoryObj } from '@storybook/react'
import { Label } from '../label'
import { Select } from './select'

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Select className="w-[200px]">
      <option value="">Select an option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </Select>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="country">Country</Label>
      <Select id="country">
        <option value="">Select a country</option>
        <option value="jp">Japan</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="fr">France</option>
      </Select>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Select disabled className="w-[200px]">
      <option value="">Disabled select</option>
      <option value="1">Option 1</option>
    </Select>
  ),
}

export const FormExample: Story = {
  render: () => (
    <div className="w-full max-w-sm space-y-4">
      <div className="grid w-full gap-1.5">
        <Label htmlFor="tea-type">Tea Type</Label>
        <Select id="tea-type">
          <option value="">Choose your tea</option>
          <option value="green">Green Tea</option>
          <option value="black">Black Tea</option>
          <option value="oolong">Oolong Tea</option>
          <option value="white">White Tea</option>
          <option value="herbal">Herbal Tea</option>
        </Select>
      </div>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="quantity">Quantity</Label>
        <Select id="quantity">
          <option value="50g">50g - Sample size</option>
          <option value="100g">100g - Personal use</option>
          <option value="250g">250g - Regular</option>
          <option value="500g">500g - Family pack</option>
        </Select>
      </div>
    </div>
  ),
}
