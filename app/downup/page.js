import React from 'react';
import { Image } from "@nextui-org/image";


const Stadium = () => {

   // Sample data for the timeline entries
 
  return (
<>
    <div className="max-w-4xl mx-auto my-10 py-0 px-6 grid md:w-full grid-cols-1 md:grid-cols-2 gap-6 ">
      <div className="flex flex-col justify-center md:items-start items-center order-2 md:order-2">
        <h1 className="text-2xl font-bold text-center md:text-left text-gray-900">Down/ Up</h1>
        <p className="text-gray-500 text-center md:text-left">iOS · 2023</p>
        <p className="text-black text-center md:text-left mt-4">
        "Is it my connection or your's that's acting up?"That's the question that birthed this utility tool. A lot of speed test tools make use of speedometers or transfer rates (Mb or MB?) to show the results of the test. If one wants the facts about the connection, such a test will suffice. In our case, we wanted to show what those numbers meant regarding streaming/video call quality. We wanted to ensure we could do this without burdening the person with the knowledge of bits versus bytes or knowing what number best represented a good connection.
          {/* Truncate the text as needed */}
        </p>
       
        <div className="w-full mt-6">
          

         
         
        </div>
      </div>
      <div className="flex justify-center md:items-start items-start order-1 md:order-1">
        <Image
          src="/arrowPlay.gif" // Replace with your image path
          alt="Stadium"
          
          width={150}
          height={150}
        />
      </div>
    </div>
    <div className="max-w-4xl mx-auto my-10 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Image 1 with caption */}
  <div className="flex flex-col items-center">
    <Image
      src="/noConnection.png" // Replace with your image path
      alt="No connection"
      width={266.6}
      height={578}
      radius='none'
    />
    <p className="text-center mt-2 font-valueserif text-sm">No Connection</p>
  </div>
  
  <div className="flex flex-col items-center">
  <video height={150} autoPlay loop muted playsInline>
    <source src="/poorConnection.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <p className="text-center mt-2 font-valueserif text-sm">Poor Connection</p>
</div>

{/* Video 2 with caption */}
<div className="flex flex-col items-center">
  <video height={150} autoPlay loop muted playsInline>
    <source src="/goodConnection.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <p className="text-center mt-2 font-valueserif text-sm">Good Connection</p>
</div>
  {/* Adjust or add more content here as needed */}
</div>



  </>
  )
}

export default Stadium;
