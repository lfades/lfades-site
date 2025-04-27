import Link from "next/link";
import { Terminal } from "@/components/terminal";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPage() {
	return (
		<div className="min-h-screen bg-ctp-base text-ctp-text font-mono">
			<Terminal title="luis@alvarez: ~/blog">
				<div className="p-4">
					<div className="mb-4 text-ctp-green">
						<span className="text-ctp-blue">luis@alvarez</span>:
						<span className="text-ctp-mauve">~/blog</span>$ ls -la
					</div>

					<div className="mb-6">
						<div className="grid grid-cols-12 text-ctp-subtext0 border-b border-ctp-surface0 pb-2">
							<div className="col-span-3">Date</div>
							<div className="col-span-9">Title</div>
						</div>

						{blogPosts.map((post) => (
							<div
								key={post.slug}
								className="grid grid-cols-12 border-b border-ctp-surface0 py-3 hover:bg-ctp-surface0"
							>
								<div className="col-span-3 text-ctp-subtext1">{post.date}</div>
								<div className="col-span-9">
									<Link
										href={`/blog/${post.slug}`}
										className="text-ctp-blue hover:text-ctp-lavender hover:underline"
									>
										{post.title}
									</Link>
								</div>
							</div>
						))}
					</div>

					<div className="mt-6">
						<Link
							href="/"
							className="text-ctp-mauve hover:text-ctp-lavender hover:underline"
						>
							cd ..
						</Link>
					</div>

					<div className="mt-4 text-ctp-green">
						<span className="text-ctp-blue">luis@alvarez</span>:
						<span className="text-ctp-mauve">~/blog</span>${" "}
						<span className="animate-pulse">█</span>
					</div>
				</div>
			</Terminal>
		</div>
	);
}
