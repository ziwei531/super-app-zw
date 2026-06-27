# Super App ZW

React + Vite application.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:5173`).

## Other Scripts

```bash
npm run build    # production build
npm run preview  # preview production build locally
npm run lint     # run ESLint
```

## Workflow

Single base branch (`stable`), no `develop`. Flat branch naming — no slashes.

| Type    | Pattern              | Branches from  | Merges into         |
|---------|----------------------|----------------|---------------------|
| Feature | `feature-{name}`     | `stable`       | `release-{version}` |
| Release | `release-{version}`  | latest tag     | `stable`            |
| Hotfix  | `hotfix-{version}`   | latest tag     | `stable`            |

All operations are done via the `gf` helper (see [gf.ps1](E:\Projects\simple-twgit\gf.ps1)).

