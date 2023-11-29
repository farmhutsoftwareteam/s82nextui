import React from 'react';
import { Image } from "@nextui-org/image";
import { Button } from '@nextui-org/button';

const Stadium = () => {

   // Sample data for the timeline entries
   const timelineEntries = [
     { index: 0, title: 'Note entry 00', uri: 'sample-uri-00' },
     { index: 1, title: 'Note entry 01', uri: 'sample-uri-01' },
     { index: 2, title: 'Note entry 02', uri: 'sample-uri-02' },
     { index: 3, title: 'Note entry 03', uri: 'sample-uri-03' },
     { index: 4, title: 'Note entry 04', uri: 'sample-uri-04' },
     { index: 5, title: 'Note entry 05', uri: 'sample-uri-05' },
     { index: 6, title: 'Note entry 06', uri: 'sample-uri-06' },
     { index: 7, title: 'Note entry 07', uri: 'sample-uri-07' },
     { index: 8, title: 'Note entry 08', uri: 'sample-uri-08' },
     { index: 9, title: 'Note entry 09', uri: 'sample-uri-09' },
   ];
  return (

    <div className="max-w-4xl mx-auto my-10  p-6 grid md:w-full grid-cols-1 md:grid-cols-2 gap-6 ">
      <div className="flex flex-col justify-center md:items-start items-center order-2 md:order-2">
        <h1 className="text-2xl font-bold text-center md:text-left text-gray-900">Stadium</h1>
        <p className="text-gray-500 text-center md:text-left">iOS · 2023</p>
        <p className="text-black text-center md:text-left mt-4">
        The game of soccer is something that I enjoy quite a lot. The beautiful play, the tactics, the gamesmanship, everything. These are all things I look forward to experiencing every time I get the chance to watch a game. Of course, there are times when this chance isn’t there and I have to rely on following the game online or through notifications. Experiencing the game in such a manner strips it of all its beauty. All I have left is the scoreline. I have no idea of who has been dominating the game, or whether the game has been clean, or any of the other information that makes soccer fun. This is what this project is about. Quickly telling the story of the game in as much detail as possible and doing so in a beautiful manner.
          {/* Truncate the text as needed */}
        </p>
        <a href="#" className="mt-4 bg-black rounded-md px-3 w-max  justify-center text-white block text-center py-2">
          Download from App Store
        </a>
        <div className="w-full mt-6">
          

          {/* Timeline Entries */}
          {/* Timeline Section */}
          <div className="w-full  mt-6">
          <h2 className="text-xl font-semibold md:w-max text-center md:text-left mb-4">Behind the scenes</h2>
          <p className="text-center md:text-left text-gray-600 mb-4">
            This is a timeline of how this came to be. Hopefully it shows the chaotic process of making something and the fun of building.
          </p>

       
          {timelineEntries.map((entry, index) => (
            <div key={index} className="grid grid-cols-2 justify-between mb-4 border-dashed border-t-0 border-red-500 border-1 border-x-0 py-3">
              <div className="col-start-1 col-end-2 flex items-center justify-start">{entry.title}</div>
              <div className="col-start-2 col-end-3 flex justify-end">
                <Image
                  src='/gibhee.png'
                  alt={entry.title}
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
