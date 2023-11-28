"use client";

import React, { useState, useEffect } from 'react';
import { Image } from "@nextui-org/image";

export default function AboutPage() {
  const [imageWidth, setImageWidth] = useState(200); // default width for mobile

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setImageWidth(200);
      } else {
        setImageWidth(150);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-1">
      <div className="flex order-2 md:order-1 flex-col items-center justify-center text-center md:w-1/2">
        <Image
          width={imageWidth}
          height={imageWidth}
          alt="NextUI hero Image"
          src="./IMG_2907.jpeg"
          radius='none'
        />
        <div className="mt-2 text-gray-500 font-valueserif text-[12px]">
          <p>Blue and Pink</p>
          <p>(from Xs)</p>
        </div>
      </div>
      
      <div className="md:w-1/3 md:order-2 text-center md:text-left px-4 md:px-0">
        <p className="text-[15px] md:text-[16px]">
          We are a design studio that works at the intersection of everyday technology and art. Most of modern life is spent interacting with technology that is bland at best. Our objective is to bring beauty and simplicity to the mundane activities of life.
        </p>
      </div>
    </div>
  );
}
