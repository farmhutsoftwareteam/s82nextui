import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { ProjectNavigationProvider } from '../contexts/ProjectNavigationContext';




export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
			
			</head>
			<body
				className={clsx(
					"min-h-screen  font-sans antialiased bg-[#E7E7DD]",
					
				)}
			>
				        <ProjectNavigationProvider>

					<div className="relative flex flex-col h-screen bg-[#E7E7DD] ">
						<Navbar />
						<main className="container mx-auto max-w-7xl pt-16 px-6 bg-[#E7E7DD] flex-grow">
							{children}
						

						</main>
						
					</div>
					</ProjectNavigationProvider>
				
			</body>
		</html>
	);
}
