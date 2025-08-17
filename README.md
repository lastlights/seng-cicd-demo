# CI/CD Demo - University Project 🎓

A modern Single Page Application (SPA) built with React, TypeScript, and Vite to demonstrate CI/CD pipeline concepts to university students.

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or 20.x
- pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd seng-cicd-demo
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start development server with hot reload |
| `pnpm run build` | Build production-optimized bundle |
| `pnpm run preview` | Preview production build locally |
| `pnpm run lint` | Run Biome linter for code quality checks |
| `pnpm run format` | Check code formatting with Biome |
| `pnpm run check` | Run both linting and formatting checks |
| `pnpm run check:fix` | Auto-fix linting and formatting issues |
| `pnpm run test` | Run unit tests with Vitest (watch mode) |
| `pnpm run test:run` | Run unit tests once (CI mode) |
| `pnpm run test:ui` | Run tests with interactive UI |

## 🛠️ Technology Stack

### Frontend Framework
- **React 18.2.0** - Component-based UI library
- **TypeScript 5.2.2** - Type-safe JavaScript
- **React Router 6.20.1** - Client-side routing

### Build Tools
- **Vite 5.0.0** - Fast build tool and dev server
- **Biome** - Fast linter and formatter (replaces ESLint + Prettier)
- **Prettier** - Additional code formatting support
- **Vitest** - Unit testing framework

### Testing
- **@testing-library/react** - React component testing utilities
- **@testing-library/jest-dom** - Custom Jest matchers
- **jsdom** - DOM implementation for testing

## 🏗️ Project Structure

```
seng-cicd-demo/
├── public/                 # Static assets
│   └── vite.svg           # Favicon
├── src/                   # Source code
│   ├── components/        # Reusable components
│   │   └── BuildInfo.tsx  # Build information display
│   ├── pages/            # Page components
│   │   ├── Home.tsx      # Landing page
│   │   ├── About.tsx     # Project information
│   │   └── Pipeline.tsx  # CI/CD demonstration
│   ├── test/             # Test utilities
│   │   └── setup.ts      # Test configuration
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── .github/
│   └── workflows/
│       └── ci.yml        # GitHub Actions CI/CD pipeline
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── vitest.config.ts      # Test configuration
```

## 🔄 CI/CD Pipeline

This project includes comprehensive GitHub Actions workflows that demonstrate modern CI/CD practices:

### CI/CD Pipeline Workflows

**1. Continuous Integration (`.github/workflows/ci.yml`)**
- Runs on every push and pull request
- Multi-version Node.js testing (22.x, 24.x)
- Code quality checks with Biome
- Unit testing with Vitest
- Build verification

**2. GitHub Pages Deployment (`.github/workflows/pages.yml`)**
- Automatic deployment to GitHub Pages on main branch
- Production build with optimized assets
- Static site hosting for demo purposes

### Pipeline Stages

1. **Source Control** - Code pushed to Git repository
2. **Build Trigger** - CI system detects changes
3. **Install Dependencies** - `pnpm install --frozen-lockfile` for reproducible installs
4. **Code Quality** - Biome linting/formatting and TypeScript compilation
5. **Testing** - Automated unit tests with Vitest
6. **Build** - Production bundle creation with Vite
7. **Deployment** - Automated GitHub Pages deployment

### Branch Strategy

- **`main`** - Production deployments to GitHub Pages
- **`develop`** - Development and testing
- **Feature branches** - Pull request testing and validation

### Matrix Testing

The pipeline tests against multiple Node.js versions (22.x, 24.x) to ensure compatibility.

## 🎯 Educational Objectives

This project helps students understand:

### Modern Web Development
- Component-based architecture with React
- Type safety with TypeScript
- Modern build tools and bundlers
- Single Page Application concepts

### DevOps Practices
- Continuous Integration (CI)
- Continuous Deployment (CD)
- Automated testing strategies
- Code quality enforcement
- Build artifact management

### Software Engineering
- Version control best practices
- Collaborative development workflows
- Environment-specific configurations
- Production vs development builds

## 🧪 Testing Strategy

### Unit Tests
- Component behavior testing
- Business logic validation
- Regression prevention

### Code Quality
- Biome for fast linting and formatting
- TypeScript for type safety
- Prettier for additional formatting support
- Automated formatting and style checks

### Integration Testing
- End-to-end pipeline validation
- Environment-specific testing
- Deployment verification

## 🌍 Environment Configuration

The application supports different environments:

- **Development** - Hot reload, source maps, debugging tools
- **Staging** - Production-like environment for testing
- **Production** - Optimized build, minified assets

### Environment Variables

Build-time variables are injected via Vite:
- `__BUILD_TIME__` - Timestamp of build
- `__BUILD_VERSION__` - Application version
- `import.meta.env.*` - Vite environment variables

## 🚀 Deployment

### Local Development
```bash
pnpm run dev
```

### Production Build
```bash
pnpm run build
pnpm run preview
```

### CI/CD Deployment
- Push to `main` branch triggers automatic deployment to GitHub Pages
- Push to `develop` branch triggers CI/CD testing pipeline
- GitHub Pages deployment available at: `https://[username].github.io/seng-cicd-demo/`

## 📝 Assignment Ideas

### For Students

1. **Add New Features**
   - Create additional pages
   - Implement user authentication simulation
   - Add data visualization components

2. **Enhance Testing**
   - Write more comprehensive unit tests
   - Add integration tests
   - Implement end-to-end testing

3. **Improve CI/CD**
   - Add code coverage reporting
   - Implement security scanning
   - Set up performance testing

4. **Experiment with Deployment**
   - Deploy to different platforms (Vercel, Netlify, AWS)
   - Set up staging environments
   - Implement feature flags

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Learning Resources

### React & TypeScript
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)

### CI/CD & DevOps
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [CI/CD Best Practices](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment)
- [Testing Best Practices](https://testing-library.com/docs/guiding-principles/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

If you have questions about this demo project:

1. Check the existing issues
2. Create a new issue with detailed description
3. Review the code comments and documentation
4. Attend office hours or lab sessions

---

**Built with ❤️ for Software Engineering Education**
