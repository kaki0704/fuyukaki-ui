import { cn } from '@/utils'
import * as React from 'react'

export interface RippleProps extends React.ComponentPropsWithoutRef<'div'> {
  /** Size of the main (innermost) circle in pixels */
  mainCircleSize?: number
  /** Opacity of the main circle (0-1) */
  mainCircleOpacity?: number
  /** Number of concentric circles to render */
  numCircles?: number
  /** Color of the ripple circles */
  color?: string
}

const Ripple = React.memo(
  React.forwardRef<HTMLDivElement, RippleProps>(
    (
      {
        mainCircleSize = 210,
        mainCircleOpacity = 0.24,
        numCircles = 8,
        color,
        className,
        ...props
      },
      ref
    ) => {
      return (
        <div
          ref={ref}
          data-scope="ripple"
          className={cn(
            'pointer-events-none absolute inset-0 select-none mask-[linear-gradient(to_bottom,white,transparent)]',
            className
          )}
          {...props}
        >
          {Array.from({ length: numCircles }, (_, i) => {
            const size = mainCircleSize + i * 70
            const opacity = mainCircleOpacity - i * 0.03
            const animationDelay = `${i * 0.06}s`
            const circleKey = `ripple-circle-${size}-${animationDelay}`

            return (
              <div
                key={circleKey}
                className="animate-ripple absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border bg-foreground/25 shadow-xl"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity: Math.max(opacity, 0),
                  animationDelay,
                  borderStyle: 'solid',
                  borderWidth: '1px',
                  borderColor: color ?? 'var(--color-foreground)',
                }}
              />
            )
          })}
        </div>
      )
    }
  )
)
Ripple.displayName = 'Ripple'

export { Ripple }
