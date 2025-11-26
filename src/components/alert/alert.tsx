import { cn } from '@/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        // Default: warm beige tone
        default: 'bg-muted/50 text-foreground border-border',
        // Success: 葉色 (Leaf Green) - natural positive tone
        success:
          'bg-secondary/10 text-secondary border-secondary/30 [&>svg]:text-secondary',
        // Destructive: 深柿 (Deep Persimmon) - warm error tone
        destructive:
          'bg-destructive/10 text-destructive border-destructive/30 [&>svg]:text-destructive',
        // Warning: 柿色 (Persimmon) - warm warning tone
        warning:
          'bg-primary/10 text-primary border-primary/30 [&>svg]:text-primary',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    data-scope="alert"
    data-part="root"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      data-part="title"
      className={cn('mb-1 font-medium leading-none tracking-tight', className)}
      {...props}
    />
  )
)
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-part="description"
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription }
