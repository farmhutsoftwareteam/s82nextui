import React from 'react';
import { Image } from "@nextui-org/image";
import { Button } from '@nextui-org/button';

const Stadium = () => {

   // Sample data for the timeline entries
 
  return (

    <div className="max-w-4xl mx-auto my-10 py-0 px-6 grid md:w-full grid-cols-1 md:grid-cols-2 gap-6 ">
      <div className="flex flex-col justify-center md:items-start items-center order-2 md:order-2">
        <h1 className="text-2xl font-bold text-center md:text-left text-gray-900">XS</h1>
        <p className="text-gray-500 text-center md:text-left">iOS · 2023</p>
        <p className="text-black text-center md:text-left mt-4">
        Why can't art be touched? In this modern day, why can't we have art that we can touch and shape into our own experience? That's what this project is about—removing "art" from the confines of a museum and putting it in our hands. Letting people experience it however they want to, wherever they want to. After all, beauty and art are all around us; we have to open our eyes to it.
          {/* Truncate the text as needed */}
        </p>
        <a href="#" className="mt-4 bg-black rounded-md px-3 w-max  justify-center text-white block text-center py-2">
          Download from App Store
        </a>
        <div className="w-full mt-6">
          

         
         
        </div>
      </div>
      <div className="flex justify-center md:items-start items-start order-1 md:order-1">
        <Image
          src="/xsDemoVid.gif" // Replace with your image path
          alt="Stadium"
          
          width={150}
          height={150}
        />
      </div>
    </div>
  )
}

export default Stadium;
