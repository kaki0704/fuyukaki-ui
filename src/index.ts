// Auto-import styles
import './styles.css'

// Components
export { Button, buttonVariants, buttonAnatomy } from './components/button'
export type { ButtonProps } from './components/button'

export { Badge, badgeVariants, badgeAnatomy } from './components/badge'
export type { BadgeProps } from './components/badge'

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './components/card'

export { Input } from './components/input'
export type { InputProps } from './components/input'

export { Alert, AlertTitle, AlertDescription } from './components/alert'

export { Checkbox } from './components/checkbox'
export type { CheckboxProps } from './components/checkbox'

export { Label } from './components/label'
export type { LabelProps } from './components/label'

export { Textarea } from './components/textarea'
export type { TextareaProps } from './components/textarea'

export { Switch } from './components/switch'
export type { SwitchProps } from './components/switch'

export { Radio, RadioGroup } from './components/radio'
export type { RadioProps } from './components/radio'

export { Select } from './components/select'
export type { SelectProps } from './components/select'

export { Tooltip } from './components/tooltip'
export type { TooltipProps } from './components/tooltip'

export {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from './components/dialog'
export type { DialogProps } from './components/dialog'

export { Progress } from './components/progress'
export type { ProgressProps } from './components/progress'

export { Spinner } from './components/spinner'
export type { SpinnerProps } from './components/spinner'

// New Components
export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarStatus,
  AvatarWithInitials,
  avatarVariants,
  avatarImageVariants,
  avatarFallbackVariants,
  avatarStatusVariants,
  avatarAnatomy,
} from './components/avatar'
export type {
  AvatarProps,
  AvatarImageProps,
  AvatarFallbackProps,
  AvatarStatusProps,
} from './components/avatar'

export {
  Confetti,
  useConfetti,
} from './components/confetti'
export type { ConfettiProps, ConfettiOptions, ConfettiPreset } from './components/confetti'

export {
  Toast,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastAction,
  ToastClose,
  ToastProvider,
  toastVariants,
  toastViewportVariants,
  toastTitleVariants,
  toastDescriptionVariants,
  toastActionVariants,
  toastCloseVariants,
  toastAnatomy,
} from './components/toast'
export type {
  ToastProps,
  ToastViewportProps,
  ToastTitleProps,
  ToastDescriptionProps,
  ToastActionProps,
  ToastCloseProps,
} from './components/toast'

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  dropdownMenuContentVariants,
  dropdownMenuItemVariants,
  dropdownMenuLabelVariants,
  dropdownMenuSeparatorVariants,
  dropdownMenuShortcutVariants,
  dropdownMenuAnatomy,
} from './components/dropdown-menu'
export type {
  DropdownMenuProps,
  DropdownMenuTriggerProps,
  DropdownMenuContentProps,
  DropdownMenuItemProps,
  DropdownMenuLabelProps,
  DropdownMenuSeparatorProps,
} from './components/dropdown-menu'

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
  tableVariants,
  tableHeaderVariants,
  tableBodyVariants,
  tableFooterVariants,
  tableRowVariants,
  tableHeadVariants,
  tableCellVariants,
  tableCaptionVariants,
  tableAnatomy,
} from './components/table'
export type {
  TableProps,
  TableHeaderProps,
  TableBodyProps,
  TableFooterProps,
  TableRowProps,
  TableHeadProps,
  TableCellProps,
  TableCaptionProps,
} from './components/table'

// Hooks
export {
  useControllableState,
  useDisclosure,
  useFocusTrap,
  useOutsideClick,
  useToast,
} from './hooks'
export type {
  UseControllableStateProps,
  UseDisclosureProps,
  ToastOptions,
  Toast as ToastType,
  ToastVariant,
  ToastPosition,
} from './hooks'

// Utils
export { cn, createContext, getInitials, Portal } from './utils'
export type { PortalProps } from './utils'
