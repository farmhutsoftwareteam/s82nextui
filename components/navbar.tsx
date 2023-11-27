
'use client'
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Image } from "@nextui-org/image";
import { useState,useEffect} from 'react'
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";



export const Navbar = () => {

	const [windowWidth, setWindowWidth] = useState<number>(0);
	useEffect(() => {
        // Function to update the window width
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        // Update the width when the component mounts
        updateWindowWidth();

        // Add event listener for window resize
        window.addEventListener('resize', updateWindowWidth);

        // Cleanup function to remove the event listener
        return () => window.removeEventListener('resize', updateWindowWidth);
    }, []);
	

	return (
		<NextUINavbar className="bg-[#E7E7DD] mt-10" maxWidth="xl" position="sticky">
		
		<NavbarContent className="w-1/3">
			<NavbarMenuToggle className="text-black" />
		
		</NavbarContent>

		{/* Centered Logo */}
		<NavbarContent >
			<NavbarBrand   className=" items-center w-1/3 justify-center ">
				<NextLink href="/" legacyBehavior>
					<a className="flex flex-col justify-center items-center">
						<Image
							width={45}
							alt="NextUI hero Image"
							src="https://res.cloudinary.com/vambo/image/upload/v1700045764/ibks2re37opafb4ukiwm.png"
						/>
						<span className="font-bold text-black">Studio 82</span>
					</a>
				</NextLink>
			</NavbarBrand>
		</NavbarContent>

		{/* Right Content (Invisible Spacer) */}
		<NavbarContent className=" w-1/3">
			<span></span>
		</NavbarContent>

		{/* Navbar Menu */}
		<NavbarMenu>
			<div className="mx-4 mt-2 flex flex-col gap-2">
				{siteConfig.navMenuItems.map((item, index) => (
					<NavbarMenuItem className="justify-center items-center" key={`${item}-${index}`}>
						<Link
							color={
								index === 2
									? "primary"
									: index === siteConfig.navMenuItems.length - 1
									? "danger"
									: "foreground"
							}
							href="#"
							size="lg"
						>
							{item.label}
						</Link>
					</NavbarMenuItem>
				))}
			</div>
		</NavbarMenu>
	</NextUINavbar>
	);
};
