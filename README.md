# सूर्यपुरा ग्राम विकास पोर्टल — Suryapura Smart Village Portal

A Next.js + TypeScript + Tailwind CSS + Framer Motion homepage built for a
Full Stack Developer assessment, styled as a real government + startup
product rather than a static mockup.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Structure

```
src/
  app/
    layout.tsx      Root layout, fonts, metadata
    page.tsx         Composes every homepage section
    globals.css       Design tokens (colors, fonts) + Tailwind
  components/
    Navbar.tsx        Sticky nav + EN/HI language toggle
    Hero.tsx           Hero with custom SVG village illustration
    Stats.tsx           Animated counters
    News.tsx             Announcements strip
    Vision.tsx            Mission + development timeline
    DevelopmentAreas.tsx   Six-pillar card grid
    Services.tsx            Citizen services (certificates etc.)
    Schemes.tsx               Government scheme cards
    Leader.tsx                  Ambassador quote block
    Stories.tsx                  Success story cards
    Gallery.tsx                   Photo-style grid
    CTA.tsx                        Call to action band
    Footer.tsx                      Footer + contact
    SunMotif.tsx                    Signature SVG sun/skyline graphics
    SectionHeading.tsx               Reusable section heading
    Counter.tsx                       Animated number component
  lib/
    data.ts             All homepage content (edit here to change copy)
    language.tsx          EN/HI language context
```

## Next phases (not built yet — see chat for the full roadmap)

- Express + MongoDB backend (`server/` folder) with REST APIs for
  announcements, projects, gallery, services, schemes
- Admin dashboard with JWT auth and CRUD screens
- Deploy frontend to Vercel, backend to Render, DB on MongoDB Atlas
