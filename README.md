# @hongsi-ui/core

**Natural warmth for your interface.**

A modern, accessible React UI component library built with TypeScript and Tailwind CSS, inspired by the warm, organic tones of nature.

## Philosophy: Warm & Organic

> "Digital interfaces that feel like soil and wood, not cold metal and glass."

@hongsi-ui/core follows a unique **"No Black, No Gray"** design philosophy. Instead of sterile grays and harsh blacks, we use warm earth tones inspired by nature:

- **柿色 (Persimmon)** `#EB6101` - Our vibrant primary color
- **葉色 (Leaf Green)** `#6A8347` - Natural green for positive actions
- **渋色 (Shibu Brown)** `#4E3D35` - Warm brown replaces pure black for text
- **生成り (Off White)** `#FAF7F2` - Paper-like background instead of stark white
- **淡柿 (Pale Orange)** `#FCEDE6` - Gentle surface color

This creates interfaces that are easier on the eyes, feel more human, and stand out from the sea of monochrome UIs.

## Who is this for?

Perfect for applications in:

- 🍽️ **Food & Culinary** - Restaurants, cafes, recipe sites
- 🌿 **Lifestyle & Wellness** - Organic products, yoga, meditation
- 🏯 **Japanese & Traditional** - Cultural sites, crafts, hospitality
- 🛍️ **D2C & Artisan Brands** - Handmade goods, natural products

## Features

- 🎨 **Warm Color Palette** - No pure black or gray, only natural earth tones
- 🔒 **TypeScript** - Full type safety and IntelliSense support
- ♿ **Accessible** - WAI-ARIA compliant components
- 🎯 **Headless Architecture** - Flexible, unstyled primitives with pre-styled defaults
- 📦 **Tree-shakeable** - Import only what you need
- 🧪 **Well-tested** - Comprehensive test coverage with Vitest
- 📖 **Documented** - Interactive Storybook documentation

## Installation

```bash
pnpm add @hongsi-ui/core
# or
npm install @hongsi-ui/core
# or
yarn add @hongsi-ui/core
```

## Usage

```tsx
import { Button } from '@hongsi-ui/core'

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

### Display & Feedback
- **Button** - Flexible button component with warm variants and organic shadows
- **Badge** - Small status indicators with natural color tones
- **Card** - Content containers with gentle surface backgrounds
- **Alert** - Notification components using earth-tone colors (success: leaf green, warning: persimmon, error: deep persimmon)

### Forms
- **Input** - Text inputs with warm borders and focus states
- **Textarea** - Multi-line text areas with organic styling
- **Checkbox** - Checkboxes with persimmon accent color
- **Radio** - Radio buttons with warm styling
- **Switch** - Toggle switches with leaf green active state
- **Select** - Native select dropdowns with organic borders
- **Label** - Form labels with consistent typography

### Overlays
- **Dialog** - Modal dialogs with warm shadows and backdrop blur
- **Tooltip** - Hover tooltips with smooth animations

All components (13 total) follow the "No Black, No Gray" philosophy with warm, organic styling.

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

[https://github.com/kaki0704/hongsi-ui](https://github.com/kaki0704/hongsi-ui)
