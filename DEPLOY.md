# Deploy to GitHub Pages

## Quick Deploy

1. **Create a GitHub repository** (if you haven't already)
   - Go to GitHub and create a new repository
   - Note the repository name (e.g., `genetics-site`)

2. **Connect your local repo to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit - Genetics Site with JSON data"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Deploy using the script:**
   ```bash
   ./deploy.sh YOUR_REPO_NAME
   ```
   
   Or manually:
   ```bash
   VITE_BASE_PATH=/YOUR_REPO_NAME/ npm run build
   npx gh-pages -d dist
   ```

4. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `/(root)`
   - Click Save

5. **Your site will be live at:**
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
   ```

## Alternative: Use GitHub Actions (Automated)

The repository already includes a GitHub Actions workflow (`.github/workflows/deploy.yml`).

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Source: **GitHub Actions** (not "Deploy from a branch")
4. Update `VITE_BASE_PATH` in `.github/workflows/deploy.yml` to match your repo name
5. Push to `main` branch - it will deploy automatically on every push!

## Important Notes

- **Repository name matters!** The base path in `vite.config.ts` must match your repository name
- For **user/org pages** (username.github.io), use base path: `/`
- For **project pages**, use base path: `/repository-name/`

