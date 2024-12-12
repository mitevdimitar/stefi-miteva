import { getPublishedStorySlugs } from './story-service.mjs';
import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://stefimiteva.com';
const OUTPUT_FILE = path.resolve(__dirname, '../public/sitemap.xml');

// Generate the sitemap
async function generateSitemap() {
  const staticRoutes = [
    '',
    '/illustrations',
    '/books',
    '/feedback',
    '/contacts',
    '/about',
    '/login',
    '/stories',
  ];

  const dynamicSlugs = await getPublishedStorySlugs();
  const storyRoutes = dynamicSlugs.map((slug) => `/stories/${slug}`);

  const allRoutes = [...staticRoutes, ...storyRoutes];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map((route) => {
      return `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <changefreq>${route === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`;
    })
    .join('')}
</urlset>`;

  // Write the sitemap to the public directory
  fs.writeFileSync(OUTPUT_FILE, sitemapContent, 'utf8');
  console.log(`Sitemap successfully generated at ${OUTPUT_FILE}`);
  process.exit(0);
}

// Run the generator
generateSitemap();
