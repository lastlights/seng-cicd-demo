# Deployment Guide 🚀

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### How it Works

1. **Trigger**: Push to `main` branch
2. **Build**: GitHub Actions builds the project using pnpm and Vite
3. **Deploy**: Built files are deployed to GitHub Pages
4. **Access**: App is available at `https://[username].github.io/seng-cicd-demo/`

### Deployment Workflow

The deployment is handled by `.github/workflows/pages.yml` which:

- ✅ Checks out the code
- ✅ Sets up Node.js (24.x) and pnpm
- ✅ Installs dependencies with frozen lockfile
- ✅ Builds the project for production
- ✅ Configures GitHub Pages
- ✅ Uploads build artifacts
- ✅ Deploys to GitHub Pages

### Configuration

#### Vite Configuration
The `vite.config.ts` is configured with the correct base path for GitHub Pages:

```typescript
base: process.env.NODE_ENV === "production" ? "/seng-cicd-demo/" : "/"
```

This ensures that:
- **Development**: Uses root path `/` for local development
- **Production**: Uses `/seng-cicd-demo/` for GitHub Pages deployment

#### Repository Settings

To enable GitHub Pages deployment, ensure your repository has:

1. **Pages Source**: Set to "GitHub Actions" in repository settings
2. **Actions Permissions**: Allow GitHub Actions to read and write
3. **Environment**: The workflow creates a `github-pages` environment

### Monitoring Deployment

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. Look for "Deploy to GitHub Pages" workflow runs
4. Click on a run to see detailed logs

### Troubleshooting

#### Common Issues:

**❌ Pages deployment failed**
- Check if GitHub Pages is enabled in repository settings
- Verify the workflow has proper permissions
- Ensure the build completes successfully

**❌ Assets not loading (404 errors)**
- Verify the `base` path in `vite.config.ts` matches your repository name
- Check that the repository name is `seng-cicd-demo`

**❌ Workflow permissions error**
- Go to repository Settings → Actions → General
- Set "Workflow permissions" to "Read and write permissions"

### Manual Deployment

For manual deployment (not recommended for this demo):

```bash
# Build the project
pnpm run build

# Deploy dist/ folder to your hosting provider
# (Netlify, Vercel, AWS S3, etc.)
```

### Environment-Specific Builds

The build process automatically detects the environment:

- **NODE_ENV=production**: Uses GitHub Pages base path
- **NODE_ENV=development**: Uses local development settings

### Security Considerations

- ✅ Only builds and deploys from `main` branch
- ✅ Uses GitHub's built-in OIDC token for authentication
- ✅ No secrets or API keys required
- ✅ Read-only access to repository content
- ✅ Write access only to Pages deployment

---

For more information about GitHub Pages and Actions, see:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
