"use client"

import { useState } from "react"
import { Home, Search } from "lucide-react"
import { episodes, type NavKey } from "@/lib/data"
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
  const [selectedSlug, setSelectedSlug] = useState(episodes[0].slug)
  const [signInOpen, setSignInOpen] = useState(false)

  const handleNavigate = (key: NavKey) => {
    setActive(key)
    setView("nav")
  }

  const openEpisode = (slug: string) => {
    setSelectedSlug(slug)
    setView("episode")
  }

  const openShow = () => setView("show")

  const openSignIn = () => setSignInOpen(true)

  const selectedEpisode = episodes.find((e) => e.slug === selectedSlug) ?? episodes[0]

  const renderNavView = () => {
    switch (active) {
      case "search":
        return (
          <PlaceholderView
            title="ค้นหา"
            description="พิมพ์เพื่อค้นหาตอนหรือหัวข้อที่สนใจ ผลการค้นหาจะปรากฏที่นี่"
            icon={Search}
          />
        )
      case "home":
        return (
          <PlaceholderView
            title="หน้าแรก"
            description="ฟีดแนะนำเฉพาะคุณจะปรากฏที่นี่ เลือกตอนที่อยากฟังจากเมนู ใหม่ หรือ ชาร์ตยอดนิยม ได้เลย"
            icon={Home}
          />
        )
      case "top-charts":
        return <TopChartsView onOpenEpisode={openEpisode} />
      case "new":
      default:
        return <NewView onOpenEpisode={openEpisode} onOpenShow={openShow} />
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar active={active} onNavigate={handleNavigate} onOpenSignIn={openSignIn} />

      <div className="flex min-w-0 flex-1 flex-col">
        <MobileHeader active={active} onNavigate={handleNavigate} onOpenSignIn={openSignIn} />

        <main className="flex-1 px-4 py-6 pb-28 md:px-10 md:py-8 md:pb-32">
          {view === "nav" ? renderNavView() : null}
          {view === "show" ? <ShowView onOpenEpisode={openEpisode} /> : null}
          {view === "episode" ? <EpisodeView slug={selectedSlug} onOpenShow={openShow} /> : null}
        </main>
      </div>

      <Player title={selectedEpisode.title} subtitle={`${selectedEpisode.episode} · ${selectedEpisode.duration}`} />

      <SignInModal open={signInOpen} onClose={() => setSignInOpen(false)} />
    </div>
  )
}
