import type { Meta, StoryObj } from '@storybook/react'
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './carousel'

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Carousel>

const slides = [
  { id: 'slide-1', bg: 'bg-blue-500', text: 'Slide 1' },
  { id: 'slide-2', bg: 'bg-green-500', text: 'Slide 2' },
  { id: 'slide-3', bg: 'bg-purple-500', text: 'Slide 3' },
  { id: 'slide-4', bg: 'bg-orange-500', text: 'Slide 4' },
  { id: 'slide-5', bg: 'bg-pink-500', text: 'Slide 5' },
]

export const Default: Story = {
  render: () => (
    <Carousel className="w-[400px]">
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div
              className={`${slide.bg} flex h-[200px] items-center justify-center rounded-lg text-white text-2xl font-bold`}
            >
              {slide.text}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}

export const WithDots: Story = {
  render: () => (
    <Carousel className="w-[400px]">
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div
              className={`${slide.bg} flex h-[200px] items-center justify-center rounded-lg text-white text-2xl font-bold`}
            >
              {slide.text}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselDots className="mt-4" />
    </Carousel>
  ),
}

export const LineDots: Story = {
  render: () => (
    <Carousel className="w-[400px]">
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div
              className={`${slide.bg} flex h-[200px] items-center justify-center rounded-lg text-white text-2xl font-bold`}
            >
              {slide.text}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselDots variant="line" className="mt-4" />
    </Carousel>
  ),
}

export const Loop: Story = {
  render: () => (
    <Carousel className="w-[400px]" loop>
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div
              className={`${slide.bg} flex h-[200px] items-center justify-center rounded-lg text-white text-2xl font-bold`}
            >
              {slide.text}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselDots className="mt-4" />
    </Carousel>
  ),
}

export const AutoPlay: Story = {
  render: () => (
    <Carousel className="w-[400px]" autoPlay interval={3000} loop>
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div
              className={`${slide.bg} flex h-[200px] items-center justify-center rounded-lg text-white text-2xl font-bold`}
            >
              {slide.text}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselDots className="mt-4" />
    </Carousel>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Carousel className="h-[300px] w-[400px]" orientation="vertical">
      <CarouselContent>
        {slides.map((slide) => (
          <CarouselItem key={slide.id}>
            <div
              className={`${slide.bg} flex h-[300px] items-center justify-center rounded-lg text-white text-2xl font-bold`}
            >
              {slide.text}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
}

export const WithImages: Story = {
  render: () => (
    <Carousel className="w-[500px]" loop>
      <CarouselContent>
        {[1, 2, 3, 4, 5].map((num) => (
          <CarouselItem key={num}>
            <div className="overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${num}/500/300`}
                alt={`Slide ${num}`}
                className="h-[300px] w-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselDots variant="line" className="mt-4" />
    </Carousel>
  ),
}

export const CardCarousel: Story = {
  render: () => (
    <Carousel className="w-[400px]">
      <CarouselContent>
        {[1, 2, 3, 4, 5].map((num) => (
          <CarouselItem key={num}>
            <div className="p-2">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold">Card {num}</h3>
                <p className="mt-2 text-muted-foreground">
                  This is a description for card {num}. It contains some interesting content.
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselDots className="mt-4" />
    </Carousel>
  ),
}
