"use client"

import { useState } from "react"
import { HeartHandshake, Menu, X } from "lucide-react"
import { CareSidebar } from "@/components/care/care-sidebar"
import { TopicView } from "@/components/care/topic-view"

export function CareDashboard() {
  const [activeId, setActiveId] = useState(1)
  const [menuOpen, setMenuOpen] = useState(false)

  function handleSelect(id: number) {
    setActiveId(id)
    setMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile header */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-card/95 px-4 py-3 backdrop-blur md:hidden">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <HeartHandshake className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-base font-bold text-foreground">การดูแลผู้สูงอายุ</span>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={menuOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground hover:bg-accent"
        >
          {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </header>

      <div className="mx-auto flex w-full max-w-7xl">
        {/* Desktop sidebar */}
        <aside className="sticky top-0 hidden h-screen w-80 shrink-0 border-r border-sidebar-border bg-sidebar md:block">
          <CareSidebar activeId={activeId} onSelect={handleSelect} />
        </aside>

        {/* Mobile sidebar drawer */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div
              className="absolute inset-0 bg-foreground/40"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <aside className="absolute left-0 top-0 h-full w-[85%] max-w-xs border-r border-sidebar-border bg-sidebar shadow-xl">
              <CareSidebar activeId={activeId} onSelect={handleSelect} />
            </aside>
          </div>
        )}

        {/* Main content */}
        <main className="min-w-0 flex-1">
          <TopicView activeId={activeId} onSelect={handleSelect} />
        </main>
      </div>
    </div>
  )
}
