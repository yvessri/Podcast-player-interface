import { Home, LayoutGrid, ListOrdered, Search, type LucideIcon } from "lucide-react"
import type { NavKey } from "./data"

export type NavItem = {
  key: NavKey
  label: string
  icon: LucideIcon
}

export const navItems: NavItem[] = [
  { key: "search", label: "ค้นหา", icon: Search },
  { key: "home", label: "หน้าแรก", icon: Home },
  { key: "new", label: "ใหม่", icon: LayoutGrid },
  { key: "top-charts", label: "ชาร์ตยอดนิยม", icon: ListOrdered },
]
