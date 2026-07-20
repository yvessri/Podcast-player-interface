"use client"

import useSWR from "swr"
import { TOPICS_API_BASE } from "@/lib/topics"

async function parseResponse(res: Response): Promise<string> {
  const contentType = res.headers.get("content-type") ?? ""
  if (contentType.includes("application/json")) {
    const data = await res.json()
    // Support a few common shapes: { content }, { markdown }, { data }, or a raw string
    if (typeof data === "string") return data
    return data.content ?? data.markdown ?? data.data ?? ""
  }
  return res.text()
}

/**
 * Fetches markdown for a topic. It tries the external API first
 * (http://localhost:5000/api/topics/[id]) and transparently falls
 * back to the bundled local route if the external one is unreachable.
 */
async function fetchTopic(id: number): Promise<string> {
  try {
    const res = await fetch(`${TOPICS_API_BASE}/${id}`, { headers: { Accept: "application/json, text/markdown" } })
    if (res.ok) {
      const content = await parseResponse(res)
      if (content.trim().length > 0) return content
    }
  } catch {
    // Ignore and fall back to the local route below.
  }

  const fallback = await fetch(`/api/topics/${id}`)
  if (!fallback.ok) {
    throw new Error("ไม่สามารถโหลดเนื้อหาได้ในขณะนี้")
  }
  return parseResponse(fallback)
}

export function useTopic(id: number) {
  const { data, error, isLoading } = useSWR(["topic", id], () => fetchTopic(id), {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  })

  return {
    content: data,
    isLoading,
    isError: Boolean(error),
    errorMessage: error instanceof Error ? error.message : undefined,
  }
}
