import { locales, type Locale } from "@/i18n/routing"

const LOCALE_STORAGE_KEY = "mt-locale"

function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

export function getStoredLocale(): Locale | undefined {
  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
  return stored && isLocale(stored) ? stored : undefined
}

export function setStoredLocale(locale: Locale): void {
  window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
}
