import { cva } from 'class-variance-authority'

export const dropdownMenuContentVariants = cva(
  'z-50 min-w-[8rem] overflow-hidden rounded-lg border border-border bg-popover p-1 shadow-[0_8px_32px_rgba(78,61,53,0.2)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95'
)

export const dropdownMenuItemVariants = cva(
  'relative flex cursor-pointer select-none items-center gap-2 rounded-md px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
  {
    variants: {
      variant: {
        default: 'hover:bg-accent hover:text-accent-foreground',
        destructive:
          'text-destructive hover:bg-destructive/10 focus:bg-destructive/10 focus:text-destructive',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export const dropdownMenuLabelVariants = cva('px-2 py-1.5 text-sm font-semibold text-foreground')

export const dropdownMenuSeparatorVariants = cva('-mx-1 my-1 h-px bg-muted')

export const dropdownMenuShortcutVariants = cva('ml-auto text-xs tracking-widest opacity-60')
