import { cn } from '@/utils'
import * as React from 'react'

export interface TooltipProps {
  content: React.ReactNode
  children: React.ReactElement
  side?: 'top' | 'right' | 'bottom' | 'left'
}

const Tooltip = ({ content, children, side = 'top' }: TooltipProps) => {
  const [isVisible, setIsVisible] = React.useState(false)

  const sideStyles = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          role="tooltip"
          data-scope="tooltip"
          data-part="content"
          className={cn(
            'absolute z-50 px-3 py-1.5 text-sm text-primary-foreground bg-foreground rounded-md shadow-md',
            'animate-in fade-in-0 zoom-in-95',
            'whitespace-nowrap',
            sideStyles[side]
          )}
        >
          {content}
          <div
            data-part="arrow"
            className={cn(
              'absolute w-2 h-2 bg-foreground rotate-45',
              side === 'top' && 'bottom-[-4px] left-1/2 -translate-x-1/2',
              side === 'bottom' && 'top-[-4px] left-1/2 -translate-x-1/2',
              side === 'left' && 'right-[-4px] top-1/2 -translate-y-1/2',
              side === 'right' && 'left-[-4px] top-1/2 -translate-y-1/2'
            )}
          />
        </div>
      )}
    </div>
  )
}
Tooltip.displayName = 'Tooltip'

export { Tooltip }
