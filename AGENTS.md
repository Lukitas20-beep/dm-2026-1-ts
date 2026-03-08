# AGENTS.md

Coding agent instructions for the **dm-2026-1-ts** repository.

## Project Overview

- **Framework:** Expo SDK 54 (managed workflow) with React Native 0.81 and React 19.1
- **Language:** TypeScript 5.9 with `strict: true`
- **Routing:** expo-router v6 (file-based routing in `app/`)
- **Navigation:** @react-navigation/bottom-tabs (tab-based layout)
- **Package manager:** npm (`package-lock.json`)
- **Experiments enabled:** typed routes, React Compiler (`app.json`)
- **New Architecture:** enabled (`newArchEnabled: true`)

## Build / Lint / Test Commands

```bash
npm start              # Start Expo dev server (interactive)
npm run android        # Start on Android
npm run ios            # Start on iOS
npm run web            # Start on web
npm run lint           # Run ESLint (via expo lint)
npx tsc --noEmit       # Type-check the project without emitting
```

### Testing

No test framework is currently configured. There are no test files, no test runner
dependencies, and no `test` script. If tests are added in the future, update this
section with the relevant commands (e.g., `npm test` and `npm test -- <file>`).

## Project Structure

```
app/                  # Screens/pages (expo-router file-based routing)
  (tabs)/             # Tab navigator group
  _layout.tsx         # Root layout
components/           # Reusable UI components (named exports)
  ui/                 # Lower-level/primitive UI components
constants/            # Configuration and theme constants
hooks/                # Custom React hooks (one hook per file)
assets/images/        # Static image assets
scripts/              # Utility scripts (JS)
```

### Path Alias

The `@/*` alias maps to the project root. Always use it for internal imports:

```typescript
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
```

## Code Style Guidelines

### File Naming

- **All source files:** kebab-case (`themed-text.tsx`, `use-color-scheme.ts`)
- **Platform-specific files:** append `.platform` suffix (`icon-symbol.ios.tsx`)
- **Layout files:** underscore prefix per expo-router convention (`_layout.tsx`)

### Naming Conventions

| Category            | Convention        | Examples                                  |
|---------------------|-------------------|-------------------------------------------|
| React components    | PascalCase        | `ThemedText`, `ParallaxScrollView`        |
| Hooks               | camelCase, `use`  | `useColorScheme`, `useThemeColor`         |
| Variables / params  | camelCase         | `colorScheme`, `scrollRef`                |
| Exported types      | PascalCase        | `ThemedTextProps`, `IconSymbolName`       |
| Object constants    | PascalCase        | `Colors`, `Fonts`                         |
| Primitive constants | UPPER_SNAKE_CASE  | `HEADER_HEIGHT`, `MAPPING`                |
| StyleSheet keys     | camelCase         | `titleContainer`, `stepContainer`         |

### Imports

1. **External / third-party imports** first (no blank lines between them)
2. **Blank line**
3. **Internal imports** using the `@/` alias (alphabetical)
4. Use **inline `type` keyword** for type-only imports: `import { type TextProps } from 'react-native'`
5. Prefer **named imports** over default imports

VSCode auto-organizes imports on save (`source.organizeImports`).

### Types

- Use the **`type` keyword** exclusively — no `interface` declarations
- Extend prop types via **intersection types**: `TextProps & { lightColor?: string }`
- Use React utility types: `PropsWithChildren`, `ReactElement`, `ComponentProps`
- **Omit explicit return types** on functions; rely on TypeScript inference
- For simple components, inline prop types in function parameters are acceptable
- For reusable components, export a named type (e.g., `export type ThemedTextProps = ...`)

### Exports

| Location        | Pattern                       | Example                              |
|-----------------|-------------------------------|--------------------------------------|
| `app/` screens  | `export default function`     | `export default function HomeScreen` |
| `components/`   | `export function` (named)     | `export function ThemedText(...)`    |
| `hooks/`        | `export function`             | `export function useThemeColor(...)` |
| `constants/`    | `export const`                | `export const Colors = { ... }`      |

### File Structure

Organize each file in this order:

1. Imports (grouped as above)
2. Constants and type definitions
3. Component function (exported)
4. `StyleSheet.create()` at the bottom of the file

### Error Handling

- Use **null coalescing (`??`)** for safe defaults: `useColorScheme() ?? 'light'`
- Use **optional chaining (`?.`)** for conditional calls: `props.onPressIn?.(ev)`
- Avoid try/catch in component code; let errors propagate to error boundaries
- No custom Result types or error classes are used in this codebase

### Formatting

- **Single quotes** for all string literals
- **Semicolons** at end of statements
- **Trailing commas** in multi-line objects, arrays, and parameters
- **2-space indentation**
- JSX multi-line props: closing bracket on its own line

### Comments

- Use `/** JSDoc */` for module-level or component-level documentation
- Use `//` for brief inline explanations
- Keep comments sparse — code should be self-documenting
- No TODO/FIXME/HACK comments in the codebase

## TypeScript Configuration

Key settings (from `tsconfig.json` + `expo/tsconfig.base`):

- `strict: true` — all strict checks enabled
- `jsx: "react-native"` — React Native JSX transform
- `module: "preserve"` / `moduleResolution: "bundler"`
- `target: "ESNext"` / `lib: ["DOM", "ESNext"]`
- `noEmit: true` — type-checking only, Expo/Metro handles bundling
- `paths: { "@/*": ["./*"] }` — root path alias

## Linting

- ESLint v9 flat config (`eslint.config.js`) extending `eslint-config-expo`
- Ignores: `dist/*`
- Run with: `npm run lint`
- VSCode auto-fixes on save (`source.fixAll`)

## Expo-Specific Notes

- **Typed routes** are enabled — route params and paths are type-checked
- **React Compiler** experiment is active — avoid patterns that break compiler assumptions
  (e.g., mutating props, reading refs during render)
- **Platform-specific files** use the `.platform.tsx` convention (e.g., `.ios.tsx` with
  a default fallback `.tsx`)
- **New Architecture** (Fabric + TurboModules) is enabled
- Deep linking scheme: `dm20261ts`
