import { readFile } from "node:fs/promises"
import path from "node:path"
import { NextResponse } from "next/server"

/**
 * Local fallback endpoint that mirrors the external markdown API
 * (http://localhost:5000/api/topics/[id]). It reads the bundled
 * markdown files so the dashboard renders content even when the
 * external service is unavailable.
 */
export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const topicId = Number(id)

  if (!Number.isInteger(topicId) || topicId < 1 || topicId > 7) {
    return NextResponse.json({ error: "ไม่พบหัวข้อที่ต้องการ" }, { status: 404 })
  }

  try {
    const filePath = path.join(process.cwd(), "content", `topic-${topicId}.md`)
    const content = await readFile(filePath, "utf-8")
    return NextResponse.json({ id: topicId, content })
  } catch {
    return NextResponse.json({ error: "ไม่สามารถโหลดเนื้อหาได้" }, { status: 500 })
  }
}
