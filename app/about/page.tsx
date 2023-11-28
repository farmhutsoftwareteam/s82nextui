'use client'

import React, { useState, useEffect } from 'react';
import { Image } from "@nextui-org/image";

export default function AboutPage() {
  const [imageWidth, setImageWidth] = useState(200); // default width for mobile

  useEffect(() => {
    const handleResize = () => {
      // Set image width to 400 if window width is greater than a certain breakpoint (e.g., 768px for tablets)
      if (window.innerWidth >= 768) {
        setImageWidth(400);
      } else {
        setImageWidth(200);
      }
    };

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Set the initial size
    handleResize();

    // Clean up listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start gap-4 md:gap-8">
      <div className="md:w-1/2 md:order-1 text-center md:justify-center md:items-center justify-center items-center md:text-left">
        <Image
          width={imageWidth} // Dynamic width based on device size
          alt="NextUI hero Image"
          src="./IMG_2907.jpeg"
          style={{ borderRadius: '0px' }} // Remove rounded corners
        />
      </div>
      <div className="md:w-1/2 md:order-2">
        <p className="text-center md:text-lg md:text-left md:w-max-lg">
          We are a design studio that works at the intersection of everyday technology and art. Most of modern life is spent interacting with technology that is bland at best. Our objective is to bring beauty and simplicity to the mundane activities of life.
        </p>
      </div>
    </div>
  );
}
