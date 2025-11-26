import { cva } from 'class-variance-authority'

export const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        // 柿色 (Persimmon) - Default badge
        default: 'bg-primary/10 text-primary border border-primary/20',
        // 葉色 (Leaf Green) - Success/positive
        success: 'bg-secondary/10 text-secondary border border-secondary/20',
        // 深柿 (Deep Persimmon) - Warning/destructive
        destructive: 'bg-destructive/10 text-destructive border border-destructive/20',
        // 枯れ葉色 (Dried Leaf) - Muted/neutral
        outline: 'border border-border text-foreground bg-background',
        // Subtle warm background
        secondary: 'bg-muted text-muted-foreground border border-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export const badgeAnatomy = {
  root: 'badge',
  icon: 'badge__icon',
  label: 'badge__label',
}
