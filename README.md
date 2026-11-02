# Sreehari P.S. — Portfolio Website
> **Google Material Design 3 (M3) + Modern Liquid Glassmorphism Hybrid**

A single-page, highly responsive developer portfolio website built for **Sreehari P.S.**, a B.Tech Computer Science student specializing in Artificial Intelligence, Python, and modern web architectures.

---

## 🌟 Key Architecture & Design Highlights

1. **Aesthetic Blending**:
   - **Material Design 3 (M3)**: Layout grids, typography scales, tonal surface containers, state layers, floating action controls, and tactile ripple interactions.
   - **Liquid Glassmorphism**: Frosted glass panes (`backdrop-blur-xl`, `backdrop-saturate-180%`), specular border highlights, and refractive bevel shadows.
2. **Fluid Animated Liquid Gradient**:
   - Slow-moving organic fluid CSS blobs and mouse-follower refraction bloom that dynamically shine through frosted glass surfaces.
3. **Flawless Mobile Scaling**:
   - Responsive CSS Grid and Flexbox across mobile (1 column), tablet (2 columns), and desktop (3 columns).
   - Dual mobile navigation: Sliding Liquid Glass Drawer + Frosted Floating Bottom Dock.
4. **Curated Sections**:
   - **Hero Section**: Full-height (`min-h-screen`) liquid gradient, interactive AI Core widget, M3 frosted pill buttons ("Explore My Work", "Connect").
   - **About Me**: Narrative detailing AI applications (healthcare diagnostics, fraud detection, autonomous agents), academic profile at Joy University, and engineering pillars.
   - **Skills Section**: Filterable frosted liquid-glass chips with live level indicators for **Python, Generative AI, React, Material Design, Data Serialization, CapCut Video Editing**, and full-stack tools.
   - **Projects Section**: Floating glass panes featuring **Jarvis** (Hybrid Local/Online AI Assistant), **FAKO AI / TrustLens AI** (Fake ID Detector & Document Screening), and **Style Muse AI** (AI-Driven Fashion Styling), equipped with architectural deep-dive modals and "View Source" buttons.
   - **Certifications**: Authentic showcase of the **Google for Developers & StartupTN Vibe Coding Workshop 2026** Certificate of Participation (Certificate ID: `VCW26-Q2XP2`).
   - **Footer & Contact**: Direct social channels (GitHub, LinkedIn, Email, Phone), interactive message dispatch form, and smooth back-to-top navigation.

---

## 🚀 Quick Start

### 1. Development Mode
```bash
npm run dev
```
Open [http://localhost:5174](http://localhost:5174) in your browser.

### 2. Production Build
```bash
npm run build
```
Generates an optimized static bundle in `dist/`.

### 3. Production Preview
```bash
npm run preview
```

---

## 📂 Project Structure

```
sreehari-portfolio/
├── dist/                      # Production build assets
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx        # M3 tonal about section with academic foundation
│   │   ├── CertificateSection.tsx  # Google for Developers '26 verified certificate
│   │   ├── ContactSection.tsx      # Liquid glass contact form with feedback state
│   │   ├── Footer.tsx              # Clean frosted bottom layout with direct links
│   │   ├── Hero.tsx                # min-h-screen vibrant liquid hero with AI core HUD
│   │   ├── LiquidBackground.tsx    # Smooth fluid CSS gradient blobs & mouse refraction
│   │   ├── M3Ripple.tsx            # Material Design 3 tactile ripple hook
│   │   ├── MobileBottomNav.tsx     # Frosted thumb-friendly bottom dock (mobile)
│   │   ├── MobileDrawer.tsx        # Liquid glass sliding drawer (mobile)
│   │   ├── Navbar.tsx              # Elevated frosted top bar with M3 status pill
│   │   ├── ProjectModal.tsx        # Architecture deep-dive modal for project inspection
│   │   ├── ProjectsSection.tsx     # Floating glass pane project grid
│   │   └── SkillsSection.tsx       # Frosted liquid-glass chips with category filters
│   ├── data/
│   │   └── portfolioData.ts        # Comprehensive portfolio data & project specs
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces
│   ├── App.tsx                     # Main single-page application shell
│   ├── index.css                   # Custom M3 + Liquid Glassmorphism CSS layers
│   └── main.tsx                    # React DOM entrypoint
├── index.html                      # HTML shell with Google Fonts
├── package.json                    # Dependencies & scripts
├── tailwind.config.js              # Custom M3 color tokens & liquid glass utilities
├── tsconfig.json                   # TypeScript configuration
└── vite.config.ts                  # Vite build bundler configuration
```

---

## 🔗 Author Links
- **GitHub**: [sreeharimonkunju-cpu](https://github.com/sreeharimonkunju-cpu)
- **LinkedIn**: [Sreehari P.S.](https://www.linkedin.com/in/sreehari-p-s-899a27308/)
- **Email**: [sreeharimonkunju@gmail.com](mailto:sreeharimonkunju@gmail.com)
