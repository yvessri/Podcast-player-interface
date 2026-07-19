"use client"

import { useState } from "react"
import type { NavKey } from "@/lib/data"
import { MobileHeader } from "./mobile-header"
import { Player } from "./player"
import { Sidebar } from "./sidebar"
import { EpisodeView } from "./views/episode-view"
import { NewView } from "./views/new-view"
import { ShowView } from "./views/show-view"

type View = "browse" | "show" | "episode"

export function PodcastApp() {
  const [active, setActive] = useState<NavKey>("new")
  const [view, setView] = useState<View>("browse")

  const handleNavigate = (key: NavKey) => {
    setActive(key)
    setView("browse")
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar active={active} onNavigate={handleNavigate} />

      <div className="flex min-w-0 flex-1 flex-col">
        <MobileHeader active={active} onNavigate={handleNavigate} />

        <main className="flex-1 px-4 py-6 pb-28 md:px-10 md:py-8 md:pb-32">
          {view === "browse" ? <NewView onOpenShow={() => setView("show")} /> : null}
          {view === "show" ? <ShowView onOpenEpisode={() => setView("episode")} /> : null}
          {view === "episode" ? <EpisodeView onOpenShow={() => setView("show")} /> : null}
        </main>
      </div>

      <Player />
    </div>
  )
}
