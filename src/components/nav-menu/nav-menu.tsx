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

export interface NavMenuProps extends React.HTMLAttributes<HTMLElement> {
  orientation?: 'horizontal' | 'vertical'
}

interface NavMenuContextValue {
  orientation: 'horizontal' | 'vertical'
  activeItem: string | null
  setActiveItem: (item: string | null) => void
}

const NavMenuContext = React.createContext<NavMenuContextValue | undefined>(undefined)

function useNavMenuContext() {
  const context = React.useContext(NavMenuContext)
  if (!context) {
    throw new Error('NavMenu components must be used within NavMenu')
  }
  return context
}

const NavMenu = React.forwardRef<HTMLElement, NavMenuProps>(
  ({ className, orientation = 'horizontal', children, ...props }, ref) => {
    const [activeItem, setActiveItem] = React.useState<string | null>(null)

    const value = React.useMemo(
      () => ({ orientation, activeItem, setActiveItem }),
      [orientation, activeItem]
    )

    return (
      <NavMenuContext.Provider value={value}>
        <nav
          ref={ref}
          data-scope="nav-menu"
          data-part="root"
          data-orientation={orientation}
          className={cn(
            'relative',
            orientation === 'horizontal' ? 'flex items-center' : 'flex flex-col',
            className
          )}
          {...props}
        >
          {children}
        </nav>
      </NavMenuContext.Provider>
    )
  }
)
NavMenu.displayName = 'NavMenu'

export interface NavMenuListProps extends React.HTMLAttributes<HTMLUListElement> {}

const NavMenuList = React.forwardRef<HTMLUListElement, NavMenuListProps>(
  ({ className, ...props }, ref) => {
    const { orientation } = useNavMenuContext()

    return (
      <ul
        ref={ref}
        data-scope="nav-menu"
        data-part="list"
        className={cn(
          'flex list-none gap-1',
          orientation === 'horizontal' ? 'flex-row items-center' : 'flex-col',
          className
        )}
        {...props}
      />
    )
  }
)
NavMenuList.displayName = 'NavMenuList'

export interface NavMenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  value?: string
}

interface NavMenuItemContextValue {
  value: string
  triggerRef: React.RefObject<HTMLButtonElement | HTMLAnchorElement>
}

const NavMenuItemContext = React.createContext<NavMenuItemContextValue | undefined>(undefined)

function useNavMenuItemContext() {
  const context = React.useContext(NavMenuItemContext)
  if (!context) {
    throw new Error('NavMenuItem components must be used within NavMenuItem')
  }
  return context
}

const NavMenuItem = React.forwardRef<HTMLLIElement, NavMenuItemProps>(
  ({ className, value, children, ...props }, ref) => {
    const itemValue = value || React.useId()
    const triggerRef = React.useRef<HTMLButtonElement | HTMLAnchorElement>(null)

    const contextValue = React.useMemo(
      () => ({
        value: itemValue,
        triggerRef: triggerRef as React.RefObject<HTMLButtonElement | HTMLAnchorElement>,
      }),
      [itemValue]
    )

    return (
      <NavMenuItemContext.Provider value={contextValue}>
        <li
          ref={ref}
          data-scope="nav-menu"
          data-part="item"
          className={cn('relative', className)}
          {...props}
        >
          {children}
        </li>
      </NavMenuItemContext.Provider>
    )
  }
)
NavMenuItem.displayName = 'NavMenuItem'

export interface NavMenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const NavMenuTrigger = React.forwardRef<HTMLButtonElement, NavMenuTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { activeItem, setActiveItem, orientation } = useNavMenuContext()
    const { value, triggerRef } = useNavMenuItemContext()
    const isActive = activeItem === value

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
        type="button"
        data-scope="nav-menu"
        data-part="trigger"
        data-state={isActive ? 'open' : 'closed'}
        aria-expanded={isActive}
        aria-haspopup="true"
        className={cn(
          'group inline-flex items-center justify-center gap-1',
          'px-4 py-2 rounded-md text-sm font-medium transition-colors',
          'text-foreground/80 hover:text-foreground hover:bg-accent',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          isActive && 'bg-accent text-foreground',
          className
        )}
        onMouseEnter={() => setActiveItem(value)}
        onFocus={() => setActiveItem(value)}
        {...props}
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(
            'transition-transform duration-200',
            orientation === 'horizontal' && isActive && 'rotate-180',
            orientation === 'vertical' && isActive && '-rotate-90'
          )}
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    )
  }
)
NavMenuTrigger.displayName = 'NavMenuTrigger'

export interface NavMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const NavMenuContent = React.forwardRef<HTMLDivElement, NavMenuContentProps>(
  ({ className, children, ...props }, ref) => {
    const { activeItem, setActiveItem, orientation } = useNavMenuContext()
    const { value, triggerRef } = useNavMenuItemContext()
    const isActive = activeItem === value
    const [isPositioned, setIsPositioned] = React.useState(false)

    const placement: Placement = orientation === 'horizontal' ? 'bottom-start' : 'right-start'

    const { refs, floatingStyles } = useFloating({
      placement,
      middleware: [offset(4), flip(), shift({ padding: 8 })],
      whileElementsMounted: autoUpdate,
    })

    React.useEffect(() => {
      if (triggerRef.current && isActive) {
        refs.setReference(triggerRef.current)
        requestAnimationFrame(() => {
          setIsPositioned(true)
        })
      }
      return () => setIsPositioned(false)
    }, [refs, triggerRef, isActive])

    const combinedRef = React.useCallback(
      (node: HTMLDivElement | null) => {
        refs.setFloating(node)
        if (typeof ref === 'function') {
          ref(node)
        } else if (ref) {
          ;(ref as React.MutableRefObject<HTMLDivElement | null>).current = node
        }
      },
      [ref, refs]
    )

    if (!isActive) return null

    return (
      <Portal>
        <div
          ref={combinedRef}
          data-scope="nav-menu"
          data-part="content"
          data-state={isActive ? 'open' : 'closed'}
          className={cn(
            'z-50 min-w-[200px] rounded-md border border-border bg-background p-2 shadow-lg',
            isPositioned ? 'opacity-100' : 'opacity-0',
            'transition-opacity duration-150',
            className
          )}
          style={floatingStyles}
          onMouseEnter={() => setActiveItem(value)}
          onMouseLeave={() => setActiveItem(null)}
          {...props}
        >
          {children}
        </div>
      </Portal>
    )
  }
)
NavMenuContent.displayName = 'NavMenuContent'

export interface NavMenuLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean
}

const NavMenuLink = React.forwardRef<HTMLAnchorElement, NavMenuLinkProps>(
  ({ className, active, children, onClick, href, ...props }, ref) => {
    const { setActiveItem } = useNavMenuContext()

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      setActiveItem(null)
      onClick?.(e)
    }

    return (
      <a
        ref={ref}
        href={href}
        data-scope="nav-menu"
        data-part="link"
        data-active={active ? '' : undefined}
        className={cn(
          'block px-4 py-2 rounded-md text-sm font-medium transition-colors',
          'text-foreground/80 hover:text-foreground hover:bg-accent',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
          active && 'text-foreground bg-accent/50',
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    )
  }
)
NavMenuLink.displayName = 'NavMenuLink'

export interface NavMenuSubProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
}

const NavMenuSub = React.forwardRef<HTMLDivElement, NavMenuSubProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-scope="nav-menu"
        data-part="sub"
        className={cn('py-2', className)}
        {...props}
      >
        {title && <h4 className="px-4 py-1 text-sm font-semibold text-foreground">{title}</h4>}
        <div className="mt-1">{children}</div>
      </div>
    )
  }
)
NavMenuSub.displayName = 'NavMenuSub'

export interface NavMenuSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

const NavMenuSeparator = React.forwardRef<HTMLDivElement, NavMenuSeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-scope="nav-menu"
        data-part="separator"
        className={cn('my-1 h-px bg-border', className)}
        {...props}
      />
    )
  }
)
NavMenuSeparator.displayName = 'NavMenuSeparator'

const NavMenuViewport = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { activeItem, setActiveItem } = useNavMenuContext()

    return (
      <div
        ref={ref}
        data-scope="nav-menu"
        data-part="viewport"
        data-state={activeItem ? 'open' : 'closed'}
        className={cn(
          'absolute left-0 top-full w-full',
          !activeItem && 'pointer-events-none',
          className
        )}
        onMouseLeave={() => setActiveItem(null)}
        {...props}
      />
    )
  }
)
NavMenuViewport.displayName = 'NavMenuViewport'

export {
  NavMenu,
  NavMenuList,
  NavMenuItem,
  NavMenuTrigger,
  NavMenuContent,
  NavMenuLink,
  NavMenuSub,
  NavMenuSeparator,
  NavMenuViewport,
}
