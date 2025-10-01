# 🚀 **Hybrid Hosting Solution: Hostinger + Railway**

## 🎯 **Architecture Overview**
- **Frontend**: Static files → Hostinger (your domain)
- **Backend**: API routes → Railway (free Node.js hosting)
- **Email**: Resend service

## 📁 **Step 1: Create Backend Project**

### **Create a new folder for backend:**
```bash
mkdir maharashtra-agro-backend
cd maharashtra-agro-backend
```

### **Initialize backend project:**
```bash
npm init -y
npm install next@15.4.5 react@19.1.0 react-dom@19.1.0 resend@6.0.1
```

### **Create backend structure:**
```
maharashtra-agro-backend/
├── pages/
│   └── api/
│       └── send-dealer-email.js
├── package.json
├── next.config.js
└── .env.local
```

### **Backend package.json:**
```json
{
  "name": "maharashtra-agro-backend",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev -p 3001",
    "build": "next build",
    "start": "next start -p 3001"
  },
  "dependencies": {
    "next": "15.4.5",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "resend": "6.0.1"
  }
}
```

### **Backend next.config.js:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone'
};

module.exports = nextConfig;
```

### **Backend API route (pages/api/send-dealer-email.js):**
```javascript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, phone, address, existingBusiness, turnover, areaInterested } = req.body;

    // Validate required fields
    if (!name || !phone || !address || !existingBusiness || !turnover || !areaInterested) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Maharashtra Agro <onboarding@resend.dev>',
      to: ['yashnathani455@gmail.com'],
      subject: `New Dealer Application - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #339d9e; border-bottom: 2px solid #339d9e; padding-bottom: 10px;">
            New Dealer Application Received
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Applicant Details:</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555; width: 150px;">Full Name:</td>
                <td style="padding: 8px 0; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone Number:</td>
                <td style="padding: 8px 0; color: #333;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Address:</td>
                <td style="padding: 8px 0; color: #333;">${address}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Existing Business:</td>
                <td style="padding: 8px 0; color: #333;">${existingBusiness}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Annual Turnover:</td>
                <td style="padding: 8px 0; color: #333;">${turnover}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555;">Area Interested:</td>
                <td style="padding: 8px 0; color: #333;">${areaInterested}</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; border-left: 4px solid #4caf50;">
            <p style="margin: 0; color: #2e7d32;">
              <strong>Application submitted on:</strong> ${new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })}
            </p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #fff3cd; border-radius: 8px; border-left: 4px solid #ffc107;">
            <p style="margin: 0; color: #856404;">
              <strong>Next Steps:</strong> Please review this application and contact the applicant within 2-3 business days.
            </p>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to send email. Please try again.'
      });
    }

    return res.json({
      success: true,
      message: 'Application submitted successfully! Check your email for confirmation.'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send application. Please try again.'
    });
  }
}
```

## 🚀 **Step 2: Deploy Backend to Railway**

### **1. Sign up for Railway:**
- Go to [railway.app](https://railway.app)
- Sign up with GitHub
- Connect your GitHub account

### **2. Create new project:**
- Click "New Project"
- Select "Deploy from GitHub repo"
- Choose your backend repository

### **3. Set environment variables:**
- In Railway dashboard, go to "Variables"
- Add: `RESEND_API_KEY=your_resend_api_key`

### **4. Deploy:**
- Railway will automatically deploy
- Get your deployment URL (e.g., `https://maharashtra-agro-backend-production.up.railway.app`)

## 🌐 **Step 3: Deploy Frontend to Hostinger**

### **1. Build frontend:**
```bash
cd maharashtra-agro-frontend
npm run build
```

### **2. Upload to Hostinger:**
- Go to Hostinger File Manager
- Navigate to `public_html`
- Upload all contents from `out` folder

### **3. Update API URL:**
- Replace `YOUR_BACKEND_URL.railway.app` in your frontend code with actual Railway URL

## 🔗 **Step 4: Connect Custom Domain**

### **Option A: Domain points to Hostinger (Frontend)**
- Set DNS A record to Hostinger IP
- Backend API calls go to Railway

### **Option B: Domain points to Railway (Full Stack)**
- Set DNS A record to Railway IP
- Railway serves both frontend and backend

## 💰 **Cost Breakdown:**
- **Hostinger**: $2-5/month (your current plan)
- **Railway**: $5/month (after free tier)
- **Resend**: Free (100 emails/month)
- **Total**: ~$7-10/month

## ✅ **Benefits:**
- ✅ Use your existing Hostinger domain
- ✅ Resend email functionality works
- ✅ Professional email delivery
- ✅ Scalable architecture
- ✅ Free SSL certificates

## 🧪 **Testing:**
1. Deploy backend to Railway
2. Update frontend with Railway URL
3. Deploy frontend to Hostinger
4. Test contact form
5. Check email delivery

This solution gives you the best of both worlds: your Hostinger domain with full server-side functionality!
