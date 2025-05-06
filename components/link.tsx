import NextLink from "next/link"
import { cn } from "@/lib/utils"

type LinkProps = Parameters<typeof NextLink>[0] & {
	underline?: boolean
}

export function Link({ className, underline, ...props }: LinkProps) {
	return (
		<NextLink
			{...props}
			className={cn(
				className,
				"text-link hover:text-link-hover",
				underline && "underline underline-offset-2",
			)}
		/>
	)
}
