"use client"

import { AlertCircle, ChevronLeft, ChevronRight, Loader2, RefreshCw } from "lucide-react"
import { MarkdownContent } from "@/components/care/markdown-content"
import { useTopic } from "@/lib/use-topic"
import { getTopic, topics } from "@/lib/topics"

function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
      <Loader2 className="h-9 w-9 animate-spin text-primary" aria-hidden="true" />
      <p className="text-base font-medium text-foreground">กำลังโหลดเนื้อหา...</p>
      <p className="text-sm text-muted-foreground">โปรดรอสักครู่ ระบบกำลังดึงข้อมูลบทความ</p>
    </div>
  )
}

function ErrorState({ message, onRetry }: { message?: string; onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10 text-destructive">
        <AlertCircle className="h-7 w-7" aria-hidden="true" />
      </span>
      <div>
        <p className="text-base font-semibold text-foreground">ไม่สามารถโหลดเนื้อหาได้</p>
        <p className="mt-1 text-sm text-muted-foreground">{message ?? "เกิดข้อผิดพลาดในการเชื่อมต่อกับเซิร์ฟเวอร์"}</p>
      </div>
      <button
        type="button"
        onClick={onRetry}
        className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        <RefreshCw className="h-4 w-4" aria-hidden="true" />
        ลองใหม่อีกครั้ง
      </button>
    </div>
  )
}

export function TopicView({
  activeId,
  onSelect,
}: {
  activeId: number
  onSelect: (id: number) => void
}) {
  const { content, isLoading, isError, errorMessage } = useTopic(activeId)
  const topic = getTopic(activeId)
  const prev = topics.find((t) => t.id === activeId - 1)
  const next = topics.find((t) => t.id === activeId + 1)

  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-8 md:px-10 md:py-12">
      <header className="mb-8">
        <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
          {`หัวข้อที่ ${activeId} จาก ${topics.length}`}
        </span>
        <h1 className="mt-3 text-balance text-3xl font-bold leading-tight text-foreground md:text-4xl">
          {topic?.title}
        </h1>
        <p className="mt-2 text-pretty text-base leading-relaxed text-muted-foreground">{topic?.summary}</p>
      </header>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-9">
        {isLoading ? (
          <LoadingState />
        ) : isError ? (
          <ErrorState message={errorMessage} onRetry={() => onSelect(activeId)} />
        ) : content ? (
          <MarkdownContent content={content} />
        ) : (
          <p className="py-16 text-center text-muted-foreground">ไม่พบเนื้อหาสำหรับหัวข้อนี้</p>
        )}
      </div>

      <nav aria-label="ไปยังหัวข้ออื่น" className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={() => prev && onSelect(prev.id)}
          disabled={!prev}
          className="group flex flex-1 items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-left transition-colors hover:border-primary/50 hover:bg-accent/40 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:bg-card"
        >
          <ChevronLeft className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <span className="min-w-0">
            <span className="block text-xs text-muted-foreground">ก่อนหน้า</span>
            <span className="block truncate text-sm font-semibold text-foreground">
              {prev ? prev.title : "นี่คือหัวข้อแรก"}
            </span>
          </span>
        </button>

        <button
          type="button"
          onClick={() => next && onSelect(next.id)}
          disabled={!next}
          className="group flex flex-1 items-center justify-end gap-3 rounded-xl border border-border bg-card px-4 py-3 text-right transition-colors hover:border-primary/50 hover:bg-accent/40 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:bg-card"
        >
          <span className="min-w-0">
            <span className="block text-xs text-muted-foreground">ถัดไป</span>
            <span className="block truncate text-sm font-semibold text-foreground">
              {next ? next.title : "นี่คือหัวข้อสุดท้าย"}
            </span>
          </span>
          <ChevronRight className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
        </button>
      </nav>
    </article>
  )
}
