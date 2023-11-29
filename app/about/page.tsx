"use client";

import React, { useState, useEffect } from 'react';
import { Image } from "@nextui-org/image";
import Head from 'next/head';

export default function AboutPage() {
  const [imageWidth, setImageWidth] = useState(200); // default width for mobile

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setImageWidth(300);
      } else {
        setImageWidth(150);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    <Head>
      
    </Head>
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0">
      <div className="flex order-2 md:px-0 md:order-1 flex-col items-center justify-center text-center md:w-1/3">
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
      
      <div className="md:w-1/3 md:order-2 text-center md:justify-center md:text-left px-4 md:px-0">
        <p className="text-[15px] md:text-[16px]">
        We're a design studio that works at the intersection of everyday technology and art. Most of modern life is spent interacting with bland technology at best. Our objective is to bring beauty and simplicity to the mundane activities of life, as illustrated by this composition made of bed sheets that had stayed for too long in a dryer. We like to have fun and create beautiful products. That's our M.O.
        </p>
      </div>
    </div>
    </>
  );
}
