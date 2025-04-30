import Image from "next/image";
import Link from "next/link";
import lfadesPhoto from "../public/lfades.jpg";
import { Theme } from "./theme";

export function Neofetch() {
	return (
		<div className="flex flex-col md:flex-row gap-6">
			<div className="mt-2 flex-shrink-0 w-48 h-48 mx-auto md:mx-0">
				<div className="w-full h-full bg-surface-2 rounded-md overflow-hidden flex items-center justify-center">
					<Image src={lfadesPhoto} alt="Photo of Luis Alvarez" priority />
				</div>
			</div>

			<div className="flex-grow">
				<div className="text-accent-4 font-bold text-xl mb-2">
					Luis Fernando Alvarez David
				</div>
				<div className="border-b border-surface-2 mb-2"></div>

				<div className="grid grid-cols-[max-content_1fr] gap-1 gap-x-6">
					<div className="text-1">OS:</div>
					<div>Web Browser</div>

					<div className="text-1">Host:</div>
					<div>Vercel</div>

					<div className="text-1">Kernel:</div>
					<div>Next.js</div>

					<div className="text-1">Uptime:</div>
					<div>+12 years cooking</div>

					<div className="text-1">Packages:</div>
					<div>I'll count them later</div>

					<div className="text-1">Shell:</div>
					<div>I use neovim btw</div>

					<div className="text-1">Resolution:</div>
					<div>Responsive</div>

					<Theme />

					<div className="text-1">Terminal:</div>
					<div>Wezterm</div>

					<div className="text-1">Font:</div>
					<div>Maple Mono</div>

					<div className="text-1">Memory:</div>
					<div>
						<Link
							href="https://github.com/lfades"
							target="_blank"
							rel="noopener noreferrer"
							className="text-link hover:text-link-hover hover:underline"
						>
							GitHub
						</Link>
						{" | "}
						<Link
							href="https://x.com/luis_fades"
							target="_blank"
							rel="noopener noreferrer"
							className="text-link hover:text-link-hover hover:underline"
						>
							X
						</Link>
						{" | "}
						<Link
							href="https://www.linkedin.com/in/luis-fernando-alvarez-david-1a490a158"
							target="_blank"
							rel="noopener noreferrer"
							className="text-link hover:text-link-hover hover:underline"
						>
							LinkedIn
						</Link>
					</div>
				</div>

				<div className="mt-4 grid grid-cols-[repeat(auto-fill,1rem)]">
					<div className="h-6 bg-accent-1"></div>
					<div className="h-6 bg-accent-2"></div>
					<div className="h-6 bg-accent-3"></div>
					<div className="h-6 bg-accent-4"></div>
					<div className="h-6 bg-danger"></div>
					<div className="h-6 bg-danger-1"></div>
					<div className="h-6 bg-attention"></div>
					<div className="h-6 bg-warning"></div>
					<div className="h-6 bg-success"></div>
					<div className="h-6 bg-info-1"></div>
					<div className="h-6 bg-info-2"></div>
					<div className="h-6 bg-1"></div>
					<div className="h-6 bg-2"></div>
					<div className="h-6 bg-3"></div>
					<div className="h-6 bg-text"></div>
					<div className="h-6 bg-text-1"></div>
					<div className="h-6 bg-text-2"></div>
					<div className="h-6 bg-overlay"></div>
					<div className="h-6 bg-overlay-1"></div>
					<div className="h-6 bg-overlay-2"></div>
					<div className="h-6 bg-surface"></div>
					<div className="h-6 bg-surface-1"></div>
					<div className="h-6 bg-surface-2"></div>
					<div className="h-6 bg-pane"></div>
					<div className="h-6 bg-pane-1"></div>
					<div className="h-6 bg-pane-2"></div>
				</div>
			</div>
		</div>
	);
}
