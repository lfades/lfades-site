import type { ReactNode } from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { ThemeProvider } from "next-themes"
import "./globals.css"

const mapleMono = localFont({
	src: "./MapleMono[wght].ttf",
	display: "swap",
	adjustFontFallback: false,
	variable: "--font-maple-mono",
})

export const metadata: Metadata = {
	title: "LFades | Dev | Always cooking",
	description: "Personal website of Luis Alvarez.",
}

export default function RootLayout({
	children,
}: {
	children: ReactNode
}) {
	return (
		<html
			lang="en"
			className={`${mapleMono.variable}`}
			suppressHydrationWarning
		>
			<body>
				<ThemeProvider attribute="data-theme" enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
