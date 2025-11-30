import { cva } from 'class-variance-authority'

export const avatarVariants = cva(
  'relative inline-flex items-center justify-center overflow-hidden bg-muted text-foreground font-medium border-2 border-border select-none',
  {
    variants: {
      size: {
        xs: 'h-6 w-6 text-xs',
        sm: 'h-8 w-8 text-sm',
        md: 'h-10 w-10 text-base',
        lg: 'h-12 w-12 text-lg',
        xl: 'h-16 w-16 text-xl',
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-md',
      },
    },
    defaultVariants: {
      size: 'md',
      shape: 'circle',
    },
  }
)

export const avatarImageVariants = cva('h-full w-full object-cover')

export const avatarFallbackVariants = cva(
  'flex h-full w-full items-center justify-center bg-muted text-muted-foreground'
)

export const avatarStatusVariants = cva('absolute block rounded-full ring-2 ring-background', {
  variants: {
    size: {
      xs: 'h-1.5 w-1.5 bottom-0 right-0',
      sm: 'h-2 w-2 bottom-0 right-0',
      md: 'h-2.5 w-2.5 bottom-0 right-0',
      lg: 'h-3 w-3 bottom-0.5 right-0.5',
      xl: 'h-4 w-4 bottom-0.5 right-0.5',
    },
    status: {
      online: 'bg-secondary', // Leaf green
      offline: 'bg-muted-foreground',
      busy: 'bg-destructive', // Deep persimmon
      away: 'bg-primary', // Persimmon
    },
  },
  defaultVariants: {
    size: 'md',
    status: 'online',
  },
})
