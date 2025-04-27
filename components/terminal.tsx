import type { ReactNode } from "react";

interface TerminalProps {
	children: ReactNode;
	title?: string;
}

export function Terminal({ children, title = "terminal" }: TerminalProps) {
	return (
		<div className="bg-ctp-mantle border border-ctp-surface0 rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto my-8">
			<div className="bg-ctp-surface0 px-4 py-2 flex items-center">
				<div className="flex space-x-2 items-center">
					<div className="w-3 h-3 rounded-full inline-block mr-2 bg-ctp-red"></div>
					<div className="w-3 h-3 rounded-full inline-block mr-2 bg-ctp-yellow"></div>
					<div className="w-3 h-3 rounded-full inline-block mr-2 bg-ctp-green"></div>
				</div>
				<div className="text-ctp-text text-xs mx-auto">{title}</div>
			</div>
			<div className="p-4 overflow-auto">{children}</div>
		</div>
	);
}
