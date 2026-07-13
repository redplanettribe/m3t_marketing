"use client"

import * as React from "react"
import { useLocale, useTranslations } from "next-intl"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { YouTubeEmbed } from "@/components/ui/youtube-embed"

// Same video for every locale until a Spanish-language demo is produced.
const VIDEO_IDS: Record<string, string> = {
  en: "n1Lp3QdqfAg",
  es: "n1Lp3QdqfAg",
}

export function DemoModal({
  trigger,
  videoId,
}: {
  trigger: React.ReactNode
  videoId?: string
}) {
  const t = useTranslations("DemoModal")
  const locale = useLocale()

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-[min(1000px,calc(100%-2rem))] p-0" aria-label={t("ariaLabel")}>
        <div className="px-6 pt-6">
          <DialogTitle className="text-base font-semibold tracking-tight">{t("title")}</DialogTitle>
          <p className="mt-1 text-sm text-[var(--text-muted)]">{t("description")}</p>
        </div>
        <div className="px-6 pb-6 pt-4">
          <YouTubeEmbed
            videoId={videoId ?? VIDEO_IDS[locale] ?? VIDEO_IDS.en}
            title={t("videoTitle")}
            className="rounded-[10px] shadow-sm"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

