import { generateSEO } from "@/lib/seo"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { MarketingNav } from "@/components/marketing/marketing-nav"
import { MarketingFooter } from "@/components/marketing/marketing-footer"

export const metadata = generateSEO({
  title: "Pricing",
  description: "Enterprise pricing for professional conference producers. Tiered per event and attendee headcount.",
  url: "/pricing",
  keywords: ["conference pricing", "enterprise pricing", "event platform pricing"],
})

export default function PricingPage() {
  return (
    <main id="main-content">
      <MarketingNav />
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-subtle)]">Pricing</p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl">
              Enterprise, sales-led.
            </h1>
            <p className="mt-5 text-base text-[var(--text-muted)] sm:text-lg">
              m3t is sold via negotiated enterprise contracts.
              Pricing is tiered by per-event scope and attendee headcount.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[10px] border border-[var(--border)] bg-[var(--surface)] p-6">
                <p className="text-sm font-semibold text-[var(--text)]">Professional conferences</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  Designed for teams that feel the pain of fragmented tools and need an end-to-end operating system.
                </p>
              </div>
              <div className="rounded-[10px] border border-[var(--border)] bg-[var(--surface)] p-6">
                <p className="text-sm font-semibold text-[var(--text)]">GDG chapters</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  Offered free worldwide as a secondary program.
                  It does not define the primary commercial model.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <MarketingFooter />
    </main>
  )
}

