import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './input'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

export const WithValue: Story = {
  args: {
    defaultValue: 'Hello, world!',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
}

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter your email',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
}

export const FormExample: Story = {
  render: () => (
    <div className="w-[350px] space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Name
        </label>
        <Input id="name" placeholder="Your name" />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <Input id="email" type="email" placeholder="your@email.com" />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <Input id="message" placeholder="Your message" />
      </div>
    </div>
  ),
}
