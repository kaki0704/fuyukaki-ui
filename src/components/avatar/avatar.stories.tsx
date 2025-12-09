import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarFallback, AvatarImage, AvatarStatus, AvatarWithInitials } from './avatar'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://i.pravatar.cc/150?img=1" alt="John Doe" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
}

export const Fallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="" alt="John Doe" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xs">
        <AvatarImage src="https://i.pravatar.cc/150?img=2" alt="User" />
        <AvatarFallback>XS</AvatarFallback>
      </Avatar>
      <Avatar size="sm">
        <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="User" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarImage src="https://i.pravatar.cc/150?img=4" alt="User" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://i.pravatar.cc/150?img=5" alt="User" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
      <Avatar size="xl">
        <AvatarImage src="https://i.pravatar.cc/150?img=6" alt="User" />
        <AvatarFallback>XL</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const Shapes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar shape="circle">
        <AvatarImage src="https://i.pravatar.cc/150?img=7" alt="Circle" />
        <AvatarFallback>C</AvatarFallback>
      </Avatar>
      <Avatar shape="square">
        <AvatarImage src="https://i.pravatar.cc/150?img=8" alt="Square" />
        <AvatarFallback>S</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const WithStatus: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/150?img=9" alt="Online User" />
        <AvatarFallback>ON</AvatarFallback>
        <AvatarStatus status="online" />
      </Avatar>
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/150?img=10" alt="Offline User" />
        <AvatarFallback>OF</AvatarFallback>
        <AvatarStatus status="offline" />
      </Avatar>
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/150?img=11" alt="Busy User" />
        <AvatarFallback>BS</AvatarFallback>
        <AvatarStatus status="busy" />
      </Avatar>
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="Away User" />
        <AvatarFallback>AW</AvatarFallback>
        <AvatarStatus status="away" />
      </Avatar>
    </div>
  ),
}

export const WithInitialsHelper: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <AvatarWithInitials name="John Doe" src="https://i.pravatar.cc/150?img=13" />
      <AvatarWithInitials name="Jane Smith" src="" />
      <AvatarWithInitials
        name="Bob Johnson"
        src="https://i.pravatar.cc/150?img=14"
        status="online"
      />
    </div>
  ),
}

export const AllSizesWithStatus: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xs">
        <AvatarImage src="https://i.pravatar.cc/150?img=15" alt="User" />
        <AvatarFallback>U</AvatarFallback>
        <AvatarStatus status="online" />
      </Avatar>
      <Avatar size="sm">
        <AvatarImage src="https://i.pravatar.cc/150?img=16" alt="User" />
        <AvatarFallback>U</AvatarFallback>
        <AvatarStatus status="busy" />
      </Avatar>
      <Avatar size="md">
        <AvatarImage src="https://i.pravatar.cc/150?img=17" alt="User" />
        <AvatarFallback>U</AvatarFallback>
        <AvatarStatus status="away" />
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://i.pravatar.cc/150?img=18" alt="User" />
        <AvatarFallback>U</AvatarFallback>
        <AvatarStatus status="offline" />
      </Avatar>
      <Avatar size="xl">
        <AvatarImage src="https://i.pravatar.cc/150?img=19" alt="User" />
        <AvatarFallback>U</AvatarFallback>
        <AvatarStatus status="online" />
      </Avatar>
    </div>
  ),
}

export const FallbackOnly: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>B</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>C</AvatarFallback>
      </Avatar>
    </div>
  ),
}
