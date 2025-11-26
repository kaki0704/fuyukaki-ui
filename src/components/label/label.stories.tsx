import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '../input'
import { Label } from './label'

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Email Address',
    htmlFor: 'email',
  },
}

export const WithInput: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Enter your email" />
    </div>
  ),
}

export const FormExample: Story = {
  render: () => (
    <form className="w-full max-w-sm space-y-4">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="John Doe" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email-form">Email Address</Label>
        <Input type="email" id="email-form" placeholder="john@example.com" />
      </div>
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="message">Message</Label>
        <Input id="message" placeholder="Your message here..." />
      </div>
    </form>
  ),
}
