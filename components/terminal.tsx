import type React from "react"

interface TerminalProps {
  children: React.ReactNode
  title?: string
}

export function Terminal({ children, title = "terminal" }: TerminalProps) {
  return (
    <div className="terminal-window max-w-4xl mx-auto my-8">
      <div className="terminal-header flex items-center">
        <div className="flex space-x-2 items-center">
          <div className="terminal-button bg-ctp-red"></div>
          <div className="terminal-button bg-ctp-yellow"></div>
          <div className="terminal-button bg-ctp-green"></div>
        </div>
        <div className="text-ctp-text text-xs mx-auto">{title}</div>
      </div>
      <div className="terminal-body">{children}</div>
    </div>
  )
}
