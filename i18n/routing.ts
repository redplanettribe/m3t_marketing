export const locales = ["en", "es"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export function stripLocaleFromPathname(pathname: string): string {
  return pathname.replace(new RegExp(`^/(${locales.join("|")})`), "") || "/"
}
