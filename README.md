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

## Git Flow

> **Note:** This repo was initialized with `stable` as the production branch (not `main`). Git-flow was configured accordingly during `git flow init`. The commands below reflect this setup.

### Feature Branches

All new features are developed in feature branches off `develop` and merged back when complete.

### Start a feature

```bash
git flow feature start <name>   # e.g. git flow feature start add-login
```

This creates `feature/<name>` branched from `develop` and switches to it.

### Finish a feature

```bash
git flow feature finish <name>
```

This automatically:
- Merges `feature/<name>` → `develop`
- Deletes the feature branch
- Switches back to `develop`

### Collaborate on a feature

```bash
git flow feature publish <name>   # push to remote for others to use
git flow feature track <name>     # track a remote feature branch
git flow feature pull origin <name>  # pull a feature from origin
```

## Git Flow Release Process

> **⚠️ Only start a release branch when `develop` is mature and feature-complete.**
> Once you cut a release, no new features should go into `develop` for that cycle — only bug fixes go into the release branch.

1. **Ensure `develop` is mature** — all planned features merged, app builds and passes tests.

2. **Start the release:**

   ```bash
   git flow release start <version>   # e.g. 1.0.0
   ```

   This creates `release/<version>` from `develop`.

3. **Polish the release** — bug fixes, version bumps, docs only. No new features.

4. **Finish the release:**

   > **Note:** `git flow release finish` only operates locally — it does _not_ push by default.

   **Option A — finish and push in one step (recommended):**

   ```bash
   git flow release finish -p <version>
   ```

   The `-p` flag pushes `stable`, `develop`, and tags to `origin` automatically.

   **Option B — finish locally, then push manually:**

   ```bash
   git flow release finish <version>
   git push origin stable develop --tags
   ```

   Either way, `finish` automatically:
   - Merges `release/<version>` → `stable`
   - Tags `stable` with the version
   - Merges `release/<version>` → `develop`
   - Deletes the local release branch
