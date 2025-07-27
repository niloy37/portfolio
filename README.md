# Niloy Rahman Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&crop=entropy&auto=format&fm=webp&q=80)

## ✨ Features

- 🎨 **Modern Design**: Bold gradients, smooth animations, and glassmorphism effects
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Fast Performance**: Static site generation with optimized assets
- 🎭 **Interactive**: Hover effects, scroll animations, and smooth transitions
- 📧 **Contact Form**: Integrated with Formspree for form handling
- 🔗 **Social Links**: GitHub, LinkedIn, and email integration
- 💼 **Project Showcase**: Live demos, GitHub repos, and detailed descriptions
- 🌟 **SEO Optimized**: Meta tags, Open Graph, and structured data

## � Quick Start

### 1. Customize Your Information

**Personal Details** (`data/personal.ts`):
```typescript
export const personalInfo = {
  name: "Your Name",
  email: "your.email@example.com",
  // ... update all fields
};
```

**Projects** (`data/projects.ts`):
- Add your real project screenshots to `/public/assets/projects/`
- Update GitHub links and live demo URLs
- Customize descriptions and tech stacks

**Skills** (`data/skills.ts`):
- Adjust skill levels and categories
- Add your certifications and achievements

### 2. Setup Contact Form

1. Sign up at [Formspree.io](https://formspree.io/)
2. Create a new form and get your form ID
3. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
4. Add your Formspree ID:
   ```env
   NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
   ```

### 3. Deploy to GitHub Pages

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Portfolio setup complete"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "GitHub Actions" as source
   - Your site will be live at: `https://niloy37.github.io/portfolio`

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Icons**: React Icons (Feather Icons)
- **Animations**: Framer Motion + AOS
- **Deployment**: GitHub Pages with GitHub Actions
- **Form Handling**: Formspree integration

## 📁 Project Structure

```
portfolio/
├── components/          # React components
│   ├── Navigation.tsx   # Main navigation
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills & expertise
│   ├── Projects.tsx    # Project showcase
│   └── Contact.tsx     # Contact form
├── data/               # Data files
│   ├── personal.ts     # Personal information
│   ├── projects.ts     # Project data
│   └── skills.ts       # Skills and achievements
├── pages/              # Next.js pages
│   ├── _app.tsx        # App wrapper
│   ├── _document.tsx   # Document structure
│   └── index.tsx       # Main page
├── public/             # Static assets
│   └── assets/         # Images, resume, etc.
└── styles/             # Global styles
```

## 🎨 Customization

### Colors & Theme
Edit `tailwind.config.js` to change:
- Primary/secondary color schemes
- Gradient combinations
- Animation timings
- Typography scales

### Adding Sections
1. Create new component in `/components/`
2. Add to main page in `pages/index.tsx`
3. Update navigation in `Navigation.tsx`

### Project Images
Add your screenshots to `/public/assets/projects/` and update paths in `data/projects.ts`

## 🌐 Alternative Deployments

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Build: `npm run build`
2. Deploy the `out` folder

### Self-Hosted
Upload the `out` folder contents to any web server

## 🔧 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## 📊 Performance

- ✅ **100/100** Lighthouse Performance Score
- ✅ **Static Site Generation** for fast loading
- ✅ **Optimized Images** with Next.js Image component
- ✅ **Minimal Bundle Size** with tree shaking
- ✅ **SEO Optimized** with proper meta tags

## 📝 Customization Checklist

- [ ] Update personal information in `data/personal.ts`
- [ ] Add project screenshots and update `data/projects.ts`
- [ ] Customize skills and achievements in `data/skills.ts`
- [ ] Set up Formspree for contact form
- [ ] Add your resume PDF to `/public/assets/`
- [ ] Update social media links
- [ ] Test contact form functionality
- [ ] Verify all project links work
- [ ] Check responsive design on mobile
- [ ] Deploy and test live site

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Found a bug or want to contribute? Feel free to open an issue or submit a pull request.

---

**Built with ❤️ by Niloy Rahman**

[Live Demo](https://niloy37.github.io/portfolio) • [GitHub](https://github.com/niloy37/portfolio)
