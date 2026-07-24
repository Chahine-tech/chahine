import { ReactNode } from 'react'

interface TerminalWindowProps {
  title?: string
  children: ReactNode
  className?: string
}

export function TerminalWindow({
  title = 'chahine — zsh',
  children,
  className,
}: TerminalWindowProps) {
  return (
    <div
      className={`animate-fade-up overflow-hidden rounded-base border border-border bg-surface shadow-[0_10px_40px_-20px_rgba(0,0,0,0.5)] ${className ?? ''}`}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 select-none truncate text-xs text-faint">
          {title}
        </span>
      </div>
      <div className="p-5 sm:p-7">{children}</div>
    </div>
  )
}
