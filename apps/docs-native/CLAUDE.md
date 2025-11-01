# docs-native - React Native Storybook Playground

React Native application for developing and testing Aether design system components using Storybook.

## Overview

This is a playground/documentation app that serves as an interactive environment for:
- Testing Aether design system components on iOS/Android
- Developing and previewing stories in a real device/simulator
- Validating component behavior in React Native context
- Providing interactive documentation via Storybook

## Getting Started

### Running the App

```bash
# Start iOS simulator with Metro bundler
pnpm ios

# Start Android emulator
pnpm android
```

The app will launch with Storybook UI, allowing you to browse and interact with all available component stories.

## Adding Stories

### Pattern: Explicit Re-exports

Due to Metro bundler limitations, stories must be re-exported with explicit named exports:

**Example:** `apps/docs-native/.rnstorybook/stories/VStack.stories.tsx`

```typescript
/**
 * Re-export VStack stories from @repo/aether with named exports
 *
 * Using named exports ensures Metro bundler can properly resolve
 * the stories through require.context.
 */
import VStackStories, {
  Basic,
  Spacing,
  Alignment
} from '@repo/aether/stories/VStack';

export default VStackStories;
export { Basic, Spacing, Alignment };
```

### Workflow

1. **Create/Update Story in Aether:**
   - Edit `packages/aether/src/[component]/[Component].stories.tsx`
   - Follow Horizon-inspired patterns (see Aether CLAUDE.md)

2. **Re-export in docs-native:**
   - Create `.rnstorybook/stories/[Component].stories.tsx`
   - Import default meta and all story exports
   - Re-export explicitly (required for Metro bundler)

3. **Test:**
   - Run `pnpm ios` or `pnpm android`
   - Navigate to your story in Storybook
   - Verify behavior on device/simulator

## Metro Bundler Configuration

### Path Alias Workaround

Metro bundler doesn't resolve TypeScript path aliases (`~/*`) from external packages. We use `babel-plugin-module-resolver` as a workaround.

**Configuration:** `babel.config.js`

```javascript
alias: {
  // Workaround: Metro bundler doesn't resolve TypeScript path aliases (~/*)
  // from external packages. This maps ~ to both local src and @repo/aether
  // to support imports like "~/_story-components/box" from aether's stories.
  "~": ["./src", "../../packages/aether/src"],
}
```

This allows Aether stories to use `~/_story-components/box` imports that Metro can resolve.

### Tailwind v4 Monorepo Configuration

Tailwind CSS v4 uses automatic content detection, but in monorepo setups it only scans the local package by default. To generate utilities for classes used in `@repo/aether`, we use the `@source` directive.

**Configuration:** `src/globals.css`

```css
@import 'tailwindcss';
@import 'uniwind';

/* Tailwind v4: Explicitly scan monorepo packages for utility class generation */
@source "../../packages/aether/src";

@import '@repo/aether/tailwind/theme.css';
```

**Why This Matters**:
- Without `@source`, only theme tokens from `theme.css` work (e.g., `bg-aether-primary`)
- Standard Tailwind utilities (e.g., `bg-blue-600`, `px-4`, `gap-4`) won't be generated
- The directive tells Tailwind to scan the Aether package and generate all needed utilities

**Required for**:
- Layout component styling (`gap-4`, `items-center`, `flex-col`)
- Color utilities (`bg-blue-600`, `text-white`)
- Spacing utilities (`px-4`, `py-2`, `mb-2`)
- All standard Tailwind classes used in Aether components

## Examples

### Button Stories
- **Source:** `packages/aether/src/components/Button/Button.stories.tsx`
- **Re-export:** `.rnstorybook/stories/Button.stories.tsx`
- **Stories:** Primary, Secondary, Accent, Small, Medium, Large, Disabled

### Layout Stories
- **VStack:** Basic, Spacing, Alignment (vertical stack)
- **HStack:** Basic, Spacing, Alignment, Wrapping (horizontal stack)

## Development Workflow

### Adding a New Component Story

1. **Develop in Aether:**
   ```bash
   cd packages/aether
   # Create component and stories following patterns
   ```

2. **Export from package.json:**
   ```json
   {
     "exports": {
       "./stories/[Component]": "./src/[path]/[Component].stories.tsx"
     }
   }
   ```

3. **Re-export in docs-native:**
   ```typescript
   // .rnstorybook/stories/[Component].stories.tsx
   import ComponentStories, { Story1, Story2 } from '@repo/aether/stories/[Component]';
   export default ComponentStories;
   export { Story1, Story2 };
   ```

4. **Test:**
   ```bash
   pnpm ios
   # Storybook auto-discovers new stories via require.context
   ```

## Troubleshooting

### "Unable to resolve" errors
- Verify path alias configuration in `babel.config.js`
- Check that `@repo/aether` has proper exports in `package.json`
- Ensure Metro bundler cache is cleared: `pnpm start --clear`

### Stories not appearing
- Verify file matches pattern: `**/*.stories.?(ts|tsx|js|jsx)`
- Check `storybook.requires.ts` was regenerated
- Restart Metro bundler

### Metro bundler issues
- Clear cache: `rm -rf node_modules/.cache`
- Reset Metro: `pnpm start --reset-cache`
- Rebuild: `cd ios && xcodebuild clean && cd ..`

### Tailwind utilities not working
**Symptom**: Components render but have no styling (transparent backgrounds, no padding)
**Cause**: Tailwind v4 not scanning monorepo packages for class names
**Solution**:
1. Verify `@source "../../packages/aether/src"` is in `src/globals.css`
2. Restart Metro bundler: Stop (Ctrl+C) → `pnpm ios`
3. Check Metro logs for CSS compilation messages
