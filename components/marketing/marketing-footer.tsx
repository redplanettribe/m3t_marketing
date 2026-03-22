import Image from "next/image"
import { Github } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/container"

export function MarketingFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image src="/favicon-light.svg" alt="" width={32} height={32} className="size-8 dark:hidden" aria-hidden />
          <Image src="/favicon-dark.svg" alt="" width={32} height={32} className="hidden size-8 dark:block" aria-hidden />
          <div>
            <p className="font-semibold text-foreground">{siteConfig.shortName}</p>
            <p className="text-sm text-muted-foreground">Multi-Track Ticketing</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Footer">
          <a
            href={siteConfig.githubOrg}
            className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github className="size-4" aria-hidden />
            GitHub
          </a>
          <a
            href={siteConfig.foundationUrl}
            className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            rel="noopener noreferrer"
            target="_blank"
          >
            {siteConfig.foundationName}
          </a>
          <a
            href="#features"
            className="text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Features
          </a>
        </nav>
      </Container>
      <Container className="mt-8 border-t border-border/60 pt-8">
        <p className="text-center text-sm text-muted-foreground">
          © {year} {siteConfig.name}. Open source under the{" "}
          <a
            href={siteConfig.githubOrg}
            className="underline decoration-border underline-offset-4 hover:text-foreground"
            rel="noopener noreferrer"
            target="_blank"
          >
            redplanettribe
          </a>{" "}
          organization.
        </p>
      </Container>
    </footer>
  )
}
