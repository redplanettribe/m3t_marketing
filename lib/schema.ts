import { siteConfig } from "@/config/site"

const foundation = {
  "@type": "Organization",
  name: siteConfig.foundationName,
  url: siteConfig.foundationUrl,
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: "en",
      publisher: { "@id": `${siteConfig.url}#publisher` },
    },
    {
      "@id": `${siteConfig.url}#software`,
      "@type": "SoftwareApplication",
      name: siteConfig.name,
      alternateName: siteConfig.shortName,
      url: siteConfig.url,
      description: siteConfig.description,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      publisher: { "@id": `${siteConfig.url}#publisher` },
      provider: { "@id": `${siteConfig.url}#publisher` },
    },
    {
      "@id": `${siteConfig.url}#publisher`,
      ...foundation,
    },
  ],
}
