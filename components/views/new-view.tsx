"use client"

import { ChevronRight } from "lucide-react"
import { featureCards, topShows } from "@/lib/data"
import { FeatureCard } from "../feature-card"
import { ShowCard } from "../show-card"

type NewViewProps = {
  onOpenShow: () => void
}

export function NewView({ onOpenShow }: NewViewProps) {
  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">[Title]</h1>

      <section aria-label="Featured" className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {featureCards.slice(0, 2).map((card) => (
          <FeatureCard key={card.id} card={card} onOpen={onOpenShow} />
        ))}
      </section>

      <section aria-labelledby="top-shows-heading">
        <button
          type="button"
          className="mb-4 flex items-center gap-1 text-2xl font-bold text-foreground hover:opacity-80"
        >
          <span id="top-shows-heading">[Section Title]</span>
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {topShows.map((show) => (
            <ShowCard key={show.id} show={show} onOpen={onOpenShow} />
          ))}
        </div>
      </section>
    </div>
  )
}
