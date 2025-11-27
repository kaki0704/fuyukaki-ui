import { cn } from '@/utils'
import * as React from 'react'

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, id, ...props }, ref) => {
    const switchId = id || React.useId()

    return (
      <div className="flex items-center gap-2">
        <button
          type="button"
          role="switch"
          aria-checked={props.checked || props.defaultChecked}
          data-scope="switch"
          data-part="root"
          className={cn(
            'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent',
            'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-60',
            'bg-input',
            'data-[state=checked]:bg-secondary',
            className
          )}
          onClick={(e) => {
            const input = e.currentTarget.nextElementSibling as HTMLInputElement
            if (input) {
              input.click()
            }
          }}
          data-state={props.checked || props.defaultChecked ? 'checked' : 'unchecked'}
        >
          <span
            data-part="thumb"
            className={cn(
              'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform',
              'data-[state=checked]:translate-x-5',
              'data-[state=unchecked]:translate-x-0'
            )}
            data-state={props.checked || props.defaultChecked ? 'checked' : 'unchecked'}
          />
        </button>
        <input type="checkbox" id={switchId} ref={ref} className="sr-only" {...props} />
        {label && (
          <label
            htmlFor={switchId}
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
Switch.displayName = 'Switch'

export { Switch }
