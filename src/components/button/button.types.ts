import type { VariantProps } from 'class-variance-authority'
import type { buttonVariants } from './button.styles'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Whether the button is in a loading state
   */
  loading?: boolean

  /**
   * Icon to display before the label
   */
  leftIcon?: React.ReactNode

  /**
   * Icon to display after the label
   */
  rightIcon?: React.ReactNode

  /**
   * Button content
   */
  children?: React.ReactNode

  /**
   * Whether the button is disabled
   */
  disabled?: boolean
}
