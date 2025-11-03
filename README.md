# Portfolio Website

A modern, responsive personal portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. This portfolio showcases professional information, projects, education, experience, and certifications, with content dynamically loaded from a JSON file.

## 🚀 Features

- **Dynamic Content**: Portfolio data is fetched from `portfolio.json` - easy to update without code changes
- **Modern Design**: Dark theme with teal accents and glassmorphism effects
- **Responsive**: Fully responsive across all screen sizes (360px–1440px+)
- **Animated**: Smooth scroll animations using Framer Motion
- **SEO Optimized**: Meta tags and structured data for search engines
- **Performance**: Optimized for fast loading and Lighthouse scores

## 📁 Project Structure

```
portfolio/
├── public/
│   └── data/
│       └── portfolio.json      # Portfolio data source
├── src/
│   ├── app/
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Main page
│   ├── components/
│   │   └── sections/
│   │       ├── ProfileSection.tsx
│   │       ├── EducationSection.tsx
│   │       ├── PortfolioSection.tsx
│   │       ├── SkillsSection.tsx
│   │       ├── ExperienceSection.tsx
│   │       └── CertificationsSection.tsx
│   ├── lib/
│   │   └── portfolio.ts        # Data fetching logic
│   └── types/
│       └── portfolio.ts        # TypeScript type definitions
├── package.json
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Fonts**: Inter & Poppins from Google Fonts

## 📝 Data Structure

The portfolio content is managed through `/public/data/portfolio.json` with the following structure:

```json
{
  "profile": {
    "name": "Your Name",
    "position": "Your Position",
    "description": "Your bio",
    "contact": {
      "email": "email@example.com",
      "phone": "+1234567890",
      "linkedin": "https://linkedin.com/in/yourprofile",
      "github": "https://github.com/yourusername",
      "website": "https://yourwebsite.com"
    }
  },
  "education": [...],
  "portfolio": [...],
  "skills": [...],
  "experience": [...],
  "certifications": [...],
  "template": "anime"
}
```

### Template Options

The `template` field allows you to choose from different visual themes. Available templates:

- **`"anime"`** - Kawaii anime aesthetics with pink/purple gradients, emojis, and sparkles ✨
- **`"anime2"`** - Dark modern anime style with red/black colors and tech-inspired elements 🌙
- **`"cat"`** - Whimsical neko theme with pastel colors and cat animations 🐱
- **`"default"`** - Clean professional design with teal/gray colors and modern styling 💼

**Note**: If no template is specified, the `"anime"` template will be used as default.

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Updating Portfolio Content

Simply edit `/public/data/portfolio.json` with your information. The website will automatically update when you save the changes - no redeployment needed!

### Customizing Colors

The main accent color is teal (`#14b8a6`). To change it:

1. Update the Tailwind config in `tailwind.config.ts`
2. Update CSS variables in `src/app/globals.css`
3. Update color classes in components

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Add the corresponding type in `src/types/portfolio.ts`
3. Import and use the component in `src/app/page.tsx`

## 🚀 Deployment

### Vercel (Recommended)

**Deploy via Vercel Dashboard:**
1. Push your code to GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy" - your portfolio will be live in minutes!

**Deploy via Vercel CLI:**
```bash
# Install Vercel CLI
npm install -g vercel

# Login to your Vercel account
vercel login

# Deploy from your project directory
vercel

# For production deployment
vercel --prod
```

**Environment Variables (Optional):**
- No environment variables required for basic functionality
- Your portfolio will automatically use the data from `public/data/portfolio.json`

**Custom Domain (Optional):**
1. Go to your project settings in Vercel dashboard
2. Click "Domains" → "Add"
3. Enter your custom domain and follow DNS instructions

### Netlify

1. Build command: `npm run build`
2. Publish directory: `out`
3. Enable `next export` in `next.config.mjs`

### Other Platforms

Any platform that supports Next.js applications will work. The app is fully static after build.

## 🎯 Sections

- **Profile**: Hero section with name, position, bio, and contact buttons
- **Education**: Academic background with institution, degree, and timeline
- **Skills**: Technical skills displayed as interactive tags
- **Portfolio**: Project showcase with technologies, demo links, and code links
- **Experience**: Work history with company, position, and duration
- **Certifications**: Professional certifications with issuer and links

## 🎨 Design Features

- **Dark Theme**: Modern dark interface with teal accents
- **Glassmorphism**: Frosted glass effects on cards
- **Micro-interactions**: Hover states and smooth transitions
- **Typography**: Clean hierarchy with Inter and Poppins fonts
- **Responsive Grid**: Adaptive layouts for all screen sizes

## 📱 Responsive Design

- Mobile: 360px+ (single column, touch-friendly)
- Tablet: 768px+ (adjusted spacing, optimized touch targets)
- Desktop: 1024px+ (full grid layout, hover interactions)
- Large screens: 1440px+ (optimized spacing and content width)

## ⚡ Performance

- Optimized images and assets
- Code splitting with Next.js
- Minimal dependencies
- Efficient CSS with Tailwind
- Fast loading with static generation

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**