import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://skymakers.ae';
  const now = new Date();

  const routes = [
    {
      url: '',
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: '/properties',
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: '/contact',
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: '/privacy',
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: '/terms',
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}


