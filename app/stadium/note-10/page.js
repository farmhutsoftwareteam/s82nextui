import React from 'react';
import Image from 'next/image';

const Note = () => {
  return (
    <div className="container mx-auto p-4 max-w-3xl">

      <h1 className="text-2xl font-bold text-center mb-6">Disclosure - Where Angels Fear To Tread
</h1>
<h2 className="text-md  text-center text-gray-600  mb-6">3 months before project started
</h2>
<div className="flex justify-center">
        <Image
          src="/angels1.png" // Replace with your image path
          alt="Descriptive alt text" // Provide descriptive alt text
          width={200} // Set the width
          height={200} // Set the height
          // Makes the image responsive
        />
      </div>
      <div className="text-black mt-4 mb-8">
  <p>
  This song came up on shuffle playlist and the album art caught my attention. The words floating around in the circle got me thinking of what it would be like to have a UI based on that circle.
  </p>
  
</div>
<div className="flex justify-center">
        <Image
          src="/angels2.png" // Replace with your image path
          alt="Descriptive alt text" // Provide descriptive alt text
          width={200} // Set the width
          height={200} // Set the height
          // Makes the image responsive
        />
      </div>
      <div className="text-black mt-4 mb-8">
  <p>
  At the time, I was thinking about using it with a particular project in mind but quickly realized that it didn’t work for that project. I was bummed out by it but kept the shape / form in mind and got a chill tune out of the whole process 😌
  </p>
  
</div>

    


    

      
</div>


   


    


      
    
  )
}

export default Note;
