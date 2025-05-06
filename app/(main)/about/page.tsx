import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { TerminalLine } from "@/components/terminal-line"

export default function AboutPage() {
	return (
		<div className="bg-pane text-text font-mono">
			<Terminal path="~/about.md">
				<div className="p-4">
					<TerminalLine className="mb-4" text="cat about.md" />

					<div className="mb-4">
						<Link
							href="/"
							className="text-link hover:text-link-hover hover:underline"
						>
							cd ..
						</Link>
					</div>

					<div className="max-w-none">
						<h1 className="text-2xl font-bold text-accent-4 mb-4">About me</h1>

						<p className="mb-4">
							Hello! I'm Luis, a passionate developer that spends his time
							working with Next.js for work, fun, and <b>for the web</b>.
						</p>

						<h2 className="text-xl font-bold text-accent-2 mt-6 mb-3">
							Background
						</h2>

						<p className="mb-4">
							I've been programming since school, my first project was a search
							dashboard for the library of my school that I built with Django.
							My first job was working for 5 years in my own company, and
							although it was a finantially irresponsable decision because I was
							young and stupid, it thought me that I can do anything.
						</p>
						<p className="mb-4">
							I wanted to work at Zeit (now Vercel) so badly because one of the
							goats I followed was working there, but I also needed to support
							my family so my second job was at a local agency in Colombia,
							where I live. This was my first "real" job, where I made friends,
							went to an office, and played a lot of ping pong.
						</p>
						<p className="mb-4">
							I only lasted in the agency for 4 months, because my dream came
							true, and now I've been at Vercel for over 6 years and ngl I'm
							quite happy, relieved, and living the dream.
						</p>

						<h2 className="text-xl font-bold text-accent-2 mt-6 mb-3">
							Skills
						</h2>
						<p className="mb-4">
							I consider myself to have a good understanding of how the web
							works. I can quickly tell you if a site is slow and what can be
							done to improve it, it's like a vibe at this point. I mostly use
							TypeScript with Next.js but I've played along with Python, Rust,
							Lua (thank you Neovim) and right now Blender because I want to
							make a 3D game.
						</p>

						<h2 className="text-xl font-bold text-accent-2 mt-6 mb-3">
							Philosophy
						</h2>

						<p className="mb-4">
							I aim to be as responsible and useful as possible. That means I
							work hard and family comes first, because good things come from
							the sweat of doing something meaningful for something bigger than
							me.
						</p>
					</div>

					<div className="mt-6">
						<Link
							href="/"
							className="text-link hover:text-link-hover hover:underline"
						>
							cd ..
						</Link>
					</div>

					<TerminalLine className="mt-4" path="~/about.md" />
				</div>
			</Terminal>
		</div>
	)
}
