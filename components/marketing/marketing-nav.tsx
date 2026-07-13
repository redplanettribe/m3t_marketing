"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/container"
import { CTAButton } from "@/components/ui/cta-button"
import { DemoModal } from "@/components/marketing/demo-modal"

export function MarketingNav() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-[var(--bg)]/85 backdrop-blur supports-[backdrop-filter]:bg-[var(--bg)]/70",
        isScrolled ? "border-b border-[var(--border)]" : "border-b border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Multiticketing home">
          <Image src="/favicon-light-v2.svg" alt="" width={28} height={28} aria-hidden />
          <span className="text-sm font-semibold tracking-tight text-[var(--text)]">{siteConfig.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Primary">
          <Link className="text-[var(--text-muted)] hover:text-[var(--text)]" href="/pricing">
            Pricing
          </Link>
          <Link className="text-[var(--text-muted)] hover:text-[var(--text)]" href="/contact">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <DemoModal
            trigger={
              <CTAButton variant="outline" size="default">
                Watch demo
              </CTAButton>
            }
          />
          <CTAButton href={siteConfig.dashboardUrl} variant="primary" size="default">
            Start
          </CTAButton>
        </div>
      </Container>
    </header>
  )
}

