# @persimmon/ui

A modern, accessible React UI component library built with TypeScript and Tailwind CSS.

## Features

- 🎨 **Tailwind CSS** - Utility-first styling with CSS variables for theming
- 🔒 **TypeScript** - Full type safety and IntelliSense support
- ♿ **Accessible** - WAI-ARIA compliant components
- 🎯 **Headless Architecture** - Flexible, unstyled primitives with pre-styled defaults
- 📦 **Tree-shakeable** - Import only what you need
- 🧪 **Well-tested** - Comprehensive test coverage with Vitest
- 📖 **Documented** - Interactive Storybook documentation

## Installation

```bash
pnpm add @persimmon/ui
# or
npm install @persimmon/ui
# or
yarn add @persimmon/ui
```

## Usage

```tsx
import { Button } from '@persimmon/ui'

function App() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  )
}
```

> **Note**: Styles are automatically imported when you import components. No need to manually import CSS files!

## Components

Currently available components:

- **Button** - Flexible button component with variants and states

More components coming soon!

## Development

### Setup

```bash
# Install dependencies
pnpm install

# Run Storybook
pnpm storybook

# Run tests
pnpm test

# Build library
pnpm build
```

### Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build the library
- `pnpm test` - Run tests
- `pnpm test:ui` - Run tests with UI
- `pnpm lint` - Lint code
- `pnpm lint:fix` - Fix linting issues
- `pnpm format` - Format code
- `pnpm storybook` - Start Storybook
- `pnpm build-storybook` - Build Storybook for deployment

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Vitest** - Testing framework
- **Storybook** - Documentation and development
- **Biome** - Linting and formatting

## License

MIT © [kaki0704](https://github.com/kaki0704)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Repository

[https://github.com/kaki0704/persimmon-ui](https://github.com/kaki0704/persimmon-ui)
