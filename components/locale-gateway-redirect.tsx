"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { locales, defaultLocale, type Locale } from "@/i18n/routing"
import { getStoredLocale, setStoredLocale } from "@/lib/locale-preference"

function detectBrowserLocale(): Locale | undefined {
  const browserLanguages = navigator.languages ?? [navigator.language]
  return browserLanguages
    .map((lang) => lang.slice(0, 2).toLowerCase())
    .find((lang): lang is Locale => (locales as readonly string[]).includes(lang))
}

export function LocaleGatewayRedirect() {
  const router = useRouter()

  useEffect(() => {
    const locale = getStoredLocale() ?? detectBrowserLocale() ?? defaultLocale
    setStoredLocale(locale)
    router.replace(`/${locale}/`)
  }, [router])

  return null
}
