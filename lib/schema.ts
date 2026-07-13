import { siteConfig } from "@/config/site"

export function getWebsiteSchema(inLanguage: string = "en") {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        inLanguage,
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
        publisher: { "@id": `${siteConfig.url}#publisher` },
        provider: { "@id": `${siteConfig.url}#publisher` },
      },
      {
        "@id": `${siteConfig.url}#publisher`,
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    ],
  }
}
