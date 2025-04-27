import Link from "next/link"
import { Terminal } from "@/components/terminal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ctp-base text-ctp-text font-mono">
      <Terminal title="luis@alvarez: ~/contact.sh">
        <div className="p-4">
          <div className="mb-4 text-ctp-green">
            <span className="text-ctp-blue">luis@alvarez</span>:<span className="text-ctp-mauve">~</span>$ ./contact.sh
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-ctp-mauve mb-4">Contact Me</h1>

            <p className="mb-6">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out through any
              of the following channels:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-ctp-blue">Social</h2>

                <div className="space-y-3">
                  <a
                    href="mailto:luis@example.com"
                    className="flex items-center gap-2 text-ctp-text hover:text-ctp-lavender"
                  >
                    <Mail className="h-5 w-5 text-ctp-mauve" />
                    <span>luis@example.com</span>
                  </a>

                  <a
                    href="https://github.com/luisalvarez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-ctp-text hover:text-ctp-lavender"
                  >
                    <Github className="h-5 w-5 text-ctp-mauve" />
                    <span>github.com/luisalvarez</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/luisalvarez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-ctp-text hover:text-ctp-lavender"
                  >
                    <Linkedin className="h-5 w-5 text-ctp-mauve" />
                    <span>linkedin.com/in/luisalvarez</span>
                  </a>

                  <a
                    href="https://twitter.com/luisalvarez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-ctp-text hover:text-ctp-lavender"
                  >
                    <Twitter className="h-5 w-5 text-ctp-mauve" />
                    <span>twitter.com/luisalvarez</span>
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold text-ctp-blue">Send a Message</h2>

                <form className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Name"
                      className="bg-ctp-surface0 border-ctp-surface1 text-ctp-text placeholder:text-ctp-overlay0"
                    />
                  </div>

                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-ctp-surface0 border-ctp-surface1 text-ctp-text placeholder:text-ctp-overlay0"
                    />
                  </div>

                  <div>
                    <Textarea
                      placeholder="Message"
                      className="bg-ctp-surface0 border-ctp-surface1 text-ctp-text placeholder:text-ctp-overlay0 min-h-[120px]"
                    />
                  </div>

                  <Button className="bg-ctp-mauve hover:bg-ctp-lavender text-ctp-base">Send Message</Button>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Link href="/" className="text-ctp-mauve hover:text-ctp-lavender hover:underline">
              cd ..
            </Link>
          </div>

          <div className="mt-4 text-ctp-green">
            <span className="text-ctp-blue">luis@alvarez</span>:<span className="text-ctp-mauve">~/contact.sh</span>${" "}
            <span className="animate-pulse">█</span>
          </div>
        </div>
      </Terminal>
    </div>
  )
}
