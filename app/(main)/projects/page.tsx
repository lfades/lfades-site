import type { ReactNode } from "react"
import { Link } from "@/components/link"
import { Terminal } from "@/components/terminal"
import { TerminalLine } from "@/components/terminal-line"
import { Globe } from "lucide-react"

export default function ProjectsPage() {
	return (
		<Terminal path="~/projects">
			<TerminalLine className="mb-4" path="~/projects" text="ls -la" />

			<div className="space-y-6">
				<Project
					title="@lfades/atom"
					description="Straightforward state management library for React."
					web="https://atom.lfades.com"
					git="https://github.com/lfades/atom.git"
					tech={["Next.js", "React", "TypeScript"]}
				/>
				<Project
					title="edge-cors"
					description="It's the same implementation of expressjs/cors but for enabling CORS at the edge and similar environments with Web APIs, specifically the Fetch API."
					git="https://github.com/lfades/edge-cors.git"
					tech={["TypeScript"]}
				/>
				<Project
					title="react-tweet"
					description="Allows you to embed tweets in your React application when using Next.js, Create React App, Vite, and more."
					web="https://react-tweet.vercel.app"
					git="https://github.com/vercel/react-tweet.git"
					tech={["React", "TypeScript"]}
				/>
			</div>

			<div className="mt-8">
				<Link href="/">cd ..</Link>
			</div>

			<TerminalLine className="mt-4" path="~/projects" />
		</Terminal>
	)
}

function Project({
	title,

	description,
	web,
	git,
	tech,
}: {
	title: string
	description: string
	web?: string
	git?: string
	tech: string[]
}) {
	return (
		<div className="border bg-pane rounded-md p-4">
			<h2 className="text-xl font-bold text-accent-4 mb-2">{title}</h2>
			<p className="mb-2">{description}</p>
			{web ? (
				<div>
					<Link href={web} target="_blank" rel="noopener noreferrer">
						{web.replace(/^https?:\/\//, "")}
					</Link>
				</div>
			) : null}

			<div className="flex flex-wrap gap-2 my-2">
				{tech.map((str) => (
					<Tech key={str}>{str}</Tech>
				))}
			</div>

			{git ? (
				<div>
					<Link
						href={git.replace(/\.git$/, "")}
						target="_blank"
						rel="noopener noreferrer"
					>
						$ git clone {git}
					</Link>
				</div>
			) : null}
		</div>
	)
}

function Tech({ children }: { children: ReactNode }) {
	return <span className="bg-pane-1 px-2 py-1 rounded text-xs">{children}</span>
}
