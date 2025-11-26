import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertDescription, AlertTitle } from './alert'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'destructive', 'warning'],
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    aria-label="Info"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
)

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    aria-label="Success"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="m9 11 3 3L22 4" />
  </svg>
)

const AlertIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    role="img"
    aria-label="Alert"
  >
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
)

export const Default: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <InfoIcon />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is a default alert with warm, organic styling.
      </AlertDescription>
    </Alert>
  ),
}

export const Success: Story = {
  render: () => (
    <Alert variant="success" className="w-[400px]">
      <CheckIcon />
      <AlertTitle>Order Confirmed</AlertTitle>
      <AlertDescription>
        Your order has been successfully placed. We&apos;ll send you a confirmation email shortly.
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[400px]">
      <AlertIcon />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        There was an error processing your request. Please try again later.
      </AlertDescription>
    </Alert>
  ),
}

export const Warning: Story = {
  render: () => (
    <Alert variant="warning" className="w-[400px]">
      <AlertIcon />
      <AlertTitle>Limited Stock</AlertTitle>
      <AlertDescription>
        Only 3 items remaining. Order soon to secure your purchase.
      </AlertDescription>
    </Alert>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-[400px]">
      <Alert>
        <InfoIcon />
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>Neutral information with warm tones.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <CheckIcon />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Natural green for positive messages.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertIcon />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Persimmon orange for important notices.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertIcon />
        <AlertTitle>Destructive</AlertTitle>
        <AlertDescription>Warm red-brown for errors.</AlertDescription>
      </Alert>
    </div>
  ),
}
