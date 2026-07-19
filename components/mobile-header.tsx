"use client"

import { useState } from "react"
import { ArrowUpRight, Menu, User, X } from "lucide-react"
import type { NavKey } from "@/lib/data"
import { LOGO_PLACEHOLDER } from "@/lib/data"
import { NavList } from "./nav-list"

type MobileHeaderProps = {
  active: NavKey
  onNavigate: (key: NavKey) => void
}

export function MobileHeader({ active, onNavigate }: MobileHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavigate = (key: NavKey) => {
    onNavigate(key)
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 md:hidden">
      <div className="flex items-center justify-between border-b border-border bg-background/95 px-4 py-3 backdrop-blur">
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="text-foreground"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <span className="text-lg font-bold text-foreground">{LOGO_PLACEHOLDER}</span>

        <button
          type="button"
          className="flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground"
        >
          <User className="h-4 w-4" aria-hidden="true" />
          Sign In
        </button>
      </div>

      {menuOpen ? (
        <div className="border-b border-border bg-background px-4 py-3 shadow-sm">
          <NavList active={active} onNavigate={handleNavigate} />
          <div className="my-3 border-t border-border" />
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-base font-medium text-foreground hover:bg-accent/60"
          >
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            Open in [App]
          </button>
        </div>
      ) : null}
    </header>
  )
}
