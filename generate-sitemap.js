// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/products', changefreq: 'monthly', priority: 0.8 },
  // Add more paths here
];

const sitemap = new SitemapStream({ hostname: 'https://alpanacomp.shop' });

streamToPromise(sitemap).then((data) =>
  createWriteStream('./public/sitemap.xml').write(data)
);

links.forEach(link => sitemap.write(link));
sitemap.end();
