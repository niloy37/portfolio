# Deployment Guide

## GitHub Pages Deployment

This portfolio is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Prerequisites

1. **GitHub Repository**: Make sure your portfolio is in a GitHub repository
2. **GitHub Pages**: Enable GitHub Pages in your repository settings

### Automatic Deployment Setup

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"

3. **Configure Repository Settings**:
   - The GitHub Actions workflow will automatically build and deploy your site
   - Your site will be available at: `https://your-username.github.io/portfolio`

### Manual Deployment (Alternative)

If you prefer manual deployment:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy the `out` folder** to any static hosting service

### Other Deployment Options

#### Vercel (Recommended for ease of use)
1. Connect your GitHub repo to Vercel
2. Automatic deployments on every push
3. Custom domain support

#### Netlify
1. Connect your GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `out`

#### Other Static Hosts
- AWS S3 + CloudFront
- Azure Static Web Apps
- Google Firebase Hosting

### Environment Variables

For contact form functionality, set up Formspree:

1. Go to [Formspree.io](https://formspree.io/)
2. Create a new form
3. Copy your form ID
4. Create `.env.local` file (copy from `.env.example`)
5. Add your Formspree ID

### Customization Before Deployment

1. **Update Personal Information** in `data/personal.ts`:
   - Replace placeholder email, phone, location
   - Update social media links
   - Add your actual resume PDF

2. **Add Project Images**:
   - Add your project screenshots to `public/assets/projects/`
   - Update image paths in `data/projects.ts`

3. **Update Meta Tags** in `pages/index.tsx`:
   - Change the domain in Open Graph tags
   - Update site description

4. **Add Favicon**:
   - Replace `public/favicon.ico` with your actual favicon
   - Generate favicons at [favicon.io](https://favicon.io/)

### Performance Optimization

The portfolio is already optimized with:
- ✅ Static site generation
- ✅ Image optimization settings
- ✅ Minified CSS and JS
- ✅ Responsive images
- ✅ SEO meta tags

### Troubleshooting

**Build Errors**: Check the GitHub Actions tab for detailed error logs

**Images Not Loading**: Ensure image paths are correct and images exist in `public/assets/`

**Contact Form Not Working**: Verify Formspree configuration in environment variables

**Styling Issues**: Make sure Tailwind CSS is properly configured
