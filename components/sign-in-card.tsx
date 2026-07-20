"use client"

import { User, X } from "lucide-react"

export function SignInCard({ onDismiss, onSignIn }: { onDismiss?: () => void; onSignIn?: () => void }) {
  return (
    <div className="relative rounded-xl border border-border bg-card p-4 shadow-sm">
      {onDismiss ? (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="ปิด"
          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      ) : null}
      <h2 className="text-base font-semibold text-foreground">เข้าสู่ระบบหรือสมัครสมาชิก</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        [ข้อความสั้น ๆ อธิบายประโยชน์ของการสร้างบัญชี]
      </p>
      <button
        type="button"
        onClick={onSignIn}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
      >
        <User className="h-4 w-4" aria-hidden="true" />
        เข้าสู่ระบบ
      </button>
    </div>
  )
}
