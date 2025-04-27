import { cn } from "@/lib/utils";

export function TerminalLine({
	text,
	className,
}: { text?: string; className?: string }) {
	return (
		<div className={cn("mb-2 text-ctp-green", className)}>
			<span className="text-ctp-blue">luis@alvarez</span>:
			<span className="text-ctp-mauve">~</span>$ {text || "█"}
		</div>
	);
}
