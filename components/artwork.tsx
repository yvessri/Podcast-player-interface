import { ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type ArtworkProps = {
  alt: string
  className?: string
  rounded?: string
  /** เส้นทางรูปจริงใน public/ เช่น "/covers/nutrition.jpg" ถ้าไม่ส่งมาจะแสดง placeholder */
  src?: string
}

/**
 * แสดงภาพปก: ถ้ามี `src` จะแสดงรูปจริง มิฉะนั้นแสดง placeholder ที่เป็นกลาง
 * ดูวิธีเพิ่มรูปจริงและขนาดที่แนะนำได้ในหัวข้อ COVER IMAGES ที่ lib/data.ts
 */
export function Artwork({ alt, className, rounded = "rounded-lg", src }: ArtworkProps) {
  if (src) {
    return (
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className={cn("object-cover", rounded, className)}
        crossOrigin="anonymous"
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "flex items-center justify-center bg-muted text-muted-foreground",
        rounded,
        className,
      )}
    >
      <ImageIcon className="h-1/4 w-1/4 min-h-4 min-w-4 max-h-10 max-w-10" aria-hidden="true" />
    </div>
  )
}
