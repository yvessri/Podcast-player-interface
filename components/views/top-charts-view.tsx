"use client"

import { episodes } from "@/lib/data"
import { Artwork } from "../artwork"

type TopChartsViewProps = {
  onOpenEpisode: (slug: string) => void
}

export function TopChartsView({ onOpenEpisode }: TopChartsViewProps) {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">พอดแคส</h1>
      <h2>การดูแลผู้สูงอายุ</h2>

      <ol className="flex flex-col divide-y divide-border rounded-xl border border-border bg-card">
        {episodes.map((ep, i) => (
          <li key={ep.id}>
            <button
              type="button"
              onClick={() => onOpenEpisode(ep.slug)}
              className="flex w-full items-center gap-4 px-4 py-3 text-left transition-colors hover:bg-accent/60"
            >
              <span className="w-6 shrink-0 text-lg font-bold tabular-nums text-muted-foreground">
                {i + 1}
              </span>
              <Artwork
                alt={`ภาพปก ${ep.title}`}
                src={ep.coverImage}
                className="h-14 w-14 shrink-0 rounded-lg"
              />
              <span className="min-w-0">
                <span className="block truncate text-base font-semibold text-foreground">{ep.title}</span>
                <span className="block truncate text-sm text-muted-foreground">{ep.duration}</span>
              </span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  )
}
