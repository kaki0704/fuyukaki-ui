import { useToast } from '@/hooks/use-toast'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import { ToastProvider, ToastViewport } from './toast'

const meta = {
  title: 'Components/Toast',
  component: ToastViewport,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
        <ToastViewport />
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof ToastViewport>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const { toast } = useToast()

    return (
      <Button
        onClick={() =>
          toast({
            title: 'Notification',
            description: 'This is a default toast message.',
          })
        }
      >
        Default Toast
      </Button>
    )
  },
}

export const Success: Story = {
  render: () => {
    const { toast } = useToast()

    return (
      <Button
        variant="secondary"
        onClick={() =>
          toast({
            title: 'Success!',
            description: 'Your changes have been saved successfully.',
            variant: 'success',
          })
        }
      >
        Success Toast
      </Button>
    )
  },
}

export const Warning: Story = {
  render: () => {
    const { toast } = useToast()

    return (
      <Button
        onClick={() =>
          toast({
            title: 'Warning',
            description: 'Are you sure you want to continue with this action?',
            variant: 'warning',
          })
        }
      >
        Warning Toast
      </Button>
    )
  },
}

export const Destructive: Story = {
  render: () => {
    const { toast } = useToast()

    return (
      <Button
        variant="destructive"
        onClick={() =>
          toast({
            title: 'Error occurred',
            description: 'An error occurred while processing your request.',
            variant: 'destructive',
          })
        }
      >
        Error Toast
      </Button>
    )
  },
}

export const WithAction: Story = {
  render: () => {
    const { toast } = useToast()

    return (
      <Button
        onClick={() =>
          toast({
            title: 'Update available',
            description: 'A new version has been released.',
            action: {
              label: 'Update',
              onClick: () => alert('Starting update'),
            },
          })
        }
      >
        Toast with Action
      </Button>
    )
  },
}

export const LongDescription: Story = {
  render: () => {
    const { toast } = useToast()

    return (
      <Button
        onClick={() =>
          toast({
            title: 'Long description',
            description:
              'This is a very long description text. It demonstrates how the toast component handles multi-line content. Please verify that long content is displayed properly.',
          })
        }
      >
        Long Description Toast
      </Button>
    )
  },
}

export const MultipleToasts: Story = {
  render: () => {
    const { toast } = useToast()

    const showMultiple = () => {
      toast({ title: 'First notification', variant: 'default' })
      setTimeout(() => {
        toast({ title: 'Second notification', variant: 'success' })
      }, 500)
      setTimeout(() => {
        toast({ title: 'Third notification', variant: 'warning' })
      }, 1000)
    }

    return <Button onClick={showMultiple}>Multiple Toasts</Button>
  },
}

export const AllVariants: Story = {
  render: () => {
    const { toast } = useToast()

    const showAll = () => {
      toast({ title: 'Default', variant: 'default' })
      toast({ title: 'Success', variant: 'success' })
      toast({ title: 'Warning', variant: 'warning' })
      toast({ title: 'Error', variant: 'destructive' })
    }

    return <Button onClick={showAll}>Show All Variants</Button>
  },
}

export const CustomDuration: Story = {
  render: () => {
    const { toast } = useToast()

    return (
      <div className="flex gap-2">
        <Button onClick={() => toast({ title: '1 second', duration: 1000 })}>1s</Button>
        <Button onClick={() => toast({ title: '5 seconds', duration: 5000 })}>5s</Button>
        <Button onClick={() => toast({ title: 'Persistent', duration: 0 })}>Persistent</Button>
      </div>
    )
  },
}

export const NonClosable: Story = {
  render: () => {
    const { toast } = useToast()

    return (
      <Button
        onClick={() =>
          toast({
            title: 'No close button',
            description: 'This toast has no close button.',
            closable: false,
            duration: 3000,
          })
        }
      >
        Non-closable Toast
      </Button>
    )
  },
}
