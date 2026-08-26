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
import { useAudio } from "@/context/audio-context"
import { Artwork } from "./artwork"

export function Player() {
  const {
    currentEpisode,
    isPlaying,
    progress,
    playbackRate,
    togglePlay,
    seekRelative,
    changeSpeed,
  } = useAudio()

  const title = currentEpisode?.title ?? "การดูแลผู้สูงอายุ"
  const subtitle = currentEpisode
    ? `${currentEpisode.season} · ${currentEpisode.episode}`
    : "เลือกตอนเพื่อเริ่มฟัง"

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-2 pb-2 md:px-4 md:pb-4">
      <div className="mx-auto flex max-w-5xl items-center gap-3 rounded-2xl border border-border bg-card/95 px-3 py-2.5 shadow-lg backdrop-blur md:gap-4">
        {/* Transport controls */}
        <div className="flex items-center gap-1 md:gap-2">
          <button
            type="button"
            onClick={changeSpeed}
            className="hidden text-sm font-semibold text-foreground md:inline hover:opacity-80"
          >
            {playbackRate}x
          </button>
          <button
            type="button"
            aria-label="Skip back 15 seconds"
            onClick={() => seekRelative(-15)}
            className="hidden text-muted-foreground hover:text-foreground md:inline-flex"
          >
            <RotateCcw className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={isPlaying ? "Pause" : "Play"}
            aria-pressed={isPlaying}
            onClick={togglePlay}
            disabled={!currentEpisode}
            className="text-foreground disabled:opacity-40"
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </button>
          <button
            type="button"
            aria-label="Skip forward 30 seconds"
            onClick={() => seekRelative(30)}
            className="text-muted-foreground hover:text-foreground"
          >
            <RotateCw className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Now playing */}
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <Artwork
            src={currentEpisode?.coverImage}
            alt={title}
            className="h-10 w-10 shrink-0"
            rounded="rounded-md"
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-foreground">{title}</p>
            <p className="truncate text-xs text-muted-foreground">{subtitle}</p>
            
            {/* หลอด Progress แสดงเวลาเล่นในแถบเล่นเสียง */}
            {currentEpisode && (
              <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-brand transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Secondary controls */}
        <div className="hidden items-center gap-3 text-muted-foreground md:flex">
          <button type="button" aria-label="More options" className="hover:text-foreground">
            <MoreHorizontal className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" aria-label="Episode info" className="hover:text-foreground">
            <Info className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" aria-label="Up next" className="hover:text-foreground">
            <ListMusic className="h-5 w-5" aria-hidden="true" />
          </button>
          <button type="button" aria-label="Volume" className="hover:text-foreground">
            <Volume2 className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}