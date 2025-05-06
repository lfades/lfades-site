import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { Neofetch } from "@/components/neofetch"
import { TerminalLine } from "@/components/terminal-line"

export default function Home() {
	return (
		<Terminal>
			<div className="p-4">
				<TerminalLine text="home" />
				<Neofetch />
				<TerminalLine className="mt-4" text="ls" />
				<div className="mt-2 mb-8 grid grid-cols-1 md:grid-cols-2 gap-2">
					{/* <Link */}
					{/* 	href="/blog" */}
					{/* 	className="text-ctp-blue hover:text-ctp-lavender hover:underline" */}
					{/* > */}
					{/* 	blog/ */}
					{/* </Link> */}
					{/* <Link */}
					{/* 	href="/projects" */}
					{/* 	className="text-ctp-blue hover:text-ctp-lavender hover:underline" */}
					{/* > */}
					{/* 	projects/ */}
					{/* </Link> */}
					<div>
						<Link
							href="/about"
							className="text-link hover:text-link-hover underline"
						>
							about.md
						</Link>
					</div>
					<div>
						<Link
							href="/contact"
							className="text-link hover:text-link-hover underline"
						>
							contact.md
						</Link>
					</div>
				</div>
				<TerminalLine />
			</div>
		</Terminal>
	)
}
