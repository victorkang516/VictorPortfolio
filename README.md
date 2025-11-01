This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Deploy on Netlify

This project is configured for deployment on Netlify using the Essential Next.js plugin.

### Important: Netlify Configuration

After pushing your code, update your Netlify site settings:

1. Go to **Site settings** → **Build & deploy** → **Build settings**
2. **Remove or clear the "Publish directory"** field (leave it blank)
3. Ensure **Build command** is: `pnpm build`
4. The `netlify.toml` file will handle the rest automatically

The `@netlify/plugin-nextjs` plugin is already configured and will properly handle:
- Next.js routing
- Server-side rendering (SSR)
- Static generation (SSG)
- API routes
- Image optimization