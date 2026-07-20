"use client"

import { Square, Volume2 } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

// =============================================================================
// ปุ่ม "ฟังเนื้อหา" (Text-to-Speech)
// -----------------------------------------------------------------------------
// ตำแหน่งที่วาง: อยู่ในส่วนหัวของแต่ละตอน (episode header) ถัดจากปุ่มเล่น
// เพื่อให้ผู้ใช้กดฟังเนื้อหาบทความได้ทันที
//
// การทำงานปัจจุบัน: ใช้ Web Speech API (SpeechSynthesis) ที่มีมากับเบราว์เซอร์
// - รองรับภาษาไทย (th-TH) หากเครื่อง/เบราว์เซอร์ของผู้ใช้มีเสียงภาษาไทยติดตั้งอยู่
// - ทำงานฝั่ง client ล้วน ไม่มีค่าใช้จ่าย ไม่ต้องตั้งค่า API key
//
// -----------------------------------------------------------------------------
// วิธีเปลี่ยนไปใช้บริการ TTS ภายนอก (คุณภาพเสียงสูงกว่า) ในอนาคต:
//   1) สร้าง API route เช่น app/api/tts/route.ts ที่รับข้อความแล้วเรียกผู้ให้บริการ
//      (เช่น Google Cloud TTS, Amazon Polly, ElevenLabs, Microsoft Azure Speech)
//      โดยเก็บ API key ไว้เป็น environment variable ฝั่งเซิร์ฟเวอร์เท่านั้น
//   2) ให้ route คืนไฟล์เสียง (audio/mpeg) กลับมา
//   3) ในปุ่มนี้ ให้แทนที่ส่วน SpeechSynthesis ด้วยการ fetch เสียงจาก route
//      แล้วเล่นผ่าน:  const audio = new Audio(urlOrBlob); audio.play()
//   4) จัดการสถานะ playing/error ด้วย state ที่มีอยู่แล้วด้านล่าง
// =============================================================================

type ListenButtonProps = {
  /** ชื่อตอน — อ่านออกเสียงเป็นประโยคแรก */
  title: string
  /** เนื้อหา Markdown ของตอนที่จะอ่านออกเสียง */
  text: string
  /** ปิดใช้งานปุ่ม (เช่น ระหว่างกำลังโหลดเนื้อหา) */
  disabled?: boolean
  className?: string
}

// แปลง Markdown เป็นข้อความอ่านง่าย ๆ (ตัดสัญลักษณ์ #, *, |, > และบล็อกโค้ดออก)
function toPlainText(markdown: string) {
  return markdown
    .replace(/```[\s\S]*?```/g, "")
    .replace(/[#>*_`|~-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

export function ListenButton({ title, text, disabled = false, className }: ListenButtonProps) {
  const [supported, setSupported] = useState(true)
  const [speaking, setSpeaking] = useState(false)

  useEffect(() => {
    // ตรวจสอบว่าเบราว์เซอร์รองรับ SpeechSynthesis หรือไม่
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setSupported(false)
    }
    // หยุดการอ่านเมื่อออกจากหน้า/เปลี่ยนตอน
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  // หยุดอ่านอัตโนมัติเมื่อเปลี่ยนเนื้อหา (เปลี่ยนตอน)
  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel()
      setSpeaking(false)
    }
  }, [text])

  const handleClick = () => {
    if (!supported || disabled) return

    // ถ้ากำลังอ่านอยู่ ให้หยุด
    if (speaking) {
      window.speechSynthesis.cancel()
      setSpeaking(false)
      return
    }

    const plain = `${title}. ${toPlainText(text)}`.trim()
    if (!plain) return

    const utterance = new SpeechSynthesisUtterance(plain)
    utterance.lang = "th-TH"
    utterance.rate = 1
    utterance.onend = () => setSpeaking(false)
    utterance.onerror = () => setSpeaking(false)

    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utterance)
    setSpeaking(true)
  }

  if (!supported) {
    // ถ้าเบราว์เซอร์ไม่รองรับ ให้ซ่อนปุ่มเพื่อไม่ให้ผู้ใช้สับสน
    return null
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      aria-label={speaking ? "หยุดฟังเนื้อหา" : "ฟังเนื้อหา"}
      aria-pressed={speaking}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
    >
      {speaking ? (
        <Square className="h-4 w-4 fill-current text-brand" aria-hidden="true" />
      ) : (
        <Volume2 className="h-4 w-4 text-brand" aria-hidden="true" />
      )}
      <span>{speaking ? "หยุดฟัง" : "ฟังเนื้อหา"}</span>
    </button>
  )
}
