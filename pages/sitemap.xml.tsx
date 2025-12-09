import { GetServerSideProps } from "next";
import { getAllReports } from "../lib/reports";

function generateSitemap(reports: Array<{ slug: string; publishedAt: string }>) {
  const baseUrl = "https://iwao-lab-website.vercel.app";
  const currentDate = new Date().toISOString().split("T")[0];

  const staticPages = [
    { url: "", priority: "1.0", changefreq: "weekly" },
    { url: "/about", priority: "0.8", changefreq: "monthly" },
    { url: "/vision", priority: "0.8", changefreq: "monthly" },
    { url: "/reports", priority: "0.9", changefreq: "weekly" },
  ];

  const reportPages = reports.map((report) => ({
    url: `/reports/${report.slug}`,
    priority: "0.7",
    changefreq: "monthly",
    lastmod: new Date(report.publishedAt).toISOString().split("T")[0],
  }));

  const allPages = [...staticPages, ...reportPages];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod || currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const reports = getAllReports().map((r) => ({
    slug: r.slug,
    publishedAt: r.publishedAt,
  }));

  const sitemap = generateSitemap(reports);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  return null;
}

