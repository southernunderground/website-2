# Changes Summary for Vercel Deployment

## Overview
Converted the project from MongoDB + Azure Blob Storage to a serverless architecture suitable for Vercel deployment with email notifications only.

---

## Files Created

### 1. `/api/contact.js`
- Vercel serverless function for contact form submissions
- Sends email directly using Nodemailer
- No database storage

### 2. `/api/job-apply.js`
- Vercel serverless function for job applications
- Uses `formidable` to handle file uploads
- Attaches resume directly to email (no Azure Blob Storage)
- Sends confirmation email to applicant

### 3. `/api/newsletter.js`
- Vercel serverless function for newsletter subscriptions
- Returns success without storing data (no database)

### 4. `/api/package.json`
- Dependencies for API functions:
  - `nodemailer` - Email sending
  - `formidable` - File upload handling

### 5. `/vercel.json`
- Vercel deployment configuration
- Routes API calls to serverless functions
- Serves frontend from `Frontend/dist`

### 6. `/.vercelignore`
- Excludes old backend folder from deployment

### 7. `/VERCEL_DEPLOYMENT.md`
- Complete deployment guide
- Environment variable setup
- Local development instructions

### 8. `/CHANGES_SUMMARY.md` (this file)
- Documentation of all changes

---

## Files Modified

### 1. `/Frontend/package.json`
- **Removed**: `@azure/storage-blob` dependency
- **Added**: `vercel-build` script

### 2. `/Frontend/src/config/api.ts`
- **Changed**: API URL logic to use `/api` in production, `http://localhost:3000` in development

### 3. `/Frontend/src/pages/Contact.tsx`
- **Changed**: API endpoint from `/api/contact/submit` to `/contact`

### 4. `/Frontend/src/pages/Careers.tsx`
- **Changed**: API endpoint from `/api/job/apply` to `/job-apply`

---

## Files/Features Removed (Not Deleted, Just Not Used)

### Backend Folder
- `/backend/` - Entire Express server (replaced by Vercel serverless functions)
- MongoDB models and connections
- Azure Blob Storage service
- Multer file upload middleware

### Dependencies No Longer Needed
- `mongoose` - Database ORM
- `@azure/storage-blob` - Azure Blob Storage SDK
- `express` - Web server (Vercel handles routing)
- `cors` - Not needed in serverless

---

## What Still Works

✅ **Contact Form**
- Sends email to kasiparimal@gmail.com
- All form fields captured in email

✅ **Job Applications**
- Resume attached directly to email
- Confirmation email sent to applicant
- Supports PDF, DOC, DOCX (up to 10MB)

✅ **Email Notifications**
- Uses Gmail SMTP via Nodemailer
- Requires Gmail App Password

---

## What Changed

### Resume Handling
**Before**: 
- Uploaded to Azure Blob Storage
- Generated SAS URL (7-day expiry)
- Sent URL in email

**After**:
- Temporarily stored during request
- Attached directly to email
- Deleted after sending

### Data Storage
**Before**:
- Contact submissions stored in MongoDB
- Job applications stored in MongoDB
- Newsletter subscribers stored in MongoDB

**After**:
- All data sent via email only
- No database storage
- Newsletter returns success without storing

### Architecture
**Before**:
- Express server running on port 3000/8080
- MongoDB connection required
- Azure Blob Storage required

**After**:
- Vercel serverless functions
- No database required
- No blob storage required

---

## Environment Variables Required

Set these in Vercel project settings:

```
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
```

**Note**: Use Gmail App Password, not regular password:
1. Google Account → Security
2. Enable 2-Step Verification
3. Generate App Password for "Mail"
4. Use the 16-character password

---

## Deployment Commands

```bash
# Install Vercel CLI
npm i -g vercel

# Install dependencies
cd Frontend && npm install
cd ../api && npm install

# Deploy to Vercel
cd ..
vercel --prod
```

---

## Local Development

### Frontend:
```bash
cd Frontend
npm run dev
# Runs on http://localhost:5173
```

### Test API locally:
```bash
# From project root
vercel dev
# Runs on http://localhost:3000
```

---

## API Endpoints (After Deployment)

- `POST /api/contact` - Contact form submission
- `POST /api/job-apply` - Job application with resume
- `POST /api/newsletter` - Newsletter subscription (no storage)

---

## Limitations

1. **No Admin Panel**: Can't view submissions in a dashboard
2. **No Newsletter Storage**: Subscriptions not saved anywhere
3. **Email Dependency**: All functionality depends on email working
4. **File Size Limit**: Vercel has 4.5MB body size limit for serverless functions (may need adjustment for large resumes)

---

## Benefits

1. ✅ **No Database Costs**: No MongoDB hosting needed
2. ✅ **No Storage Costs**: No Azure Blob Storage needed
3. ✅ **Serverless**: Auto-scaling, no server management
4. ✅ **Simple Deployment**: One command to deploy
5. ✅ **Email Notifications Work**: Primary requirement met

---

## Next Steps

1. Install dependencies in both `Frontend/` and `api/`
2. Set environment variables in Vercel
3. Deploy using `vercel --prod`
4. Test contact form and job application
5. Update recipient email addresses if needed (currently kasiparimal@gmail.com)
