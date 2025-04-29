import Image from "next/image";
import Link from "next/link";
import lfadesPhoto from "../public/lfades.jpg";
import { Theme } from "./theme";

export function Neofetch() {
	return (
		<div className="flex flex-col md:flex-row gap-6">
			<div className="mt-2 flex-shrink-0 w-48 h-48 mx-auto md:mx-0">
				<div className="w-full h-full bg-ctp-surface0 rounded-md overflow-hidden flex items-center justify-center">
					<Image src={lfadesPhoto} alt="Photo of Luis Alvarez" priority />
				</div>
			</div>

			<div className="flex-grow">
				<div className="text-ctp-mauve font-bold text-xl mb-2">
					Luis Fernando Alvarez David
				</div>
				<div className="border-b border-ctp-surface0 mb-2"></div>

				<div className="grid grid-cols-[max-content_1fr] gap-1 gap-x-6">
					<div className="text-ctp-blue">OS:</div>
					<div className="text-ctp-text">Web Browser</div>

					<div className="text-ctp-blue">Host:</div>
					<div className="text-ctp-text">Vercel</div>

					<div className="text-ctp-blue">Kernel:</div>
					<div className="text-ctp-text">Next.js</div>

					<div className="text-ctp-blue">Uptime:</div>
					<div className="text-ctp-text">+12 years cooking</div>

					<div className="text-ctp-blue">Packages:</div>
					<div className="text-ctp-text">I'll count them later</div>

					<div className="text-ctp-blue">Shell:</div>
					<div className="text-ctp-text">I use neovim btw</div>

					<div className="text-ctp-blue">Resolution:</div>
					<div className="text-ctp-text">Responsive</div>

					<Theme />

					<div className="text-ctp-blue">Terminal:</div>
					<div className="text-ctp-text">Wezterm</div>

					<div className="text-ctp-blue">Font:</div>
					<div className="text-ctp-text">Maple Mono</div>

					<div className="text-ctp-blue">Memory:</div>
					<div className="text-ctp-text">
						<Link
							href="https://github.com/lfades"
							target="_blank"
							rel="noopener noreferrer"
							className="text-ctp-blue hover:text-ctp-lavender hover:underline"
						>
							GitHub
						</Link>
						{" | "}
						<Link
							href="https://x.com/luis_fades"
							target="_blank"
							rel="noopener noreferrer"
							className="text-ctp-blue hover:text-ctp-lavender hover:underline"
						>
							X
						</Link>
						{" | "}
						<Link
							href="https://www.linkedin.com/in/luis-fernando-alvarez-david-1a490a158"
							target="_blank"
							rel="noopener noreferrer"
							className="text-ctp-blue hover:text-ctp-lavender hover:underline"
						>
							LinkedIn
						</Link>
					</div>
				</div>

				<div className="mt-4 grid grid-cols-[repeat(auto-fill,1rem)]">
					<div className="h-6 bg-ctp-rosewater"></div>
					<div className="h-6 bg-ctp-flamingo"></div>
					<div className="h-6 bg-ctp-pink"></div>
					<div className="h-6 bg-ctp-mauve"></div>
					<div className="h-6 bg-ctp-red"></div>
					<div className="h-6 bg-ctp-maroon"></div>
					<div className="h-6 bg-ctp-peach"></div>
					<div className="h-6 bg-ctp-yellow"></div>
					<div className="h-6 bg-ctp-green"></div>
					<div className="h-6 bg-ctp-teal"></div>
					<div className="h-6 bg-ctp-sky"></div>
					<div className="h-6 bg-ctp-sapphire"></div>
					<div className="h-6 bg-ctp-blue"></div>
					<div className="h-6 bg-ctp-lavender"></div>
					<div className="h-6 bg-ctp-text"></div>
					<div className="h-6 bg-ctp-subtext1"></div>
					<div className="h-6 bg-ctp-subtext0"></div>
					<div className="h-6 bg-ctp-overlay2"></div>
					<div className="h-6 bg-ctp-overlay1"></div>
					<div className="h-6 bg-ctp-overlay0"></div>
					<div className="h-6 bg-ctp-surface2"></div>
					<div className="h-6 bg-ctp-surface1"></div>
					<div className="h-6 bg-ctp-surface0"></div>
					<div className="h-6 bg-ctp-base"></div>
					<div className="h-6 bg-ctp-mantle"></div>
					<div className="h-6 bg-ctp-crust"></div>
				</div>
			</div>
		</div>
	);
}
