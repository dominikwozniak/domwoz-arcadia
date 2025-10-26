# @aether/primitives

Low-level, unstyled building blocks that provide core functionality without styling opinions.

```
Provider (config) → Primitive (logic) → UI Component (styling)
```

## Attribution

Adapted from [rn-primitives](https://github.com/roninoss/rn-primitives) and [HeroUI Native](https://github.com/heroui-inc/heroui-native/tree/alpha/src/primitives).

**License:** MIT | **Author:** @roninoss

Modified for:
- iOS-first accessibility
- NativeWind/Tailwind v4 integration
- React 19 compatibility

## Usage

**⚠️ Internal only** - Use components from `/ui` instead:
```tsx
// ❌ Don't
import { BaseText } from '@/primitives';

// ✅ Do
import { Text } from '@/ui';
```
