import { Clock, FileSpreadsheet, MessagesSquare, Users } from "lucide-react"
import { useTranslations } from "next-intl"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

const icons = [Clock, MessagesSquare, FileSpreadsheet, Users] as const

export function ProblemsSection() {
  const t = useTranslations("Home.problems")
  const items = t.raw("items") as { title: string; description: string }[]

  return (
    <Section className="pt-6 lg:pt-10">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-subtle)]">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
            {t("headline")}
          </h2>
          <p className="mt-4 text-base text-[var(--text-muted)] sm:text-lg">{t("subhead")}</p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {items.map(({ title, description }, index) => {
            const Icon = icons[index]
            return (
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
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}
