import type { MetadataRoute } from 'next';
import { routeContent } from '@/lib/site-data';
export default function sitemap(): MetadataRoute.Sitemap {
  const modified = new Date('2026-08-31');
  const indexableSlugs = Object.keys(routeContent).filter(
    (slug) => slug !== 'contact',
  );
  return [
    {
      url: 'https://casireo.com/',
      lastModified: modified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://casireo.com/stake-review',
      lastModified: modified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...indexableSlugs.map((slug) => ({
      url: `https://casireo.com/${slug}`,
      lastModified: modified,
      changeFrequency: 'monthly' as const,
      priority:
        slug === 'best-online-casinos'
          ? 0.9
          : slug === 'casino-reviews'
            ? 0.8
            : 0.7,
    })),
  ];
}
