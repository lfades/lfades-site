import { cn } from "@/lib/utils";

export function TerminalLine({
	path = "~",
	text,
	className,
}: { path?: string; text?: string; className?: string }) {
	return (
		<div className={cn("mb-2 text-ctp-green", className)}>
			<span className="text-ctp-blue">luis@lfades</span>:
			<span className="text-ctp-mauve">{path}</span>$ {text || "█"}
		</div>
	);
}
