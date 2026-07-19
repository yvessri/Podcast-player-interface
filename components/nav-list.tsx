"use client"

import { navItems } from "@/lib/nav"
import type { NavKey } from "@/lib/data"
import { cn } from "@/lib/utils"

type NavListProps = {
  active: NavKey
  onNavigate: (key: NavKey) => void
}

export function NavList({ active, onNavigate }: NavListProps) {
  return (
    <nav aria-label="Primary" className="flex flex-col gap-1">
      {navItems.map(({ key, label, icon: Icon }) => {
        const isActive = key === active
        return (
          <button
            key={key}
            type="button"
            onClick={() => onNavigate(key)}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-left text-base font-medium transition-colors",
              isActive
                ? "bg-accent text-brand"
                : "text-foreground hover:bg-accent/60",
            )}
          >
            <Icon
              className={cn("h-5 w-5 shrink-0", isActive && "text-brand")}
              aria-hidden="true"
            />
            <span>{label}</span>
          </button>
        )
      })}
    </nav>
  )
}
