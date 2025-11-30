import { type RefObject, useEffect } from 'react'

export function useFocusTrap<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  enabled: boolean
): void {
  useEffect(() => {
    if (!enabled) {
      return
    }

    const element = ref.current
    if (!element) {
      return
    }

    const focusableSelector =
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') {
        return
      }

      const focusableElements = Array.from(element.querySelectorAll<HTMLElement>(focusableSelector))

      if (focusableElements.length === 0) {
        event.preventDefault()
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault()
          lastElement.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault()
          firstElement.focus()
        }
      }
    }

    const focusableElements = element.querySelectorAll<HTMLElement>(focusableSelector)
    if (focusableElements.length > 0) {
      focusableElements[0].focus()
    }

    element.addEventListener('keydown', handleKeyDown)

    return () => {
      element.removeEventListener('keydown', handleKeyDown)
    }
  }, [ref, enabled])
}
