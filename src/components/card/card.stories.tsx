import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '../badge'
import { Button } from '../button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card'

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content with warm, organic styling.</p>
      </CardContent>
    </Card>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Natural Recipe</CardTitle>
        <CardDescription>A warm and comforting dish</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This recipe uses organic ingredients sourced from local farms.</p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="primary" size="sm">
          View Recipe
        </Button>
        <Button variant="outline" size="sm">
          Save
        </Button>
      </CardFooter>
    </Card>
  ),
}

export const WithBadge: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Artisan Coffee</CardTitle>
          <Badge variant="success">Organic</Badge>
        </div>
        <CardDescription>Hand-roasted with care</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Experience the rich, earthy flavors of our single-origin beans.</p>
      </CardContent>
    </Card>
  ),
}

export const ProductGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Green Tea Set</CardTitle>
            <Badge>New</Badge>
          </div>
          <CardDescription>Traditional Japanese ceramics</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Handcrafted tea set with natural glaze finish.</p>
        </CardContent>
        <CardFooter>
          <Button variant="primary" size="sm" className="w-full">
            Add to Cart
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Organic Honey</CardTitle>
            <Badge variant="success">Certified</Badge>
          </div>
          <CardDescription>Pure wildflower honey</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Harvested from sustainable beekeeping practices.</p>
        </CardContent>
        <CardFooter>
          <Button variant="primary" size="sm" className="w-full">
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  ),
}
