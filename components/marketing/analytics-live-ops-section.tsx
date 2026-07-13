import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

const bullets = [
  {
    title: "Live ops",
    items: ["Check-in pace and operational bottlenecks", "Track and room utilization"],
  },
  {
    title: "Attendee experience quality",
    items: ["Session feedback and satisfaction signals", "Engagement and participation indicators"],
  },
  {
    title: "Program planning",
    items: ["Know what to keep, cut, and schedule differently next time"],
  },
  {
    title: "Stakeholder and sponsor reporting",
    items: ["Outcome reporting that is credible without custom spreadsheet work"],
  },
] as const

export function AnalyticsLiveOpsSection() {
  return (
    <Section className="bg-[var(--surface-2)]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-subtle)]">Control tower</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
              Day-of clarity. Post-event credibility.
            </h2>
            <p className="mt-4 text-base text-[var(--text-muted)] sm:text-lg">
              Analytics is part of the product’s core value - now, not eventually.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {bullets.map((b) => (
              <div key={b.title} className="rounded-[10px] border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-sm font-semibold text-[var(--text)]">{b.title}</p>
                <ul className="mt-3 space-y-2 text-sm text-[var(--text-muted)]">
                  {b.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-[var(--brand)]" aria-hidden />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

