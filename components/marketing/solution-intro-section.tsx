import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

export function SolutionIntroSection() {
  return (
    <Section>
      <Container>
        <div className="rounded-[20px] border border-[var(--brand)]/25 bg-gradient-to-br from-[var(--brand-soft)] via-[var(--brand-soft)]/60 to-[var(--surface)] p-8 sm:p-12 lg:p-16">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center rounded-full bg-[var(--brand)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              The fix
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl">
              We built the conference operations platform that trades chaos for{" "}
              <span className="text-[var(--brand)]">calm</span>.
            </h2>
            <p className="mt-4 text-base text-[var(--text-muted)] sm:text-lg">
              One system for a low-stress, high-efficiency event day - with analytics that write your reports for
              you instead of the other way around.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
