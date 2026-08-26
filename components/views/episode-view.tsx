"use client"

import { ChevronRight, MoreHorizontal, Share } from "lucide-react"
import useSWR from "swr"
import { useAudio } from "@/context/audio-context"
import { episodes, featuredShow, SHOW_TITLE } from "@/lib/data"
import { Artwork } from "../artwork"
import { ListenButton } from "../listen-button"
import { MarkdownContent } from "../markdown-content"
import { PlayPill } from "../play-pill"

type EpisodeViewProps = {
  slug: string
  onOpenShow: () => void
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function EpisodeView({ slug, onOpenShow }: EpisodeViewProps) {
  const episode = episodes.find((e) => e.slug === slug) ?? episodes[0]

  const { data, isLoading } = useSWR<{ content: string }>(
    `/api/episodes/${episode.slug}`,
    fetcher,
  )

  const markdown = data?.content ?? ""

  // เรียกใช้ตัวเล่นเสียงระดับ Global Context
  const { currentEpisode, isPlaying, progress, playEpisode } = useAudio()

  const isCurrentPlaying = currentEpisode?.id === episode.id && isPlaying
  const currentProgress = currentEpisode?.id === episode.id ? progress : 0

  return (
    <article className="max-w-3xl space-y-6">
      <div className="flex justify-end gap-2">
        <button
          type="button"
          aria-label="แชร์"
          className="inline-flex items-center rounded-full border border-border bg-card px-3 py-2 text-foreground hover:bg-accent"
        >
          <Share className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="ตัวเลือกเพิ่มเติม"
          className="inline-flex items-center rounded-full border border-border bg-card px-3 py-2 text-foreground hover:bg-accent"
        >
          <MoreHorizontal className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <header>
        <p className="text-sm font-semibold text-muted-foreground">
          {episode.season} · {episode.episode}
        </p>
        <h1 className="mt-1 text-4xl font-bold tracking-tight text-balance text-foreground">
          {episode.title}
        </h1>

        <button
          type="button"
          onClick={onOpenShow}
          className="mt-4 flex items-center gap-2 text-left hover:opacity-80"
        >
          <Artwork
            alt={featuredShow.imageAlt}
            src={featuredShow.coverImage}
            className="h-9 w-9 shrink-0"
            rounded="rounded-md"
          />
          <span className="font-medium text-brand">{SHOW_TITLE}</span>
          <ChevronRight className="h-4 w-4 text-brand" aria-hidden="true" />
        </button>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <PlayPill
            duration={episode.duration}
            variant="solid"
            isPlaying={isCurrentPlaying}
            progress={currentProgress}
            onPlayToggle={() => playEpisode(episode)}
          />
          <ListenButton title={episode.title} text={markdown} disabled={isLoading || !markdown} />
        </div>
      </header>

      <div className="border-t border-border pt-2">
        {isLoading ? (
          <EpisodeSkeleton />
        ) : markdown ? (
          <MarkdownContent content={markdown} />
        ) : (
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            ไม่พบเนื้อหาของตอนนี้ กรุณาลองใหม่อีกครั้ง
          </p>
        )}
      </div>
    </article>
  )
}

function EpisodeSkeleton() {
  return (
    <div className="mt-6 space-y-3" aria-hidden="true">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="h-4 animate-pulse rounded bg-muted"
          style={{ width: `${[92, 80, 96, 70, 88, 60][i]}%` }}
        />
      ))}
    </div>
  )
}