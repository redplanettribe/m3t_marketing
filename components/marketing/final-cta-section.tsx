import { useTranslations } from "next-intl"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { CTAButton } from "@/components/ui/cta-button"
import { DemoModal } from "@/components/marketing/demo-modal"

export function FinalCtaSection() {
  const t = useTranslations("Home.finalCta")

  return (
    <Section id="next-step" className="bg-[var(--surface-2)]">
      <Container>
        <div className="rounded-[10px] border border-[var(--border)] bg-[var(--surface)] px-6 py-10 sm:px-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-subtle)]">
                {t("eyebrow")}
              </p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
                {t("headline")}
              </h2>
              <p className="mt-4 text-base text-[var(--text-muted)] sm:text-lg">{t("subhead")}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <DemoModal
                trigger={
                  <CTAButton variant="outline" size="lg">
                    {t("watchDemo")}
                  </CTAButton>
                }
              />
              <CTAButton href={siteConfig.dashboardUrl} variant="primary" size="lg">
                {t("start")}
              </CTAButton>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

