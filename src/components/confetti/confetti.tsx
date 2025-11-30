import confetti from 'canvas-confetti'
import * as React from 'react'
import type { ConfettiOptions, ConfettiPreset, ConfettiProps } from './confetti.types'

const FUYUKAKI_COLORS = ['#EB6101', '#6A8347', '#D68A4D', '#FAF7F2', '#FCEDE6', '#CB4B32']

interface ConfettiPresetConfig {
  particleCount: number
  spread: number
  startVelocity?: number
  origin?: Partial<{ x: number; y: number }>
  colors?: string[]
  ticks?: number
  gravity?: number
  scalar?: number
}

const PRESETS: Record<ConfettiPreset, ConfettiPresetConfig> = {
  basic: {
    particleCount: 50,
    spread: 70,
    origin: { x: 0.5, y: 0.6 },
  },
  fireworks: {
    particleCount: 100,
    spread: 360,
    ticks: 50,
    gravity: 0,
    startVelocity: 45,
    scalar: 1.2,
  },
  snow: {
    particleCount: 50,
    spread: 180,
    startVelocity: 0,
    ticks: 200,
    gravity: 0.5,
    origin: { x: 0.5, y: -0.1 },
  },
  burst: {
    particleCount: 100,
    spread: 100,
    startVelocity: 50,
    origin: { x: 0.5, y: 0.5 },
  },
}

function getPresetConfig(preset?: ConfettiPreset): Partial<ConfettiOptions> {
  if (!preset) return {}
  return PRESETS[preset]
}

function createConfettiOptions(options: ConfettiOptions = {}): confetti.Options {
  const presetConfig = getPresetConfig(options.preset)

  return {
    particleCount: options.particleCount ?? presetConfig.particleCount ?? 50,
    spread: options.spread ?? presetConfig.spread ?? 70,
    startVelocity: options.startVelocity ?? presetConfig.startVelocity,
    decay: options.decay ?? presetConfig.decay,
    gravity: options.gravity ?? presetConfig.gravity,
    drift: options.drift,
    ticks: options.ticks ?? presetConfig.ticks,
    origin: options.origin ?? presetConfig.origin,
    colors: options.colors ?? presetConfig.colors ?? FUYUKAKI_COLORS,
    shapes: options.shapes,
    scalar: options.scalar ?? presetConfig.scalar,
  }
}

export function useConfetti() {
  const fire = React.useCallback(async (options: ConfettiOptions = {}) => {
    const confettiOptions = createConfettiOptions(options)

    if (options.preset === 'fireworks') {
      const defaults = {
        origin: { y: 0.7 },
      }

      function fireOnce(particleRatio: number, opts: Partial<confetti.Options>) {
        confetti({
          ...defaults,
          ...confettiOptions,
          ...opts,
          particleCount: Math.floor((confettiOptions.particleCount || 100) * particleRatio),
        })
      }

      fireOnce(0.25, {
        spread: 26,
        startVelocity: 55,
      })

      fireOnce(0.2, {
        spread: 60,
      })

      fireOnce(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      })

      fireOnce(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
      })

      fireOnce(0.1, {
        spread: 120,
        startVelocity: 45,
      })

      options.onComplete?.()
      return
    }

    await confetti(confettiOptions)
    options.onComplete?.()
  }, [])

  const reset = React.useCallback(() => {
    confetti.reset()
  }, [])

  return { fire, reset }
}

export const Confetti = React.forwardRef<HTMLDivElement, ConfettiProps>(
  ({ autoPlay, onComplete, ...options }, ref) => {
    const { fire } = useConfetti()
    const optionsRef = React.useRef(options)
    const onCompleteRef = React.useRef(onComplete)

    React.useEffect(() => {
      optionsRef.current = options
      onCompleteRef.current = onComplete
    })

    React.useEffect(() => {
      if (autoPlay) {
        fire({ ...optionsRef.current, onComplete: onCompleteRef.current })
      }
    }, [autoPlay, fire])

    return <div ref={ref} data-scope="confetti" data-part="root" />
  }
)

Confetti.displayName = 'Confetti'
