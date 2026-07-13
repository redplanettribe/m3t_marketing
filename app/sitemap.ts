import type { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"
import { locales } from "@/i18n/routing"

export const dynamic = "force-static"

const pages: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/pricing/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact/", changeFrequency: "yearly", priority: 0.6 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return locales.flatMap((locale) =>
    pages.map(({ path, changeFrequency, priority }) => ({
      url: `${siteConfig.url}/${locale}${path === "/" ? "/" : path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((loc) => [loc, `${siteConfig.url}/${loc}${path === "/" ? "/" : path}`]),
        ),
      },
    })),
  )
}
