"use client"

import * as React from "react"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { YouTubeEmbed } from "@/components/ui/youtube-embed"

export function DemoModal({
  trigger,
  videoId = "n1Lp3QdqfAg",
}: {
  trigger: React.ReactNode
  videoId?: string
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-[min(1000px,calc(100%-2rem))] p-0" aria-label="Demo video">
        <div className="px-6 pt-6">
          <DialogTitle className="text-base font-semibold tracking-tight">Product demo</DialogTitle>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            A quick walkthrough of the attendee experience loop and the operator control tower.
          </p>
        </div>
        <div className="px-6 pb-6 pt-4">
          <YouTubeEmbed videoId={videoId} title="m3t full demo" className="rounded-[10px] shadow-sm" />
        </div>
      </DialogContent>
    </Dialog>
  )
}

