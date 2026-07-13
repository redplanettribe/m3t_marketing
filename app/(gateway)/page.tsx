import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { LocaleGatewayRedirect } from "@/components/locale-gateway-redirect"

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  alternates: {
    canonical: `${siteConfig.url}/en/`,
    languages: {
      en: `${siteConfig.url}/en/`,
      es: `${siteConfig.url}/es/`,
    },
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function LocaleGatewayPage() {
  return (
    <main id="main-content" className="flex min-h-screen items-center justify-center px-6 text-center">
      <LocaleGatewayRedirect />
      <div>
        <p className="text-sm font-semibold text-[var(--text-muted)]">{siteConfig.shortName}</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--text)]">
          Choose your language / Elige tu idioma
        </h1>
        <div className="mt-6 flex justify-center gap-6 text-base font-semibold">
          <Link href="/en/" className="text-[var(--brand)] hover:text-[var(--brand-hover)]">
            English
          </Link>
          <Link href="/es/" className="text-[var(--brand)] hover:text-[var(--brand-hover)]">
            Español
          </Link>
        </div>
      </div>
    </main>
  )
}
