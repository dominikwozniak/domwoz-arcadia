# Aether Design System

A React Native design system built with Tailwind CSS (uniwind), providing layout primitives and reusable components for building mobile applications.

## Overview

Aether is a component library and design system for React Native that emphasizes:
- **Layout-first approach** - Semantic layout components (VStack, HStack)
- **Tailwind styling** - Using uniwind for React Native Tailwind support
- **Type safety** - Full TypeScript support with polymorphic components
- **Storybook integration** - Interactive component documentation

## Inspirations

### Horizon Design System

Aether's architecture and patterns are inspired by [Horizon](https://github.com/airhelp/web/tree/main/packages/horizon), AirHelp's React web design system:

- **Story structure** - JSDoc comments, `tags: ['autodocs']`, render() functions
- **Helper components** - Box component for visual demonstrations
- **Composability** - Polymorphic components with `as` prop
- **Semantic layout** - VStack/HStack over raw div/View elements

**Key Adaptations for React Native:**
- React web (`div`, `@storybook/react-vite`) → React Native (`View`, `@storybook/react-native`)
- CSS Grid patterns → Flexbox-based layouts
- Responsive breakpoints → React Native Dimensions API (when needed)
- Path aliases require Metro bundler workarounds

## Architecture

### Core Principles

1. **Composability** - Components work together automatically
2. **Consistency** - Right thing is the default thing
3. **Simplicity** - Prefer semantic components over complex configurations

## Styling Philosophy

### Prefer Layout Components

❌ **Avoid:**
```tsx
<View className="flex flex-col gap-4">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</View>
```

✅ **Prefer:**
```tsx
<VStack className="gap-4">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</VStack>
```

**Benefits:**
- More semantic and readable
- Clearer intent
- Easier to maintain
- Follows Horizon patterns

### Tailwind with Uniwind

We use [uniwind](https://github.com/jooohn/uniwind) for Tailwind CSS support in React Native:

```tsx
import { View, Text } from "react-native";

<View className="flex flex-row items-center gap-2 p-4 bg-blue-500 rounded-lg">
  <Text className="text-white font-bold">Hello</Text>
</View>
```

### Class Name Utilities

**Location:** `src/utils/class-names.ts`

Two utilities powered by `tailwind-merge`:

#### `cnx` (twMerge) - Default Choice ⭐

Intelligently merges Tailwind classes, resolving conflicts by keeping the last value.

```typescript
import { cnx } from "~/utils";

// Conflicting classes are resolved
cnx("text-sm p-4", "text-lg p-8")
// → "text-lg p-8"

// Perfect for overridable component styles
<View className={cnx("bg-blue-500 rounded", props.className)} />
```

**Use when:**
- Combining classes from multiple sources
- Building components with overridable styles
- Unsure if conflicts exist (safe default)

#### `cn` (twJoin) - Performance Optimization

Joins class names, filtering out falsy values. Faster but doesn't resolve conflicts.

```typescript
import { cn } from "~/utils";

cn("flex gap-4", isActive && "opacity-100")
// → "flex gap-4 opacity-100"
```

**Use when:**
- You know there are no conflicting classes
- Performance is critical
- Simple conditional classes

### Styling Best Practices

1. **Default to `cnx`** for safety and conflict resolution
2. **Use layout components** (VStack, HStack) for structure
3. **Keep styling in className** - avoid inline styles unless necessary
4. **Use tailwind-variants** for complex component variants

## Layout Components

### VStack - Vertical Stack

Flexbox column layout with optional gap, alignment, and justification.

```tsx
import { VStack } from "@repo/aether";

<VStack className="gap-4 items-center">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
  <Text>Item 3</Text>
</VStack>
```

**Props:**
- `as` - Polymorphic component type (default: `View`)
- `className` - Tailwind classes
- All React Native View props

### HStack - Horizontal Stack

Flexbox row layout with optional gap, alignment, and wrapping.

```tsx
import { HStack } from "@repo/aether";

<HStack className="gap-2 items-center flex-wrap">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
  <Text>Item 3</Text>
</HStack>
```

## Development Guidelines

### Creating Components

1. **Create component file:**
   ```
   src/components/[Component]/[Component].tsx
   ```

2. **Add TypeScript types:**
   ```typescript
   export interface ComponentProps {
     variant?: 'primary' | 'secondary';
     // ...
   }
   ```

3. **Use cnx for styling:**
   ```typescript
   import { cnx } from "~/utils";

   <View className={cnx("base-styles", variantClasses[variant], className)} />
   ```

4. **Export from index:**
   ```typescript
   // src/index.ts
   export { Component, type ComponentProps } from './components/Component';
   ```

### Creating Stories

Follow Horizon patterns adapted for React Native Storybook.

#### Story File Structure

```typescript
import type { Meta, StoryObj } from "@storybook/react-native";
import { Component } from "./Component";

/**
 * Component description following Horizon style.
 * Explain purpose, usage, and key features.
 */
const meta: Meta<typeof Component> = {
  title: "@aether/[Category]/[Component]",
  component: Component,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Component>;

/**
 * Story description in JSDoc comment.
 */
export const Basic: Story = {
  render() {
    return <Component />;
  },
};
```

#### Story Patterns

**Basic Story:**
```typescript
export const Basic: Story = {
  render() {
    return (
      <VStack className="gap-4">
        <Box>Item 1</Box>
        <Box>Item 2</Box>
      </VStack>
    );
  },
};
```

**Spacing Comparisons:**
```typescript
export const Spacing: Story = {
  render() {
    return (
      <VStack className="gap-8">
        <VStack className="gap-2">
          <Text className="text-sm mb-2">Small gap (gap-2)</Text>
          <VStack className="gap-2">
            <Box>Item 1</Box>
            <Box>Item 2</Box>
          </VStack>
        </VStack>
        {/* More examples... */}
      </VStack>
    );
  },
};
```

**Alignment Demos:**
```typescript
export const Alignment: Story = {
  render() {
    return (
      <VStack className="gap-8">
        <VStack className="gap-2">
          <Text className="text-sm mb-2">Center aligned</Text>
          <VStack className="items-center gap-2 border border-gray-300 p-4">
            <Box className="w-24">Item 1</Box>
            <Box className="w-32">Item 2</Box>
          </VStack>
        </VStack>
        {/* More alignments... */}
      </VStack>
    );
  },
};
```

### Story Helpers

**Box Component:** `src/_story-components/box.tsx`

Visual placeholder for demonstrating layout behavior in stories.

```tsx
import { Box } from "~/_story-components/box";

<Box>Item 1</Box>
<Box className="w-32">Custom width</Box>
```

**Internal use only** - not exported from package public API.

## Stories Export Pattern

### Metro Bundler Compatibility

Metro bundler requires explicit named exports. Wildcard re-exports (`export *`) don't work.

#### 1. Add Export to package.json

```json
{
  "exports": {
    "./stories/[Component]": "./src/[path]/[Component].stories.tsx"
  }
}
```

#### 2. Consuming Apps Re-export Explicitly

```typescript
// apps/docs-native/.rnstorybook/stories/[Component].stories.tsx
import ComponentStories, {
  Story1,
  Story2,
  Story3
} from '@repo/aether/stories/[Component]';

export default ComponentStories;
export { Story1, Story2, Story3 };
```

This pattern ensures Metro's `require.context` can properly discover stories.

## Utilities

### Class Name Helpers

**File:** `src/utils/class-names.ts`

```typescript
import { cn, cnx } from "@repo/aether";

// Default: cnx (safe merging)
const className = cnx("bg-blue-500", props.className);

// Performance: cn (no conflict resolution)
const className = cn("flex", isActive && "opacity-100");
```

**Recommendation:** Use `cnx` by default for safe class merging with conflict resolution.

## Development Workflow

### 1. Develop Component

```bash
cd packages/aether
# Create src/components/[Component]/[Component].tsx
# Add TypeScript types
# Style with Tailwind/cnx
```

### 2. Create Stories

```bash
# Create src/components/[Component]/[Component].stories.tsx
# Follow Horizon patterns
# Use story helpers (Box) for demos
```

### 3. Export from Package

```json
// package.json
{
  "exports": {
    "./stories/[Component]": "./src/components/[Component]/[Component].stories.tsx"
  }
}
```

### 4. Test in docs-native

```bash
cd apps/docs-native
# Create .rnstorybook/stories/[Component].stories.tsx
# Re-export with explicit named exports
pnpm ios
```

## Related Documentation

- **docs-native/CLAUDE.md** - Storybook playground setup and usage
- **Horizon** - `/Users/dominik.wozniak/workspace/web/packages/horizon` (inspiration source)
