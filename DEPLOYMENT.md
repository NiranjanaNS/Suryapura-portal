# Deploying to Vercel

GitHub Pages does not run Next.js server features and needs a static
export + `basePath` workaround. Vercel is the platform Next.js is built
by, and needs zero configuration for this project.

## Fastest path (recommended)

1. Push this repo to GitHub (see README.md for the git remote commands).
2. Go to https://vercel.com → Sign in with GitHub.
3. Click **Add New → Project**, select your `suryapura-portal` repo.
4. Leave all settings as default (Vercel auto-detects Next.js) → **Deploy**.
5. In ~60 seconds you'll get a live URL like:
   `https://suryapura-portal.vercel.app`

## Alternative: Vercel CLI

```bash
npm i -g vercel
cd suryapura-portal
vercel        # first deploy, follow the prompts
vercel --prod # promote to production URL
```

## After deploying

Submit the Vercel URL (not GitHub Pages) as your live demo link — it's
what recruiters expect for a Next.js submission and avoids the 404 issue
GitHub Pages causes with client-side routed / server-rendered apps.
