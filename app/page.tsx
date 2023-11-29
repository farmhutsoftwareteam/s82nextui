"use client"
import React, { useState, useEffect } from "react";
import { Image } from "@nextui-org/image";
import { ChevronLeft, ChevronRight } from "lucide-react";



interface WindowSize {
    width: number | undefined;
    height: number | undefined;
}

export default function Home() {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: undefined,
        height: undefined,
    });
	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
	


	const projects = [
		{
		  imageUrl: '/gibheStadium.jpg',
		  title: 'Stadium',
		  subtitle: 'iOS 2023',
		  description: 'A collection of works that reimagine how we narrate a game of football',
		  link: 'https://res.cloudinary.com/vambo/image/upload/v1700046875/q87tgm1egvaacu7i05ex.jpg'
		},
		{
		  imageUrl: '/xsDemoVid.gif',
		  title: 'XS',
		  subtitle: 'iOS 2023',
		  description: 'A visual representation of the quality of your internet connection',
		  link: '/xs'
		},
		{
		  imageUrl: '/arrowPlay.gif',
		  title: 'Down/Up',
		  subtitle: 'iOS 2023',
		  description: 'A visual representation of the quality of your internet connection',
		  link: '/downup'
		}
	]

	const handlePrevClick = () => {
        setCurrentProjectIndex(prevIndex => Math.max(0, prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentProjectIndex(prevIndex => Math.min(projects.length - 1, prevIndex + 1));
    };

    useEffect(() => {
        // Handler to call on window resize
        const handleResize = () => {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        
        // Add event listener
        window.addEventListener("resize", handleResize);
        
        // Call handler right away so state gets updated with initial window size
        handleResize();
        
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount

	const currentProject = projects[currentProjectIndex];

	const getImageDimensions = () => {
        if (currentProject.title === 'XS') {
            // For 'XS' project, set size based on window width
            return windowSize.width && windowSize.width <= 600 ? { width: 100, height: 100 } : { width: 300, height: 300 };
        } else if (windowSize.width && windowSize.width <= 600 && 
                   (currentProject.title === 'Stadium' || currentProject.title === 'Down/Up')) {
            // For 'Stadium' and 'Down/Up' projects on mobile view
            return { width: 200, height: 200 };
        }
        // Default dimensions for other cases
        return { width: 300, height: 'auto' }; 
    };
    
    const imageDimensions = getImageDimensions();
    
	


    return (
		<>
        <section className="flex h-4/6 flex-col md:flex-row items-center justify-center gap-2 py-2 md:py-6">
            <div className="flex-1 flex items-center justify-center md:justify-center">
                <Image 
                    alt={currentProject.title}
                    src={currentProject.imageUrl} 
                    width={imageDimensions.width}
                        height={imageDimensions.height}

                />
            </div>
            <div className="flex-1 flex flex-col items-center md:items-start">
                <h1 className="text-xl font-bold mb-2 text-black">{currentProject.title}</h1>
                <h2 className="text-md mb-4 text-gray-700">{currentProject.subtitle}</h2>
                <p className="mb-4 text-center text-black">{currentProject.description}</p>
                <div className="flex flex-row md:flex-row gap-2">
                    <a href={currentProject.link} className="flex-1 px-4 py-2 bg-blue-800 text-white rounded-[10px]">Explore</a>
                    <button className="flex-1 px-4 py-2 bg-green-800 text-white rounded-[10px]">Download</button>
                </div>
                {/* Add more content as needed */}
            </div>
        </section>
		<div className="justify-center items-center h-2/6">
		<footer className="w-full flex justify-center mt-10"  >
          
            <button onClick={handlePrevClick} ><ChevronLeft size={16} /></button>
            {currentProjectIndex + 1} / 3
            <button onClick={handleNextClick} ><ChevronRight size={16} /></button>
        </footer>
		</div>
		
		</>
    );
}
