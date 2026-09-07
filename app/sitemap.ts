import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/trabajo`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...projects.map((p) => ({
      url: `${siteConfig.url}/trabajo/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
