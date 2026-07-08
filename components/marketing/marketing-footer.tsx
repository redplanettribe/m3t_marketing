import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/container"

export function MarketingFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-[var(--surface-2)] py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image src="/favicon-light-v2.svg" alt="" width={32} height={32} className="size-8" aria-hidden />
          <div>
            <p className="font-semibold text-foreground">{siteConfig.shortName}</p>
            <p className="text-sm text-muted-foreground">Conference operations platform</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Footer">
          <Link className="text-muted-foreground transition-colors hover:text-foreground" href="/pricing">
            Pricing
          </Link>
          <Link className="text-muted-foreground transition-colors hover:text-foreground" href="/contact">
            Contact
          </Link>
          <a
            href={siteConfig.legalHubUrl}
            className="text-muted-foreground transition-colors hover:text-foreground"
            rel="noopener noreferrer"
            target="_blank"
          >
            Privacy
          </a>
          <a
            href={siteConfig.legalHubUrl}
            className="text-muted-foreground transition-colors hover:text-foreground"
            rel="noopener noreferrer"
            target="_blank"
          >
            Terms
          </a>
        </nav>
      </Container>
      <Container className="mt-8 border-t border-border/60 pt-8">
        <p className="text-center text-sm text-muted-foreground">
          © {year} {siteConfig.name}.{" "}
          <a href={siteConfig.contactSalesUrl} className="underline decoration-border underline-offset-4 hover:text-foreground">
            {siteConfig.contactSalesLabel}
          </a>
        </p>
      </Container>
    </footer>
  )
}
