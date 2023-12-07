import React from 'react';
import Image from 'next/image';

const Note01 = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center  mb-6">Introduction</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        
        {/* Image container */}
        <div className="w-full order-2 mt-4 md:mt-0 md:w-1/2 max-w-xs md:order-1 md:max-w-md mx-auto">
          <Image
              src="/gibhee.png" // Replace with your image path
              alt="Stadium"
             className='justify-end'
              width={300} // Adjust the width as needed
              height={300} // Adjust the height as needed
          />
        </div>
        
        {/* Text container */}
        <div className="w-full md:w-1/2 md:pl-4 order-1 md:order-2">
          <p className="text-black items-center mt-4 md:mt-0">
            The game of soccer is something that I enjoy quite a lot. The beautiful play, the tactics, the gamesmanship, everything. These are all things I look forward to experiencing every time I get the chance to watch a game. Of course, there are times when this chance isn’t there and I have to rely on following the game online or through notifications. Experiencing the game in such a manner strips it of all its beauty. All I have left is the scoreline. I have no idea of who has been dominating the game, or whether the game has been clean, or any of the other information that makes soccer fun. This is what this project is about. Quickly telling the story of the game in as much detail as possible and doing so in a beautiful manner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Note01;
