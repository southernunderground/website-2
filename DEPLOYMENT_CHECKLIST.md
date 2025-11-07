# Vercel Deployment Checklist

## Pre-Deployment

- [ ] Install Vercel CLI: `npm i -g vercel`
- [ ] Install frontend dependencies: `cd Frontend && npm install`
- [ ] Install API dependencies: `cd api && npm install`
- [ ] Test frontend build: `cd Frontend && npm run build`

## Gmail Setup

- [ ] Go to Google Account → Security
- [ ] Enable 2-Step Verification
- [ ] Generate App Password for "Mail"
- [ ] Save the 16-character password

## Vercel Setup

- [ ] Create Vercel account at https://vercel.com
- [ ] Connect GitHub repository (optional but recommended)
- [ ] Set environment variables in Vercel dashboard:
  - `EMAIL_USER` = your_gmail@gmail.com
  - `EMAIL_PASS` = your_gmail_app_password

## Deploy

- [ ] Run `vercel` from project root
- [ ] Answer prompts (see VERCEL_DEPLOYMENT.md for details)
- [ ] Run `vercel --prod` for production deployment

## Post-Deployment Testing

- [ ] Test contact form submission
- [ ] Test job application with resume upload
- [ ] Verify emails are received at kasiparimal@gmail.com
- [ ] Verify applicant receives confirmation email
- [ ] Test on mobile devices

## Optional Updates

- [ ] Change recipient email in `/api/contact.js` (line 27)
- [ ] Change recipient email in `/api/job-apply.js` (line 44)
- [ ] Update max file size if needed (currently 10MB)
- [ ] Add custom domain in Vercel settings

## Troubleshooting

If emails don't send:
- [ ] Check Vercel function logs
- [ ] Verify EMAIL_USER and EMAIL_PASS are set correctly
- [ ] Test Gmail App Password manually
- [ ] Check Gmail "Less secure app access" settings

If build fails:
- [ ] Run `npm run build` locally in Frontend folder
- [ ] Check for TypeScript errors
- [ ] Verify all dependencies are installed

If file upload fails:
- [ ] Check file size (max 10MB)
- [ ] Verify file format (PDF, DOC, DOCX only)
- [ ] Check Vercel function logs for errors

## Success Criteria

✅ Contact form sends email
✅ Job application sends email with resume attachment
✅ Applicant receives confirmation email
✅ Frontend loads correctly
✅ All pages are accessible
✅ Mobile responsive design works

## Support

- Vercel Documentation: https://vercel.com/docs
- Nodemailer Documentation: https://nodemailer.com/
- Gmail App Passwords: https://support.google.com/accounts/answer/185833
