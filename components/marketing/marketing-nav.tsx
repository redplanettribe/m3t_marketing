"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLocale, useTranslations } from "next-intl"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/container"
import { CTAButton } from "@/components/ui/cta-button"
import { DemoModal } from "@/components/marketing/demo-modal"
import { locales } from "@/i18n/routing"
import { LOCALE_STORAGE_KEY } from "@/lib/locale-preference"

export function MarketingNav() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const locale = useLocale()
  const pathname = usePathname()
  const t = useTranslations("Nav")

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const pathWithoutLocale = pathname.replace(new RegExp(`^/(${locales.join("|")})`), "") || "/"

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-[var(--bg)]/85 backdrop-blur supports-[backdrop-filter]:bg-[var(--bg)]/70",
        isScrolled ? "border-b border-[var(--border)]" : "border-b border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-3" aria-label={t("homeAriaLabel")}>
          <Image src="/favicon-light-v2.svg" alt="" width={28} height={28} aria-hidden />
          <span className="text-sm font-semibold tracking-tight text-[var(--text)]">{siteConfig.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Primary">
          <Link className="text-[var(--text-muted)] hover:text-[var(--text)]" href={`/${locale}/pricing`}>
            {t("pricing")}
          </Link>
          <Link className="text-[var(--text-muted)] hover:text-[var(--text)]" href={`/${locale}/contact`}>
            {t("contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <nav className="flex items-center gap-1 text-sm" aria-label="Language">
            {locales.map((loc) => (
              <Link
                key={loc}
                href={`/${loc}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`}
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.localStorage.setItem(LOCALE_STORAGE_KEY, loc)
                  }
                }}
                aria-current={loc === locale ? "true" : undefined}
                className={cn(
                  "rounded-md px-1.5 py-1 uppercase",
                  loc === locale
                    ? "font-semibold text-[var(--text)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]",
                )}
              >
                {loc}
              </Link>
            ))}
          </nav>
          <DemoModal
            trigger={
              <CTAButton variant="outline" size="default">
                {t("watchDemo")}
              </CTAButton>
            }
          />
          <CTAButton href={siteConfig.dashboardUrl} variant="primary" size="default">
            {t("start")}
          </CTAButton>
        </div>
      </Container>
    </header>
  )
}

