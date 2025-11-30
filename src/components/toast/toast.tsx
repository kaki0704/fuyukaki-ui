import { useToast } from '@/hooks/use-toast'
import { Portal, cn } from '@/utils'
import * as React from 'react'
import {
  toastActionVariants,
  toastCloseVariants,
  toastDescriptionVariants,
  toastTitleVariants,
  toastVariants,
  toastViewportVariants,
} from './toast.styles'
import type {
  ToastActionProps,
  ToastCloseProps,
  ToastDescriptionProps,
  ToastProps,
  ToastTitleProps,
  ToastViewportProps,
} from './toast.types'

export const ToastViewport = React.forwardRef<HTMLOListElement, ToastViewportProps>(
  ({ className, position, ...props }, ref) => {
    const { toasts } = useToast()

    return (
      <Portal>
        <ol
          ref={ref}
          data-scope="toast"
          data-part="viewport"
          className={cn(toastViewportVariants({ position }), className)}
          {...props}
        >
          {toasts.map((toast) => (
            <ToastItem key={toast.id} toast={toast} />
          ))}
        </ol>
      </Portal>
    )
  }
)
ToastViewport.displayName = 'ToastViewport'

function ToastItem({ toast }: { toast: any }) {
  const { dismiss } = useToast()

  return (
    <Toast
      open={toast.open}
      onOpenChange={() => dismiss(toast.id)}
      variant={toast.variant}
      data-state={toast.open ? 'open' : 'closed'}
    >
      <div className="grid gap-1">
        {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
        {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
      </div>
      {toast.action && (
        <ToastAction onClick={toast.action.onClick}>{toast.action.label}</ToastAction>
      )}
      {toast.closable !== false && <ToastClose />}
    </Toast>
  )
}

export const Toast = React.forwardRef<HTMLLIElement, ToastProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <li
        ref={ref}
        data-scope="toast"
        data-part="root"
        className={cn(toastVariants({ variant }), className)}
        {...props}
      />
    )
  }
)
Toast.displayName = 'Toast'

export const ToastTitle = React.forwardRef<HTMLDivElement, ToastTitleProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} data-part="title" className={cn(toastTitleVariants(), className)} {...props} />
  )
)
ToastTitle.displayName = 'ToastTitle'

export const ToastDescription = React.forwardRef<HTMLDivElement, ToastDescriptionProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-part="description"
      className={cn(toastDescriptionVariants(), className)}
      {...props}
    />
  )
)
ToastDescription.displayName = 'ToastDescription'

export const ToastAction = React.forwardRef<HTMLButtonElement, ToastActionProps>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      data-part="action"
      className={cn(toastActionVariants(), className)}
      {...props}
    />
  )
)
ToastAction.displayName = 'ToastAction'

export const ToastClose = React.forwardRef<HTMLButtonElement, ToastCloseProps>(
  ({ className, ...props }, ref) => (
    <button ref={ref} data-part="close" className={cn(toastCloseVariants(), className)} {...props}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
      <span className="sr-only">Close</span>
    </button>
  )
)
ToastClose.displayName = 'ToastClose'

export { ToastProvider } from '@/hooks/use-toast'
