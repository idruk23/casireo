import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const data=readFileSync(new URL('../lib/site-data.ts',import.meta.url),'utf8');
const sitemap=readFileSync(new URL('../app/sitemap.ts',import.meta.url),'utf8');
const required=['best-online-casinos','live-casino','slots','casino-bonuses','payment-methods','casino-reviews','about','contact','responsible-gambling','privacy-policy','terms-and-conditions'];
test('all requested content routes are registered',()=>{for(const route of required){assert.match(data,new RegExp(`'${route}'`));assert.match(sitemap,/routeContent/);}});
test('demo casino records do not contain commercial claims',()=>{assert.match(data,/status:'demo'/);assert.match(data,/affiliateUrl:null/);assert.match(data,/bonus:null/);});
test('GEO architecture declares country inclusion and exclusion fields',()=>{assert.match(data,/countries:CountryCode\[\]/);assert.match(data,/excludedCountries:CountryCode\[\]/);assert.match(data,/casinosForCountry/);});
