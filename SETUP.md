# Portfolio Customization Checklist

## 🎯 Quick Setup (5 minutes)

### 1. Personal Information
Edit `data/personal.ts`:
- [ ] Update `name`, `email`, `phone`, `location`
- [ ] Update social media links (GitHub, LinkedIn)
- [ ] Customize `bio` and `interests`
- [ ] Add your resume PDF to `/public/assets/resume.pdf`

### 2. Projects
Edit `data/projects.ts`:
- [ ] Update project descriptions and technologies
- [ ] Add real GitHub repository links
- [ ] Add live demo links (like your Streamlit app)
- [ ] Add project screenshots to `/public/assets/projects/`

### 3. Skills
Edit `data/skills.ts`:
- [ ] Update skill levels (0-100)
- [ ] Add/remove technologies based on your expertise
- [ ] Update certifications with real credential links
- [ ] Add your achievements

### 4. Contact Form
- [ ] Sign up at [Formspree.io](https://formspree.io/)
- [ ] Create a new form and get your form ID
- [ ] Copy `.env.example` to `.env.local`
- [ ] Add your Formspree ID to environment variables

### 5. Assets
- [ ] Add your profile photo as `me.jpg` to `/public/assets/`
- [ ] Add project screenshots to `/public/assets/projects/`
- [ ] Generate and add favicon files to `/public/`
- [ ] Add your resume as `resume.pdf` to `/public/assets/`

## 🚀 Deployment

### Option 1: GitHub Pages (Free)
1. Push to GitHub: `git add . && git commit -m "Initial setup" && git push`
2. Go to repository Settings → Pages
3. Select "GitHub Actions" as source
4. Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio`

### Option 2: Vercel (Recommended)
1. Connect your GitHub repo to [Vercel](https://vercel.com)
2. Automatic deployments on every push
3. Custom domain support

### Option 3: Netlify
1. Connect your GitHub repo to [Netlify](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `out`

## 🎨 Customization Options

### Colors & Theme
Edit `tailwind.config.js`:
- Change color schemes in the `colors` section
- Modify gradients and animations
- Adjust spacing and typography

### Content Sections
- Add new sections by creating components in `/components/`
- Modify existing sections in the component files
- Update navigation in `components/Navigation.tsx`

### Animations
- Modify animations in `styles/globals.css`
- Adjust Framer Motion animations in components
- Change AOS settings in `pages/_app.tsx`

## 🔧 Advanced Customization

### Adding Blog Section
1. Create `components/Blog.tsx`
2. Add blog data in `data/blog.ts`
3. Update navigation and main page

### Adding Resume Download
1. Add PDF to `/public/assets/resume.pdf`
2. Update link in `data/personal.ts`

### SEO Optimization
1. Update meta tags in `pages/index.tsx`
2. Add structured data for better search results
3. Update Open Graph images

### Analytics
1. Add Google Analytics ID to environment variables
2. Implement analytics in `pages/_app.tsx`

## 📝 Content Guidelines

### Project Descriptions
- Keep descriptions concise but informative
- Highlight key technologies and achievements
- Include live demos when possible
- Use high-quality screenshots

### Professional Tone
- Use active voice
- Quantify achievements when possible
- Focus on impact and results
- Keep technical details accessible

### Images
- Use consistent aspect ratios
- Optimize images for web (WebP format)
- Include alt text for accessibility
- High resolution for Retina displays

## 🐛 Common Issues

### Build Errors
- Check for typos in import paths
- Ensure all required dependencies are installed
- Verify TypeScript types are correct

### Styling Issues
- Make sure Tailwind classes are spelled correctly
- Check responsive breakpoints
- Verify custom CSS doesn't conflict

### Deployment Issues
- Check GitHub Actions logs for specific errors
- Ensure environment variables are set correctly
- Verify all file paths are correct

## 🎉 Launch Checklist

Before going live:
- [ ] All personal information is updated
- [ ] Contact form is working
- [ ] All links are functional
- [ ] Images are loading correctly
- [ ] Site is responsive on mobile
- [ ] SEO meta tags are set
- [ ] Analytics are configured
- [ ] SSL certificate is active (automatic with GitHub Pages)

---

**Need Help?** 
- Check the documentation in each component file
- Review the README.md for technical details
- Test locally with `npm run dev` before deploying
