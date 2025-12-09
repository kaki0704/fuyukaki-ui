import { cn } from '@/utils'
import * as React from 'react'

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
}

interface TabsContextValue {
  value: string
  onValueChange: (value: string) => void
}

const TabsContext = React.createContext<TabsContextValue | undefined>(undefined)

function useTabsContext() {
  const context = React.useContext(TabsContext)
  if (!context) {
    throw new Error('Tabs components must be used within Tabs')
  }
  return context
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    { className, defaultValue = '', value: controlledValue, onValueChange, children, ...props },
    ref
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue)

    const value = controlledValue !== undefined ? controlledValue : uncontrolledValue

    const handleValueChange = React.useCallback(
      (newValue: string) => {
        if (controlledValue === undefined) {
          setUncontrolledValue(newValue)
        }
        onValueChange?.(newValue)
      },
      [controlledValue, onValueChange]
    )

    const contextValue = React.useMemo(
      () => ({ value, onValueChange: handleValueChange }),
      [value, handleValueChange]
    )

    return (
      <TabsContext.Provider value={contextValue}>
        <div
          ref={ref}
          data-scope="tabs"
          data-part="root"
          className={cn('w-full', className)}
          {...props}
        >
          {children}
        </div>
      </TabsContext.Provider>
    )
  }
)
Tabs.displayName = 'Tabs'

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'pills'
}

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variantClasses = {
      default: 'bg-muted p-1 rounded-lg',
      outline: 'border-b border-border',
      pills: 'gap-2',
    }

    return (
      <div
        ref={ref}
        data-scope="tabs"
        data-part="list"
        data-variant={variant}
        role="tablist"
        className={cn('inline-flex items-center justify-start', variantClasses[variant], className)}
        {...props}
      />
    )
  }
)
TabsList.displayName = 'TabsList'

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  variant?: 'default' | 'outline' | 'pills'
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, variant = 'default', disabled, children, ...props }, ref) => {
    const { value: selectedValue, onValueChange } = useTabsContext()
    const isSelected = selectedValue === value

    const variantClasses = {
      default: cn(
        'px-3 py-1.5 rounded-md text-sm font-medium transition-all',
        'text-muted-foreground hover:text-foreground',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        isSelected && 'bg-background text-foreground shadow-sm'
      ),
      outline: cn(
        'px-4 py-2 -mb-px text-sm font-medium transition-all border-b-2 border-transparent',
        'text-muted-foreground hover:text-foreground hover:border-border',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        'disabled:pointer-events-none disabled:opacity-50',
        isSelected && 'text-foreground border-primary'
      ),
      pills: cn(
        'px-4 py-2 rounded-full text-sm font-medium transition-all',
        'text-muted-foreground hover:text-foreground hover:bg-muted',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        isSelected && 'bg-primary text-primary-foreground hover:bg-primary/90'
      ),
    }

    return (
      <button
        ref={ref}
        type="button"
        data-scope="tabs"
        data-part="trigger"
        data-state={isSelected ? 'active' : 'inactive'}
        data-value={value}
        role="tab"
        aria-selected={isSelected}
        aria-controls={`tabpanel-${value}`}
        tabIndex={isSelected ? 0 : -1}
        disabled={disabled}
        className={cn(variantClasses[variant], className)}
        onClick={() => onValueChange(value)}
        {...props}
      >
        {children}
      </button>
    )
  }
)
TabsTrigger.displayName = 'TabsTrigger'

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  forceMount?: boolean
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, value, forceMount = false, children, ...props }, ref) => {
    const { value: selectedValue } = useTabsContext()
    const isSelected = selectedValue === value

    if (!forceMount && !isSelected) {
      return null
    }

    return (
      <div
        ref={ref}
        data-scope="tabs"
        data-part="content"
        data-state={isSelected ? 'active' : 'inactive'}
        data-value={value}
        role="tabpanel"
        id={`tabpanel-${value}`}
        aria-labelledby={`tab-${value}`}
        hidden={!isSelected}
        className={cn(
          'mt-2 ring-offset-background',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          !isSelected && 'hidden',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TabsContent.displayName = 'TabsContent'

export { Tabs, TabsList, TabsTrigger, TabsContent }
