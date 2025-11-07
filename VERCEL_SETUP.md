# Vercel Deployment - Complete Guide

## ✅ What's Already Done

Your project is configured with:
- `/api` folder with serverless functions (contact, job-apply, newsletter)
- `vercel.json` with correct build settings
- Frontend configured to use `/api` endpoints in production
- Email service using Nodemailer

## 🚀 Deployment Steps

### 1. Set Environment Variables in Vercel

**CRITICAL:** Before deploying, add these in Vercel Dashboard:

```
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_16_character_app_password
```

**Get Gmail App Password:**
1. Go to https://myaccount.google.com/security
2. Enable 2-Step Verification
3. Search "App passwords" → Generate for "Mail"
4. Copy the 16-character password

### 2. Deploy to Vercel

```bash
# Login
vercel login

# Deploy (first time)
vercel

# Deploy to production
vercel --prod
```

### 3. Add Environment Variables via CLI (Alternative)

```bash
vercel env add EMAIL_USER
# Paste your email when prompted

vercel env add EMAIL_PASS
# Paste your app password when prompted
```

## 📊 View Logs

### Real-time Logs:
```bash
vercel logs --follow
```

### Specific Deployment Logs:
```bash
vercel logs [deployment-url]
```

### Via Dashboard:
1. Go to https://vercel.com/dashboard
2. Select your project
3. Click "Deployments" → Select deployment
4. Click "Functions" tab → View logs for each API endpoint

## 🧪 Test Email Functionality

After deployment, test each endpoint:

### Test Contact Form:
```bash
curl -X POST https://your-domain.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "message": "Test message"
  }'
```

### Test Newsletter:
```bash
curl -X POST https://your-domain.vercel.app/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'
```

## 📁 What Gets Deployed

✅ **Deployed:**
- `/Frontend` → Static site
- `/api` → Serverless functions
- `vercel.json` → Configuration

❌ **Ignored (stays local):**
- `/backend` → Express server (not needed)
- `node_modules`
- `.env` files

## 🔍 Troubleshooting

### Email Not Sending:

**Check logs:**
```bash
vercel logs --follow
```

**Common issues:**
- Wrong EMAIL_USER or EMAIL_PASS in Vercel env vars
- Using regular password instead of App Password
- Gmail blocking less secure apps (use App Password)

### View Function Logs:
1. Vercel Dashboard → Your Project
2. Deployments → Latest deployment
3. Functions tab → Click on function name
4. View real-time logs and errors

### Test Locally:
```bash
# Install Vercel CLI
npm i -g vercel

# Run locally with serverless functions
vercel dev

# Frontend will be on http://localhost:3000
# API will be on http://localhost:3000/api/*
```

## 📧 Email Recipients

Current setup sends to: **kasiparimal@gmail.com**

To change, edit:
- `/api/contact.js` (line 30)
- `/api/job-apply.js` (line 48)

## ⚠️ Important Notes

1. **Backend folder is ignored** - Your Express backend won't be deployed but stays in your repo
2. **No database** - All data sent via email only
3. **Newsletter** - Returns success but doesn't store (add email service if needed)
4. **File uploads** - Resumes attached to emails (max 4.5MB on Vercel)
5. **Logs retention** - Vercel keeps logs for 24 hours (free plan)

## 🎯 Production Checklist

- [ ] Environment variables set in Vercel
- [ ] Gmail App Password generated
- [ ] Test deployment with `vercel`
- [ ] Test all forms (contact, job apply, newsletter)
- [ ] Check email delivery
- [ ] Verify logs are accessible
- [ ] Deploy to production with `vercel --prod`
- [ ] Test production URLs
- [ ] Monitor logs for errors

## 📱 Monitor Your Deployment

**Dashboard:** https://vercel.com/dashboard
**Logs:** `vercel logs --follow`
**Analytics:** Vercel Dashboard → Your Project → Analytics
