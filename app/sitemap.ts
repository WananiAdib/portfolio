import type { MetadataRoute } from 'next'
import { WEBSITE_URL } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  // Deliberately exclude the unpromoted template blog and any private routes.
  return [{ url: WEBSITE_URL }, { url: `${WEBSITE_URL}/cv` }]
}
