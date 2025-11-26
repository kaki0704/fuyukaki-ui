import { cn } from '@/utils'
import * as React from 'react'

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      data-scope="label"
      data-part="root"
      className={cn(
        'text-sm font-medium text-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-60',
        className
      )}
      {...props}
    />
  )
)
Label.displayName = 'Label'

export { Label }
