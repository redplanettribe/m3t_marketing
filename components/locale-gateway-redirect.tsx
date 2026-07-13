"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { locales, defaultLocale, type Locale } from "@/i18n/routing"
import { LOCALE_STORAGE_KEY } from "@/lib/locale-preference"

function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

export function LocaleGatewayRedirect() {
  const router = useRouter()

  useEffect(() => {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    if (stored && isLocale(stored)) {
      router.replace(`/${stored}/`)
      return
    }

    const browserLanguages = navigator.languages ?? [navigator.language]
    const detected = browserLanguages.map((lang) => lang.slice(0, 2).toLowerCase()).find(isLocale)

    router.replace(`/${detected ?? defaultLocale}/`)
  }, [router])

  return null
}
