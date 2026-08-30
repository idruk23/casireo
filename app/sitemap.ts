import type { MetadataRoute } from 'next';
import { routeContent } from '@/lib/site-data';
export default function sitemap():MetadataRoute.Sitemap{const now=new Date('2026-08-30');return [{url:'https://casireo.com',lastModified:now,changeFrequency:'weekly',priority:1},...Object.keys(routeContent).map(slug=>({url:`https://casireo.com/${slug}`,lastModified:now,changeFrequency:'monthly' as const,priority:slug==='best-online-casinos'?.9:.7}))];}
