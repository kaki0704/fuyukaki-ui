import { cn } from '@/utils'
import * as React from 'react'

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, id, ...props }, ref) => {
    const radioId = id || React.useId()

    return (
      <div className="flex items-center gap-2">
        <input
          type="radio"
          id={radioId}
          ref={ref}
          data-scope="radio"
          data-part="input"
          className={cn(
            'peer h-4 w-4 shrink-0 rounded-full border border-input bg-background',
            'accent-primary ring-offset-background',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-60 disabled:bg-muted',
            'transition-colors',
            className
          )}
          style={{ accentColor: 'hsl(var(--primary))' }}
          {...props}
        />
        {label && (
          <label
            htmlFor={radioId}
            data-part="label"
            className="text-sm font-medium text-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-60 cursor-pointer"
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)
Radio.displayName = 'Radio'

const RadioGroup = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      role="radiogroup"
      data-scope="radio"
      data-part="group"
      className={cn('flex flex-col gap-2', className)}
      {...props}
    >
      {children}
    </div>
  )
}
RadioGroup.displayName = 'RadioGroup'

export { Radio, RadioGroup }
