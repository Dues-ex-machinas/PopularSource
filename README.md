# Genetics Site - From Atom to Person

A React-based interactive visualization exploring the biological hierarchy from atoms to human behavior.

## Features

- Interactive navigation through biological levels: Atom → Molecule → DNA → Cell → Spleen → Brain → Person
- Beautiful animations using Framer Motion
- Data-driven content loaded from JSON
- Responsive design with Tailwind CSS
- Keyboard and scroll wheel navigation

## Development

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment to GitHub Pages

### Option 1: Manual Deployment

1. Update the `base` path in `vite.config.ts` to match your repository name:
   - For project pages: `/your-repo-name/`
   - For user/org pages: `/`

2. Build and deploy:
```bash
npm run build
npm run deploy
```

### Option 2: Automated Deployment (GitHub Actions)

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` or `master` branch.

1. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions

2. Update the `VITE_BASE_PATH` in `.github/workflows/deploy.yml` to match your repository name:
   - For project pages: `VITE_BASE_PATH: /your-repo-name/`
   - For user/org pages: `VITE_BASE_PATH: /`

3. Push to main/master branch - deployment will happen automatically!

## Project Structure

```
├── src/
│   ├── data.json          # Content data (items, labels, text)
│   ├── GeneticsSite.tsx   # Main React component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment workflow
├── vite.config.ts          # Vite configuration
└── package.json           # Dependencies and scripts
```

## Customization

### Updating Content

Edit `src/data.json` to modify the items, labels, and descriptions. The icons are defined in `GeneticsSite.tsx` and mapped to the JSON data.

### Changing Icons

Icons are React components defined in `GeneticsSite.tsx`. To add a new icon:
1. Create the icon component
2. Add it to the `iconMap` object
3. Update `data.json` with the new icon name

## License

MIT

