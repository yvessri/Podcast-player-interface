"use client"

import { MoreHorizontal } from "lucide-react"
import type { Episode } from "@/lib/data"
import { PlayPill } from "./play-pill"

export function EpisodeListItem({ episode, onOpen }: { episode: Episode; onOpen?: () => void }) {
  return (
    <article className="border-b border-border py-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {episode.episode}
      </p>
      <button
        type="button"
        onClick={onOpen}
        className="mt-1 block text-left text-lg font-semibold text-foreground hover:underline"
      >
        {episode.title}
      </button>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
        {episode.description}
      </p>
      <div className="mt-3 flex items-center justify-between">
        <PlayPill duration={episode.duration} />
        <button type="button" aria-label="ตัวเลือกเพิ่มเติม" className="text-muted-foreground hover:text-foreground">
          <MoreHorizontal className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}
