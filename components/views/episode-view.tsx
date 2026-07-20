"use client"

import { ChevronRight, MoreHorizontal, Share } from "lucide-react"
import { episodeDetail, people } from "@/lib/data"
import { Artwork } from "../artwork"
import { PlayPill } from "../play-pill"

type EpisodeViewProps = {
  onOpenShow: () => void
}

export function EpisodeView({ onOpenShow }: EpisodeViewProps) {
  return (
    <article className="max-w-3xl space-y-6">
      <div className="flex justify-end gap-2">
        <button
          type="button"
          aria-label="แชร์"
          className="inline-flex items-center rounded-full border border-border bg-card px-3 py-2 text-foreground hover:bg-accent"
        >
          <Share className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="ตัวเลือกเพิ่มเติม"
          className="inline-flex items-center rounded-full border border-border bg-card px-3 py-2 text-foreground hover:bg-accent"
        >
          <MoreHorizontal className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <header>
        <p className="text-sm font-semibold text-muted-foreground">
          {episodeDetail.season} · {episodeDetail.episode}
        </p>
        <h1 className="mt-1 text-4xl font-bold tracking-tight text-foreground">
          {episodeDetail.title}
        </h1>

        <button
          type="button"
          onClick={onOpenShow}
          className="mt-4 flex items-center gap-2 text-left hover:opacity-80"
        >
          <Artwork alt={episodeDetail.showImageAlt} className="h-9 w-9 shrink-0" rounded="rounded-md" />
          <span className="font-medium text-brand">{episodeDetail.showTitle}</span>
          <ChevronRight className="h-4 w-4 text-brand" aria-hidden="true" />
        </button>

        <div className="mt-4">
          <PlayPill duration={episodeDetail.duration} variant="solid" />
        </div>
      </header>

      <div className="border-t border-border pt-6">
        <p className="text-base leading-relaxed text-foreground">{episodeDetail.description}</p>

        <p className="mt-6 text-base leading-relaxed text-foreground">{episodeDetail.intro}</p>
        <ul className="mt-3 space-y-2">
          {people.map((person) => (
            <li key={person.id} className="flex gap-2 text-base leading-relaxed text-foreground">
              <span aria-hidden="true" className="text-muted-foreground">
                &bull;
              </span>
              <span>
                {person.name}, {person.role}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
