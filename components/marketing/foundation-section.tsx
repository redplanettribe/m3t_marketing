import { Heart } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

export function FoundationSection() {
  return (
    <Section id="foundation" className="py-10 lg:py-14">
      <Container size="md">
        <div className="rounded-2xl border border-border/80 bg-gradient-to-br from-muted/50 to-muted/20 px-6 py-8 text-center sm:px-10">
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[var(--cta-lighter)] text-[var(--cta-primary)]">
            <Heart className="size-6" aria-hidden />
          </div>
          <h2 className="mt-4 text-xl font-semibold tracking-tight sm:text-2xl">Hosted under {siteConfig.foundationName}</h2>
          <p className="mt-3 text-muted-foreground sm:text-lg">
            Multi-Track Ticketing (m3t) is developed in the open with governance and community alignment through the{" "}
            <a
              href={siteConfig.foundationUrl}
              className="font-medium text-foreground underline decoration-[var(--cta-primary)]/40 underline-offset-4 transition-colors hover:decoration-[var(--cta-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              rel="noopener noreferrer"
              target="_blank"
            >
              {siteConfig.foundationName}
            </a>{" "}
            foundation—supporting tech communities in Ecuador and beyond.
          </p>
        </div>
      </Container>
    </Section>
  )
}
