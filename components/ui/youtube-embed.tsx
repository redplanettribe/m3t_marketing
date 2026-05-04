"use client"

import * as React from "react"
import { Play } from "lucide-react"
import { cn } from "@/lib/utils"

export interface YouTubeEmbedProps extends React.HTMLAttributes<HTMLDivElement> {
  videoId: string
  title: string
  autoplayInViewport?: boolean
  viewportThreshold?: number
}

export function YouTubeEmbed({
  videoId,
  title,
  autoplayInViewport = false,
  viewportThreshold = 0.6,
  className,
  ...props
}: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const rootRef = React.useRef<HTMLDivElement | null>(null)

  const embedSrc = React.useMemo(() => {
    const params = new URLSearchParams({
      autoplay: "1",
      mute: autoplayInViewport ? "1" : "0",
      playsinline: "1",
      rel: "0",
      modestbranding: "1",
    })

    return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?${params.toString()}`
  }, [autoplayInViewport, videoId])

  React.useEffect(() => {
    if (!autoplayInViewport || isPlaying) return
    const node = rootRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setIsPlaying(true)
          observer.disconnect()
        }
      },
      { threshold: viewportThreshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [autoplayInViewport, isPlaying, viewportThreshold])

  return (
    <div
      ref={rootRef}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border/80 bg-muted/20 shadow-sm",
        className,
      )}
      {...props}
    >
      <div className="relative aspect-video">
        {isPlaying ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={embedSrc}
            title={title}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-br from-background/35 via-background/10 to-background/35 text-foreground transition-colors hover:bg-background/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={`Play video: ${title}`}
          >
            <span className="flex items-center gap-3 rounded-full border border-border/70 bg-background/80 px-5 py-3 shadow-sm backdrop-blur-sm transition-transform group-hover:scale-[1.02]">
              <span className="flex size-10 items-center justify-center rounded-full bg-[var(--cta-lighter)] text-[var(--cta-primary)]">
                <Play className="size-5 translate-x-[1px]" aria-hidden />
              </span>
              <span className="text-sm font-semibold sm:text-base">Play demo</span>
            </span>
          </button>
        )}
      </div>
    </div>
  )
}

