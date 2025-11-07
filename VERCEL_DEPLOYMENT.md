# Vercel Deployment Guide

## Changes Made

### Removed:
- ❌ MongoDB database and all models
- ❌ Azure Blob Storage for resume uploads
- ❌ Express backend server
- ❌ Mongoose dependencies

### Added:
- ✅ Vercel Serverless Functions in `/api` folder
- ✅ Direct email attachments for resumes
- ✅ Simplified contact and newsletter endpoints

## Deployment Steps

### 1. Install Vercel CLI
```bash
npm i -g vercel
```

### 2. Install Dependencies
```bash
# Frontend dependencies
cd Frontend
npm install

# API dependencies
cd ../api
npm install
```

### 3. Set Environment Variables in Vercel

Go to your Vercel project settings and add:

```
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
```

**Important:** Use Gmail App Password, not your regular password:
1. Go to Google Account → Security
2. Enable 2-Step Verification
3. Generate App Password for "Mail"
4. Use that 16-character password

### 4. Deploy to Vercel

```bash
# From project root
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N** (first time)
- Project name? **southern-underground** (or your choice)
- In which directory is your code located? **./**
- Want to override settings? **N**

### 5. Production Deployment

```bash
vercel --prod
```

## API Endpoints

After deployment, your API will be available at:

- `https://your-domain.vercel.app/api/contact` - Contact form
- `https://your-domain.vercel.app/api/job-apply` - Job applications
- `https://your-domain.vercel.app/api/newsletter` - Newsletter subscription

## Local Development

### Frontend:
```bash
cd Frontend
npm run dev
```
Runs on `http://localhost:5173`

### API (for testing):
```bash
vercel dev
```
Runs on `http://localhost:3000`

## Email Configuration

The application uses Nodemailer with Gmail. Emails are sent to:
- **Contact/Quote requests:** kasiparimal@gmail.com
- **Job applications:** kasiparimal@gmail.com (with resume attached)
- **Applicant confirmation:** Sent to applicant's email

To change recipient email, edit the files in `/api` folder.

## What Works Without Database

✅ **Contact Form** - Sends email directly
✅ **Job Applications** - Sends email with resume attachment
✅ **Newsletter** - Returns success (no storage)

## Limitations

- Newsletter subscriptions are not stored (returns success only)
- No admin panel to view submissions
- All data is sent via email only

## Troubleshooting

### Email not sending:
- Verify EMAIL_USER and EMAIL_PASS in Vercel environment variables
- Check Gmail App Password is correct
- Check Vercel function logs

### File upload issues:
- Max file size: 10MB
- Allowed formats: PDF, DOC, DOCX
- Vercel has 4.5MB body size limit for serverless functions

### Build fails:
- Run `cd Frontend && npm run build` locally first
- Check for TypeScript errors
- Verify all dependencies are installed
