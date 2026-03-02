# Symone Sensations Website

Static multi-page website for `symonesensations.com`.

## Pages
- `index.html`: Landing page
- `listen.html`: Shop links (placeholder storefront cards)
- `media.html`: Product collections and promo video
- `contact.html`: Contact + social links
- `styles.css`: Shared styling
- `tracking.js`: Outbound link analytics events

## Deploy (same pattern as your 1divines site)
This repo is set to deploy automatically to GitHub Pages on every push to `main` via:
- `.github/workflows/deploy-pages.yml`
- `CNAME` set to `symonesensations.com`

## One-time GitHub setup
1. In the GitHub repo, open `Settings -> Pages`.
2. Under Build and deployment, set `Source` to `GitHub Actions`.
3. Push to `main` and wait for the `Deploy static site to GitHub Pages` workflow to finish.

## One-time domain DNS setup
At your domain DNS provider for `symonesensations.com` add:

1. `A` records for root (`@`):
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

2. `CNAME` record for `www`:
- Host: `www`
- Value: `1divines.github.io`

Then in GitHub `Settings -> Pages`, set Custom domain to `symonesensations.com` and enable `Enforce HTTPS` after DNS resolves.

## Placeholder updates you should make next
- Replace images in `assets/`
- Replace placeholder social/store links in `listen.html` and `contact.html`
- Optional: enable analytics script in `index.html` (Plausible or GA4)
