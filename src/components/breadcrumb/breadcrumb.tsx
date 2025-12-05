import { cn } from '@/utils'
import * as React from 'react'

export interface BreadcrumbProps extends React.ComponentPropsWithoutRef<'nav'> {
  separator?: React.ReactNode
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, separator, children, ...props }, ref) => {
    return (
      <BreadcrumbContext.Provider value={{ separator }}>
        <nav
          ref={ref}
          aria-label="breadcrumb"
          data-scope="breadcrumb"
          data-part="root"
          className={cn('', className)}
          {...props}
        >
          {children}
        </nav>
      </BreadcrumbContext.Provider>
    )
  }
)
Breadcrumb.displayName = 'Breadcrumb'

interface BreadcrumbContextValue {
  separator?: React.ReactNode
}

const BreadcrumbContext = React.createContext<BreadcrumbContextValue>({})

function useBreadcrumbContext() {
  return React.useContext(BreadcrumbContext)
}

export interface BreadcrumbListProps extends React.ComponentPropsWithoutRef<'ol'> {}

const BreadcrumbList = React.forwardRef<HTMLOListElement, BreadcrumbListProps>(
  ({ className, ...props }, ref) => {
    return (
      <ol
        ref={ref}
        data-scope="breadcrumb"
        data-part="list"
        className={cn(
          'flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground sm:gap-2.5',
          className
        )}
        {...props}
      />
    )
  }
)
BreadcrumbList.displayName = 'BreadcrumbList'

export interface BreadcrumbItemProps extends React.ComponentPropsWithoutRef<'li'> {}

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <li
        ref={ref}
        data-scope="breadcrumb"
        data-part="item"
        className={cn('inline-flex items-center gap-1.5', className)}
        {...props}
      />
    )
  }
)
BreadcrumbItem.displayName = 'BreadcrumbItem'

export interface BreadcrumbLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  asChild?: boolean
}

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, asChild, ...props }, ref) => {
    return (
      <a
        ref={ref}
        data-scope="breadcrumb"
        data-part="link"
        className={cn(
          'transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm',
          className
        )}
        {...props}
      />
    )
  }
)
BreadcrumbLink.displayName = 'BreadcrumbLink'

export interface BreadcrumbPageProps extends React.ComponentPropsWithoutRef<'span'> {}

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, BreadcrumbPageProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        data-scope="breadcrumb"
        data-part="page"
        aria-current="page"
        className={cn('font-normal text-foreground', className)}
        {...props}
      />
    )
  }
)
BreadcrumbPage.displayName = 'BreadcrumbPage'

export interface BreadcrumbSeparatorProps extends React.ComponentPropsWithoutRef<'li'> {}

const BreadcrumbSeparator = React.forwardRef<HTMLLIElement, BreadcrumbSeparatorProps>(
  ({ className, children, ...props }, ref) => {
    const { separator } = useBreadcrumbContext()

    return (
      <li
        ref={ref}
        data-scope="breadcrumb"
        data-part="separator"
        role="presentation"
        aria-hidden="true"
        className={cn('[&>svg]:size-3.5', className)}
        {...props}
      >
        {children ?? separator ?? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        )}
      </li>
    )
  }
)
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

export interface BreadcrumbEllipsisProps extends React.ComponentPropsWithoutRef<'span'> {}

const BreadcrumbEllipsis = React.forwardRef<HTMLSpanElement, BreadcrumbEllipsisProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        data-scope="breadcrumb"
        data-part="ellipsis"
        role="presentation"
        aria-hidden="true"
        className={cn('flex h-9 w-9 items-center justify-center', className)}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
        <span className="sr-only">More</span>
      </span>
    )
  }
)
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis'

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
