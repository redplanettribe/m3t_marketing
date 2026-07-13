import type React from "react"
import { inter } from "@/lib/fonts"
import { getWebsiteSchema } from "@/lib/schema"
import { AccessibilitySkipLinks } from "@/components/accessibility-skip-links"

export function RootHtmlShell({
  lang,
  children,
}: {
  lang: string
  children: React.ReactNode
}) {
  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebsiteSchema(lang)),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <AccessibilitySkipLinks />
        {children}
      </body>
    </html>
  )
}
