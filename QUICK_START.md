# Quick Start - Deploy to Vercel

## TL;DR

```bash
# 1. Install dependencies
cd Frontend && npm install
cd ../api && npm install

# 2. Install Vercel CLI
npm i -g vercel

# 3. Deploy
cd ..
vercel --prod
```

Then set environment variables in Vercel dashboard:
- `EMAIL_USER` = your Gmail
- `EMAIL_PASS` = your Gmail App Password

---

## What Changed?

### ❌ Removed
- MongoDB database
- Azure Blob Storage
- Express backend server

### ✅ Added
- Vercel serverless functions in `/api`
- Direct email attachments for resumes
- Simplified architecture

---

## Key Files

| File | Purpose |
|------|---------|
| `/api/contact.js` | Contact form handler |
| `/api/job-apply.js` | Job application handler |
| `/api/newsletter.js` | Newsletter handler |
| `/vercel.json` | Vercel configuration |
| `/VERCEL_DEPLOYMENT.md` | Full deployment guide |
| `/DEPLOYMENT_CHECKLIST.md` | Step-by-step checklist |

---

## Email Setup (Important!)

1. Go to https://myaccount.google.com/security
2. Enable **2-Step Verification**
3. Search for "App passwords"
4. Generate password for "Mail"
5. Use this 16-character password as `EMAIL_PASS`

---

## Local Development

```bash
# Frontend (port 5173)
cd Frontend
npm run dev

# API (port 3000)
vercel dev
```

---

## Production URLs

After deployment:
- Frontend: `https://your-project.vercel.app`
- API: `https://your-project.vercel.app/api/*`

---

## Need Help?

1. Check `/VERCEL_DEPLOYMENT.md` for detailed guide
2. Check `/DEPLOYMENT_CHECKLIST.md` for step-by-step
3. Check `/CHANGES_SUMMARY.md` for what changed
4. Check Vercel function logs for errors

---

## Current Email Recipients

- Contact form → kasiparimal@gmail.com
- Job applications → kasiparimal@gmail.com
- Applicant confirmation → applicant's email

To change, edit:
- `/api/contact.js` (line 27)
- `/api/job-apply.js` (line 44)
