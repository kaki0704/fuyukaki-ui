import { cn } from '@/utils'
import * as React from 'react'

export interface CarouselProps extends React.HTMLAttributes<HTMLElement> {
  /** Orientation of the carousel */
  orientation?: 'horizontal' | 'vertical'
  /** Enable auto-play */
  autoPlay?: boolean
  /** Auto-play interval in milliseconds */
  interval?: number
  /** Enable infinite loop */
  loop?: boolean
  /** Current slide index (controlled) */
  activeIndex?: number
  /** Default active slide index */
  defaultActiveIndex?: number
  /** Callback when slide changes */
  onSlideChange?: (index: number) => void
}

interface CarouselContextValue {
  activeIndex: number
  totalSlides: number
  orientation: 'horizontal' | 'vertical'
  loop: boolean
  scrollPrev: () => void
  scrollNext: () => void
  scrollTo: (index: number) => void
  canScrollPrev: boolean
  canScrollNext: boolean
  registerSlide: () => number
  unregisterSlide: () => void
}

const CarouselContext = React.createContext<CarouselContextValue | undefined>(undefined)

function useCarouselContext() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error('Carousel components must be used within Carousel')
  }
  return context
}

const Carousel = React.forwardRef<HTMLElement, CarouselProps>(
  (
    {
      className,
      orientation = 'horizontal',
      autoPlay = false,
      interval = 5000,
      loop = false,
      activeIndex: controlledIndex,
      defaultActiveIndex = 0,
      onSlideChange,
      children,
      ...props
    },
    ref
  ) => {
    const [uncontrolledIndex, setUncontrolledIndex] = React.useState(defaultActiveIndex)
    const [totalSlides, setTotalSlides] = React.useState(0)
    const slideCountRef = React.useRef(0)

    const activeIndex = controlledIndex !== undefined ? controlledIndex : uncontrolledIndex

    const setActiveIndex = React.useCallback(
      (index: number) => {
        if (controlledIndex === undefined) {
          setUncontrolledIndex(index)
        }
        onSlideChange?.(index)
      },
      [controlledIndex, onSlideChange]
    )

    const canScrollPrev = loop || activeIndex > 0
    const canScrollNext = loop || activeIndex < totalSlides - 1

    const scrollTo = React.useCallback(
      (index: number) => {
        let newIndex = index
        if (loop) {
          if (index < 0) newIndex = totalSlides - 1
          else if (index >= totalSlides) newIndex = 0
        } else {
          newIndex = Math.max(0, Math.min(index, totalSlides - 1))
        }
        setActiveIndex(newIndex)
      },
      [loop, totalSlides, setActiveIndex]
    )

    const scrollPrev = React.useCallback(() => {
      scrollTo(activeIndex - 1)
    }, [activeIndex, scrollTo])

    const scrollNext = React.useCallback(() => {
      scrollTo(activeIndex + 1)
    }, [activeIndex, scrollTo])

    const registerSlide = React.useCallback(() => {
      const index = slideCountRef.current
      slideCountRef.current += 1
      setTotalSlides(slideCountRef.current)
      return index
    }, [])

    const unregisterSlide = React.useCallback(() => {
      slideCountRef.current -= 1
      setTotalSlides(slideCountRef.current)
    }, [])

    // Auto-play
    React.useEffect(() => {
      if (!autoPlay || totalSlides === 0) return

      const timer = setInterval(() => {
        scrollNext()
      }, interval)

      return () => clearInterval(timer)
    }, [autoPlay, interval, scrollNext, totalSlides])

    // Keyboard navigation
    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent) => {
        const prevKey = orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp'
        const nextKey = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown'

        if (event.key === prevKey) {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === nextKey) {
          event.preventDefault()
          scrollNext()
        }
      },
      [orientation, scrollPrev, scrollNext]
    )

    const contextValue = React.useMemo<CarouselContextValue>(
      () => ({
        activeIndex,
        totalSlides,
        orientation,
        loop,
        scrollPrev,
        scrollNext,
        scrollTo,
        canScrollPrev,
        canScrollNext,
        registerSlide,
        unregisterSlide,
      }),
      [
        activeIndex,
        totalSlides,
        orientation,
        loop,
        scrollPrev,
        scrollNext,
        scrollTo,
        canScrollPrev,
        canScrollNext,
        registerSlide,
        unregisterSlide,
      ]
    )

    return (
      <CarouselContext.Provider value={contextValue}>
        <section
          ref={ref}
          data-scope="carousel"
          data-part="root"
          data-orientation={orientation}
          aria-roledescription="carousel"
          onKeyDown={handleKeyDown}
          className={cn('relative', className)}
          {...props}
        >
          {children}
        </section>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = 'Carousel'

export interface CarouselContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CarouselContent = React.forwardRef<HTMLDivElement, CarouselContentProps>(
  ({ className, children, ...props }, ref) => {
    const { activeIndex, orientation } = useCarouselContext()

    return (
      <div
        ref={ref}
        data-scope="carousel"
        data-part="content"
        className={cn('overflow-hidden', className)}
        {...props}
      >
        <div
          data-scope="carousel"
          data-part="track"
          className={cn(
            'flex transition-transform duration-300 ease-in-out',
            orientation === 'vertical' && 'flex-col'
          )}
          style={{
            transform:
              orientation === 'horizontal'
                ? `translateX(-${activeIndex * 100}%)`
                : `translateY(-${activeIndex * 100}%)`,
          }}
        >
          {children}
        </div>
      </div>
    )
  }
)
CarouselContent.displayName = 'CarouselContent'

export interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {}

const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ className, children, ...props }, ref) => {
    const { registerSlide, unregisterSlide, orientation, activeIndex } = useCarouselContext()
    const indexRef = React.useRef<number>(-1)

    React.useEffect(() => {
      indexRef.current = registerSlide()
      return () => unregisterSlide()
    }, [registerSlide, unregisterSlide])

    const isActive = indexRef.current === activeIndex

    return (
      <div
        ref={ref}
        aria-roledescription="slide"
        aria-label={`Slide ${indexRef.current + 1}`}
        data-scope="carousel"
        data-part="item"
        data-active={isActive ? '' : undefined}
        className={cn(
          'min-w-0 shrink-0 grow-0 basis-full',
          orientation === 'vertical' && 'min-h-0',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
CarouselItem.displayName = 'CarouselItem'

export interface CarouselPreviousProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CarouselPrevious = React.forwardRef<HTMLButtonElement, CarouselPreviousProps>(
  ({ className, children, ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarouselContext()

    return (
      <button
        ref={ref}
        type="button"
        data-scope="carousel"
        data-part="prev-trigger"
        aria-label="Previous slide"
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        className={cn(
          'absolute z-10 flex h-8 w-8 items-center justify-center rounded-full',
          'bg-background/80 backdrop-blur-sm border border-border shadow-sm',
          'text-foreground hover:bg-accent hover:text-accent-foreground',
          'disabled:pointer-events-none disabled:opacity-50',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'transition-colors',
          orientation === 'horizontal'
            ? 'left-2 top-1/2 -translate-y-1/2'
            : 'top-2 left-1/2 -translate-x-1/2 rotate-90',
          className
        )}
        {...props}
      >
        {children || (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        )}
      </button>
    )
  }
)
CarouselPrevious.displayName = 'CarouselPrevious'

export interface CarouselNextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CarouselNext = React.forwardRef<HTMLButtonElement, CarouselNextProps>(
  ({ className, children, ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarouselContext()

    return (
      <button
        ref={ref}
        type="button"
        data-scope="carousel"
        data-part="next-trigger"
        aria-label="Next slide"
        disabled={!canScrollNext}
        onClick={scrollNext}
        className={cn(
          'absolute z-10 flex h-8 w-8 items-center justify-center rounded-full',
          'bg-background/80 backdrop-blur-sm border border-border shadow-sm',
          'text-foreground hover:bg-accent hover:text-accent-foreground',
          'disabled:pointer-events-none disabled:opacity-50',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'transition-colors',
          orientation === 'horizontal'
            ? 'right-2 top-1/2 -translate-y-1/2'
            : 'bottom-2 left-1/2 -translate-x-1/2 rotate-90',
          className
        )}
        {...props}
      >
        {children || (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        )}
      </button>
    )
  }
)
CarouselNext.displayName = 'CarouselNext'

export interface CarouselDotsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Variant style for dots */
  variant?: 'default' | 'line'
}

const CarouselDots = React.forwardRef<HTMLDivElement, CarouselDotsProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const { totalSlides, activeIndex, scrollTo, orientation } = useCarouselContext()

    const dots = React.useMemo(
      () => Array.from({ length: totalSlides }, (_, i) => `dot-${i}`),
      [totalSlides]
    )

    return (
      <div
        ref={ref}
        data-scope="carousel"
        data-part="dots"
        aria-label="Slide navigation"
        className={cn(
          'flex items-center justify-center gap-2',
          orientation === 'vertical' && 'flex-col',
          className
        )}
        {...props}
      >
        {dots.map((id, index) => (
          <button
            key={id}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-pressed={index === activeIndex}
            data-scope="carousel"
            data-part="dot"
            data-active={index === activeIndex ? '' : undefined}
            onClick={() => scrollTo(index)}
            className={cn(
              'transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              variant === 'default' && [
                'h-2 w-2 rounded-full',
                index === activeIndex
                  ? 'bg-primary'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50',
              ],
              variant === 'line' && [
                'h-1 rounded-full',
                index === activeIndex
                  ? 'w-6 bg-primary'
                  : 'w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50',
              ]
            )}
          />
        ))}
      </div>
    )
  }
)
CarouselDots.displayName = 'CarouselDots'

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselDots,
  useCarouselContext,
}
