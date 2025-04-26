import type { ReactNode } from "react";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Luis Alvarez | Developer",
	description: "Personal website and blog of Luis Alvarez, software developer",
	generator: "v0.dev",
};

export default function RootLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${jetbrainsMono.className} bg-ctp-base text-ctp-text min-h-screen`}
			>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
