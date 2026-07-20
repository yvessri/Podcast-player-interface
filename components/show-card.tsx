import type { Show } from "@/lib/data"
import { Artwork } from "./artwork"

export function ShowCard({ show, onOpen }: { show: Show; onOpen?: () => void }) {
  return (
    <button type="button" onClick={onOpen} className="group block w-40 shrink-0 text-left">
      <Artwork
        alt={show.imageAlt}
        src={show.coverImage}
        rounded="rounded-xl"
        className="aspect-square w-full transition-transform group-hover:scale-[1.02]"
      />
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-sm font-semibold text-muted-foreground">{show.rank}</span>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-foreground">{show.title}</p>
          <p className="truncate text-xs text-muted-foreground">{show.publisher}</p>
        </div>
      </div>
    </button>
  )
}
