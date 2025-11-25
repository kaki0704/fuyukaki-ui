import { useCallback, useState } from 'react'

export interface UseDisclosureProps {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function useDisclosure({
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
}: UseDisclosureProps = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)
  const isControlled = controlledOpen !== undefined
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen

  const setOpen = useCallback(
    (value: boolean | ((prev: boolean) => boolean)) => {
      const nextValue = typeof value === 'function' ? value(isOpen) : value

      if (!isControlled) {
        setUncontrolledOpen(nextValue)
      }
      onOpenChange?.(nextValue)
    },
    [isControlled, isOpen, onOpenChange]
  )

  const open = useCallback(() => setOpen(true), [setOpen])
  const close = useCallback(() => setOpen(false), [setOpen])
  const toggle = useCallback(() => setOpen((prev) => !prev), [setOpen])

  return {
    isOpen,
    open,
    close,
    toggle,
    setOpen,
  }
}
