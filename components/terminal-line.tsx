import { cn } from "@/lib/utils"

export function TerminalLine({
	path = "~",
	text,
	className,
}: { path?: string; text?: string; className?: string }) {
	return (
		<div className={cn("mb-2 text-success", className)}>
			<span className="text-3">luis@lfades</span>:
			<span className="text-accent-4">{path}</span>$ {text || <Cursor />}
		</div>
	)
}

function Cursor() {
	return <span className="text-cursor">█</span>
}
