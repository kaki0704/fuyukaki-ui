import { cn } from '@/utils'
import { badgeVariants } from './badge.styles'
import type { BadgeProps } from './badge.types'

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      data-scope="badge"
      data-part="root"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

Badge.displayName = 'Badge'
