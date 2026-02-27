# Grant Portal Deployment Guide

## 1. Vercel (Recommended)
The easiest way to deploy Next.js apps.
1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and sign up/login.
3. Click "Add New..." -> "Project".
4. Import your GitHub repository.
5. Click "Deploy".
   - Vercel automatically detects Next.js.
   - It provides a free `*.vercel.app` domain.
   - Future pushes to `main` auto-deploy.

## 2. Manual Hosting (VPS/Server)
If you need to host on your own server (e.g., AWS EC2, on-premise).

### Build
Run this on your server to create an optimized production build:
```bash
npm run build
```
This creates a `.next` folder with the built application.

### Start
Start the production server:
```bash
npm start
```
The app will run on port 3000 by default.

### Process Management with PM2
To keep the app running in the background:
1. Install PM2: `npm install -g pm2`
2. Start: `pm2 start npm --name "grant-portal" -- start`
3. Stop: `pm2 stop grant-portal`
