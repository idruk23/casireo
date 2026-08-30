# Casireo.com foundation

Production-oriented, local-only website foundation for Casireo. The project uses Vinext, React, TypeScript, Tailwind CSS, and the OpenAI Sites-compatible Vite setup.

## Commands

- `npm run dev` — local development server
- `npm run build` — production build
- `npm run lint` — source linting
- `npm run test` — foundation contract tests

## Routes

- `/`
- `/best-online-casinos`
- `/live-casino`
- `/slots`
- `/casino-bonuses`
- `/payment-methods`
- `/casino-reviews`
- `/about`
- `/contact`
- `/responsible-gambling`
- `/privacy-policy`
- `/terms-and-conditions`
- `/sitemap.xml`
- `/robots.txt`

## Architecture notes

- `lib/site-data.ts` is the future operator/content registry. Casino records include permitted and excluded country fields, demo/approved status, nullable affiliate URL, and nullable bonus.
- `lib/i18n.ts` declares English as active and PL/DE/FR/ES as planned locales.
- `components/casino-card.tsx` is the reusable operator summary card.
- `app/[slug]/page.tsx` is the reusable editorial/review route renderer with per-page metadata and breadcrumb structured data.
- All current operators are placeholders. No affiliate links, bonuses, ratings, partnerships, or availability claims are present.

## Pre-launch gates

- Replace demo records only with verified operator data and country permissions.
- Connect and document a real contact channel.
- Review legal pages with the operating entity and counsel.
- Re-run dependency audit before deployment; the pinned scaffold currently reports upstream advisories without an available non-breaking automated fix.
- Add consent management before enabling non-essential cookies or analytics.
