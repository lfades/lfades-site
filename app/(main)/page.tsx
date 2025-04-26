import Link from "next/link";
import { Terminal } from "@/components/terminal";
import { Neofetch } from "@/components/neofetch";

export default function Home() {
	return (
		<Terminal>
			<div className="p-4">
				<div className="mb-2 text-ctp-green">
					<span className="text-ctp-blue">luis@alvarez</span>:
					<span className="text-ctp-mauve">~</span>$ home
				</div>

				<Neofetch />

				<div className="mt-8 text-ctp-green">
					<span className="text-ctp-blue">luis@alvarez</span>:
					<span className="text-ctp-mauve">~</span>$ ls
				</div>
				<div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
					<Link
						href="/blog"
						className="text-ctp-blue hover:text-ctp-lavender hover:underline"
					>
						blog/
					</Link>
					<Link
						href="/projects"
						className="text-ctp-blue hover:text-ctp-lavender hover:underline"
					>
						projects/
					</Link>
					<Link
						href="/about"
						className="text-ctp-blue hover:text-ctp-lavender hover:underline"
					>
						about.md
					</Link>
					<Link
						href="/contact"
						className="text-ctp-blue hover:text-ctp-lavender hover:underline"
					>
						contact.sh
					</Link>
				</div>

				<div className="mt-8 text-ctp-green">
					<span className="text-ctp-blue">luis@alvarez</span>:
					<span className="text-ctp-mauve">~</span>${" "}
					<span className="animate-pulse">█</span>
				</div>
			</div>
		</Terminal>
	);
}
