import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { CTAButton } from "@/components/ui/cta-button"
import { DemoModal } from "@/components/marketing/demo-modal"
import { HeroMedia } from "@/components/marketing/hero-media"

export function HeroSection() {
  return (
    <Section className="pt-10 lg:pt-14">
      <Container>
        <div className="relative overflow-hidden rounded-[10px]">
          <HeroMedia className="aspect-[4/5] w-full sm:aspect-[16/9] lg:aspect-[21/9]" />

          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent sm:bg-gradient-to-r sm:from-black/85 sm:via-black/60 sm:to-transparent/0"
            aria-hidden
          />

          <div className="absolute inset-0 flex items-end sm:items-center">
            <div className="max-w-xl px-6 py-8 sm:px-10 sm:py-12 lg:px-12">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
                Tired of drowning in event admin?
              </p>
              <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Organize events with the system you deserve.
              </h1>
              <p className="mt-5 text-pretty text-base text-white/80 sm:text-lg">
                This is the conference operations platform that replaces your Frankenstein stack of ticketing,
                forms, check-in tools, and spreadsheets - so event day stays low-stress, runs efficiently, and
                reporting is effortless.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <CTAButton href={siteConfig.dashboardUrl} variant="primary" size="lg">
                  Start
                </CTAButton>
                <DemoModal
                  trigger={
                    <CTAButton
                      variant="outline"
                      size="lg"
                      className="border-white/50 text-white hover:bg-white/10"
                    >
                      Watch demo
                    </CTAButton>
                  }
                />
                <CTAButton
                  href="/contact"
                  variant="ghost"
                  size="lg"
                  className="text-white/80 hover:bg-white/10 hover:text-white"
                >
                  Contact
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

