import Link from "next/link"
import { Terminal } from "@/components/terminal"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ctp-base text-ctp-text font-mono">
      <Terminal title="luis@alvarez: ~/about.md">
        <div className="p-4">
          <div className="mb-4 text-ctp-green">
            <span className="text-ctp-blue">luis@alvarez</span>:<span className="text-ctp-mauve">~</span>$ cat about.md
          </div>

          <div className="prose prose-invert max-w-none">
            <h1 className="text-2xl font-bold text-ctp-mauve mb-4">About Luis Alvarez</h1>

            <p className="mb-4">
              Hello! I'm Luis, a passionate full-stack developer with a love for creating elegant, efficient, and
              user-friendly web applications.
            </p>

            <h2 className="text-xl font-bold text-ctp-blue mt-6 mb-3">Background</h2>

            <p className="mb-4">
              With over 5 years of experience in web development, I've worked on a variety of projects ranging from
              e-commerce platforms to real-time collaborative tools. My journey in tech began with a Computer Science
              degree, but my passion for building things has kept me continuously learning and exploring new
              technologies.
            </p>

            <h2 className="text-xl font-bold text-ctp-blue mt-6 mb-3">Skills</h2>

            <ul className="list-disc pl-5 mb-4">
              <li>Frontend: React, Next.js, TypeScript, Tailwind CSS</li>
              <li>Backend: Node.js, Express, NestJS</li>
              <li>Databases: MongoDB, PostgreSQL, Redis</li>
              <li>DevOps: Docker, CI/CD, AWS</li>
              <li>Tools: Git, VS Code, Figma</li>
            </ul>

            <h2 className="text-xl font-bold text-ctp-blue mt-6 mb-3">Philosophy</h2>

            <p className="mb-4">
              I believe in writing clean, maintainable code that solves real problems. My approach to development is
              centered around understanding user needs and creating solutions that are both technically sound and
              delightful to use.
            </p>

            <h2 className="text-xl font-bold text-ctp-blue mt-6 mb-3">When I'm Not Coding</h2>

            <p className="mb-4">
              Outside of work, you'll find me hiking in the mountains, experimenting with new cooking recipes, or diving
              into a good book. I'm also an avid open-source contributor and enjoy attending tech meetups and
              conferences.
            </p>

            <h2 className="text-xl font-bold text-ctp-blue mt-6 mb-3">Let's Connect</h2>

            <p className="mb-4">
              I'm always open to discussing new projects, technologies, or opportunities. Feel free to reach out through
              any of the channels listed on my contact page.
            </p>
          </div>

          <div className="mt-6">
            <Link href="/" className="text-ctp-mauve hover:text-ctp-lavender hover:underline">
              cd ..
            </Link>
          </div>

          <div className="mt-4 text-ctp-green">
            <span className="text-ctp-blue">luis@alvarez</span>:<span className="text-ctp-mauve">~/about.md</span>${" "}
            <span className="animate-pulse">█</span>
          </div>
        </div>
      </Terminal>
    </div>
  )
}
