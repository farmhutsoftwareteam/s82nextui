export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Studio 82",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Pieces",
			href: "/",
		},
   
    
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Pieces",
			href: "/",
		},
		{
			label: "About Us",
			href: "/dashboard",
		},
		{
			label: "Contact Us",
			href: "/projects",
		},
		
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
