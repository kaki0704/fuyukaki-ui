import type { VariantProps } from 'class-variance-authority'
import type * as React from 'react'
import type { dropdownMenuItemVariants } from './dropdown-menu.styles'

export interface DropdownMenuProps {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

export interface DropdownMenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
}

export interface DropdownMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
  minWidth?: number
  align?: 'start' | 'center' | 'end'
  side?: 'top' | 'bottom' | 'left' | 'right'
}

export interface DropdownMenuItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'>,
    VariantProps<typeof dropdownMenuItemVariants> {
  disabled?: boolean
  icon?: React.ReactNode
  shortcut?: string
  onSelect?: (event: React.MouseEvent | React.KeyboardEvent) => void
}

export interface DropdownMenuLabelProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface DropdownMenuSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}
