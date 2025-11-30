import type { VariantProps } from 'class-variance-authority'
import type * as React from 'react'
import type { avatarStatusVariants, avatarVariants } from './avatar.styles'

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string
  alt?: string
  fallback?: string
}

export interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  onLoadingStatusChange?: (status: 'idle' | 'loading' | 'loaded' | 'error') => void
}

export interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {
  delayMs?: number
}

export interface AvatarStatusProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarStatusVariants> {}
