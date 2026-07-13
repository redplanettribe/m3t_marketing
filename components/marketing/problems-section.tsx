import { Clock, FileSpreadsheet, MessagesSquare, Users } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

const problems = [
  {
    icon: Clock,
    title: "Queues at every touchpoint",
    description:
      "Check-in, deliverables, session sign-ups - anything handled in person or on paper turns into a bottleneck and a line of frustrated attendees.",
  },
  {
    icon: MessagesSquare,
    title: "Staff can't reach a crowd",
    description:
      "Herding people by word of mouth and walkie-talkie only ever reaches a few - never the attendees who actually needed to hear it.",
  },
  {
    icon: FileSpreadsheet,
    title: "Reporting is manual archaeology",
    description:
      "Proving value to sponsors and stakeholders means digging through spreadsheets and notes after the fact, instead of pulling numbers that were tracked all along.",
  },
  {
    icon: Users,
    title: "Networking nobody can measure",
    description:
      "Networking activities are hard to organize, reach a fraction of attendees, and leave no way to show whether any of it actually worked.",
  },
] as const

export function ProblemsSection() {
  return (
    <Section className="pt-6 lg:pt-10">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-subtle)]">
            Running events today
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
            A frankenstein of tools means a mountain of admin.
          </h2>
          <p className="mt-4 text-base text-[var(--text-muted)] sm:text-lg">
            Without a system built for it, running an event on a regular basis means re-solving the same problems
            every single time.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {problems.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="rounded-[10px] border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-[var(--danger)]/10 text-[var(--danger)]">
                <Icon className="size-5" aria-hidden />
              </div>
              <p className="mt-4 text-base font-semibold text-[var(--text)]">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
