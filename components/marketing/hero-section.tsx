import { useLocale, useTranslations } from "next-intl"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { CTAButton } from "@/components/ui/cta-button"
import { DemoModal } from "@/components/marketing/demo-modal"
import { HeroMedia } from "@/components/marketing/hero-media"

export function HeroSection() {
  const t = useTranslations("Home.hero")
  const locale = useLocale()

  return (
    <Section className="pt-10 lg:pt-14">
      <Container>
        <div className="relative overflow-hidden rounded-[10px] min-h-[520px] sm:min-h-[420px] lg:min-h-[480px]">
          <HeroMedia className="absolute inset-0 h-full w-full" />

          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent sm:bg-gradient-to-r sm:from-black/85 sm:via-black/60 sm:to-transparent/0"
            aria-hidden
          />

          <div className="relative flex min-h-[520px] items-end sm:min-h-[420px] sm:items-center lg:min-h-[480px]">
            <div className="max-w-xl px-6 py-8 sm:px-10 sm:py-12 lg:px-12">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/70">{t("eyebrow")}</p>
              <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {t("headline")}
              </h1>
              <p className="mt-5 text-pretty text-base text-white/80 sm:text-lg">{t("subhead")}</p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <CTAButton href={siteConfig.dashboardUrl} variant="primary" size="lg">
                  {t("start")}
                </CTAButton>
                <DemoModal
                  trigger={
                    <CTAButton
                      variant="outline"
                      size="lg"
                      className="border-white/50 text-white hover:bg-white/10"
                    >
                      {t("watchDemo")}
                    </CTAButton>
                  }
                />
                <CTAButton
                  href={`/${locale}/contact`}
                  variant="ghost"
                  size="lg"
                  className="text-white/80 hover:bg-white/10 hover:text-white"
                >
                  {t("contact")}
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

