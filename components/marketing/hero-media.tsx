"use client"

import * as React from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false)

  React.useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onChange = () => setReduced(query.matches)
    onChange()
    query.addEventListener("change", onChange)
    return () => query.removeEventListener("change", onChange)
  }, [])

  return reduced
}

export function HeroMedia({ className }: { className?: string }) {
  const reducedMotion = usePrefersReducedMotion()
  const t = useTranslations("Home.hero")

  return (
    <div className={cn("relative overflow-hidden rounded-[10px] border border-[var(--border)] bg-[var(--surface)]", className)}>
      {reducedMotion ? (
        <div className="relative aspect-[16/10]">
          <Image
            src="/opengraph-image.png"
            alt={t("imageAlt")}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      ) : (
        <video
          className="block h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={t("videoAlt")}
        >
          <source src="/hero-loop.mp4" type="video/mp4" />
        </video>
      )}

      <div className="pointer-events-none absolute inset-0 ring-1 ring-black/0" aria-hidden />
    </div>
  )
}

