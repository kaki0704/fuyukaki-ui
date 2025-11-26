import { cn } from '@/utils'
import * as React from 'react'

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const checkboxId = id || React.useId()

    return (
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id={checkboxId}
          ref={ref}
          data-scope="checkbox"
          data-part="input"
          className={cn(
            'peer h-4 w-4 shrink-0 rounded border border-input bg-background',
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
            htmlFor={checkboxId}
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
Checkbox.displayName = 'Checkbox'

export { Checkbox }
