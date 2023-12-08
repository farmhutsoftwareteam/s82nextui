import React from 'react';
import Image from 'next/image';

const Note02 = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Constructing Decoration vs. Decorating Construction</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start">
        
        {/* Image Container */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 grid grid-cols-1 md:grid-cols-2  gap-4">
          <Image
              src="/construction1.png" // Replace with your first image path
              alt="Construction 1"
              width={300}
              height={200}
              objectFit="scale-down"
             
            
          />
          <Image
              src="/construction2.png" // Replace with your second image path
              alt="Construction 2"
              width={300}
              height={200}
              objectFit="scale-down"
            
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 md:pl-4">
         
          <p className="text-gray-700 mt-4">
          “It is alright to decorate construction but never construct decoration.”
When the idea for what a timeline looks like had been locked in, started working on making the sketches from “Timeline thoughts” become a reality. 

          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:mt-10">
  
  {/* Image Container */}
  <div className="w-full md:w-1/2 mb-4 md:mb-0 flex items-center justify-center">
    <Image
        src="/construction3.png" // Replace with your image path
        alt="Construction 1"
        width={300}
        height={200}
        objectFit="cover"
    />
  </div>

  {/* Text Content */}
  <div className="w-full md:w-1/2 md:pl-4 flex items-center">
    <p className="text-gray-700">
      “It is alright to decorate construction but never construct decoration.” This philosophy guided...
    </p>
  </div>
</div>
<div className="flex flex-col md:flex-row items-center md:mt-10 md:items-start">
        
        {/* Image Container */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 grid grid-cols-1 md:grid-cols-3  gap-4">
          <Image
              src="/construction4.png" // Replace with your first image path
              alt="Construction 1"
              width={300}
              height={200}
              objectFit="scale-down"
             
            
          />
          <Image
              src="/construction5.png" // Replace with your second image path
              alt="Construction 2"
              width={300}
              height={200}
              objectFit="scale-down"
            
          />
          <Image
              src="/construction6.png" // Replace with your second image path
              alt="Construction 2"
              width={300}
              height={200}
              objectFit="scale-down"
            
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 md:pl-4">
         
          <p className="text-gray-700 mt-4">
         
It was a good proof of concept although it wasn’t the sleek timeline that I thought it would be. Started thinking of ways I could tinker around with it to make it more visually appealing and forgot all about the initial problem. Experimented with removing the guiding circle lines. Trying to go with a “minimalist” look.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center md:mt-10 md:items-start">
        
        {/* Image Container */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 grid grid-cols-1 md:grid-cols-3  gap-4">
          <Image
              src="/construction7.png" // Replace with your first image path
              alt="Construction 1"
              width={300}
              height={200}
              objectFit="scale-down"
             
            
          />
          <Image
              src="/construction8.png" // Replace with your second image path
              alt="Construction 2"
              width={300}
              height={200}
              objectFit="scale-down"
            
          />
          <Image
              src="/construction9.png" // Replace with your second image path
              alt="Construction 2"
              width={300}
              height={200}
              objectFit="scale-down"
            
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 md:pl-4">
         
        
        </div>
        
      </div>
      <p className="text-black-700 text-center mt-4 mb-10">
         
         It was a good proof of concept although it wasn’t the sleek timeline that I thought it would be. Started thinking of ways I could tinker around with it to make it more visually appealing and forgot all about the initial problem. Experimented with removing the guiding circle lines. Trying to go with a “minimalist” look.
                   </p>

    </div>
  );
};

export default Note02;
