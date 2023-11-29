"use client"
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Image } from "@nextui-org/image";
import { useState, useEffect } from 'react';
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

export const Navbar = () => {
	const [windowWidth, setWindowWidth] = useState<number>(0);
	useEffect(() => {
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        updateWindowWidth();
        window.addEventListener('resize', updateWindowWidth);
        return () => window.removeEventListener('resize', updateWindowWidth);
    }, []);

	return (
		<NextUINavbar className="bg-[#E7E7DD] mt-10" maxWidth="xl" position="sticky">
			<NavbarContent>
				<NavbarMenuToggle className="text-black" />
			</NavbarContent>

			{/* Centered Logo */}
			<NavbarContent>
				<NavbarBrand className="items-center justify-center">
					<NextLink href="/" legacyBehavior>
						<a className="flex flex-col justify-center items-center">
							<Image
								width={45}
								alt="NextUI hero Image"
								src="https://res.cloudinary.com/vambo/image/upload/v1700045764/ibks2re37opafb4ukiwm.png"
							/>
							<span className="font-bold font-valueserif  text-black">Studio 82</span>
						</a>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			{/* Navbar Menu */}
			<NavbarContent className="flex-1 items-center justify-center">
				<NavbarMenu className="bg-[#E7E7DD] items-center justify-center mx-auto">
					<div className="items-center justify-center flex flex-col gap-2">
						<NavbarMenuItem>
							<Link className="font-bold font-proforma" color="foreground" href="/" size="lg">
								Pieces
							</Link>
						</NavbarMenuItem>
						<NavbarMenuItem>
							<Link color="foreground" className="font-bold font-proforma" href="/about" size="lg">
								About Us
							</Link>
						</NavbarMenuItem>
						<NavbarMenuItem>
							<Link color="foreground" className="font-bold font-proforma" href="/contact" size="lg">
								Contact Us
							</Link>
						</NavbarMenuItem>
					</div>
				</NavbarMenu>
			</NavbarContent>

		</NextUINavbar>
	);
};
