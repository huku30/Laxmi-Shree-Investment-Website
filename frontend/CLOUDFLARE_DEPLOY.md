# Cloudflare Workers/Pages Deployment Guide

## Prerequisites

1. Install Wrangler CLI globally (optional, can use npx):
   ```bash
   npm install -g wrangler
   ```

2. Login to Cloudflare:
   ```bash
   npx wrangler login
   ```

## Local Development

Run the development server with Cloudflare Workers runtime:
```bash
npm run dev
```

Or to preview with the Cloudflare Pages environment:
```bash
npm run pages:build
npx wrangler pages dev .vercel/output/static
```

## Build for Cloudflare Pages

```bash
npm run pages:build
```

This will:
1. Build the Next.js application
2. Convert it to Cloudflare Pages format using `@cloudflare/next-on-pages`

## Deploy to Cloudflare Pages

### Option 1: Git Integration (Recommended)
1. Connect your GitHub repository to Cloudflare Pages
2. Set the build command to: `npm run pages:build`
3. Set the build output directory to: `.vercel/output/static`
4. Set the root directory to: `frontend` (if not deploying from root)

### Option 2: Direct Upload via Wrangler
```bash
npx wrangler pages deploy .vercel/output/static
```

## Environment Variables

For local development, create a `.dev.vars` file with your environment variables.

For production, set environment variables in the Cloudflare Pages dashboard under:
Settings > Environment variables

## Bindings

If you need to use Cloudflare bindings (KV, D1, R2, etc.):
1. Uncomment and configure the relevant sections in `wrangler.toml`
2. Update `env.d.ts` with your binding types
3. Access bindings via `getRequestContext()` from `@cloudflare/next-on-pages`

## Compatibility

- Node.js compatibility is enabled via `nodejs_compat` flag
- Compatibility date is set to `2024-09-23`
- Adjust these in `wrangler.toml` if needed

## Troubleshooting

If you encounter issues:
1. Ensure you're using Node.js 20+
2. Clear `.next` and `.vercel` folders and rebuild
3. Check the [Cloudflare Next.js documentation](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
