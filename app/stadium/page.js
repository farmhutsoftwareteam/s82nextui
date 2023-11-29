import React from 'react';
import { Image } from "@nextui-org/image";
import { Button } from '@nextui-org/button';

const Stadium = () => {

   // Sample data for the timeline entries
   const timelineEntries = [
    'Note entry 00',
    
    // ... add more entries as needed
  ];
  return (

    <div className="max-w-4xl mx-auto my-10  p-6 grid md:w-full grid-cols-1 md:grid-cols-2 gap-6 ">
      <div className="flex flex-col justify-center order-2 md:order-2">
        <h1 className="text-2xl font-bold text-gray-900">Stadium</h1>
        <p className="text-gray-600">iOS · 2023</p>
        <p className="text-gray-700 mt-4">
        The game of soccer is something that I enjoy quite a lot. The beautiful play, the tactics, the gamesmanship, everything. These are all things I look forward to experiencing every time I get the chance to watch a game. Of course, there are times when this chance isn’t there and I have to rely on following the game online or through notifications. Experiencing the game in such a manner strips it of all its beauty. All I have left is the scoreline. I have no idea of who has been dominating the game, or whether the game has been clean, or any of the other information that makes soccer fun. This is what this project is about. Quickly telling the story of the game in as much detail as possible and doing so in a beautiful manner.
          {/* Truncate the text as needed */}
        </p>
        <Button color='primary' flat className="mt-4 w-1/2 bg-black text-white">
          Download from App Store
        </Button>
        <div className="w-full mt-6">
          

          {/* Timeline Entries */}
          {/* Timeline Section */}
          <div className="w-full  mt-6">
          <h2 className="text-xl font-semibold md:w-max text-center md:text-left mb-4">Behind the scenes</h2>
          <p className="text-center md:text-left text-gray-600 mb-4">
            This is a timeline of how this came to be. Hopefully it shows the chaotic process of making something and the fun of building.
          </p>

       
          {timelineEntries.map((entry, index) => (
  <div key={index} className="grid grid-cols-2 justify-between mb-4 border-dashed border-red-500 border-1 border-x-0 py-5">
    <div className="col-start-1 col-end-2 flex items-center justify-start">notes</div>
    <div className="col-start-2 col-end-3 flex justify-end">
      <Image
        src="/gibhee.png" // Replace with your image path
        alt="Stadium"
        objectFit="cover"
        width={50}
        height="auto"
        radius='none'
      />
    </div>
  </div>
))}

        </div>
        </div>
      </div>
      <div className="flex justify-center md:items-start items-center order-1 md:order-1">
        <Image
          src="/gibhee.png" // Replace with your image path
          alt="Stadium"
          objectFit="cover"
          width={150}
          height="auto"
        />
      </div>
    </div>
  )
}

export default Stadium;
