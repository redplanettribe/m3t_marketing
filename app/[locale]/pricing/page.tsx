import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { generateSEO } from "@/lib/seo"
import { type Locale } from "@/i18n/routing"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { MarketingNav } from "@/components/marketing/marketing-nav"
import { MarketingFooter } from "@/components/marketing/marketing-footer"
import { CTAButton } from "@/components/ui/cta-button"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "Pricing.meta" })

  return generateSEO({
    locale,
    title: t("title"),
    description: t("description"),
    path: "/pricing",
    keywords: t.raw("keywords") as string[],
  })
}

export default async function PricingPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "Pricing" })

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

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[10px] border border-[var(--border)] bg-[var(--surface)] p-6">
                <p className="text-sm font-semibold text-[var(--text)]">{t("professional.title")}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {t("professional.description")}
                </p>
              </div>
              <div className="rounded-[10px] border border-[var(--border)] bg-[var(--surface)] p-6">
                <p className="text-sm font-semibold text-[var(--text)]">{t("gdg.title")}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{t("gdg.description")}</p>
              </div>
            </div>

            <div className="mt-10">
              <CTAButton href={`/${locale}/contact`} variant="primary" size="lg">
                {t("cta")}
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>
      <MarketingFooter />
    </main>
  )
}
