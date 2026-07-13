import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { generateSEO } from "@/lib/seo"
import { type Locale } from "@/i18n/routing"
import { MarketingFooter } from "@/components/marketing/marketing-footer"
import { MarketingNav } from "@/components/marketing/marketing-nav"
import { HeroSection } from "@/components/marketing/hero-section"
import { ProblemsSection } from "@/components/marketing/problems-section"
import { SolutionIntroSection } from "@/components/marketing/solution-intro-section"
import { ProductHighlightsSection } from "@/components/marketing/product-highlights-section"
import { FinalCtaSection } from "@/components/marketing/final-cta-section"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "Home.meta" })

  return generateSEO({
    locale,
    title: t("title"),
    description: t("description"),
    keywords: t.raw("keywords") as string[],
  })
}

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main id="main-content">
      <MarketingNav />
      <HeroSection />
      <ProblemsSection />
      <SolutionIntroSection />
      <ProductHighlightsSection />
      <FinalCtaSection />
      <MarketingFooter />
    </main>
  )
}
