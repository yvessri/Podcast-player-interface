"use client"

import type { LucideIcon } from "lucide-react"

type PlaceholderViewProps = {
  title: string
  description: string
  icon: LucideIcon
}

export function PlaceholderView({ title, description, icon: Icon }: PlaceholderViewProps) {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">{title}</h1>
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border bg-card/40 px-6 py-20 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent">
          <Icon className="h-7 w-7 text-brand" aria-hidden="true" />
        </span>
        <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
