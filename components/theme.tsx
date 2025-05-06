"use client"

import { SunMoon } from "lucide-react"
import { useTheme } from "next-themes"

export function Theme() {
	const { theme, setTheme } = useTheme()
	return (
		<>
			<div className="text-1">Theme:</div>
			<div className="flex">
				Catppuccin{" "}
				<SunMoon
					className="ml-2 text-link hover:text-link-hover rounded-full cursor-pointer"
					onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
				/>
			</div>
		</>
	)
}
