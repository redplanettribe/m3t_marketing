import { generateSEO } from "@/lib/seo"
import { MarketingFooter } from "@/components/marketing/marketing-footer"
import { MarketingNav } from "@/components/marketing/marketing-nav"
import { HeroSection } from "@/components/marketing/hero-section"
import { JourneyLoopSection } from "@/components/marketing/journey-loop-section"
import { AnalyticsLiveOpsSection } from "@/components/marketing/analytics-live-ops-section"
import { IntegrationsSection } from "@/components/marketing/integrations-section"
import { SocialProofSection } from "@/components/marketing/social-proof-section"
import { GdgBandSection } from "@/components/marketing/gdg-band-section"
import { FinalCtaSection } from "@/components/marketing/final-cta-section"

export const metadata = generateSEO({
  description:
    "All-in-one conference operations platform that replaces fragmented tools and improves attendee satisfaction end-to-end.",
  keywords: [
    "conference operations platform",
    "conference platform",
    "event operations",
    "attendee experience",
    "event analytics",
    "check-in analytics",
  ],
})

export default function HomePage() {
  return (
    <main id="main-content">
      <MarketingNav />
      <HeroSection />
      <JourneyLoopSection />
      <AnalyticsLiveOpsSection />
      <IntegrationsSection />
      <SocialProofSection />
      <GdgBandSection />
      <FinalCtaSection />
      <MarketingFooter />
    </main>
  )
}
