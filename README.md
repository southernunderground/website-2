# Southern Underground Construction Company Website

Full-stack web application for Southern Underground Construction Company.

## Project Structure

```
project 2/
├── Frontend/              # React + TypeScript + Vite frontend
│   ├── src/              # Source code
│   ├── public/           # Static assets
│   ├── package.json      # Frontend dependencies
│   └── vite.config.ts    # Vite configuration
├── backend/              # Node.js + Express backend
│   ├── controllers/      # Route controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   └── package.json     # Backend dependencies
└── README.md            # This file
```

## Getting Started

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

The backend will run on `http://localhost:3000` (or configured port)

### Environment Variables

#### Frontend
No environment variables required for local development.

#### Backend
Create a `.env` file in the `backend/` directory:
```
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
PORT=3000
```

## Development

- **Frontend**: React 18 with TypeScript, Vite, TailwindCSS, React Router
- **Backend**: Node.js, Express, MongoDB, Nodemailer

## Deployment

The project is configured for Azure Static Web Apps deployment via GitHub Actions.

## Documentation

- Frontend documentation: See `Frontend/QUICK_START.md`
- Performance guide: See `Frontend/PERFORMANCE_IMPROVEMENTS.md`
- Image optimization: See `Frontend/IMAGE_OPTIMIZATION_GUIDE.md`
