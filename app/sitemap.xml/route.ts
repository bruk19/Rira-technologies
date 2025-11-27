import { NextResponse } from "next/server";

const baseUrl = "https://rira-technologies.com";

export async function GET() {
  const urls = [
    { loc: `${baseUrl}/`, lastmod: new Date().toISOString() },
    { loc: `${baseUrl}/about`, lastmod: new Date().toISOString() },
    { loc: `${baseUrl}/contact`, lastmod: new Date().toISOString() },
    { loc: `${baseUrl}/portfolio`, lastmod: new Date().toISOString() },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
  </url>`
  )
  .join("")}
</urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
