# Personal Website

A modern, minimal personal website showcasing professional experience, projects, and technical focus. Built with Next.js 14 and optimized for performance with a clean, accessible design.

## Features

- **Theme System:** Dark/Light/System mode with iOS-style segmented control
- **Micro-interactions:** Subtle fade-in animations and smooth hover transitions
- **Click-to-copy Email:** One-click email copying with visual feedback
- **Responsive Design:** Optimized for all screen sizes
- **Performance Optimized:** Minimal JavaScript, optimized fonts, and fast load times
- **Accessibility:** Proper semantic HTML, ARIA labels, and keyboard navigation

## Tech Stack

- **Framework:** Next.js 14.2.30 (App Router)
- **Language:** TypeScript 5 & React 18
- **Styling:** Tailwind CSS 3.3.0
- **Font:** Geist (self-hosted via next/font)
- **Color Palette:** Zinc-based theme (50, 300, 700, 800, 900)
- **Deployment:** Vercel
- **Domain:** [msaadshabir.vercel.app](https://msaadshabir.vercel.app)

## Project Structure

```
personal-website/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.js             # Main homepage
│   └── globals.css         # Global styles and animations
├── components/
│   ├── ThemeProvider.tsx   # Theme context and state management
│   └── ThemeToggle.tsx     # iOS-style theme switcher
├── public/
│   ├── manifest.json       # PWA manifest
│   ├── robots.txt          # SEO robots file
│   └── sitemap.xml         # SEO sitemap
└── [config files]
```

## Performance

- **Page Size:** 1.64 kB
- **First Load JS:** 88.6 kB
- **Modern Browser Targeting:** Chrome 87+, Edge 88+, Firefox 78+, Safari 14+
- **Optimizations:**
  - Self-hosted fonts (eliminates external CDN blocking)
  - Minimal polyfills for modern browsers
  - SWC minification
  - Static site generation
  - CSS animations (hardware accelerated)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Key Design Decisions

1. **Minimalism:** Clean, distraction-free interface focused on content
2. **Typography:** Improved hierarchy with larger headings and relaxed line height
3. **Color Scheme:** Softer zinc palette for comfortable reading in both modes
4. **Animations:** Subtle fade-ins that enhance without overwhelming
5. **Accessibility:** Semantic HTML, proper heading structure, and theme persistence

## Browser Support

Targets modern browsers for optimal performance:

- Chrome/Edge 87+
- Firefox 78+
- Safari 14+

## License

Personal project - All rights reserved
