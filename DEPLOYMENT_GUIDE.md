# Complete Guide: Deploying Full-Stack Application to Azure

## Table of Contents
1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Architecture Overview](#architecture-overview)
4. [Step-by-Step Deployment](#step-by-step-deployment)
5. [Testing & Verification](#testing--verification)
6. [Troubleshooting](#troubleshooting)
7. [Cost Breakdown](#cost-breakdown)

---

## Project Overview

**Application Name:** Southern Underground Construction Company Website

**Technology Stack:**
- **Frontend:** React 18 + TypeScript + Vite + TailwindCSS
- **Backend:** Node.js + Express.js
- **Database:** MongoDB Atlas
- **File Storage:** Azure Blob Storage
- **Email Service:** Nodemailer (Gmail SMTP)

**Features:**
- Contact form submissions
- Job application system with resume uploads
- Newsletter subscriptions
- Email notifications

---

## Prerequisites

### Required Accounts
1. **Azure Account** (Free tier available)
   - Sign up at: https://azure.microsoft.com/free/

2. **MongoDB Atlas Account** (Free tier available)
   - Sign up at: https://www.mongodb.com/cloud/atlas/register

3. **GitHub Account**
   - Sign up at: https://github.com/join

4. **Gmail Account** (for email service)
   - Create app password at: https://myaccount.google.com/apppasswords

### Required Tools
1. **Azure CLI**
   ```bash
   # macOS
   brew install azure-cli
   
   # Windows
   # Download from: https://aka.ms/installazurecliwindows
   ```

2. **Git**
   ```bash
   # macOS
   brew install git
   
   # Windows
   # Download from: https://git-scm.com/download/win
   ```

3. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                         USER BROWSER                         │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              Azure Static Web Apps (Frontend)                │
│  • React + TypeScript + Vite                                 │
│  • URL: https://salmon-meadow-xxx.azurestaticapps.net      │
│  • Cost: FREE                                                │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ HTTPS API Calls
                         ▼
┌─────────────────────────────────────────────────────────────┐
│           Azure Container Apps (Backend)                     │
│  • Node.js + Express                                         │
│  • URL: https://southern-underground-backend-xxx.io         │
│  • Cost: FREE (Consumption plan)                             │
└────┬────────────────────┬──────────────────────┬────────────┘
     │                    │                      │
     │                    │                      │
     ▼                    ▼                      ▼
┌─────────┐      ┌──────────────┐      ┌─────────────────┐
│ MongoDB │      │ Azure Blob   │      │ Gmail SMTP      │
│ Atlas   │      │ Storage      │      │ (Nodemailer)    │
│ (FREE)  │      │ (~$1-2/mo)   │      │ (FREE)          │
└─────────┘      └──────────────┘      └─────────────────┘
```

---

## Step-by-Step Deployment

### PHASE 1: Database Setup (MongoDB Atlas)

#### Step 1.1: Create MongoDB Cluster

1. Go to https://cloud.mongodb.com/
2. Click **"Sign Up"** or **"Sign In"**
3. Click **"Build a Database"**
4. Select **"M0 FREE"** tier
5. Choose **Cloud Provider:** AWS or Azure
6. Choose **Region:** Closest to East US (e.g., us-east-1)
7. Click **"Create Cluster"**

#### Step 1.2: Create Database User

1. In MongoDB Atlas, go to **"Database Access"** (left sidebar)
2. Click **"Add New Database User"**
3. Choose **"Password"** authentication
4. Username: `kasiparimal` (or your choice)
5. Password: Create a strong password (save it!)
6. Database User Privileges: **"Read and write to any database"**
7. Click **"Add User"**

#### Step 1.3: Configure Network Access

1. Go to **"Network Access"** (left sidebar)
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** (for development)
   - IP Address: `0.0.0.0/0`
4. Click **"Confirm"**

#### Step 1.4: Get Connection String

1. Go to **"Database"** (left sidebar)
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Copy the connection string:
   ```
   mongodb+srv://kasiparimal:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
5. Replace `<password>` with your actual password
6. Add database name: `/southernunderground` before the `?`
   ```
   mongodb+srv://kasiparimal:YourPassword@cluster0.xxxxx.mongodb.net/southernunderground?retryWrites=true&w=majority
   ```

**Important:** If your password contains special characters like `@`, URL-encode them:
- `@` becomes `%40`
- `#` becomes `%23`
- `$` becomes `%24`

---

### PHASE 2: Backend Deployment (Azure Container Apps)

#### Step 2.1: Login to Azure

```bash
# Login to Azure
az login

# Verify login
az account show
```

#### Step 2.2: Register Required Providers

```bash
# Register Container Registry provider
az provider register --namespace Microsoft.ContainerRegistry

# Check registration status (wait until "Registered")
az provider show --namespace Microsoft.ContainerRegistry --query "registrationState"
```

#### Step 2.3: Prepare Backend Code

**File: `backend/server.js`**

Ensure your server.js has:
```javascript
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// IMPORTANT: Configure CORS for your frontend
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://your-frontend-url.azurestaticapps.net'
  ],
  credentials: false
}));

// MongoDB connection
let mongoReady = null;
function connectMongo() {
  if (!mongoReady) mongoReady = mongoose.connect(process.env.MONGO_URI);
  return mongoReady;
}

// Import routes
const contact = require('./routes/contact');
const newsletter = require('./routes/newsletter');
const jobApp = require('./routes/jobApplication');

// Apply routes
app.use('/api/contact', async (req,res,next)=>{await connectMongo();next();}, contact);
app.use('/api/newsletter', async (req,res,next)=>{await connectMongo();next();}, newsletter);
app.use('/api/job', async (req,res,next)=>{await connectMongo();next();}, jobApp);

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
```

#### Step 2.4: Deploy Backend to Azure Container Apps

```bash
# Navigate to project root
cd /path/to/your/project

# Deploy backend
az containerapp up \
  --name southern-underground-backend \
  --resource-group southern_underground \
  --location eastus \
  --source ./backend \
  --target-port 5050 \
  --ingress external
```

**Wait 2-3 minutes for deployment to complete.**

You'll receive output like:
```
Your app is running at: https://southern-underground-backend-xxx.eastus.azurecontainerapps.io
```

**Save this URL!** You'll need it for frontend configuration.

#### Step 2.5: Configure Backend Environment Variables

```bash
az containerapp update \
  --name southern-underground-backend \
  --resource-group southern_underground \
  --set-env-vars \
    "MONGO_URI=mongodb+srv://user:pass@cluster0.mongodb.net/southernunderground?retryWrites=true&w=majority" \
    "EMAIL_USER=your-email@gmail.com" \
    "EMAIL_PASS=your-app-password" \
    "AZURE_STORAGE_ACCOUNT_NAME=your-storage-account" \
    "AZURE_STORAGE_ACCOUNT_KEY=your-storage-key" \
    "AZURE_CONTAINER_NAME=resumes" \
    "PORT=5050"
```

**Replace with your actual values!**

#### Step 2.6: Test Backend

```bash
# Test if backend is running
curl https://your-backend-url.azurecontainerapps.io

# Expected response: "Cannot GET /" (this is normal - no root route defined)

# Test API endpoint
curl -X POST https://your-backend-url.azurecontainerapps.io/api/contact/submit \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","phone":"1234567890","service":"Test","message":"Test"}'

# Expected response: {"msg":"Thank you! Your request has been submitted."}
```

---

### PHASE 3: Frontend Configuration

#### Step 3.1: Create API Configuration File

**File: `Frontend/src/config/api.ts`**

```typescript
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5050';
```

#### Step 3.2: Update Frontend API Calls

**File: `Frontend/src/pages/Contact.tsx`**

```typescript
import { API_URL } from '../config/api';

// In handleSubmit function:
const res = await fetch(`${API_URL}/api/contact/submit`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

**File: `Frontend/src/pages/Careers.tsx`**

```typescript
import { API_URL } from '../config/api';

// In handleApplicationSubmit function:
const res = await fetch(`${API_URL}/api/job/apply`, { 
  method: 'POST', 
  body: payload 
});
```

#### Step 3.3: Create Production Environment File

**File: `Frontend/.env.production`**

```env
VITE_API_URL=https://your-backend-url.azurecontainerapps.io
```

**Replace with your actual backend URL from Step 2.4!**

#### Step 3.4: Update GitHub Actions Workflow

**File: `.github/workflows/azure-static-web-apps-xxx.yml`**

Add environment variable to the build step:

```yaml
- name: Build And Deploy
  id: builddeploy
  uses: Azure/static-web-apps-deploy@v1
  env:
    VITE_API_URL: https://your-backend-url.azurecontainerapps.io
  with:
    azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN_XXX }}
    repo_token: ${{ secrets.GITHUB_TOKEN }}
    action: "upload"
    app_location: "Frontend"
    api_location: ""
    output_location: "dist"
```

---

### PHASE 4: Frontend Deployment (Azure Static Web Apps)

#### Step 4.1: Commit and Push Changes

```bash
# Navigate to project root
cd /path/to/your/project

# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Configure frontend to connect to Azure backend"

# Push to GitHub
git push origin main
```

#### Step 4.2: Monitor Deployment

1. Go to your GitHub repository
2. Click **"Actions"** tab
3. Watch the workflow run (takes 2-3 minutes)
4. Wait for green checkmark ✓

#### Step 4.3: Verify Frontend URL

Your frontend should be accessible at:
```
https://your-app-name.azurestaticapps.net
```

Find this URL in:
- Azure Portal → Static Web Apps → Your app → Overview
- Or in GitHub Actions workflow output

---

## Testing & Verification

### Test 1: Contact Form

1. Visit: `https://your-frontend-url.azurestaticapps.net`
2. Navigate to **Contact** page
3. Fill out the form
4. Click **Submit**
5. Expected: Success message appears
6. Check: Email received at `info@suofla.com`
7. Verify in MongoDB:
   ```bash
   mongosh "your-connection-string"
   db.contactsubmissions.find().pretty()
   ```

### Test 2: Job Application

1. Navigate to **Careers** page
2. Fill out application form
3. Upload a resume (PDF/DOC/DOCX)
4. Click **Submit Application**
5. Expected: Success message appears
6. Check: Email received at `career@suofla.com` with resume link
7. Check: Applicant receives confirmation email
8. Verify in Azure Blob Storage:
   - Azure Portal → Storage Account → Containers → resumes

### Test 3: Newsletter Subscription

1. Find newsletter signup form
2. Enter email address
3. Click **Subscribe**
4. Verify in MongoDB:
   ```bash
   db.newslettersubscribers.find().pretty()
   ```

### Test 4: Browser Console Check

1. Open browser DevTools (F12)
2. Go to **Network** tab
3. Submit a form
4. Check API request:
   - URL should be: `https://your-backend-url.azurecontainerapps.io/api/...`
   - Status should be: `200 OK`
   - No CORS errors

---

## Troubleshooting

### Issue 1: CORS Error

**Error:**
```
Access to fetch at 'https://backend-url' from origin 'https://frontend-url' 
has been blocked by CORS policy
```

**Solution:**
1. Check `backend/server.js` CORS configuration:
   ```javascript
   app.use(cors({
     origin: ['https://your-exact-frontend-url.azurestaticapps.net'],
     credentials: false
   }));
   ```
2. Ensure NO trailing slash in URL
3. Redeploy backend:
   ```bash
   az containerapp up --name southern-underground-backend ...
   ```

### Issue 2: Backend Not Starting

**Error in logs:**
```
MODULE_NOT_FOUND
```

**Solution:**
1. Check `backend/server.js` - ensure all required files exist
2. Check `backend/package.json` - ensure all dependencies are listed
3. Remove any non-existent route imports

### Issue 3: Frontend Still Using Localhost

**Error:**
```
POST http://localhost:5050/api/... net::ERR_CONNECTION_REFUSED
```

**Solution:**
1. Verify `.env.production` file exists in `Frontend/` folder
2. Verify GitHub Actions workflow has `env: VITE_API_URL: ...`
3. Commit and push changes
4. Wait for GitHub Actions to complete
5. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### Issue 4: MongoDB Connection Failed

**Error:**
```
MongoServerError: bad auth
```

**Solution:**
1. Verify MongoDB Atlas username and password
2. Check if password has special characters - URL encode them
3. Verify database name in connection string
4. Check Network Access in MongoDB Atlas (allow 0.0.0.0/0)

### Issue 5: Email Not Sending

**Error:**
```
Invalid login: 535-5.7.8 Username and Password not accepted
```

**Solution:**
1. Use Gmail App Password, not regular password
2. Generate at: https://myaccount.google.com/apppasswords
3. Update `EMAIL_PASS` environment variable in Azure
4. Redeploy backend

---

## Cost Breakdown

### Monthly Costs

| Service | Tier | Cost |
|---------|------|------|
| Azure Static Web Apps | Free | $0 |
| Azure Container Apps | Consumption (Free tier) | $0 |
| MongoDB Atlas | M0 Free | $0 |
| Azure Blob Storage | Standard | ~$1-2 |
| Gmail SMTP | Free | $0 |
| **TOTAL** | | **~$1-2/month** |

### Free Tier Limits

**Azure Static Web Apps:**
- 100 GB bandwidth/month
- Custom domains: 2
- Build minutes: 300/month

**Azure Container Apps:**
- 180,000 vCPU-seconds/month
- 360,000 GiB-seconds/month
- 2 million requests/month

**MongoDB Atlas:**
- 512 MB storage
- Shared RAM
- Shared vCPU

---

## Summary Checklist

### Backend Deployment ✓
- [ ] MongoDB Atlas cluster created
- [ ] Database user created
- [ ] Network access configured (0.0.0.0/0)
- [ ] Connection string obtained
- [ ] Azure Container App deployed
- [ ] Environment variables configured
- [ ] Backend tested with curl

### Frontend Configuration ✓
- [ ] API config file created (`Frontend/src/config/api.ts`)
- [ ] Contact page updated to use API_URL
- [ ] Careers page updated to use API_URL
- [ ] `.env.production` file created
- [ ] GitHub Actions workflow updated with VITE_API_URL
- [ ] Changes committed and pushed
- [ ] GitHub Actions completed successfully

### Testing ✓
- [ ] Contact form works
- [ ] Job application works
- [ ] Resume uploads to Azure Blob Storage
- [ ] Emails received
- [ ] Data appears in MongoDB
- [ ] No CORS errors in browser console

---

## Additional Resources

### Documentation
- Azure Static Web Apps: https://docs.microsoft.com/azure/static-web-apps/
- Azure Container Apps: https://docs.microsoft.com/azure/container-apps/
- MongoDB Atlas: https://docs.atlas.mongodb.com/
- Vite Environment Variables: https://vitejs.dev/guide/env-and-mode.html

### Support
- Azure Support: https://azure.microsoft.com/support/
- MongoDB Support: https://support.mongodb.com/
- GitHub Actions: https://docs.github.com/actions

---

## Conclusion

You have successfully deployed a full-stack application to Azure with:
- ✅ React frontend on Azure Static Web Apps
- ✅ Node.js backend on Azure Container Apps
- ✅ MongoDB Atlas database
- ✅ Azure Blob Storage for file uploads
- ✅ Email notifications via Gmail
- ✅ Automatic deployments via GitHub Actions
- ✅ Total cost: ~$1-2/month

Your application is now live and accessible worldwide!

**Frontend URL:** https://your-app.azurestaticapps.net
**Backend URL:** https://your-backend.azurecontainerapps.io

---

*Document created: November 2025*
*Last updated: November 2025*
