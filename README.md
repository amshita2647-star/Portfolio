# Developer Portfolio Website

A sleek, modern, and fully responsive developer portfolio website built with Next.js 16, React 19, Tailwind CSS, and Framer Motion. Features a dark theme with neon cyan/blue accents and a comprehensive CivicLens project roadmap.

## ✨ Features

- **Dark Mode Default**: Sophisticated slate background with neon cyan and blue accents
- **Sticky Navigation**: Smooth scrolling links with mobile-responsive hamburger menu
- **Hero Section**: Compelling headline and CTA buttons for projects and roadmap
- **Skills Section**: Categorized skill cards (Systems & Core, Fundamentals, Platforms & Tools)
- **Featured Projects**: 
  - CivicLens – AI-Powered Local Government Decision Tracker
  - C++ Sudoku Game Engine
- **Interactive Roadmap**: Detailed 6-month CivicLens development timeline with milestones
- **Contact Section**: Form and direct links to email, GitHub, and LinkedIn
- **Smooth Animations**: Framer Motion-powered entrance animations and transitions
- **Mobile Responsive**: Fully responsive design across all devices

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19.2
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Charts/Graphs**: Recharts (for potential future enhancements)
- **Icons**: Lucide React + Custom SVGs
- **Package Manager**: pnpm

## 📂 Project Structure

```
components/
├── navbar.tsx          # Sticky navigation bar with smooth scrolling
├── hero.tsx            # Hero section with headline and CTAs
├── skills.tsx          # Skills categorized in card layout
├── projects.tsx        # Featured projects showcase
├── roadmap.tsx         # CivicLens 6-month development roadmap
├── contact.tsx         # Contact form and social links
└── footer.tsx          # Footer with quick links and social icons

app/
├── layout.tsx          # Root layout with metadata and dark theme
├── page.tsx            # Main page integrating all sections
└── globals.css         # Global styles with dark theme colors

public/                 # Static assets
```

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Create an optimized production build
pnpm build

# Start the production server
pnpm start
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`components/hero.tsx`):
   - Change headline and tagline
   - Update social media links

2. **Skills** (`components/skills.tsx`):
   - Add/remove skill categories and items

3. **Projects** (`components/projects.tsx`):
   - Update project descriptions, tech stacks, and links

4. **Roadmap** (`components/roadmap.tsx`):
   - Modify phases, months, and milestone tasks

5. **Contact** (`components/contact.tsx`):
   - Update email address and social profiles

### Theme Customization

All colors are defined in `app/globals.css` using CSS variables:

```css
--background: #0f1419
--foreground: #f0f4f8
--primary: #0ea5e9
--accent: #06b6d4
```

To change the theme, update the `:root` variables in `globals.css`.

## 📦 Component Overview

### Navbar
- Fixed sticky header with smooth scroll behavior
- Mobile-responsive hamburger menu
- Social media links (GitHub, LinkedIn)
- Gradient logo

### Hero
- Animated entrance with Framer Motion
- Dual CTA buttons (View Projects, CivicLens Roadmap)
- Social media integration

### Skills
- Three categorized skill cards
- Systems & Core (C++, C, OOP)
- Fundamentals (Data Structures, Algorithms)
- Platforms & Tools (Python, LLM, Web Scraping)

### Projects
- Two featured project cards with detailed descriptions
- Tech stack badges
- Key highlights and action buttons

### Roadmap
- Interactive timeline of 6-month CivicLens development
- Phase-based color coding:
  - Blue (Planning)
  - Purple (Design)
  - Emerald (Development)
  - Amber (Testing & Deployment)
- Milestone indicators
- Summary statistics

### Contact
- Contact form with validation
- Direct contact method cards (Email, GitHub, LinkedIn)
- Submission feedback

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- Mobile: Default (< 768px)
- Tablet: md (768px - 1024px)
- Desktop: lg (1024px+)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
pnpm global add vercel

# Deploy
vercel
```

### Deploy to GitHub Pages

1. Update `next.config.mjs` with your repository name
2. Run: `pnpm build`
3. Push the `out` directory to GitHub Pages

### Deploy to Other Platforms

The project can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Heroku

## 🎯 Performance Optimizations

- Next.js 16 automatic code splitting
- React 19 compiler support (enabled)
- Image optimization with Next.js Image component
- CSS-in-JS minification with Tailwind
- Smooth scrolling with native CSS
- Lazy loading animations with Framer Motion

## 🔧 Development Tips

### Hot Reload
The development server supports hot module replacement (HMR). Changes to components are reflected instantly without full page reload.

### Debugging
- Use browser DevTools for frontend debugging
- Check `pnpm dev` terminal output for server-side errors
- Console logs persist across Fast Refresh

### Adding New Sections
1. Create a new component in `components/`
2. Import and add to `page.tsx`
3. Add navigation link to `navbar.tsx`
4. Style with Tailwind classes and theme variables

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork and customize this template for your own portfolio!

## 📞 Support

For questions or issues, please open an issue or contact via the portfolio contact form.

---

**Built with ❤️ using Next.js 16, React 19, and Tailwind CSS**
