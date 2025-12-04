import { cn } from '@/utils'
import * as React from 'react'

export interface HidamariTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  colors?: string[]
  speed?: number
}

const HidamariText = React.memo(
  React.forwardRef<HTMLSpanElement, HidamariTextProps>(
    (
      {
        children,
        className,
        colors = ['#EB6101', '#6A8347', '#4E3D35', '#D68A4D'],
        speed = 1,
        ...props
      },
      ref
    ) => {
      const gradientStyle: React.CSSProperties = {
        backgroundImage: `linear-gradient(135deg, ${colors.join(', ')}, ${colors[0]})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animationDuration: `${10 / speed}s`,
      }

      return (
        <span
          ref={ref}
          data-scope="hidamari-text"
          data-part="root"
          className={cn('relative inline-block', className)}
          {...props}
        >
          <span className="sr-only">{children}</span>
          <span
            data-part="text"
            className="animate-hidamari relative bg-size-[200%_auto] bg-clip-text text-transparent"
            style={gradientStyle}
            aria-hidden="true"
          >
            {children}
          </span>
        </span>
      )
    }
  )
)

HidamariText.displayName = 'HidamariText'

export { HidamariText }
