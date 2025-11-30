import type { VariantProps } from 'class-variance-authority'
import type * as React from 'react'
import type { toastVariants } from './toast.styles'

export interface ToastProps
  extends React.HTMLAttributes<HTMLLIElement>,
    VariantProps<typeof toastVariants> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export interface ToastTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface ToastDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface ToastActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  altText?: string
}

export interface ToastCloseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export interface ToastViewportProps extends React.HTMLAttributes<HTMLOListElement> {
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
}
