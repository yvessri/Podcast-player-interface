import { ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type ArtworkProps = {
  alt: string
  className?: string
  rounded?: string
}

/**
 * A neutral placeholder that stands in for cover art / images.
 * Swap this for a real <img> or next/image when wiring up content.
 */
export function Artwork({ alt, className, rounded = "rounded-lg" }: ArtworkProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "flex items-center justify-center bg-muted text-muted-foreground",
        rounded,
        className,
      )}
    >
      <ImageIcon className="h-1/4 w-1/4 min-h-4 min-w-4 max-h-10 max-w-10" aria-hidden="true" />
    </div>
  )
}
