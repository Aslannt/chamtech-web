import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, changeFrequency: "monthly", priority: 1 },
    {
      url: `${siteConfig.url}/playground`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projects.map((project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${siteConfig.url}/es`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${siteConfig.url}/es/playground`, changeFrequency: "monthly" as const, priority: 0.8 },
    ...projects.map((project) => ({
      url: `${siteConfig.url}/es/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
