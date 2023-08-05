const generateSitemapXml = () => {
  // Generate your sitemap XML content here
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
<url>
<loc>https://arabiccourses.vercel.app/</loc>
<lastmod>2023-08-05T03:19:33+00:00</lastmod>
</url>
    </urlset>`;

  return xml;
};

export default function handler(req, res) {
  const sitemapXml = generateSitemapXml();
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemapXml);
  res.end();
}
