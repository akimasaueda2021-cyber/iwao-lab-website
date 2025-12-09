import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Report } from "../components/data/reports";

const reportsDirectory = path.join(process.cwd(), "content/reports");

export function getAllReports(): Report[] {
  if (!fs.existsSync(reportsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(reportsDirectory);
  const allReportsData = fileNames
    .filter((name) => name.endsWith(".md") && name !== "README.md")
    .map((fileName) => {
      const fullPath = path.join(reportsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        id: data.id || "",
        slug: data.slug || fileName.replace(/\.md$/, ""),
        title: data.title || "",
        publishedAt: data.publishedAt || new Date().toISOString(),
        category: data.category || "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        summary: data.summary || "",
        thumbnailUrl: data.thumbnailUrl || undefined,
        body: content,
      };
    });

  return allReportsData.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
}

export async function getReportBySlug(slug: string): Promise<Report | null> {
  const allReports = getAllReports();
  return allReports.find((r) => r.slug === slug) || null;
}

export async function getReportBodyAsHtml(body: string): Promise<string> {
  const processedContent = await remark().use(html).process(body);
  return processedContent.toString();
}

export function getCategories(): string[] {
  const reports = getAllReports();
  const set = new Set<string>();
  reports.forEach((r) => set.add(r.category));
  return Array.from(set).sort();
}

export function getYears(): string[] {
  const reports = getAllReports();
  const set = new Set<string>();
  reports.forEach((r) => {
    const year = new Date(r.publishedAt).getFullYear().toString();
    set.add(year);
  });
  return Array.from(set).sort((a, b) => Number(b) - Number(a));
}

