export function getInitials(name: string, maxChars = 2): string {
  if (!name || typeof name !== 'string') {
    return ''
  }

  return name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .filter(Boolean)
    .join('')
    .toUpperCase()
    .slice(0, maxChars)
}
