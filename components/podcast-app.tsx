"use client"

import { useState } from "react"
import { Home, Search } from "lucide-react"
import type { NavKey } from "@/lib/data"
import { MobileHeader } from "./mobile-header"
import { Player } from "./player"
import { Sidebar } from "./sidebar"
import { SignInModal } from "./sign-in-modal"
import { EpisodeView } from "./views/episode-view"
import { NewView } from "./views/new-view"
import { PlaceholderView } from "./views/placeholder-view"
import { ShowView } from "./views/show-view"
import { TopChartsView } from "./views/top-charts-view"

// "nav" shows the view tied to the active nav item; "show"/"episode" are drill-down views.
type View = "nav" | "show" | "episode"

export function PodcastApp() {
  const [active, setActive] = useState<NavKey>("new")
  const [view, setView] = useState<View>("nav")
  const [signInOpen, setSignInOpen] = useState(false)

  const handleNavigate = (key: NavKey) => {
    setActive(key)
    setView("nav")
  }

  const openSignIn = () => setSignInOpen(true)

  const renderNavView = () => {
    switch (active) {
      case "search":
        return (
          <PlaceholderView
            title="Search"
            description="[Search results appear here. Wire this view up to a real search index later.]"
            icon={Search}
          />
        )
      case "home":
        return (
          <PlaceholderView
            title="Home"
            description="[Your personalized home feed appears here once content is connected.]"
            icon={Home}
          />
        )
      case "top-charts":
        return <TopChartsView onOpenShow={() => setView("show")} />
      case "new":
      default:
        return <NewView onOpenShow={() => setView("show")} />
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar active={active} onNavigate={handleNavigate} onOpenSignIn={openSignIn} />

      <div className="flex min-w-0 flex-1 flex-col">
        <MobileHeader active={active} onNavigate={handleNavigate} onOpenSignIn={openSignIn} />

        <main className="flex-1 px-4 py-6 pb-28 md:px-10 md:py-8 md:pb-32">
          {view === "nav" ? renderNavView() : null}
          {view === "show" ? <ShowView onOpenEpisode={() => setView("episode")} /> : null}
          {view === "episode" ? <EpisodeView onOpenShow={() => setView("show")} /> : null}
        </main>
      </div>

      <Player />

      <SignInModal open={signInOpen} onClose={() => setSignInOpen(false)} />
    </div>
  )
}
