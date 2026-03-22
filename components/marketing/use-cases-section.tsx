import { GitBranch, Timer, Ticket } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const cases = [
  {
    icon: GitBranch,
    title: "Multi-track balance",
    description:
      "When you run parallel tracks, m3t helps distribute attendees evenly so no room is empty while another overflows.",
  },
  {
    icon: Timer,
    title: "High-pressure registration",
    description:
      "Ideal for launches and on-sale moments when speed and reliability matter more than fancy form fields.",
  },
  {
    icon: Ticket,
    title: "Tiered passes and perks",
    description:
      "Sell or grant different access levels—swag, lounges, workshops—tied to the pass someone actually holds.",
  },
] as const

export function UseCasesSection() {
  return (
    <Section id="use-cases">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Great for</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Teams that outgrow generic ticketing when the event itself is the product.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {cases.map(({ icon: Icon, title, description }) => (
            <li key={title}>
              <Card className="h-full border-border/80 bg-card transition-shadow hover:shadow-md">
                <CardHeader className="space-y-4">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--cta-primary)]/15 to-[var(--cta-accent)]/15 text-[var(--cta-primary)]">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <CardTitle className="text-xl">{title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
