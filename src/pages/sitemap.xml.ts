import type { APIRoute } from 'astro';
import { getArticles, getBrands, getCategories } from '../utils/data';

const site = 'https://opinioneselectronicas.com';

const staticPages = ['/', '/busqueda/'];

export const GET: APIRoute = () => {
  const urls: string[] = [];
  staticPages.forEach((path) => urls.push(`${site}${path}`));
  getCategories().forEach((category) => urls.push(`${site}/categoria/${category.slug}/`));
  getBrands().forEach((brand) => urls.push(`${site}/marca/${brand.slug}/`));
  getArticles().forEach((article) => urls.push(`${site}/articulo/${article.slug}/`));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (loc) => `<url>
  <loc>${loc}</loc>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml'
    }
  });
};
