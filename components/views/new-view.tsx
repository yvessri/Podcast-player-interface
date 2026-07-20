"use client"

import { ChevronRight } from "lucide-react"
import { episodes, featureCards, topShows } from "@/lib/data"
import { FeatureCard } from "../feature-card"
import { ShowCard } from "../show-card"

type NewViewProps = {
  onOpenEpisode: (slug: string) => void
  onOpenShow: () => void
}

export function NewView({ onOpenEpisode, onOpenShow }: NewViewProps) {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-balance text-foreground">การดูแลผู้สูงอายุ</h1>
        <p className="mt-2 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
          พอดแคสต์ความรู้สำหรับผู้ดูแลและผู้บริบาล ฟังและอ่านเนื้อหาเต็มของแต่ละตอนได้ทันที
        </p>
      </div>

      <section aria-label="ตอนแนะนำ" className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {featureCards.slice(0, 2).map((card) => (
          <FeatureCard
            key={card.id}
            card={card}
            onOpen={() => (card.episodeSlug ? onOpenEpisode(card.episodeSlug) : onOpenShow())}
          />
        ))}
      </section>

      <section aria-labelledby="top-shows-heading">
        <button
          type="button"
          onClick={onOpenShow}
          className="mb-4 flex items-center gap-1 text-2xl font-bold text-foreground hover:opacity-80"
        >
          <span id="top-shows-heading">ทุกตอนในรายการ</span>
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {topShows.map((show, i) => (
            <ShowCard key={show.id} show={show} onOpen={() => onOpenEpisode(episodeSlugForRank(i))} />
          ))}
        </div>
      </section>
    </div>
  )
}

// topShows ถูกสร้างจากลำดับเดียวกับ episodes ใน lib/data.ts
function episodeSlugForRank(index: number) {
  return episodes[index]?.slug ?? episodes[0].slug
}
