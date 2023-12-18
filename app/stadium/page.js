import React from 'react';
import { Image } from "@nextui-org/image";
import { Button } from '@nextui-org/button';
import { Link} from '@nextui-org/link'

const Stadium = () => {

   // Sample data for the timeline entries
   const timelineEntries = [
    { index: 0, title: 'Note entry 00', uri: 'sample-uri-00', url: '/stadium/note-00' },
    { index: 1, title: 'Note entry 01', uri: 'sample-uri-01', url: '/stadium/note-01' },
    { index: 2, title: 'Note entry 02', uri: 'sample-uri-02', url: '/stadium/note-02' },
    { index: 3, title: 'Note entry 03', uri: 'sample-uri-03', url: '/stadium/note-03' },
    { index: 4, title: 'Note entry 04', uri: 'sample-uri-04', url: '/stadium/note-04' },
    { index: 5, title: 'Note entry 05', uri: 'sample-uri-05', url: '/stadium/note-05' },
    { index: 6, title: 'Note entry 06', uri: 'sample-uri-06', url: '/stadium/note-06' },
    { index: 7, title: 'Note entry 07', uri: 'sample-uri-07', url: '/stadium/note-07' },
    { index: 8, title: 'Note entry 08', uri: 'sample-uri-08', url: '/stadium/note-08' },
    { index: 9, title: 'Note entry 09', uri: 'sample-uri-09', url: '/stadium/note-09' },
    { index: 10, title: 'Note entry 10', uri: 'sample-uri-10', url: '/stadium/note-10' },
  ];
  
  return (

    <div className="max-w-5xl mx-auto my-10  p-3 grid md:w-full grid-cols-1 md:grid-cols-2 gap-6 ">
      <div className="flex flex-col justify-center md:items-start items-center order-2 md:order-2">
        <h1 className="text-2xl font-bold text-center md:text-left text-gray-900">Terrace H4</h1>
        <p className="text-gray-500 text-center md:text-left">iOS · 2023</p>
        <p className="text-black text-center md:text-left mt-4">
        The game of soccer is something that I enjoy quite a lot. The beautiful play, the tactics, the gamesmanship, everything. These are all things I look forward to experiencing every time I get the chance to watch a game. Of course, there are times when this chance isn’t there and I have to rely on following the game online or through notifications. Experiencing the game in such a manner strips it of all its beauty. All I have left is the scoreline. I have no idea of who has been dominating the game, or whether the game has been clean, or any of the other information that makes soccer fun. This is what this project is about. Quickly telling the story of the game in as much detail as possible and doing so in a beautiful manner.
          {/* Truncate the text as needed */}
        </p>
        <a href="https://apps.apple.com/app/id6473732987" className="mt-4 bg-black rounded-md px-3 w-max  justify-center text-white block text-center py-2">
          Download from App Store
        </a>
        <div className="w-full mt-6">
          

      {/* Timeline Section */}
      <div className="w-full mt-6">
          
         <h2 className="text-xl text-center md:text-left mb-4">Behind the scenes</h2>
         <p className="text-black text-center md:text-left mb-4">
           This is a timeline of how this came to be. Hopefully it shows the chaotic process of making something and the fun of building.
         </p>
         
         {/* Timeline Entries */}
         <div className="space-y-4">
  {timelineEntries.map((entry) => (
    <div key={entry.index} className="flex flex-col items-center">
      {/* Top dashed line */}
      
 
      {/* Timeline Entry Content */}
      <div className="flex flex-row items-center justify-between w-full px-4 my-2">
        <Link href={entry.url}>
        <span className="text-gray-700 font-medium">
          {entry.title}
        </span>
        </Link>
<Link href={entry.url}>

        {/* Image on the right */}
        <div className="w-24 h-24 bg-orange-200 rounded-full flex items-center justify-center">
          {/* Replace with your image path */}
          <Image src='/gibheStadium.jpg' alt={`Entry ${entry.index}`} width="100%" height="100%" objectFit="cover" />
        </div>
        </Link>
       
      </div>
      
      {/* Bottom dashed line */}
      <div className="w-full border-t-2 border-dashed border-red-500"></div>
    </div>
  ))}
</div>
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
