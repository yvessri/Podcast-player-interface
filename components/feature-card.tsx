import type { FeatureCard as FeatureCardType } from "@/lib/data"
import { Artwork } from "./artwork"

export function FeatureCard({ card, onOpen }: { card: FeatureCardType; onOpen?: () => void }) {
  return (
    <button type="button" onClick={onOpen} className="group block w-full text-left">
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {card.eyebrow}
      </p>
      <h3 className="mt-1 text-pretty text-lg font-semibold leading-snug text-foreground">
        {card.title}
      </h3>
      <Artwork
        alt={card.imageAlt}
        rounded="rounded-xl"
        className="mt-3 aspect-video w-full transition-transform group-hover:scale-[1.01]"
      />
    </button>
  )
}
