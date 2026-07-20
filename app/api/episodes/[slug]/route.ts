import { readFile } from "node:fs/promises"
import path from "node:path"
import { NextResponse } from "next/server"
import { episodes } from "@/lib/data"

// ดึงเนื้อหา Markdown ของตอนหนึ่ง ๆ แบบไดนามิกจากไฟล์ใน content/episodes/<slug>.md
// เรียกใช้จากฝั่ง client ผ่าน SWR: GET /api/episodes/<slug>
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params

  // ตรวจสอบว่า slug อยู่ในรายการ episodes จริง เพื่อป้องกัน path traversal
  const episode = episodes.find((ep) => ep.slug === slug)
  if (!episode) {
    return NextResponse.json({ error: "ไม่พบตอนที่ต้องการ" }, { status: 404 })
  }

  try {
    const filePath = path.join(process.cwd(), "content", "episodes", `${slug}.md`)
    const content = await readFile(filePath, "utf8")

    return NextResponse.json({
      slug,
      title: episode.title,
      content,
    })
  } catch {
    return NextResponse.json(
      { error: "ไม่สามารถโหลดเนื้อหาของตอนนี้ได้" },
      { status: 500 },
    )
  }
}
