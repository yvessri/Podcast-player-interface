"use client"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import { LOGO_PLACEHOLDER } from "@/lib/data"

type SignInModalProps = {
  open: boolean
  onClose: () => void
}

export function SignInModal({ open, onClose }: SignInModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKeyDown)
    // Prevent background scroll while the modal is open.
    document.body.style.overflow = "hidden"
    // Move focus into the dialog for accessibility.
    closeRef.current?.focus()

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sign-in-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="ปิดหน้าต่างเข้าสู่ระบบ"
        onClick={onClose}
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-sm rounded-2xl border border-border bg-card p-6 shadow-xl">
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="ปิด"
          className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="mb-6 text-center">
          <span className="text-lg font-bold text-foreground">{LOGO_PLACEHOLDER}</span>
          <h2 id="sign-in-title" className="mt-3 text-2xl font-bold tracking-tight text-foreground">
            เข้าสู่ระบบ
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">[ข้อความสั้น ๆ อธิบายประโยชน์ของบัญชี]</p>
        </div>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            onClose()
          }}
        >
          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-sm font-medium text-foreground">
              อีเมล
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/30"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="password" className="block text-sm font-medium text-foreground">
              รหัสผ่าน
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/30"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
          >
            เข้าสู่ระบบ
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          {"ยังไม่มีบัญชีใช่ไหม? "}
          <button type="button" className="font-semibold text-brand hover:underline">
            สมัครสมาชิก
          </button>
        </p>
      </div>
    </div>
  )
}
