import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { locales, type Locale } from "@/i18n/routing"

const OG_LOCALES: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
}

interface SEOProps {
  locale: Locale
  title?: string
  description?: string
  image?: string
  /** Path within a locale, e.g. "/pricing". Omit for the locale's home page. */
  path?: string
  noIndex?: boolean
  keywords?: string[]
}

export function generateSEO({
  locale,
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  path = "",
  noIndex = false,
  keywords = [],
}: SEOProps): Metadata {
  const seoTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const seoUrl = `${siteConfig.url}/${locale}${path}`
  const allKeywords = [...siteConfig.keywords, ...keywords]

  return {
    title: seoTitle,
    description,
    ...(allKeywords.length > 0 ? { keywords: allKeywords } : {}),
    openGraph: {
      type: "website",
      locale: OG_LOCALES[locale],
      url: seoUrl,
      title: seoTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image.startsWith("http") ? image : `${siteConfig.url}${image}`,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
    },
    alternates: {
      canonical: seoUrl,
      languages: Object.fromEntries(locales.map((loc) => [loc, `${siteConfig.url}/${loc}${path}`])),
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description,
      images: [image.startsWith("http") ? image : `${siteConfig.url}${image}`],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}
