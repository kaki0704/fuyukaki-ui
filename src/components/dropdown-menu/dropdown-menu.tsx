import { useFocusTrap, useOutsideClick } from '@/hooks'
import { Portal, cn } from '@/utils'
import {
  type Placement,
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating,
} from '@floating-ui/react-dom'
import * as React from 'react'
import {
  dropdownMenuContentVariants,
  dropdownMenuItemVariants,
  dropdownMenuLabelVariants,
  dropdownMenuSeparatorVariants,
  dropdownMenuShortcutVariants,
} from './dropdown-menu.styles'
import type {
  DropdownMenuContentProps,
  DropdownMenuItemProps,
  DropdownMenuLabelProps,
  DropdownMenuProps,
  DropdownMenuSeparatorProps,
  DropdownMenuTriggerProps,
} from './dropdown-menu.types'

interface DropdownMenuContextValue {
  open: boolean
  setOpen: (open: boolean) => void
  triggerRef: React.RefObject<HTMLButtonElement>
  contentRef: React.RefObject<HTMLDivElement>
}

const DropdownMenuContext = React.createContext<DropdownMenuContextValue | undefined>(undefined)

function useDropdownMenuContext() {
  const context = React.useContext(DropdownMenuContext)
  if (!context) {
    throw new Error('Dropdown Menu components must be used within DropdownMenu')
  }
  return context
}

export function DropdownMenu({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  children,
}: DropdownMenuProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen)
  const triggerRef = React.useRef<HTMLButtonElement>(null)
  const contentRef = React.useRef<HTMLDivElement>(null)

  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen

  const setOpen = React.useCallback(
    (newOpen: boolean) => {
      if (controlledOpen === undefined) {
        setUncontrolledOpen(newOpen)
      }
      onOpenChange?.(newOpen)
    },
    [controlledOpen, onOpenChange]
  )

  const value = React.useMemo(
    () => ({
      open,
      setOpen,
      triggerRef: triggerRef as React.RefObject<HTMLButtonElement>,
      contentRef: contentRef as React.RefObject<HTMLDivElement>,
    }),
    [open, setOpen]
  )

  return <DropdownMenuContext.Provider value={value}>{children}</DropdownMenuContext.Provider>
}

export const DropdownMenuTrigger = React.forwardRef<HTMLButtonElement, DropdownMenuTriggerProps>(
  ({ className, children, disabled, ...props }, ref) => {
    const { open, setOpen, triggerRef } = useDropdownMenuContext()

    const combinedRef = React.useCallback(
      (node: HTMLButtonElement | null) => {
        ;(triggerRef as React.MutableRefObject<HTMLButtonElement | null>).current = node
        if (typeof ref === 'function') {
          ref(node)
        } else if (ref) {
          ;(ref as React.MutableRefObject<HTMLButtonElement | null>).current = node
        }
      },
      [ref, triggerRef]
    )

    return (
      <button
        ref={combinedRef}
        data-scope="dropdown-menu"
        data-part="trigger"
        data-state={open ? 'open' : 'closed'}
        disabled={disabled}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className={cn(className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
DropdownMenuTrigger.displayName = 'DropdownMenuTrigger'

export const DropdownMenuContent = React.forwardRef<HTMLDivElement, DropdownMenuContentProps>(
  ({ className, children, minWidth = 120, align = 'start', side = 'bottom', ...props }, ref) => {
    const { open, setOpen, triggerRef, contentRef } = useDropdownMenuContext()

    const placement: Placement = `${side}-${align}` as Placement

    const { x, y, strategy, refs } = useFloating({
      placement,
      middleware: [offset(4), flip(), shift({ padding: 8 })],
      whileElementsMounted: autoUpdate,
    })

    React.useEffect(() => {
      refs.setReference(triggerRef.current)
    }, [refs, triggerRef])

    React.useEffect(() => {
      refs.setFloating(contentRef.current)
    }, [refs, contentRef])

    useOutsideClick(contentRef, () => {
      if (open) {
        setOpen(false)
      }
    })

    React.useEffect(() => {
      if (!open) return

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setOpen(false)
          triggerRef.current?.focus()
        }
      }

      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }, [open, setOpen, triggerRef])

    useFocusTrap(contentRef, open)

    const combinedRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        ;(contentRef as React.MutableRefObject<HTMLDivElement | null>).current = node
        if (typeof ref === 'function') {
          ref(node)
        } else if (ref) {
          ;(ref as React.MutableRefObject<HTMLDivElement | null>).current = node
        }
      },
      [ref, contentRef]
    )

    if (!open) {
      return null
    }

    return (
      <Portal>
        <div
          ref={combinedRef}
          data-scope="dropdown-menu"
          data-part="content"
          data-state={open ? 'open' : 'closed'}
          role="menu"
          className={cn(dropdownMenuContentVariants(), className)}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            minWidth,
          }}
          {...props}
        >
          {children}
        </div>
      </Portal>
    )
  }
)
DropdownMenuContent.displayName = 'DropdownMenuContent'

export const DropdownMenuItem = React.forwardRef<HTMLDivElement, DropdownMenuItemProps>(
  ({ className, variant, disabled, icon, shortcut, onSelect, children, ...props }, ref) => {
    const { setOpen } = useDropdownMenuContext()

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return
      onSelect?.(event)
      setOpen(false)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (disabled) return
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        onSelect?.(event)
        setOpen(false)
      }
    }

    return (
      <div
        ref={ref}
        data-scope="dropdown-menu"
        data-part="item"
        data-disabled={disabled ? '' : undefined}
        role="menuitem"
        tabIndex={disabled ? -1 : 0}
        className={cn(dropdownMenuItemVariants({ variant }), className)}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span className="flex-1">{children}</span>
        {shortcut && <span className={cn(dropdownMenuShortcutVariants())}>{shortcut}</span>}
      </div>
    )
  }
)
DropdownMenuItem.displayName = 'DropdownMenuItem'

export const DropdownMenuLabel = React.forwardRef<HTMLDivElement, DropdownMenuLabelProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-scope="dropdown-menu"
      data-part="label"
      className={cn(dropdownMenuLabelVariants(), className)}
      {...props}
    />
  )
)
DropdownMenuLabel.displayName = 'DropdownMenuLabel'

export const DropdownMenuSeparator = React.forwardRef<HTMLDivElement, DropdownMenuSeparatorProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-scope="dropdown-menu"
      data-part="separator"
      className={cn(dropdownMenuSeparatorVariants(), className)}
      {...props}
    />
  )
)
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator'
