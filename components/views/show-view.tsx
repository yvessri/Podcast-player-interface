"use client"

import { ChevronRight, MoreHorizontal, Plus, Star } from "lucide-react"
import { episodes, featuredShow } from "@/lib/data"
import { Artwork } from "../artwork"
import { EpisodeListItem } from "../episode-list-item"
import { PlayPill } from "../play-pill"

type ShowViewProps = {
  onOpenEpisode: () => void
}

export function ShowView({ onOpenEpisode }: ShowViewProps) {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="relative">
        <div className="flex justify-end gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground hover:bg-accent"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
            Follow
          </button>
          <button
            type="button"
            aria-label="More options"
            className="inline-flex items-center rounded-full border border-border bg-card px-3 py-2 text-foreground hover:bg-accent"
          >
            <MoreHorizontal className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-4 flex flex-col gap-6 sm:flex-row">
          <Artwork
            alt={featuredShow.imageAlt}
            rounded="rounded-2xl"
            className="aspect-square w-full max-w-[220px] shrink-0"
          />
          <div className="min-w-0 flex-1">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">{featuredShow.title}</h1>
            <p className="mt-2 text-lg font-medium text-brand">{featuredShow.publisher}</p>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-sm font-medium text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Star className="h-4 w-4 fill-current text-brand" aria-hidden="true" />
                {featuredShow.rating}
              </span>
              <span aria-hidden="true">·</span>
              <span>{featuredShow.category}</span>
              <span aria-hidden="true">·</span>
              <span>{featuredShow.cadence}</span>
            </div>
            <p className="mt-3 line-clamp-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {featuredShow.description}
            </p>
            <div className="mt-4">
              <PlayPill duration="41m" variant="solid" />
            </div>
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section aria-labelledby="season-heading">
        <button
          type="button"
          className="mb-2 flex items-center gap-1 text-2xl font-bold text-foreground hover:opacity-80"
        >
          <span id="season-heading">[Season]</span>
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
        <div>
          {episodes.map((episode) => (
            <EpisodeListItem key={episode.id} episode={episode} onOpen={onOpenEpisode} />
          ))}
        </div>
      </section>
    </div>
  )
}
