import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot=fileURLToPath(new URL('..',import.meta.url));
const review=readFileSync(new URL('../app/stake-review/page.tsx',import.meta.url),'utf8');
const home=readFileSync(new URL('../app/page.tsx',import.meta.url),'utf8');
const reviews=readFileSync(new URL('../app/[slug]/page.tsx',import.meta.url),'utf8');
const card=readFileSync(new URL('../components/stake-card.tsx',import.meta.url),'utf8');
const footer=readFileSync(new URL('../components/site-footer.tsx',import.meta.url),'utf8');
const affiliateUrl='https://stake.com/?c=zrWcLA9e';
const disclosure='This page contains affiliate links. Casireo may earn a commission if you register through them, at no extra cost to you.';

function sourceFiles(directory){return readdirSync(directory,{withFileTypes:true}).flatMap(entry=>{const path=join(directory,entry.name);if(entry.isDirectory()&&!['node_modules','dist','.vinext'].includes(entry.name))return sourceFiles(path);return entry.isFile()&&['.ts','.tsx','.js','.mjs'].includes(extname(entry.name))?[path]:[];});}

test('/stake-review is a dedicated route',()=>{assert.equal(existsSync(new URL('../app/stake-review/page.tsx',import.meta.url)),true);assert.match(review,/canonical:'\/stake-review'/);});
test('affiliate URL is isolated to Stake CTA implementation',()=>{const matches=['app','components','lib'].flatMap(folder=>sourceFiles(join(projectRoot,folder))).filter(path=>readFileSync(path,'utf8').includes(affiliateUrl));assert.equal(matches.length,1);assert.match(matches[0].replaceAll('\\','/'),/app\/stake-review\/page\.tsx$/);assert.equal((review.match(/<AffiliateButton/g)??[]).length,2);assert.match(review,/rel="sponsored noopener noreferrer"/);});
test('required disclosure appears by the first CTA and in the review footer',()=>{assert.ok(review.indexOf('{AFFILIATE_DISCLOSURE}')>review.indexOf('<AffiliateButton'));assert.match(review,new RegExp(disclosure.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')));assert.match(footer,new RegExp(disclosure.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')));assert.match(review,/SiteFooter showAffiliateDisclosure/);});
test('review includes age, jurisdiction and responsible gambling safeguards',()=>{assert.match(review,/18\+ only/);assert.match(review,/Availability depends on your country and local laws/);assert.match(review,/href="\/responsible-gambling"/);assert.doesNotMatch(review,/VPN|circumvent|bypass geographic restrictions by/i);});
test('review contains no invented promotional language',()=>{assert.doesNotMatch(review,/welcome bonus|free spins|deposit bonus|\$\d+|\d+% bonus/i);assert.match(review,/no offer has been verified for this review/i);});
test('homepage and casino reviews link to the Stake review',()=>{assert.match(home,/StakeCard/);assert.match(reviews,/slug==='casino-reviews'&&<StakeCard/);assert.match(card,/href="\/stake-review"/);});
