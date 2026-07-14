import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { generateSEO } from "@/lib/seo"
import { siteConfig } from "@/config/site"
import { type Locale } from "@/i18n/routing"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { MarketingNav } from "@/components/marketing/marketing-nav"
import { MarketingFooter } from "@/components/marketing/marketing-footer"
import { CTAButton } from "@/components/ui/cta-button"
import Image from "next/image"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "Contact.meta" })

  return generateSEO({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/contact",
    keywords: t.raw("keywords") as string[],
  })
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "Contact" })

  return (
    <main id="main-content">
      <MarketingNav />
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-subtle)]">
              {t("eyebrow")}
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl">
              {t("headline")}
            </h1>
            <p className="mt-5 text-base text-[var(--text-muted)] sm:text-lg">{t("subhead")}</p>

            <div className="relative mt-10 aspect-[1200/896] overflow-hidden rounded-[10px] border border-[var(--border)] bg-[var(--surface)] shadow-sm">
              <Image
                src="/attendee app.png"
                alt={t("imageAlt")}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={siteConfig.contactSalesUrl} variant="primary" size="lg">
                {t("emailCta", { email: siteConfig.contactSalesLabel })}
              </CTAButton>
              <CTAButton href={siteConfig.dashboardUrl} variant="outline" size="lg">
                {t("start")}
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>
      <MarketingFooter />
    </main>
  )
}
