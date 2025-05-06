import { Mail, Github, Linkedin, Twitter } from "lucide-react"
import { Terminal } from "@/components/terminal"
import { TerminalLine } from "@/components/terminal-line"
import { Link } from "@/components/link"

export default function ContactPage() {
	return (
		<Terminal path="~/contact.md">
			<TerminalLine className="mb-4" text="cat contact.md" />

			<div className="mb-6">
				<h1 className="text-2xl font-bold text-accent-4 mb-4">Contact Me</h1>

				<p className="mb-6">Feel free to reach out! </p>

				<div className="mb-8 space-y-4">
					<h2 className="text-xl font-bold text-accent-2">Social</h2>

					<div className="space-y-3">
						<a
							href="mailto:me@lfades.com"
							className="flex items-center gap-2 hover:text-link-hover"
						>
							<Mail className="h-5 w-5 text-accent-4" />
							<span>me@lfades.com</span>
						</a>

						<a
							href="https://github.com/lfades"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 hover:text-link-hover"
						>
							<Github className="h-5 w-5 text-accent-4" />
							<span>github.com/lfades</span>
						</a>

						<a
							href="https://www.linkedin.com/in/luis-fernando-alvarez-david-1a490a158"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 hover:text-link-hover"
						>
							<Linkedin className="h-5 w-5 text-accent-4" />
							<span>linkedin.com/in/luis-fernando-alvarez-david</span>
						</a>

						<a
							href="https://x.com/luis_fades"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 hover:text-link-hover"
						>
							<Twitter className="h-5 w-5 text-accent-4" />
							<span>x.com/luis_fades</span>
						</a>
					</div>
				</div>
			</div>

			<div className="mt-8">
				<Link href="/">cd ..</Link>
			</div>

			<TerminalLine className="mt-4" />
		</Terminal>
	)
}
