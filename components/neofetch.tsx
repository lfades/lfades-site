import Link from "next/link"

export function Neofetch() {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-shrink-0 w-48 h-48 mx-auto md:mx-0">
        <div className="w-full h-full bg-ctp-surface0 rounded-md overflow-hidden flex items-center justify-center">
          <div className="text-6xl text-ctp-mauve">LA</div>
        </div>
      </div>

      <div className="flex-grow">
        <div className="text-ctp-mauve font-bold text-xl mb-2">Luis Alvarez</div>
        <div className="border-b border-ctp-surface0 mb-2"></div>

        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-3 text-ctp-blue">OS:</div>
          <div className="col-span-9 text-ctp-text">FullStack Developer</div>

          <div className="col-span-3 text-ctp-blue">Host:</div>
          <div className="col-span-9 text-ctp-text">Web Development</div>

          <div className="col-span-3 text-ctp-blue">Kernel:</div>
          <div className="col-span-9 text-ctp-text">JavaScript, TypeScript, React</div>

          <div className="col-span-3 text-ctp-blue">Uptime:</div>
          <div className="col-span-9 text-ctp-text">5+ years in development</div>

          <div className="col-span-3 text-ctp-blue">Packages:</div>
          <div className="col-span-9 text-ctp-text">Next.js, Node.js, Express</div>

          <div className="col-span-3 text-ctp-blue">Shell:</div>
          <div className="col-span-9 text-ctp-text">Problem Solver, Team Player</div>

          <div className="col-span-3 text-ctp-blue">Resolution:</div>
          <div className="col-span-9 text-ctp-text">Clean Code, Responsive Design</div>

          <div className="col-span-3 text-ctp-blue">DE:</div>
          <div className="col-span-9 text-ctp-text">VS Code, Git, Docker</div>

          <div className="col-span-3 text-ctp-blue">WM:</div>
          <div className="col-span-9 text-ctp-text">Agile, Scrum</div>

          <div className="col-span-3 text-ctp-blue">Terminal:</div>
          <div className="col-span-9 text-ctp-text">
            <Link
              href="https://github.com/luisalvarez"
              className="text-ctp-blue hover:text-ctp-lavender hover:underline"
            >
              GitHub
            </Link>
            {" | "}
            <Link
              href="https://linkedin.com/in/luisalvarez"
              className="text-ctp-blue hover:text-ctp-lavender hover:underline"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-8 gap-1">
          <div className="h-6 w-full bg-ctp-rosewater rounded"></div>
          <div className="h-6 w-full bg-ctp-flamingo rounded"></div>
          <div className="h-6 w-full bg-ctp-pink rounded"></div>
          <div className="h-6 w-full bg-ctp-mauve rounded"></div>
          <div className="h-6 w-full bg-ctp-red rounded"></div>
          <div className="h-6 w-full bg-ctp-maroon rounded"></div>
          <div className="h-6 w-full bg-ctp-peach rounded"></div>
          <div className="h-6 w-full bg-ctp-yellow rounded"></div>
          <div className="h-6 w-full bg-ctp-green rounded"></div>
          <div className="h-6 w-full bg-ctp-teal rounded"></div>
          <div className="h-6 w-full bg-ctp-sky rounded"></div>
          <div className="h-6 w-full bg-ctp-sapphire rounded"></div>
          <div className="h-6 w-full bg-ctp-blue rounded"></div>
          <div className="h-6 w-full bg-ctp-lavender rounded"></div>
          <div className="h-6 w-full bg-ctp-text rounded"></div>
          <div className="h-6 w-full bg-ctp-subtext1 rounded"></div>
        </div>
      </div>
    </div>
  )
}
