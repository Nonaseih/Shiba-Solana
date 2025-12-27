# 🚀 Deployment Guide - Shiba Solana

This guide covers deploying your Shiba Solana presale website to various hosting platforms.

## 📋 Prerequisites

- Node.js 18+ installed
- Git repository set up
- Production build tested locally (`npm run build`)

## 🌐 Deployment Options

### 1. Vercel (Recommended - Free)

**Fastest and easiest deployment for React/Vite apps**

#### Option A: GitHub Integration (Automatic)
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your `Shiba-Solana` repository
5. Configure settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click "Deploy"

Your site will be live at: `https://shiba-solana.vercel.app` (or your custom domain)

#### Option B: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd c:\Users\fortu\Desktop\SolanaShiba
vercel

# Production deployment
vercel --prod
```

---

### 2. Netlify (Free)

#### Option A: Drag & Drop
1. Build locally: `npm run build`
2. Go to [netlify.com/drop](https://netlify.com/drop)
3. Drag the `dist` folder to the drop zone
4. Get instant deployment URL

#### Option B: GitHub Integration
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click "Deploy site"

#### Option C: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

---

### 3. GitHub Pages (Free)

1. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Update `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  },
  "homepage": "https://nonaseih.github.io/Shiba-Solana"
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/Shiba-Solana/'
})
```

4. Deploy:
```bash
npm run deploy
```

---

### 4. Cloudflare Pages (Free)

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Click "Create a project"
3. Connect your GitHub repository
4. Configure:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click "Save and Deploy"

---

### 5. Custom VPS (DigitalOcean, AWS, etc.)

#### Using Nginx

1. Build the app:
```bash
npm run build
```

2. Upload `dist` folder to your server:
```bash
scp -r dist/* user@your-server:/var/www/shiba-solana
```

3. Configure Nginx:
```nginx
server {
    listen 80;
    server_name shibasolana.com;
    root /var/www/shiba-solana;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

4. Restart Nginx:
```bash
sudo systemctl restart nginx
```

---

## 🔧 Build Optimization

### Before Deploying

1. **Optimize images:**
```bash
# Compress logo and assets
npm install -g imagemin-cli
imagemin public/assets/* --out-dir=public/assets
```

2. **Test production build:**
```bash
npm run build
npm run preview
```

3. **Check for errors:**
```bash
npm run lint
```

### Environment Variables

If using Web3/Phantom wallet integration:

Create `.env` file:
```env
VITE_SOLANA_NETWORK=mainnet-beta
VITE_CONTRACT_ADDRESS=your_contract_address
```

Update components to use:
```javascript
const contractAddress = import.meta.env.VITE_CONTRACT_ADDRESS;
```

---

## 🌍 Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records:
   - Type: `A` Record
   - Name: `@`
   - Value: `76.76.21.21`

### Netlify
1. Go to Site Settings → Domain management
2. Add custom domain
3. Update DNS:
   - Type: `CNAME`
   - Name: `www`
   - Value: `your-site.netlify.app`

### Cloudflare Pages
1. Navigate to Custom Domains
2. Add domain
3. Cloudflare auto-configures DNS

---

## 📊 Post-Deployment

### 1. Test Your Site
- ✅ Homepage loads
- ✅ Navigation works
- ✅ Presale calculator functions
- ✅ Animations play smoothly
- ✅ Mobile responsive
- ✅ Forms submit properly

### 2. Add Analytics
**Google Analytics:**
```html
<!-- In index.html <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

### 3. SEO Optimization
Update `index.html`:
```html
<meta name="description" content="Join Shiba Solana presale - Get 30% bonus tokens!">
<meta property="og:title" content="Shiba Solana - DeFi Utility Token">
<meta property="og:image" content="/assets/og-image.png">
<meta name="twitter:card" content="summary_large_image">
```

### 4. SSL Certificate
All recommended platforms provide free SSL automatically.

---

## 🔄 Continuous Deployment

Once set up, your site auto-deploys when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Update presale features"
git push origin main

# Automatic deployment triggers!
```

---

## 🆘 Troubleshooting

### Build fails
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version: `node --version` (should be 18+)

### Assets not loading
- Verify `base` path in `vite.config.js`
- Use absolute paths: `/assets/logo.png` not `./assets/logo.png`

### Routing issues
- Ensure hosting platform supports SPA routing
- Check `_redirects` or equivalent configuration

---

## 📞 Need Help?

- **Vercel Issues:** [vercel.com/docs](https://vercel.com/docs)
- **Netlify Support:** [docs.netlify.com](https://docs.netlify.com)
- **GitHub:** Open an issue in your repository

---

**🎉 Your Shiba Solana presale is now live!**

Share your deployment URL and let the presale begin! 🚀
