import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

export function GdgBandSection() {
  return (
    <Section>
      <Container>
        <div className="rounded-[10px] border border-[var(--border)] bg-[var(--brand-soft)] px-6 py-8 sm:px-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-subtle)]">GDG chapters</p>
          <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl">
            Offered free worldwide for GDG chapters.
          </h2>
          <p className="mt-3 max-w-3xl text-base text-[var(--text-muted)]">
            This is an exception.
            For professional conference producers, m3t is sold via negotiated enterprise contracts with tiered pricing
            based on per-event and attendee headcount.
          </p>
        </div>
      </Container>
    </Section>
  )
}

