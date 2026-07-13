import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

export function IntegrationsSection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-subtle)]">Replace the stack</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
              Stop duct-taping tools together.
            </h2>
            <p className="mt-4 text-base text-[var(--text-muted)] sm:text-lg">
              Multiticketing replaces the Frankenstein stack - and it can still sit alongside ticketing-only tools when that’s the
              right move.
            </p>
          </div>

          <div className="rounded-[10px] border border-[var(--border)] bg-[var(--surface)] p-6">
            <p className="text-sm font-semibold text-[var(--text)]">Integrations stance</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
              You don’t have to rip and replace everything on day one.
              Keep your ticketing-only tool and upgrade the rest of the operations stack.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[10px] border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3">
                <p className="text-sm font-semibold text-[var(--text)]">Luma</p>
                <p className="mt-1 text-xs text-[var(--text-subtle)]">Ticketing-only example</p>
              </div>
              <div className="rounded-[10px] border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3">
                <p className="text-sm font-semibold text-[var(--text)]">Eventbrite</p>
                <p className="mt-1 text-xs text-[var(--text-subtle)]">Ticketing-only example</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

