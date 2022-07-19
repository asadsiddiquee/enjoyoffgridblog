const fs = require("fs");
const globby = require("globby");

(async () => {
  const pagePaths = await globby([
    "pages/*.js",
    "posts/*.mdx",
    "!pages/_*js",
    "!pages/category/[category]",
    "!pages/[slug].js",
    "!pages/404.js",
    "!pages/index.js",
  ]);
  const pageRoutes = pagePaths.map((pagePath) =>
    pagePath
      .replace(".js", "")
      .replace(".mdx", "")
      .replace("posts", "")
      .replace("pages", "")
  );

  const allRoutes = [...pageRoutes].sort();

  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map((route) => {
      return `
      <url>
      <loc>${`https://enjoyoffgrid.com${route}`}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
     <priority>1.0</priority>
      </url>
      `;
    })
    .join("")}
    </urlset>
    `;

  fs.writeFileSync("public/sitemap.xml", sitemap);
})();
