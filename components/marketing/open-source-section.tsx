import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CTAButton } from "@/components/ui/cta-button"

const repos = [
  {
    name: "m3t_be",
    role: "Backend API",
    description: "Go, PostgreSQL, Clean Architecture, OpenAPI—core HTTP API for every client.",
    href: "https://github.com/redplanettribe/m3t_be",
  },
  {
    name: "m3t_organizer_app",
    role: "Organizer app",
    description: "Flutter app for staff and organizers managing events on the go.",
    href: "https://github.com/redplanettribe/m3t_organizer_app",
  },
  {
    name: "m3t_atendee_app",
    role: "Attendee app",
    description: "Flutter app for participants—tickets, credentials, and event flow in their pocket.",
    href: "https://github.com/redplanettribe/m3t_atendee_app",
  },
  {
    name: "m3t_admin_fe",
    role: "Admin web",
    description: "React admin SPA for configuration, operations, and day-of control.",
    href: "https://github.com/redplanettribe/m3t_admin_fe",
  },
] as const

export function OpenSourceSection() {
  return (
    <Section id="open-source" className="border-y border-border/80 bg-muted/20">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Fully open source</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Backend, mobile apps, and admin UI live in public repos under{" "}
              <span className="font-medium text-foreground">redplanettribe</span>. Self-host, extend, or contribute—no
              black box.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-4">
            <Image
              src="/logos/icon_master.png"
              alt=""
              width={64}
              height={64}
              className="size-14 rounded-xl shadow-sm"
              aria-hidden
            />
            <CTAButton
              href={siteConfig.githubOrg}
              variant="outline"
              size="default"
              icon={Github}
              rel="noopener noreferrer"
              target="_blank"
            >
              All m3t repositories
            </CTAButton>
          </div>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {repos.map((repo) => (
            <li key={repo.name}>
              <a
                href={repo.href}
                rel="noopener noreferrer"
                target="_blank"
                className="group block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Card className="h-full border-border/80 transition-all group-hover:border-[var(--cta-primary)]/35 group-hover:shadow-md">
                  <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0">
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--cta-primary)]">
                        {repo.role}
                      </p>
                      <CardTitle className="font-mono text-lg group-hover:text-[var(--cta-primary)]">
                        {repo.name}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">{repo.description}</CardDescription>
                    </div>
                    <ExternalLink
                      className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-[var(--cta-primary)]"
                      aria-hidden
                    />
                  </CardHeader>
                </Card>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
