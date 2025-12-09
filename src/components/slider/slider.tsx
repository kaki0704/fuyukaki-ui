import { cn } from '@/utils'
import * as React from 'react'

export interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  onChange?: (value: number) => void
  onChangeEnd?: (value: number) => void
  showValue?: boolean
  size?: 'sm' | 'md' | 'lg'
  orientation?: 'horizontal' | 'vertical'
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      className,
      value: controlledValue,
      defaultValue = 0,
      min = 0,
      max = 100,
      step = 1,
      disabled = false,
      onChange,
      onChangeEnd,
      showValue = false,
      size = 'md',
      orientation = 'horizontal',
      ...props
    },
    ref
  ) => {
    const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue)
    const [isDragging, setIsDragging] = React.useState(false)
    const trackRef = React.useRef<HTMLDivElement>(null)

    const value = controlledValue !== undefined ? controlledValue : uncontrolledValue

    const percentage = ((value - min) / (max - min)) * 100

    const updateValue = React.useCallback(
      (newValue: number) => {
        const clampedValue = Math.min(max, Math.max(min, newValue))
        const steppedValue = Math.round(clampedValue / step) * step
        const finalValue = Math.min(max, Math.max(min, steppedValue))

        if (controlledValue === undefined) {
          setUncontrolledValue(finalValue)
        }
        onChange?.(finalValue)
      },
      [controlledValue, min, max, step, onChange]
    )

    const getValueFromPosition = React.useCallback(
      (clientX: number, clientY: number) => {
        if (!trackRef.current) return value

        const rect = trackRef.current.getBoundingClientRect()
        let percentage: number

        if (orientation === 'horizontal') {
          percentage = (clientX - rect.left) / rect.width
        } else {
          percentage = 1 - (clientY - rect.top) / rect.height
        }

        percentage = Math.min(1, Math.max(0, percentage))
        return min + percentage * (max - min)
      },
      [min, max, value, orientation]
    )

    const handleMouseDown = React.useCallback(
      (event: React.MouseEvent) => {
        if (disabled) return
        event.preventDefault()
        setIsDragging(true)
        const newValue = getValueFromPosition(event.clientX, event.clientY)
        updateValue(newValue)
      },
      [disabled, getValueFromPosition, updateValue]
    )

    const handleTouchStart = React.useCallback(
      (event: React.TouchEvent) => {
        if (disabled) return
        setIsDragging(true)
        const touch = event.touches[0]
        const newValue = getValueFromPosition(touch.clientX, touch.clientY)
        updateValue(newValue)
      },
      [disabled, getValueFromPosition, updateValue]
    )

    React.useEffect(() => {
      if (!isDragging) return

      const handleMouseMove = (event: MouseEvent) => {
        const newValue = getValueFromPosition(event.clientX, event.clientY)
        updateValue(newValue)
      }

      const handleTouchMove = (event: TouchEvent) => {
        const touch = event.touches[0]
        const newValue = getValueFromPosition(touch.clientX, touch.clientY)
        updateValue(newValue)
      }

      const handleEnd = () => {
        setIsDragging(false)
        onChangeEnd?.(value)
      }

      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleEnd)
      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', handleEnd)

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleEnd)
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('touchend', handleEnd)
      }
    }, [isDragging, getValueFromPosition, updateValue, onChangeEnd, value])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent) => {
        if (disabled) return

        let newValue = value
        const largeStep = (max - min) / 10

        switch (event.key) {
          case 'ArrowRight':
          case 'ArrowUp':
            newValue = value + step
            break
          case 'ArrowLeft':
          case 'ArrowDown':
            newValue = value - step
            break
          case 'PageUp':
            newValue = value + largeStep
            break
          case 'PageDown':
            newValue = value - largeStep
            break
          case 'Home':
            newValue = min
            break
          case 'End':
            newValue = max
            break
          default:
            return
        }

        event.preventDefault()
        updateValue(newValue)
        onChangeEnd?.(Math.min(max, Math.max(min, newValue)))
      },
      [disabled, value, min, max, step, updateValue, onChangeEnd]
    )

    const sizeClasses = {
      sm: {
        track: orientation === 'horizontal' ? 'h-1' : 'w-1',
        thumb: 'h-3 w-3',
      },
      md: {
        track: orientation === 'horizontal' ? 'h-2' : 'w-2',
        thumb: 'h-4 w-4',
      },
      lg: {
        track: orientation === 'horizontal' ? 'h-3' : 'w-3',
        thumb: 'h-5 w-5',
      },
    }

    const isHorizontal = orientation === 'horizontal'

    return (
      <div
        ref={ref}
        data-scope="slider"
        data-part="root"
        data-orientation={orientation}
        data-disabled={disabled ? '' : undefined}
        className={cn(
          'relative flex touch-none select-none items-center',
          isHorizontal ? 'w-full' : 'h-full flex-col',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        {...props}
      >
        {showValue && (
          <span
            data-scope="slider"
            data-part="value"
            className={cn('text-sm font-medium text-foreground', isHorizontal ? 'mr-3' : 'mb-3')}
          >
            {value}
          </span>
        )}
        <div
          ref={trackRef}
          data-scope="slider"
          data-part="track"
          className={cn(
            'relative grow rounded-full bg-muted cursor-pointer',
            isHorizontal ? 'w-full' : 'h-full min-h-[100px]',
            sizeClasses[size].track
          )}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div
            data-scope="slider"
            data-part="range"
            className={cn(
              'absolute rounded-full bg-primary',
              isHorizontal ? 'h-full left-0' : 'w-full bottom-0'
            )}
            style={isHorizontal ? { width: `${percentage}%` } : { height: `${percentage}%` }}
          />
          <div
            data-scope="slider"
            data-part="thumb"
            role="slider"
            tabIndex={disabled ? -1 : 0}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={value}
            aria-orientation={orientation}
            aria-disabled={disabled}
            className={cn(
              'absolute rounded-full border-2 border-primary bg-background shadow-sm',
              'ring-offset-background transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              'hover:bg-accent',
              isDragging && 'ring-2 ring-ring ring-offset-2',
              sizeClasses[size].thumb
            )}
            style={
              isHorizontal
                ? {
                    left: `${percentage}%`,
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }
                : {
                    bottom: `${percentage}%`,
                    left: '50%',
                    transform: 'translate(-50%, 50%)',
                  }
            }
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    )
  }
)
Slider.displayName = 'Slider'

export { Slider }
