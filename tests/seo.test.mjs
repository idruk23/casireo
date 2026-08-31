import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const layout = readFileSync(
  new URL('../app/layout.tsx', import.meta.url),
  'utf8',
);
const home = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');
const review = readFileSync(
  new URL('../app/stake-review/page.tsx', import.meta.url),
  'utf8',
);
const contentPage = readFileSync(
  new URL('../app/[slug]/page.tsx', import.meta.url),
  'utf8',
);
const sitemap = readFileSync(
  new URL('../app/sitemap.ts', import.meta.url),
  'utf8',
);
const data = readFileSync(
  new URL('../lib/site-data.ts', import.meta.url),
  'utf8',
);

test('indexable pages declare canonical and index/follow metadata', () => {
  assert.match(layout, /alternates: \{ canonical: '\/' \}/);
  assert.match(layout, /robots: \{ index: true, follow: true \}/);
  assert.match(review, /alternates: \{ canonical: '\/stake-review' \}/);
  assert.match(review, /robots: \{ index: true, follow: true \}/);
  assert.match(contentPage, /alternates: \{ canonical: `\/\$\{slug\}` \}/);
  assert.match(contentPage, /robots: \{ index: indexable, follow: true \}/);
});

test('contact is noindex and excluded from the sitemap', () => {
  assert.match(contentPage, /const indexable = slug !== 'contact'/);
  assert.match(sitemap, /slug\s*!==\s*'contact'/);
});

test('structured data is limited to supported visible content', () => {
  assert.match(home, /'@type': 'WebSite'/);
  assert.match(home, /'@type': 'Organization'/);
  assert.match(home, /'@type': 'FAQPage'/);
  assert.match(review, /'@type': 'Article'/);
  assert.match(review, /'@type': 'FAQPage'/);
  assert.match(contentPage, /'@type': 'BreadcrumbList'/);
  assert.match(contentPage, /'@type': 'Article'/);
  assert.doesNotMatch(
    `${home}${review}${contentPage}`,
    /aggregateRating|reviewRating/,
  );
});

test('priority editorial pages have substantial sections and related links', () => {
  for (const slug of [
    'best-online-casinos',
    'live-casino',
    'slots',
    'casino-bonuses',
    'payment-methods',
    'casino-reviews',
  ]) {
    const quotedKey = `'${slug}':`;
    const bareKey = `${slug}:`;
    const start = Math.max(data.indexOf(quotedKey), data.indexOf(bareKey));
    assert.notEqual(start, -1);
    const next = data.indexOf("\n  '", start + slug.length + 3);
    const block = data.slice(start, next === -1 ? undefined : next);
    assert.match(block, /relatedLinks:/);
    assert.ok((block.match(/title:/g) ?? []).length >= 4);
  }
});

test('public pages do not render demo casino cards', () => {
  assert.doesNotMatch(home, /CasinoCard|casinos\.map/);
  assert.doesNotMatch(contentPage, /CasinoCard|casinos\.map/);
  assert.match(contentPage, /slug\s*===\s*'casino-reviews'/);
  assert.match(contentPage, /<StakeCard \/>/);
});
