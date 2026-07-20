"use client"

import { Activity, Droplets, HeartHandshake, HeartPulse, Milk, RotateCw, Salad, Thermometer } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { topics, type Topic } from "@/lib/topics"

const iconMap: Record<Topic["icon"], LucideIcon> = {
  RotateCw,
  Salad,
  Milk,
  Droplets,
  HeartPulse,
  Thermometer,
  Activity,
}

export function CareSidebar({
  activeId,
  onSelect,
}: {
  activeId: number
  onSelect: (id: number) => void
}) {
  return (
    <nav aria-label="รายการหัวข้อการดูแล" className="flex h-full flex-col">
      <div className="flex items-center gap-3 border-b border-sidebar-border px-5 py-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <HeartHandshake className="h-6 w-6" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-base font-bold text-sidebar-foreground">การดูแลผู้สูงอายุ</p>
          <p className="truncate text-xs text-muted-foreground">คู่มือสำหรับผู้บริบาล</p>
        </div>
      </div>

      <div className="px-4 pb-2 pt-4">
        <p className="px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">หัวข้อทั้งหมด</p>
      </div>

      <ul className="flex-1 space-y-1 overflow-y-auto px-3 pb-4">
        {topics.map((topic) => {
          const Icon = iconMap[topic.icon]
          const isActive = topic.id === activeId
          return (
            <li key={topic.id}>
              <button
                type="button"
                onClick={() => onSelect(topic.id)}
                aria-current={isActive ? "page" : undefined}
                className={`flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                    isActive ? "bg-white/20" : "bg-accent text-primary"
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2">
                    <span
                      className={`text-xs font-semibold ${
                        isActive ? "text-sidebar-primary-foreground/80" : "text-muted-foreground"
                      }`}
                    >
                      {`หัวข้อที่ ${topic.id}`}
                    </span>
                  </span>
                  <span className="mt-0.5 block text-sm font-semibold leading-snug">{topic.title}</span>
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      <div className="border-t border-sidebar-border px-5 py-4">
        <p className="text-xs leading-relaxed text-muted-foreground">
          ข้อมูลนี้ใช้เพื่อการศึกษาเท่านั้น ควรปรึกษาแพทย์หรือพยาบาลสำหรับการดูแลเฉพาะราย
        </p>
      </div>
    </nav>
  )
}
