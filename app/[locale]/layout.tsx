import type React from "react"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { locales, type Locale } from "@/i18n/routing"
import { RootHtmlShell } from "@/components/root-html-shell"

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!locales.includes(locale as Locale)) notFound()

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <RootHtmlShell lang={locale}>
      <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
    </RootHtmlShell>
  )
}
