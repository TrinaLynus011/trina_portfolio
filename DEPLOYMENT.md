# Deployment Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   Opens [http://localhost:3000](http://localhost:3000)

3. **Build for Production**
   ```bash
   npm run build
   ```

## Deployment Options

### Option 1: Netlify (Recommended)

1. **Drag & Drop Deployment**
   - Run `npm run build`
   - Drag the `build` folder to [netlify.com/drop](https://netlify.com/drop)
   - Your site is live instantly!

2. **Git-based Deployment**
   - Push code to GitHub
   - Connect repository to Netlify
   - Build settings are configured in `netlify.toml`

### Option 2: Vercel

1. **CLI Deployment**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Git-based Deployment**
   - Push code to GitHub
   - Import project on [vercel.com](https://vercel.com)
   - Auto-deploys on every push

### Option 3: GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## Environment Variables

No environment variables required for basic deployment.

## Custom Domain

1. **Netlify**: Add custom domain in site settings
2. **Vercel**: Add domain in project settings
3. **GitHub Pages**: Add CNAME file to public folder

## Performance Optimization

The build is already optimized with:
- Code splitting
- Asset optimization
- Gzip compression
- Tree shaking

## SEO Configuration

- Meta tags configured in `public/index.html`
- Semantic HTML structure
- Proper heading hierarchy
- Alt tags for images

## Analytics (Optional)

Add Google Analytics by including the tracking code in `public/index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## Troubleshooting

### Build Errors
- Ensure Node.js version 14+
- Clear node_modules: `rm -rf node_modules && npm install`
- Check for TypeScript errors if using TS

### Deployment Issues
- Verify build folder exists after `npm run build`
- Check netlify.toml configuration
- Ensure all dependencies are in package.json

### Performance Issues
- Run `npm run analyze` to check bundle size
- Optimize images before adding to project
- Consider lazy loading for large components

---

**Ready to deploy!** Your portfolio is production-ready and optimized for performance.