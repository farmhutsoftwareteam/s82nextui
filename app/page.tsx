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
		  title: 'Terrace H4',
		  subtitle: 'iOS 2023',
		  description: 'A collection of works that reimagine how we narrate a game of football',
		  link: '/stadium'
		},
		{
		  imageUrl: '/xsDemoVid.gif',
		  title: 'XS',
		  subtitle: 'iOS 2023',
		  description: "A compilation of works where you shape the experience, visually or through touch",
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
        setCurrentProjectIndex(prevIndex => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };
    
    const handleNextClick = () => {
        setCurrentProjectIndex(prevIndex => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
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
            return windowSize.width && windowSize.width <= 600 ? { width: 100, height: 100 } : { width: 150, height: 150 };
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
   <section className="flex flex-col md:flex-row items-center justify-center gap-2 p-2 md:py-6" style={{ height: 'calc(80vh - 4rem)' }}>



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
		<div className="flex justify-center items-center" style={{ height: 'calc(20vh - 4rem)' }}>
		<footer className="w-full flex justify-center mt-10"  >
          
            <button onClick={handlePrevClick} ><ChevronLeft size={16} /></button>
            {currentProjectIndex + 1} / 3
            <button onClick={handleNextClick} ><ChevronRight size={16} /></button>
        </footer>
		</div>
		
		</>
    );
}
