import { generateSEO } from "@/lib/seo"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { MarketingNav } from "@/components/marketing/marketing-nav"
import { MarketingFooter } from "@/components/marketing/marketing-footer"
import { CTAButton } from "@/components/ui/cta-button"

export const metadata = generateSEO({
  title: "Contact",
  description: "Contact sales to discuss conference operations, demo access, and the Multiticketing dashboard.",
  url: "/contact",
  keywords: ["contact sales", "conference operations", "demo"],
})

export default function ContactPage() {
  return (
    <main id="main-content">
      <MarketingNav />
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-subtle)]">Contact sales</p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl">
              Let’s talk about your next event.
            </h1>
            <p className="mt-5 text-base text-[var(--text-muted)] sm:text-lg">
              Email us with a quick overview of your conference, timeline, and operational pain points.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={siteConfig.contactSalesUrl} variant="primary" size="lg">
                Email {siteConfig.contactSalesLabel}
              </CTAButton>
              <CTAButton href={siteConfig.dashboardUrl} variant="outline" size="lg">
                Start
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>
      <MarketingFooter />
    </main>
  )
}

