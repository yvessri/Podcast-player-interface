import { Home, LayoutGrid, ListOrdered, Search, type LucideIcon } from "lucide-react"
import type { NavKey } from "./data"

export type NavItem = {
  key: NavKey
  label: string
  icon: LucideIcon
}

export const navItems: NavItem[] = [
  { key: "search", label: "Search", icon: Search },
  { key: "home", label: "Home", icon: Home },
  { key: "new", label: "New", icon: LayoutGrid },
  { key: "top-charts", label: "Top Charts", icon: ListOrdered },
]
