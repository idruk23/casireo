import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const review = readFileSync(
  new URL('../app/jetton-review/page.tsx', import.meta.url),
  'utf8',
);
const home = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');
const reviews = readFileSync(
  new URL('../app/[slug]/page.tsx', import.meta.url),
  'utf8',
);
const card = readFileSync(
  new URL('../components/jetton-card.tsx', import.meta.url),
  'utf8',
);
const sitemap = readFileSync(
  new URL('../app/sitemap.ts', import.meta.url),
  'utf8',
);
const affiliateUrl = 'https://jettrednexar.com/cig0FXPvt5C';

function sourceFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (
      entry.isDirectory() &&
      !['node_modules', 'dist', '.vinext'].includes(entry.name)
    )
      return sourceFiles(path);
    return entry.isFile() &&
      ['.ts', '.tsx', '.js', '.mjs'].includes(extname(entry.name))
      ? [path]
      : [];
  });
}

test('/jetton-review is a dedicated canonical route', () => {
  assert.equal(
    existsSync(new URL('../app/jetton-review/page.tsx', import.meta.url)),
    true,
  );
  assert.match(review, /title: 'JetTon Casino Review'/);
  assert.match(review, /canonical: '\/jetton-review'/);
  assert.match(review, />\s*JetTon Casino\s*<span[^>]*>Review<\/span>/);
  assert.match(sitemap, /https:\/\/casireo\.com\/jetton-review/);
});

test('clean JetTon affiliate URL is isolated to CTA implementation', () => {
  const matches = ['app', 'components', 'lib']
    .flatMap((folder) => sourceFiles(join(projectRoot, folder)))
    .filter((path) => readFileSync(path, 'utf8').includes(affiliateUrl));
  assert.equal(matches.length, 1);
  assert.match(
    matches[0].replaceAll('\\', '/'),
    /app\/jetton-review\/page\.tsx$/,
  );
  assert.equal((review.match(/<AffiliateButton/g) ?? []).length, 2);
  assert.match(review, /rel="sponsored nofollow noopener noreferrer"/);
  assert.doesNotMatch(
    ['app', 'components', 'lib']
      .flatMap((folder) => sourceFiles(join(projectRoot, folder)))
      .map((path) => readFileSync(path, 'utf8'))
      .join('\n'),
    /click_id|target_id|target_type|\{click_id\}/i,
  );
});

test('JetTon review uses only confirmed GEO wording', () => {
  assert.match(review, /Azerbaijan/);
  assert.match(review, /Uzbekistan/);
  assert.match(review, /Indonesia/);
  assert.match(
    review,
    /does not present JetTon as currently available in Poland/,
  );
  assert.match(review, /or Kazakhstan/);
  assert.match(review, /Availability can change/);
});

test('JetTon review avoids unsupported casino claims and ratings', () => {
  assert.doesNotMatch(review, /[$£€]\d|\d+% bonus/i);
  assert.doesNotMatch(review, /aggregateRating|reviewRating/);
  assert.match(review, /No bonus is listed|has not published a JetTon bonus/);
  assert.match(review, /not assigned JetTon a numerical score/i);
});

test('homepage and casino reviews include internal JetTon cards', () => {
  assert.match(home, /<JetTonCard \/>/);
  assert.match(reviews, /<JetTonCard \/>/);
  assert.match(card, /href="\/jetton-review"/);
});

test('JetTon review preserves disclosure and safer-gambling links', () => {
  assert.match(review, /This page contains affiliate links/);
  assert.match(review, /18\+ only/);
  assert.match(review, /href="\/responsible-gambling"/);
  assert.match(review, /<SiteFooter showAffiliateDisclosure \/>/);
});
