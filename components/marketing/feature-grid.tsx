import { Layers, Zap, BadgeCheck, Smartphone, Users } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Users,
    title: "Attendee flow control",
    description:
      "Guide how people move between tracks and sessions so venues stay balanced and every experience stays on schedule.",
  },
  {
    icon: Layers,
    title: "Multi-tiered events",
    description:
      "Model passes, tracks, and access levels in one system—perfect for conferences with VIP areas, workshops, or parallel agendas.",
  },
  {
    icon: Zap,
    title: "Extremely fast registration",
    description:
      "Built for moments when hundreds register at once: minimal friction from signup to confirmed seat.",
  },
  {
    icon: BadgeCheck,
    title: "Virtual credentials",
    description:
      "Issue and verify digital passes so staff can validate access without paper chaos—online or at the door.",
  },
  {
    icon: Smartphone,
    title: "On-device apps",
    description:
      "Organizer and attendee experiences on mobile, aligned with the same API and rules as your admin tools.",
  },
] as const

export function FeatureGrid() {
  return (
    <Section id="features" className="bg-muted/30">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Built for serious events</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to run multi-track programs with confidence—from first registration to last scan.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <li key={title}>
              <Card className="h-full border-border/80 transition-shadow hover:shadow-md">
                <CardHeader className="space-y-3">
                  <div className="flex size-11 items-center justify-center rounded-lg bg-[var(--cta-lighter)] text-[var(--cta-primary)]">
                    <Icon className="size-5" aria-hidden />
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
