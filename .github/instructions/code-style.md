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

Apply this only when the array has 3+ items and the alignment meaningfully improves readability (tabular data, config maps). Do not align ad-hoc objects outside config/data files.
