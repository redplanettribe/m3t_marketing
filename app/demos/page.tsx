import { ArrowLeft } from "lucide-react"
import { generateSEO } from "@/lib/seo"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { CTAButton } from "@/components/ui/cta-button"
import { YouTubeEmbed } from "@/components/ui/youtube-embed"
import { MarketingFooter } from "@/components/marketing/marketing-footer"

export const metadata = generateSEO({
  title: "Demos",
  description: "Product demos and walkthroughs for Multi-Track Ticketing (m3t).",
  url: "/demos",
  keywords: ["product demos", "walkthrough", "video"],
})

export default function DemosPage() {
  return (
    <main id="main-content">
      <Section className="border-b border-border/80 bg-muted/20">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Videos</p>
              <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">Demos</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Short, focused walkthroughs of key m3t flows. Click a video to load it (privacy-friendly embeds).
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <CTAButton href="/" variant="outline" className="group" icon={ArrowLeft}>
                Back to home
              </CTAButton>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold tracking-tight">What and Why</h2>
              <p className="text-muted-foreground">
                A quick overview of the experience and where m3t fits when you run multi-track programs.
              </p>
              <YouTubeEmbed videoId="KPKHeynhOug" title="m3t teaser demo" />
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-semibold tracking-tight">Full demo</h2>
              <p className="text-muted-foreground">A deeper walkthrough showing key functionality end-to-end.</p>
              <YouTubeEmbed videoId="n1Lp3QdqfAg" title="m3t full demo" />
            </div>
          </div>
        </Container>
      </Section>

      <MarketingFooter />
    </main>
  )
}

