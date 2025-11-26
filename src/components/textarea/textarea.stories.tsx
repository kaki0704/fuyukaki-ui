import type { Meta, StoryObj } from '@storybook/react'
import { Label } from '../label'
import { Textarea } from './textarea'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Type your message here...',
  },
}

export const WithValue: Story = {
  args: {
    defaultValue: 'This is a warm and organic textarea component.',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'This textarea is disabled',
    disabled: true,
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Tell us about your experience..." id="message" />
    </div>
  ),
}

export const ContactForm: Story = {
  render: () => (
    <div className="w-full max-w-sm space-y-4">
      <div className="grid w-full gap-1.5">
        <Label htmlFor="feedback">Share your feedback</Label>
        <Textarea
          id="feedback"
          placeholder="We'd love to hear your thoughts about our organic products..."
          rows={5}
        />
        <p className="text-sm text-muted-foreground">
          Your feedback helps us improve our natural and sustainable offerings.
        </p>
      </div>
    </div>
  ),
}
