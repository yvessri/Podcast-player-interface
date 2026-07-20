"use client"

import {
  Info,
  ListMusic,
  MoreHorizontal,
  Pause,
  Play,
  RotateCcw,
  RotateCw,
  Volume2,
} from "lucide-react"
import { useState } from "react"
import { Artwork } from "./artwork"

export function Player() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-2 pb-2 md:px-4 md:pb-4">
      <div className="mx-auto flex max-w-5xl items-center gap-3 rounded-2xl border border-border bg-card/95 px-3 py-2.5 shadow-lg backdrop-blur md:gap-4">
        {/* Transport controls */}
        <div className="flex items-center gap-1 md:gap-2">
          <button
            type="button"
            className="hidden text-sm font-semibold text-foreground md:inline"
          >
            1x
          </button>
          <button type="button" aria-label="ย้อนกลับ 15 วินาที" className="hidden text-muted-foreground hover:text-foreground md:inline-flex">
            <RotateCcw className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={playing ? "หยุดชั่วคราว" : "เล่น"}
            aria-pressed={playing}
            onClick={() => setPlaying((v) => !v)}
            className="text-foreground"
          >
            {playing ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </button>
          <button type="button" aria-label="ข้ามไปข้างหน้า 30 วินาที" className="text-muted-foreground hover:text-foreground">
            <RotateCw className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Now playing */}
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <Artwork alt="ภาพตัวอย่างรายการที่กำลังเล่น" className="h-10 w-10 shrink-0" rounded="rounded-md" />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">[ชื่อรายการที่กำลังเล่น]</p>
            <p className="truncate text-xs text-muted-foreground">[ซีซัน], [ตอน]</p>
          </div>
        </div>

        {/* Secondary controls */}
        <div className="hidden items-center gap-3 text-muted-foreground md:flex">
          <button type="button" aria-label="ตัวเลือกเพิ่มเติม" className="hover:text-foreground">
            <MoreHorizontal className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" aria-label="ข้อมูลตอน" className="hover:text-foreground">
            <Info className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" aria-label="เล่นถัดไป" className="hover:text-foreground">
            <ListMusic className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" aria-label="ระดับเสียง" className="hover:text-foreground">
            <Volume2 className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
