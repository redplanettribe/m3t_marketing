import { generateSEO } from "@/lib/seo"
import { FeatureGrid } from "@/components/marketing/feature-grid"
import { FoundationSection } from "@/components/marketing/foundation-section"
import { MarketingFooter } from "@/components/marketing/marketing-footer"
import { MarketingHero } from "@/components/marketing/marketing-hero"
import { OpenSourceSection } from "@/components/marketing/open-source-section"
import { UseCasesSection } from "@/components/marketing/use-cases-section"

export const metadata = generateSEO({
  description:
    "Free, open-source event management: attendee flow control, multi-tier events, fast registration, virtual credentials, and native organizer & attendee apps.",
  keywords: [
    "multi-track ticketing",
    "event registration",
    "open source ticketing",
    "Flutter event app",
    "tiered event passes",
  ],
})

export default function HomePage() {
  return (
    <main id="main-content">
      <MarketingHero />
      <FeatureGrid />
      <UseCasesSection />
      <OpenSourceSection />
      <FoundationSection />
      <MarketingFooter />
    </main>
  )
}
