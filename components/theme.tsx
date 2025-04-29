"use client";

import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

export function Theme() {
	const { theme, setTheme } = useTheme();
	return (
		<>
			<div className="text-ctp-blue">Theme:</div>
			<div className="text-ctp-text flex">
				Catppuccin{" "}
				<SunMoon
					className="ml-2 text-ctp-blue hover:text-ctp-lavender rounded-full cursor-pointer"
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
				/>
			</div>
		</>
	);
}
