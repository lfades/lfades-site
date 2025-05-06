import { Terminal } from "@/components/terminal"
import { Neofetch } from "@/components/neofetch"
import { TerminalLine } from "@/components/terminal-line"
import { Link } from "@/components/link"

export default function Home() {
	return (
		<Terminal>
			<TerminalLine className="mb-2" text="home" />
			<Neofetch />
			<TerminalLine className="mb-2 mt-4" text="ls" />
			<div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-2">
				{/* <Link */}
				{/* 	href="/blog" */}
				{/* 	className="text-ctp-blue hover:text-ctp-lavender hover:underline" */}
				{/* > */}
				{/* 	blog/ */}
				{/* </Link> */}
				<div>
					<Link href="/projects" underline>
						projects/
					</Link>
				</div>
				<div>
					<Link href="/about" underline>
						about.md
					</Link>
				</div>
				<div>
					<Link href="/contact" underline>
						contact.md
					</Link>
				</div>
			</div>
			<TerminalLine />
		</Terminal>
	)
}
