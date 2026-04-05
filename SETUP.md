# Modern Portfolio Website - React 18 + TypeScript

A professional portfolio website built with modern web technologies.

## 🚀 Tech Stack

- **React 18** - UI library for building components
- **TypeScript** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool and dev server
- **CSS3** - Professional styling (existing CSS preserved)

## ✨ Features

- **Responsive Design** - Works on all devices
- **Component-Based Architecture** - Modular and maintainable
- **TypeScript Type Safety** - Catch errors at development time
- **Fast Development** - Instant HMR (Hot Module Replacement) with Vite
- **Modern Build Process** - Optimized for production

## 📋 Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

## 🛠️ Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

The site will open automatically at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### 4. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
simple_template/
├── src/
│   ├── components/
│   │   ├── Header.tsx         - Navigation header
│   │   ├── Home.tsx           - Home/hero section
│   │   ├── About.tsx          - About section with tabs
│   │   ├── Portfolio.tsx      - Portfolio/projects section
│   │   ├── Contact.tsx        - Contact section
│   │   ├── PortfolioPopup.tsx - Project details modal
│   │   └── PageLoader.tsx     - Loading animation
│   ├── App.tsx                - Main app component
│   └── main.tsx               - React entry point
├── css/
│   ├── style.css              - Main professional theme (preserved)
│   └── font-awesome.css       - Icons
├── img/                       - Images and portfolio screenshots
├── index.html                 - HTML entry point
├── vite.config.ts             - Vite configuration
├── tsconfig.json              - TypeScript configuration
└── package.json               - Dependencies and scripts
```

## 🎨 Customization

### Update Portfolio Items
Edit `src/components/Portfolio.tsx` and modify the `portfolioItems` array with your projects.

### Change Skills
Update the `skillsData` array in `src/components/About.tsx`.

### Modify Content
Edit component files in `src/components/` to update text, dates, and information.

### Keep Existing Theme
All CSS from the original design is preserved in the `css/` folder. The professional theme with teal accents remains intact.

## 🔄 Migration from HTML/JS

The original HTML structure has been converted to React components while maintaining:
- ✅ All CSS styling
- ✅ Professional theme appearance
- ✅ Responsive design
- ✅ All functionality (navigation, tabs, modals)

## 📝 Deploying

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload 'dist' folder to Netlify
```

### Deploy to GitHub Pages

```bash
# Update vite.config.ts with your repository name
npm run build
# Push the dist folder to gh-pages branch
```

## 🤝 Contributing

Feel free to customize and improve this portfolio template!

## 📜 License

MIT License - Feel free to use this template for your portfolio

---

Built with ❤️ using React, TypeScript, and Vite
