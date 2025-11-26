import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-[0_2px_8px_rgba(78,61,53,0.15)]',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground hover:bg-[hsl(20,90%,40%)] shadow-[0_4px_12px_rgba(235,97,1,0.25)] hover:shadow-[0_6px_16px_rgba(235,97,1,0.35)]',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-[hsl(88,30,35%)] shadow-[0_2px_8px_rgba(106,131,71,0.2)]',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-[hsl(30,20%,75%)]',
        ghost: 'hover:bg-accent hover:text-accent-foreground shadow-none',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-[hsl(10,75%,45%)] shadow-[0_2px_8px_rgba(203,75,50,0.25)]',
        link: 'text-primary underline-offset-4 hover:underline shadow-none',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 px-8 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)
