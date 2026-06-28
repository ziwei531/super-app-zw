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

## Docker

### Production

Build the image:

```bash
docker build -t super-app-zw .
```

Run the container:

```bash
docker run -p 8080:80 super-app-zw
```

Or use Docker Compose:

```bash
docker compose up -d
```

The app will be available at **http://localhost:8080**.

### Development (with hot reload)

```bash
docker compose -f docker-compose.dev.yml up -d
```

Source files are mounted as a volume, so changes reflect instantly with Vite HMR. Available at **http://localhost:5173**.

> If the dev container fails to start, rebuild the image with `--build`:
> ```bash
> docker compose -f docker-compose.dev.yml up -d --build
> ```

## Workflow

- `stable` is the main branch
- features branch as `feature-{name}`, merged into a release branch when ready
- releases and hotfixes branch off the latest tag, merged back to `stable`
- all branches are flat — no slashes

