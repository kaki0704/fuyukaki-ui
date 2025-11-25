import * as React from 'react'

export function createContext<T>(rootComponentName: string) {
  const Context = React.createContext<T | undefined>(undefined)

  function Provider(props: T & { children: React.ReactNode }) {
    const { children, ...context } = props
    return React.createElement(Context.Provider, { value: context as T }, children)
  }

  function useComponentContext(consumerName: string) {
    const context = React.useContext(Context)
    if (context === undefined) {
      throw new Error(`${consumerName} must be used within ${rootComponentName}`)
    }
    return context
  }

  return [Provider, useComponentContext] as const
}
