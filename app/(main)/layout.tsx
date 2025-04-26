import type { ReactNode } from "react";

export default function Layout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<div className="min-h-screen bg-ctp-base text-ctp-text font-mono">
			{children}
		</div>
	);
}
