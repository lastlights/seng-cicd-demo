# Getting Started with CI/CD Demo 🚀

## Quick Start for University Students

### Step 1: Install Node.js and pnpm
Download and install Node.js from [https://nodejs.org/](https://nodejs.org/)
- Choose version 22.x or 24.x (Latest LTS recommended)
- Verify installation: `node --version`
- Install pnpm: `npm install -g pnpm`
- Verify pnpm: `pnpm --version`

### Step 2: Clone and Setup
```bash
# Clone the repository
git clone <your-repository-url>
cd seng-cicd-demo

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

### Step 3: Explore the Application
- Open your browser to `http://localhost:3000`
- Navigate through the different pages:
  - **Home**: Interactive React demo with state management
  - **About**: Technology stack and project information
  - **CI/CD Pipeline**: Interactive pipeline simulation

### Step 4: Run Tests and Build
```bash
# Run linting and formatting
pnpm run check

# Fix linting and formatting issues
pnpm run check:fix

# Run tests
pnpm run test:run

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## 🎯 What You'll Learn

### Frontend Development
- ⚛️ **React Components**: How to build modular UI components
- 📝 **TypeScript**: Type-safe JavaScript development
- 🎨 **Tailwind CSS**: Utility-first styling with responsive design and dark mode
- 🔄 **State Management**: React hooks and component state
- 🌐 **Client-side Routing**: HashRouter for SPA navigation

### Build Tools
- ⚡ **Vite**: Fast development server and build tool
- 📦 **ES Modules**: Modern JavaScript module system
- 🔧 **Configuration**: Environment-specific builds

### Testing
- 🧪 **Unit Testing**: Component and logic testing with Vitest
- 🔍 **Code Quality**: Biome for fast linting and formatting
- ✅ **Type Checking**: TypeScript compilation verification

### CI/CD Concepts
- 🔄 **Automation**: Automated testing and deployment
- 🌿 **Branch Strategy**: Development, staging, and production workflows
- 📊 **Pipeline Stages**: Understanding each step in the process
- 🚀 **Deployment**: From code to production (GitHub Pages)
- 🌐 **Static Site Hosting**: Understanding modern web deployment

## 🛠️ Exercises for Students

### Beginner (Week 1-2)
1. **Modify the Home page**: Add your name and university
2. **Change styling**: Modify colors and fonts in `src/index.css`
3. **Add a new page**: Create a "Contact" page with your information
4. **Update tests**: Write a test for your new component

### Intermediate (Week 3-4)
1. **Add form handling**: Create a feedback form with React state
2. **Implement local storage**: Persist user preferences
3. **Add more tests**: Increase test coverage to 80%
4. **Custom pipeline stage**: Add a new stage to the pipeline simulation

### Advanced (Week 5-6)
1. **API Integration**: Add mock API calls with loading states
2. **Error boundaries**: Implement React error handling
3. **Performance optimization**: Add React.memo and useMemo
4. **E2E testing**: Set up Playwright or Cypress tests
5. **Custom deployment**: Set up deployment to different platforms
6. **Environment-specific builds**: Configure staging vs production builds
7. **Custom Tailwind components**: Create reusable component classes
8. **Dark mode toggle**: Add manual dark mode switching

## 🚨 Common Issues and Solutions

### Node.js Installation
**Problem**: `node: command not found`
**Solution**: Install Node.js from the official website or use a version manager like nvm

### Dependencies
**Problem**: `npm install` fails
**Solution**: 
```bash
# Clear npm cache
npm cache clean --force

# Try yarn instead
npm install -g yarn
yarn install
```

### Port Already in Use
**Problem**: `Port 3000 is already in use`
**Solution**: Kill the process or use a different port:
```bash
# Kill process on port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# Or run on different port
npm run dev -- --port 3001
```

### TypeScript Errors
**Problem**: Type errors in IDE
**Solution**: Ensure your IDE has TypeScript support enabled

## 🌐 Accessing the Deployed Application

Once you push your code to the `main` branch on GitHub, the application will be automatically deployed to GitHub Pages at:
`https://[your-username].github.io/seng-cicd-demo/#/`

You can monitor the deployment process in the **Actions** tab of your GitHub repository.

### Why HashRouter?

This project uses **HashRouter** instead of **BrowserRouter** because:
- ✅ **No server configuration needed** - Works with any static hosting
- ✅ **Page refresh works** - Hash routes don't require server-side handling
- ✅ **Simple deployment** - Perfect for GitHub Pages and other static hosts
- ✅ **Reliable routing** - Consistent behavior across different environments

URLs will look like: `https://example.com/#/about` instead of `https://example.com/about`

## 📚 Next Steps

1. **Experiment**: Try modifying different parts of the application
2. **Collaborate**: Work in teams using Git branches
3. **Deploy**: Try deploying to platforms like Vercel or Netlify
4. **Learn More**: Explore React Router, state management libraries, and testing frameworks
5. **Monitor Deployments**: Watch the GitHub Actions workflows in action

## 🎓 Assignment Ideas

### Individual Projects
- Add user authentication (mock)
- Implement dark/light theme toggle
- Create a todo list with local storage
- Add data visualization with charts

### Team Projects
- Build a collaborative note-taking app
- Create a project management dashboard
- Implement real-time features (mock WebSocket)
- Add internationalization (i18n)

## 📞 Getting Help

1. **Read the Error**: Error messages usually contain helpful information
2. **Check the Console**: Browser developer tools show runtime errors
3. **Search Documentation**: React, TypeScript, and Vite docs are excellent
4. **Ask Questions**: Use class forums or office hours
5. **Debug Step by Step**: Use `console.log()` and browser debugger

---

**Happy Coding! 🎉**

*Remember: The best way to learn is by doing. Don't be afraid to break things and experiment!*
