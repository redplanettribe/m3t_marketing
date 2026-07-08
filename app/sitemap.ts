import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/pricing/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/contact/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ]
}
