# Gourav Kesarla B — Personal Portfolio

> **"Boot Sequence"** — A systems-engineering aesthetic portfolio.

## 🚀 Features

- CSS 3D laptop boot animation on load
- Glassmorphism cards with glow borders
- Framer Motion scroll-triggered animations
- Animated skill bars per category
- Expandable project cards
- Timeline component with scroll-driven line draw
- Smooth scrolling, mobile-responsive, reduced-motion safe

## 🛠 Tech Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · JetBrains Mono + Inter

## ⚡ Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

## 📦 Deploy to Vercel

```bash
# Option A — CLI
npm i -g vercel && vercel

# Option B — GitHub
# Push to GitHub → vercel.com → New Project → Import repo → Deploy
```

No environment variables needed.

## 📁 Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, SEO metadata)
│   ├── page.tsx            # Main page (boot gate → sections)
│   └── globals.css         # Design system CSS
├── components/
│   ├── LaptopBoot.tsx      # 3D laptop + terminal animation
│   ├── Navbar.tsx          # Fixed nav with active section
│   ├── HeroSection.tsx     # Full-screen hero + parallax
│   ├── AboutSection.tsx    # Bio, stats, terminal card
│   ├── SkillsSection.tsx   # Animated skill bars
│   ├── ProjectsSection.tsx # Expandable project cards
│   ├── ExperienceSection.tsx # Timeline
│   └── ContactSection.tsx  # Contact + footer
└── lib/
    └── resume-data.ts      # ← Single source of truth
public/
└── Gourav_Kesarla_B_Resume.pdf
```

## 📝 Update Content

Edit `src/lib/resume-data.ts` to update any text, links, projects, or skills.

## 🎨 Design Tokens

| Token | Value |
|-------|-------|
| Background | `#0a0e14` |
| Accent Cyan | `#00d9ff` |
| Accent Green | `#39ff88` |
| Font Mono | JetBrains Mono |
| Font Sans | Inter |
