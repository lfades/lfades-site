import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { blogPosts } from "@/data/blog-posts"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
	params: Promise<{ slug: string }>
}

export function generateStaticParams() {
	return blogPosts.map((post) => ({
		slug: post.slug,
	}))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	const { slug } = await params
	const post = blogPosts.find((post) => post.slug === slug)

	if (!post) {
		notFound()
	}

	return (
		<div className="bg-ctp-base text-ctp-text font-mono">
			<Terminal path={`~/blog/${post.slug}`}>
				<div className="p-4">
					<div className="mb-4 text-ctp-green">
						<span className="text-ctp-blue">luis@alvarez</span>:
						<span className="text-ctp-mauve">~/blog</span>$ cat {post.slug}.md
					</div>

					<div className="mb-6">
						<h1 className="text-2xl font-bold text-ctp-mauve mb-2">
							{post.title}
						</h1>
						<div className="text-ctp-subtext1 mb-4">{post.date}</div>

						<div className="max-w-none">
							<div dangerouslySetInnerHTML={{ __html: post.content }} />
						</div>
					</div>

					<div className="mt-8 flex space-x-4">
						<Link
							href="/blog"
							className="text-ctp-mauve hover:text-ctp-lavender hover:underline"
						>
							cd ..
						</Link>

						{post.prev && (
							<Link
								href={`/blog/${post.prev}`}
								className="text-ctp-blue hover:text-ctp-lavender hover:underline"
							>
								prev
							</Link>
						)}

						{post.next && (
							<Link
								href={`/blog/${post.next}`}
								className="text-ctp-blue hover:text-ctp-lavender hover:underline"
							>
								next
							</Link>
						)}
					</div>

					<div className="mt-4 text-ctp-green">
						<span className="text-ctp-blue">luis@alvarez</span>:
						<span className="text-ctp-mauve">~/blog/{post.slug}</span>${" "}
						<span className="animate-pulse">█</span>
					</div>
				</div>
			</Terminal>
		</div>
	)
}
