import type { Components } from "react-markdown"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

// คอมโพเนนต์แสดงผล Markdown อย่างสวยงาม โดยใช้เฉพาะโทเคนสีเดิมของโปรเจกต์
// (foreground, muted-foreground, brand, border, muted) — ไม่มีการเพิ่มสีใหม่
const components: Components = {
  h1: ({ children }) => (
    <h1 className="mt-8 text-2xl font-bold tracking-tight text-balance text-foreground first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-8 text-xl font-bold text-balance text-foreground">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-6 text-lg font-semibold text-foreground">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mt-4 text-base leading-relaxed text-foreground">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mt-4 space-y-2 pl-1 text-base leading-relaxed text-foreground">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-base leading-relaxed text-foreground marker:text-muted-foreground">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="flex gap-2 [ol_&]:list-item [ol_&]:pl-1">
      <span
        aria-hidden="true"
        className="mt-2 hidden h-1.5 w-1.5 shrink-0 rounded-full bg-brand [ul_&]:block"
      />
      <span className="min-w-0">{children}</span>
    </li>
  ),
  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  blockquote: ({ children }) => (
    <blockquote className="mt-6 rounded-r-lg border-l-4 border-brand bg-muted px-4 py-3 text-sm leading-relaxed text-muted-foreground">
      {children}
    </blockquote>
  ),
  a: ({ children, href }) => (
    <a href={href} className="font-medium text-brand underline underline-offset-2 hover:opacity-80">
      {children}
    </a>
  ),
  hr: () => <hr className="mt-8 border-border" />,
  table: ({ children }) => (
    <div className="mt-6 overflow-x-auto rounded-xl border border-border">
      <table className="w-full border-collapse text-left text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-muted">{children}</thead>,
  th: ({ children }) => (
    <th className="border-b border-border px-4 py-2.5 font-semibold text-foreground">{children}</th>
  ),
  td: ({ children }) => (
    <td className="border-b border-border px-4 py-2.5 text-muted-foreground">{children}</td>
  ),
  code: ({ children }) => (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">{children}</code>
  ),
}

export function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
