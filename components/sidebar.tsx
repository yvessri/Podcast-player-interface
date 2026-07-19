"use client"

import { useState } from "react"
import type { NavKey } from "@/lib/data"
import { LOGO_PLACEHOLDER } from "@/lib/data"
import { NavList } from "./nav-list"
import { SignInCard } from "./sign-in-card"

type SidebarProps = {
  active: NavKey
  onNavigate: (key: NavKey) => void
}

export function Sidebar({ active, onNavigate }: SidebarProps) {
  const [showCard, setShowCard] = useState(true)

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-sidebar md:flex">
      <div className="flex items-center gap-2 px-6 py-5">
        <span className="text-xl font-bold text-foreground">{LOGO_PLACEHOLDER}</span>
      </div>

      <div className="px-3">
        <NavList active={active} onNavigate={onNavigate} />
      </div>

      {showCard ? (
        <div className="mt-auto p-3">
          <SignInCard onDismiss={() => setShowCard(false)} />
        </div>
      ) : null}
    </aside>
  )
}
