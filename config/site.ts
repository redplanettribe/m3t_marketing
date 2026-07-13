export const siteConfig = {
  name: "Multiticketing",
  shortName: "Multiticketing",
  description:
    "All-in-one conference platform that replaces fragmented tools and improves attendee satisfaction end-to-end",
  url: "https://multiticketing.com",
  ogImage: "/opengraph-image.png",
  // English default, used by the unprefixed root gateway page (not locale-specific).
  keywords: [
    "conference operations platform",
    "conference platform",
    "event operations",
    "attendee experience",
    "event analytics",
    "multiticketing",
  ] as string[],
  keywordsByLocale: {
    en: [
      "conference operations platform",
      "conference platform",
      "event operations",
      "attendee experience",
      "event analytics",
      "multiticketing",
    ],
    es: [
      "plataforma de operaciones para congresos",
      "plataforma para congresos",
      "operaciones de eventos",
      "experiencia del asistente",
      "análisis de eventos",
      "multiticketing",
    ],
  } as Record<string, string[]>,

  dashboardUrl: "https://manager.multiticketing.com",

  contactSalesUrl: "mailto:info@redplanettribe.org",
  contactSalesLabel: "info@redplanettribe.org",

  legalHubUrl: "https://legal.multiticketing.com/",
}
