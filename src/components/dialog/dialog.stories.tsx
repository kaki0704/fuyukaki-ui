import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from '../button'
import { Input } from '../input'
import { Label } from '../label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './dialog'

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    open: true,
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <div className="p-8">
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Welcome</DialogTitle>
              <DialogDescription>
                This is a warm and organic dialog component.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm text-foreground">
                Dialog content goes here. Notice the warm brown shadow instead of harsh black.
              </p>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    )
  },
}

export const WithForm: Story = {
  args: {
    open: false,
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div className="p-8">
        <Button onClick={() => setOpen(true)}>Edit Profile</Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="john@example.com" type="email" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    )
  },
}

export const Confirmation: Story = {
  args: {
    open: false,
    children: null,
  },
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div className="p-8">
        <Button variant="destructive" onClick={() => setOpen(true)}>
          Delete Item
        </Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your item.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={() => setOpen(false)}>
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    )
  },
}
