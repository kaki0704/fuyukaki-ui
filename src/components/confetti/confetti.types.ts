export type ConfettiPreset = 'basic' | 'fireworks' | 'snow' | 'burst'

export interface ConfettiOptions {
  autoPlay?: boolean
  particleCount?: number
  spread?: number
  startVelocity?: number
  decay?: number
  gravity?: number
  drift?: number
  ticks?: number
  origin?: Partial<{ x: number; y: number }>
  colors?: string[]
  preset?: ConfettiPreset
  shapes?: ('square' | 'circle')[]
  scalar?: number
  onComplete?: () => void
}

export interface ConfettiProps extends ConfettiOptions {
  className?: string
}
