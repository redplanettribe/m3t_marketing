import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { CTAButton } from "@/components/ui/cta-button"
import { YouTubeEmbed } from "@/components/ui/youtube-embed"

export function DemoTeaserSection() {
  return (
    <Section id="demo" className="border-b border-border/80 bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">See it in action</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A quick walkthrough of the attendee flow and the overall experience. For more focused clips, visit the demos
            page.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <CTAButton href="/demos" variant="outline" className="group" icon={ArrowRight} iconPosition="right">
              Watch all demos
            </CTAButton>
            <a
              href="#use-cases"
              className="inline-flex items-center text-sm font-semibold text-[var(--cta-primary)] underline decoration-[var(--cta-primary)]/30 underline-offset-4 transition-colors hover:decoration-[var(--cta-primary)]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Browse use cases
            </a>
          </div>
        </div>

        <div className="mt-10">
          <YouTubeEmbed
            videoId="KPKHeynhOug"
            title="m3t teaser demo"
            autoplayInViewport
            className="rounded-none border-x-0 sm:rounded-2xl sm:border-x"
          />
        </div>
      </div>
    </Section>
  )
}

