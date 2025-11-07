const fs = require('fs');
const path = require('path');

const baseUrl = process.env.SITE_URL || 'https://example.com';
const pages = ['/', '/about', '/services', '/projects', '/safety', '/careers', '/blog', '/contact'];
const services = [
  'directional-drilling',
  'utility-installation',
  'pile-installation',
  'civil-construction',
  'water-sewer-treatment'
];
const projects = [1, 2, 3, 4];
const blogPosts = [1, 2, 3];

const urls = [
  ...pages,
  ...services.map((s) => `/services/${s}`),
  ...projects.map((p) => `/projects/${p}`),
  ...blogPosts.map((b) => `/blog/${b}`)
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map((u) => `  <url><loc>${baseUrl}${u}</loc></url>`).join('\n') +
  '\n</urlset>\n';

fs.writeFileSync(path.join('public', 'sitemap.xml'), sitemap, 'utf8');

const robots = `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`;
fs.writeFileSync(path.join('public', 'robots.txt'), robots, 'utf8');

console.log('Generated sitemap.xml and robots.txt');
