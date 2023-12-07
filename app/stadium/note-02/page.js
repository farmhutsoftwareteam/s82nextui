import React from 'react';
import Image from 'next/image';

const DecorationPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Constructing Decoration</h1>
      
      <div className="flex flex-col md:flex-row items-center md:items-start">
        
        {/* Image Container */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <Image
              src="/decoration-image.png" // Replace with your image path
              alt="Decoration Concept"
              width={500}
              height={300}
              objectFit="cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 md:pl-4">
          <p className="text-gray-700">
            The journey of creating a minimal yet functional design starts with understanding the balance...
            {/* Include more text based on your content */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DecorationPage;
