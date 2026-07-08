import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

const steps = [
  {
    title: "Register",
    description: "Fast registration that handles spikes without turning into a support incident.",
  },
  {
    title: "Personal agenda",
    description: "Attendees build their schedule and discover what matters to them across tracks.",
  },
  {
    title: "Interact",
    description: "Participation signals across sessions and spaces - not just a badge scan.",
  },
  {
    title: "Feedback",
    description: "Session feedback that captures experience quality while the event is still live.",
  },
  {
    title: "Analytics",
    description: "A control-tower view that connects ops, experience, and reporting in one system.",
  },
] as const

export function JourneyLoopSection() {
  return (
    <Section className="pt-6 lg:pt-10">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-subtle)]">Attendee journey loop</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
            Designed as a full loop, operated as a system.
          </h2>
          <p className="mt-4 text-base text-[var(--text-muted)] sm:text-lg">
            Replace fragmented tools with one coherent flow - and measure each step.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-5">
          {steps.map((s, idx) => (
            <li key={s.title} className="rounded-[10px] border border-[var(--border)] bg-[var(--surface)] p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-subtle)]">
                {String(idx + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-base font-semibold text-[var(--text)]">{s.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{s.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}

