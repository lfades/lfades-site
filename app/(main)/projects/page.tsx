import Link from "next/link"
import { Terminal } from "@/components/terminal"

export default function ProjectsPage() {
	const projects = [
		{
			name: "E-commerce Platform",
			description:
				"A full-stack e-commerce solution built with Next.js and Stripe",
			tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
			link: "https://github.com/luisalvarez/ecommerce-platform",
		},
		{
			name: "Weather App",
			description: "Real-time weather application with geolocation",
			tech: ["React", "OpenWeather API", "Geolocation API"],
			link: "https://github.com/luisalvarez/weather-app",
		},
		{
			name: "Task Management System",
			description: "Collaborative task management tool for teams",
			tech: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
			link: "https://github.com/luisalvarez/task-management",
		},
		{
			name: "Portfolio Website",
			description: "Terminal-style personal website with Catppuccin theme",
			tech: ["Next.js", "TypeScript", "Tailwind CSS"],
			link: "https://github.com/luisalvarez/terminal-portfolio",
		},
	]

	return (
		<div className="bg-ctp-base text-ctp-text font-mono">
			<Terminal path="~/projects">
				<div className="p-4">
					<div className="mb-4 text-ctp-green">
						<span className="text-ctp-blue">luis@alvarez</span>:
						<span className="text-ctp-mauve">~/projects</span>$ ls -la
					</div>

					<div className="space-y-6">
						{projects.map((project, index) => (
							<div
								key={index}
								className="border border-ctp-surface0 rounded-md p-4 hover:bg-ctp-surface0 transition-colors"
							>
								<h2 className="text-xl font-bold text-ctp-mauve mb-2">
									{project.name}
								</h2>
								<p className="text-ctp-text mb-3">{project.description}</p>

								<div className="flex flex-wrap gap-2 mb-3">
									{project.tech.map((tech, techIndex) => (
										<span
											key={techIndex}
											className="bg-ctp-surface1 text-ctp-subtext0 px-2 py-1 rounded text-xs"
										>
											{tech}
										</span>
									))}
								</div>

								<Link
									href={project.link}
									className="text-ctp-blue hover:text-ctp-lavender hover:underline text-sm"
								>
									$ git clone {project.link}
								</Link>
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
						<span className="text-ctp-mauve">~/projects</span>${" "}
						<span className="animate-pulse">█</span>
					</div>
				</div>
			</Terminal>
		</div>
	)
}
