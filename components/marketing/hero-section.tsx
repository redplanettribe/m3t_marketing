import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { CTAButton } from "@/components/ui/cta-button"
import { DemoModal } from "@/components/marketing/demo-modal"
import { HeroMedia } from "@/components/marketing/hero-media"
import { HeroJourneyStrip } from "@/components/marketing/hero-journey-strip"

export function HeroSection() {
  return (
    <Section className="pt-10 lg:pt-14">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-subtle)]">
              Conference operations platform
            </p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
              Run the full attendee experience loop - and prove it worked.
            </h1>
            <p className="mt-5 text-pretty text-base text-[var(--text-muted)] sm:text-lg">
              m3t replaces the Frankenstein stack of ticketing, forms, check-in tools, spreadsheets, and chat.
              Operate and measure the experience end-to-end: register to analytics.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <DemoModal
                trigger={
                  <CTAButton variant="primary" size="lg">
                    Watch demo
                  </CTAButton>
                }
              />
              <CTAButton
                href={siteConfig.requestAccessUrl}
                variant="outline"
                size="lg"
                rel="noopener noreferrer"
                target="_blank"
              >
                Request access
              </CTAButton>
              <CTAButton href={siteConfig.contactSalesUrl} variant="ghost" size="lg">
                Contact sales
              </CTAButton>
            </div>

            <HeroJourneyStrip />
          </div>

          <div>
            <HeroMedia className="aspect-[16/10]" />
            <p className="mt-3 text-sm text-[var(--text-subtle)]">
              Invite-only Dashboard. First success moment: create your event shell (name, dates, venue).
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}

