export const buttonAnatomy = {
  parts: ['root', 'icon', 'label', 'spinner'] as const,
}

export type ButtonAnatomyPart = (typeof buttonAnatomy.parts)[number]
