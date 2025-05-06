import { Link } from "@/components/link"
import { Terminal } from "@/components/terminal"
import { TerminalLine } from "@/components/terminal-line"

export default function ProjectsPage() {
	return (
		<Terminal path="~/projects">
			<div className="p-4">
				<TerminalLine className="mt-4" path="~/projects" text="ls -la" />

				<div className="space-y-6">
					<Project />
				</div>

				<div className="mt-6">
					<Link href="/">cd ..</Link>
				</div>

				<TerminalLine className="mt-4" path="~/projects" />
			</div>
		</Terminal>
	)
}

function Project() {
	return (
		<div className="border border-ctp-surface0 rounded-md p-4 hover:bg-ctp-surface0 transition-colors">
			<h2 className="text-xl font-bold text-ctp-mauve mb-2">@lfades/atom</h2>
			<p className="text-ctp-text mb-3">
				Straightforward state management library for React.
			</p>

			<div className="flex flex-wrap gap-2 mb-3">
				<span className="bg-ctp-surface1 text-ctp-subtext0 px-2 py-1 rounded text-xs">
					Next.js
				</span>
				<span className="bg-ctp-surface1 text-ctp-subtext0 px-2 py-1 rounded text-xs">
					React
				</span>
				<span className="bg-ctp-surface1 text-ctp-subtext0 px-2 py-1 rounded text-xs">
					TypeScript
				</span>
			</div>

			<Link href="https://github.com/lfades/atom">
				$ git clone https://github.com/lfades/atom.git
			</Link>
		</div>
	)
}
