# Development Guide

## Quick Start Commands

### Frontend Development
```bash
cd Frontend
npm run dev          # Start development server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Backend Development
```bash
cd backend
npm run dev          # Start with nodemon (auto-reload)
npm start            # Start production server
```

## Project Structure Changes

✅ **Completed Reorganization:**
- Frontend files moved to `Frontend/` directory
- Backend remains in `backend/` directory
- GitHub Actions workflow updated to build from `Frontend/`
- Root-level README created with project overview

## Working with the New Structure

### Running Both Servers

**Terminal 1 - Frontend:**
```bash
cd Frontend
npm run dev
```

**Terminal 2 - Backend:**
```bash
cd backend
npm run dev
```

### Making Changes

- **Frontend code**: Work in `Frontend/src/`
- **Backend code**: Work in `backend/`
- **Static assets**: Place in `Frontend/public/`

### Building for Production

```bash
cd Frontend
npm run build
# Output will be in Frontend/dist/
```

### Deployment

The GitHub Actions workflow automatically deploys from the `Frontend/` directory when you push to the main branch.

## Important Notes

- Always run `npm install` from within the respective directory (Frontend/ or backend/)
- Frontend runs on port 5173 by default
- Backend runs on port 3000 by default (or as configured in .env)
- Make sure both servers are running for full functionality
