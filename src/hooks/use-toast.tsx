import * as React from 'react'

export type ToastVariant = 'default' | 'success' | 'warning' | 'destructive'
export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

export interface ToastOptions {
  title?: string
  description?: React.ReactNode
  variant?: ToastVariant
  duration?: number
  position?: ToastPosition
  action?: {
    label: string
    onClick: () => void
  }
  closable?: boolean
  onDismiss?: () => void
}

export interface Toast extends ToastOptions {
  id: string
  open: boolean
}

interface ToastContextValue {
  toasts: Toast[]
  toast: (options: ToastOptions) => string
  dismiss: (id: string) => void
  dismissAll: () => void
}

const ToastContext = React.createContext<ToastContextValue | undefined>(undefined)

let toastCount = 0

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([])

  const toast = React.useCallback((options: ToastOptions) => {
    const id = `toast-${++toastCount}`
    const newToast: Toast = {
      id,
      open: true,
      variant: 'default',
      duration: 5000,
      position: 'bottom-right',
      closable: true,
      ...options,
    }

    setToasts((prev) => [...prev, newToast])

    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        dismiss(id)
      }, newToast.duration)
    }

    return id
  }, [])

  const dismiss = React.useCallback((id: string) => {
    setToasts((prev) => prev.map((toast) => (toast.id === id ? { ...toast, open: false } : toast)))

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, 300)
  }, [])

  const dismissAll = React.useCallback(() => {
    setToasts((prev) => prev.map((toast) => ({ ...toast, open: false })))
    setTimeout(() => {
      setToasts([])
    }, 300)
  }, [])

  const value = React.useMemo(
    () => ({ toasts, toast, dismiss, dismissAll }),
    [toasts, toast, dismiss, dismissAll]
  )

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

export function useToast(): Omit<ToastContextValue, 'toasts'> & { toasts: Toast[] } {
  const context = React.useContext(ToastContext)

  if (context === undefined) {
    throw new Error('useToast must be used within ToastProvider')
  }

  return context
}
