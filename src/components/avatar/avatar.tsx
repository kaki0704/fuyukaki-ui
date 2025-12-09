import { cn, getInitials } from '@/utils'
import * as React from 'react'
import {
  avatarFallbackVariants,
  avatarImageVariants,
  avatarStatusVariants,
  avatarVariants,
} from './avatar.styles'
import type {
  AvatarFallbackProps,
  AvatarImageProps,
  AvatarProps,
  AvatarStatusProps,
} from './avatar.types'

type ImageLoadingStatus = 'idle' | 'loading' | 'loaded' | 'error'

interface AvatarContextValue {
  imageLoadingStatus: ImageLoadingStatus
  setImageLoadingStatus: (status: ImageLoadingStatus) => void
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | null
}

const AvatarContext = React.createContext<AvatarContextValue | undefined>(undefined)

function useAvatarContext() {
  const context = React.useContext(AvatarContext)
  if (!context) {
    throw new Error('Avatar compound components must be used within Avatar')
  }
  return context
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size, shape, children, ...props }, ref) => {
    const [imageLoadingStatus, setImageLoadingStatus] = React.useState<ImageLoadingStatus>('idle')

    const value = React.useMemo(
      () => ({ imageLoadingStatus, setImageLoadingStatus, size }),
      [imageLoadingStatus, size]
    )

    return (
      <AvatarContext.Provider value={value}>
        <div
          ref={ref}
          data-scope="avatar"
          data-part="root"
          className={cn(avatarVariants({ size, shape }), className)}
          {...props}
        >
          {children}
        </div>
      </AvatarContext.Provider>
    )
  }
)
Avatar.displayName = 'Avatar'

export const AvatarImage = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, src, alt, onLoadingStatusChange, ...props }, ref) => {
    const { setImageLoadingStatus, imageLoadingStatus } = useAvatarContext()

    React.useEffect(() => {
      if (!src) {
        setImageLoadingStatus('error')
        return
      }

      let isMounted = true
      const image = new window.Image()

      const updateStatus = (status: ImageLoadingStatus) => {
        if (!isMounted) return
        setImageLoadingStatus(status)
        onLoadingStatusChange?.(status)
      }

      setImageLoadingStatus('loading')
      onLoadingStatusChange?.('loading')

      image.onload = () => {
        updateStatus('loaded')
      }

      image.onerror = () => {
        updateStatus('error')
      }

      image.src = src

      return () => {
        isMounted = false
      }
    }, [src, setImageLoadingStatus, onLoadingStatusChange])

    if (imageLoadingStatus !== 'loaded') {
      return null
    }

    return (
      <img
        ref={ref}
        data-part="image"
        src={src}
        className={cn(avatarImageVariants(), className)}
        {...props}
        alt={alt || 'Avatar'}
      />
    )
  }
)
AvatarImage.displayName = 'AvatarImage'

export const AvatarFallback = React.forwardRef<HTMLDivElement, AvatarFallbackProps>(
  ({ className, children, delayMs, ...props }, ref) => {
    const { imageLoadingStatus } = useAvatarContext()
    const [canRender, setCanRender] = React.useState(delayMs === undefined)

    React.useEffect(() => {
      if (delayMs === undefined) return

      const timeout = setTimeout(() => {
        setCanRender(true)
      }, delayMs)

      return () => clearTimeout(timeout)
    }, [delayMs])

    if (!canRender || imageLoadingStatus === 'loaded') {
      return null
    }

    return (
      <div
        ref={ref}
        data-part="fallback"
        className={cn(avatarFallbackVariants(), className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
AvatarFallback.displayName = 'AvatarFallback'

export const AvatarStatus = React.forwardRef<HTMLSpanElement, AvatarStatusProps>(
  ({ className, size: sizeOverride, status, ...props }, ref) => {
    const { size: contextSize } = useAvatarContext()
    const size = sizeOverride || contextSize

    return (
      <span
        ref={ref}
        data-part="status"
        aria-label={status ? `Status: ${status}` : undefined}
        className={cn(avatarStatusVariants({ size, status }), className)}
        {...props}
      />
    )
  }
)
AvatarStatus.displayName = 'AvatarStatus'

export interface AvatarWithInitialsProps extends Omit<AvatarProps, 'children'> {
  name: string
  status?: 'online' | 'offline' | 'busy' | 'away'
}

export const AvatarWithInitials = React.forwardRef<HTMLDivElement, AvatarWithInitialsProps>(
  ({ name, src, alt, status, ...props }, ref) => {
    const initials = getInitials(alt || name)

    return (
      <Avatar ref={ref} {...props}>
        <AvatarImage src={src} alt={alt || name} />
        <AvatarFallback>{initials}</AvatarFallback>
        {status && <AvatarStatus status={status} />}
      </Avatar>
    )
  }
)
AvatarWithInitials.displayName = 'AvatarWithInitials'
