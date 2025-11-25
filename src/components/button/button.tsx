import { cn } from '@/utils'
import * as React from 'react'
import { buttonVariants } from './button.styles'
import type { ButtonProps } from './button.types'

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, loading, leftIcon, rightIcon, children, disabled, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        data-scope="button"
        data-part="root"
        data-loading={loading ? '' : undefined}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <span data-part="spinner" className="animate-spin">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              role="img"
              aria-label="Loading"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          </span>
        )}
        {!loading && leftIcon && <span data-part="icon">{leftIcon}</span>}
        {children && <span data-part="label">{children}</span>}
        {!loading && rightIcon && <span data-part="icon">{rightIcon}</span>}
      </button>
    )
  }
)

Button.displayName = 'Button'
