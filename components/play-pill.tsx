"use client"

import { Play } from "lucide-react"
import { cn } from "@/lib/utils"

type PlayPillProps = {
  duration: string
  /** Solid brand pill (used on show hero) vs. subtle outline pill (used in lists). */
  variant?: "solid" | "subtle"
  progress?: number
}

export function PlayPill({ duration, variant = "subtle", progress = 25 }: PlayPillProps) {
  const solid = variant === "solid"
  return (
    <button
      type="button"
      aria-label={`เล่น เหลืออีก ${duration}`}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold transition-opacity hover:opacity-90",
        solid ? "bg-brand text-brand-foreground" : "bg-accent text-foreground",
      )}
    >
      <Play className={cn("h-4 w-4", solid ? "text-brand-foreground" : "text-brand")} aria-hidden="true" />
      <span
        className={cn(
          "h-1 w-12 overflow-hidden rounded-full",
          solid ? "bg-brand-foreground/30" : "bg-brand/20",
        )}
      >
        <span
          className={cn("block h-full rounded-full", solid ? "bg-brand-foreground" : "bg-brand")}
          style={{ width: `${progress}%` }}
        />
      </span>
      <span>{duration}</span>
    </button>
  )
}
