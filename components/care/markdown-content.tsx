"use client"

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mt-2 mb-5 text-pretty text-2xl font-bold leading-snug text-foreground md:text-3xl">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mt-10 mb-4 flex items-center gap-3 border-b border-border pb-2 text-pretty text-xl font-bold leading-snug text-foreground md:text-2xl">
              <span className="inline-block h-6 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-7 mb-3 text-pretty text-lg font-semibold leading-snug text-foreground md:text-xl">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="mt-5 mb-2 text-pretty text-base font-semibold leading-snug text-primary">{children}</h4>
          ),
          p: ({ children }) => <p className="my-4 leading-8 text-foreground/90">{children}</p>,
          strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
          ul: ({ children }) => <ul className="my-4 space-y-2 pl-1">{children}</ul>,
          ol: ({ children }) => <ol className="my-4 list-decimal space-y-2 pl-6 marker:font-semibold marker:text-primary">{children}</ol>,
          li: ({ children }) => (
            <li className="relative pl-6 leading-8 text-foreground/90 [ol>&]:pl-1">
              <span
                className="absolute left-0 top-3.5 h-1.5 w-1.5 rounded-full bg-primary/60 [ol>&]:hidden"
                aria-hidden="true"
              />
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-5 rounded-r-lg border-l-4 border-primary bg-accent/50 py-2 pl-4 pr-3 text-foreground/90">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="my-8 border-border" />,
          a: ({ children, href }) => (
            <a href={href} className="font-medium text-primary underline underline-offset-2 hover:opacity-80">
              {children}
            </a>
          ),
          code: ({ children }) => (
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">{children}</code>
          ),
          table: ({ children }) => (
            <div className="my-5 overflow-x-auto rounded-lg border border-border">
              <table className="w-full border-collapse text-sm">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border-b border-border bg-muted px-4 py-2 text-left font-semibold text-foreground">
              {children}
            </th>
          ),
          td: ({ children }) => <td className="border-b border-border px-4 py-2 text-foreground/90">{children}</td>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
