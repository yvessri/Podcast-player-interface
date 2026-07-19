"use client"

import { topShows } from "@/lib/data"
import { Artwork } from "../artwork"

type TopChartsViewProps = {
  onOpenShow: () => void
}

export function TopChartsView({ onOpenShow }: TopChartsViewProps) {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">Top Charts</h1>

      <ol className="flex flex-col divide-y divide-border rounded-xl border border-border bg-card">
        {topShows.map((show) => (
          <li key={show.id}>
            <button
              type="button"
              onClick={onOpenShow}
              className="flex w-full items-center gap-4 px-4 py-3 text-left transition-colors hover:bg-accent/60"
            >
              <span className="w-6 shrink-0 text-lg font-bold tabular-nums text-muted-foreground">
                {show.rank}
              </span>
              <Artwork alt={show.imageAlt} className="h-14 w-14 shrink-0 rounded-lg" />
              <span className="min-w-0">
                <span className="block truncate text-base font-semibold text-foreground">{show.title}</span>
                <span className="block truncate text-sm text-muted-foreground">{show.publisher}</span>
              </span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  )
}
