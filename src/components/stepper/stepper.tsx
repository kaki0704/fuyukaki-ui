import { cn } from '@/utils'
import * as React from 'react'

export interface StepperProps extends React.HTMLAttributes<HTMLOListElement> {
  /** Current active step (0-indexed) */
  activeStep?: number
  /** Orientation of the stepper */
  orientation?: 'horizontal' | 'vertical'
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
  /** Variant style */
  variant?: 'default' | 'outline' | 'ghost'
}

interface StepperContextValue {
  activeStep: number
  totalSteps: number
  orientation: 'horizontal' | 'vertical'
  size: 'sm' | 'md' | 'lg'
  variant: 'default' | 'outline' | 'ghost'
  registerStep: () => number
  unregisterStep: () => void
}

const StepperContext = React.createContext<StepperContextValue | undefined>(undefined)

function useStepperContext() {
  const context = React.useContext(StepperContext)
  if (!context) {
    throw new Error('Stepper components must be used within Stepper')
  }
  return context
}

const Stepper = React.forwardRef<HTMLOListElement, StepperProps>(
  (
    {
      className,
      activeStep = 0,
      orientation = 'horizontal',
      size = 'md',
      variant = 'default',
      children,
      ...props
    },
    ref
  ) => {
    const [totalSteps, setTotalSteps] = React.useState(0)
    const stepCountRef = React.useRef(0)

    const registerStep = React.useCallback(() => {
      const index = stepCountRef.current
      stepCountRef.current += 1
      setTotalSteps(stepCountRef.current)
      return index
    }, [])

    const unregisterStep = React.useCallback(() => {
      stepCountRef.current -= 1
      setTotalSteps(stepCountRef.current)
    }, [])

    const contextValue = React.useMemo<StepperContextValue>(
      () => ({
        activeStep,
        totalSteps,
        orientation,
        size,
        variant,
        registerStep,
        unregisterStep,
      }),
      [activeStep, totalSteps, orientation, size, variant, registerStep, unregisterStep]
    )

    return (
      <StepperContext.Provider value={contextValue}>
        <ol
          ref={ref}
          data-scope="stepper"
          data-part="root"
          data-orientation={orientation}
          aria-label="Progress steps"
          className={cn(
            'flex list-none m-0 p-0',
            orientation === 'horizontal' ? 'flex-row items-center' : 'flex-col',
            className
          )}
          {...props}
        >
          {children}
        </ol>
      </StepperContext.Provider>
    )
  }
)
Stepper.displayName = 'Stepper'

export interface StepProps extends React.HTMLAttributes<HTMLLIElement> {
  /** Whether this step is optional */
  optional?: boolean
  /** Custom label for optional text */
  optionalLabel?: string
  /** Whether this step has an error */
  error?: boolean
  /** Whether this step is disabled */
  disabled?: boolean
}

const Step = React.forwardRef<HTMLLIElement, StepProps>(
  (
    { className, optional, optionalLabel = 'Optional', error, disabled, children, ...props },
    ref
  ) => {
    const { registerStep, unregisterStep, activeStep, totalSteps, orientation, size, variant } =
      useStepperContext()
    const indexRef = React.useRef<number>(-1)

    React.useEffect(() => {
      indexRef.current = registerStep()
      return () => unregisterStep()
    }, [registerStep, unregisterStep])

    const stepIndex = indexRef.current
    const isActive = stepIndex === activeStep
    const isCompleted = stepIndex < activeStep
    const isLast = stepIndex === totalSteps - 1

    const status = error ? 'error' : isCompleted ? 'complete' : isActive ? 'active' : 'inactive'

    return (
      <li
        ref={ref}
        data-scope="stepper"
        data-part="step"
        data-status={status}
        data-orientation={orientation}
        data-disabled={disabled ? '' : undefined}
        aria-current={isActive ? 'step' : undefined}
        className={cn(
          'flex',
          orientation === 'horizontal' ? 'flex-1 items-center' : 'flex-col',
          disabled && 'opacity-50 pointer-events-none',
          className
        )}
        {...props}
      >
        <div
          className={cn(
            'flex',
            orientation === 'horizontal' ? 'flex-col items-center' : 'flex-row items-start gap-3'
          )}
        >
          <StepIndicator
            stepIndex={stepIndex}
            status={status}
            size={size}
            variant={variant}
            orientation={orientation}
          />
          <div
            className={cn(orientation === 'horizontal' ? 'mt-2 text-center' : '', 'flex flex-col')}
          >
            {children}
            {optional && (
              <span
                data-scope="stepper"
                data-part="optional"
                className="text-xs text-muted-foreground"
              >
                {optionalLabel}
              </span>
            )}
          </div>
        </div>
        {!isLast && <StepSeparator status={status} orientation={orientation} />}
      </li>
    )
  }
)
Step.displayName = 'Step'

interface StepIndicatorProps {
  stepIndex: number
  status: 'active' | 'complete' | 'inactive' | 'error'
  size: 'sm' | 'md' | 'lg'
  variant: 'default' | 'outline' | 'ghost'
  orientation: 'horizontal' | 'vertical'
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ stepIndex, status, size, variant }) => {
  const sizeClasses = {
    sm: 'h-6 w-6 text-xs',
    md: 'h-8 w-8 text-sm',
    lg: 'h-10 w-10 text-base',
  }

  const variantClasses = {
    default: {
      active: 'bg-primary text-primary-foreground',
      complete: 'bg-primary text-primary-foreground',
      inactive: 'bg-muted text-muted-foreground',
      error: 'bg-destructive text-destructive-foreground',
    },
    outline: {
      active: 'border-2 border-primary text-primary bg-transparent',
      complete: 'border-2 border-primary text-primary bg-transparent',
      inactive: 'border-2 border-muted text-muted-foreground bg-transparent',
      error: 'border-2 border-destructive text-destructive bg-transparent',
    },
    ghost: {
      active: 'text-primary',
      complete: 'text-primary',
      inactive: 'text-muted-foreground',
      error: 'text-destructive',
    },
  }

  return (
    <div
      data-scope="stepper"
      data-part="indicator"
      data-status={status}
      className={cn(
        'flex items-center justify-center rounded-full font-medium transition-colors shrink-0',
        sizeClasses[size],
        variantClasses[variant][status]
      )}
    >
      {status === 'complete' ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ) : status === 'error' ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      ) : (
        stepIndex + 1
      )}
    </div>
  )
}

interface StepSeparatorProps {
  status: 'active' | 'complete' | 'inactive' | 'error'
  orientation: 'horizontal' | 'vertical'
}

const StepSeparator: React.FC<StepSeparatorProps> = ({ status, orientation }) => {
  const isComplete = status === 'complete'

  return (
    <div
      data-scope="stepper"
      data-part="separator"
      data-status={status}
      className={cn(
        'transition-colors',
        orientation === 'horizontal' ? 'h-0.5 flex-1 mx-2' : 'w-0.5 h-8 ml-4 mt-2 mb-2',
        isComplete ? 'bg-primary' : 'bg-border'
      )}
    />
  )
}

export interface StepTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

const StepTitle = React.forwardRef<HTMLDivElement, StepTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-scope="stepper"
        data-part="title"
        className={cn('text-sm font-medium', className)}
        {...props}
      />
    )
  }
)
StepTitle.displayName = 'StepTitle'

export interface StepDescriptionProps extends React.HTMLAttributes<HTMLDivElement> {}

const StepDescription = React.forwardRef<HTMLDivElement, StepDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-scope="stepper"
        data-part="description"
        className={cn('text-xs text-muted-foreground', className)}
        {...props}
      />
    )
  }
)
StepDescription.displayName = 'StepDescription'

export { Stepper, Step, StepTitle, StepDescription, useStepperContext }
