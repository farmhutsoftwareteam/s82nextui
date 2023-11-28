"use client";

import React, { useState, useEffect } from 'react';
import { Image } from "@nextui-org/image";

export default function AboutPage() {
  const [imageWidth, setImageWidth] = useState(200); // default width for mobile

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setImageWidth(350);
      } else {
        setImageWidth(150);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-center gap-4 md:gap-40">
      <div className="text-center justify-center items-center order-2 md:order-1 md:w-1/3">
        <Image
          isZoomed
          width={imageWidth}
          alt="NextUI hero Image"
          src="./IMG_2907.jpeg"
          radius='none'
        />
        <p className='text-[12px] mt-2'>Blue and Pink (fromXS)</p>
      </div>
      <div className="text-center md:text-left order-1 md:order-2 py-8 md:w-2/3">
        <p className="text-[15px] md:text-lg md:max-w-3xl">
          We are a design studio that works at the intersection of everyday technology and art. Most of modern life is spent interacting with technology that is bland at best. Our objective is to bring beauty and simplicity to the mundane activities of life.
        </p>
      </div>
    </div>
  );
}
