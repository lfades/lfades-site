import type { ReactNode } from "react"

interface TerminalProps {
	children: ReactNode
	path?: string
}

export function Terminal({ children, path }: TerminalProps) {
	return (
		<div className="bg-pane-1 border border-surface-2 rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto my-8">
			<div className="bg-surface-2 px-4 py-2 flex items-center">
				<div className="flex space-x-2 items-center w-14">
					<div className="w-3 h-3 rounded-full inline-block mr-2 bg-danger" />
					<div className="w-3 h-3 rounded-full inline-block mr-2 bg-warning" />
					<div className="w-3 h-3 rounded-full inline-block mr-2 bg-success" />
				</div>
				<div className="text-xs flex-grow text-center">
					luis@lfades{path && `: ${path}`}
				</div>
				<div className="w-14" />
			</div>
			<div className="p-4 md:p-8 overflow-auto">{children}</div>
		</div>
	)
}
