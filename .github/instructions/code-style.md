# Code Style

## CSS Modules (Scoped Styling)

Use CSS Modules for all component styles. Name files `*.module.css` and import them as objects:

```jsx
import styles from "./Component.module.css"

function Component() {
  return <div className={styles.container}>...</div>
}
```

This prevents style leakage between components — Vite hashes class names at build time. Keep `index.css` for global resets and CSS custom properties only. Never use plain `.css` files for component styles.

## Variables & Naming

Use `camelCase` for regular variables, including module-level constants that aren't truly immutable configuration:

```js
// ✅ camelCase
const baseUrl = "https://api.example.com"
const maxRetries = 3

// ❌ SCREAMING_SNAKE_CASE — reserve for environment-level constants only
const BASE_URL = "https://api.example.com"
```

Reserve `SCREAMING_SNAKE_CASE` for environment variables and truly global, build-time constants (e.g. `API_KEY`, `MAX_FILE_SIZE`).
