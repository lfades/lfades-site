import type { ReactNode } from "react"
import { Link } from "@/components/link"
import { Terminal } from "@/components/terminal"
import { TerminalLine } from "@/components/terminal-line"

export default function ProjectsPage() {
	return (
		<Terminal path="~/projects">
			<TerminalLine className="mb-4" path="~/projects" text="ls -la" />

			<div className="space-y-6">
				<Project />
			</div>

			<div className="mt-8">
				<Link href="/">cd ..</Link>
			</div>

			<TerminalLine className="mt-4" path="~/projects" />
		</Terminal>
	)
}

function Project() {
	return (
		<div className="border bg-pane rounded-md p-4">
			<h2 className="text-xl font-bold text-accent-4 mb-2">@lfades/atom</h2>
			<p className="mb-3">
				Straightforward state management library for React.
			</p>

			<div className="flex flex-wrap gap-2 mb-3">
				<Tech>Next.js</Tech>
				<Tech>React</Tech>
				<Tech>TypeScript</Tech>
			</div>

			<Link
				href="https://github.com/lfades/atom"
				target="_blank"
				rel="noopener noreferrer"
			>
				$ git clone https://github.com/lfades/atom.git
			</Link>
		</div>
	)
}

function Tech({ children }: { children: ReactNode }) {
	return <span className="bg-pane-1 px-2 py-1 rounded text-xs">{children}</span>
}
