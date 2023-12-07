import React from 'react';
import Image from 'next/image';

const Note00 = () => {
  return (
    <div className="container mx-auto p-4">
      
      <div className="flex flex-col md:flex-row items-center md:items-start">
        
        {/* Image container */}
        <div className="w-full order-2 mt-4 md:mt-0 md:w-1/2 max-w-xs md:order-1 md:max-w-md mx-auto">
          <Image
              src="/enoughlists.png" // Replace with your image path
              alt="Stadium"
             className='justify-end'
              width={300} // Adjust the width as needed
              height={300} // Adjust the height as needed
          />
        </div>
        
        {/* Text container */}
        <div className="w-full md:w-1/2 md:pl-4 order-1 md:order-2">
        <h1 className="text-2xl font-bold text-center md:text-left  mb-6">Enough with the lists!</h1>
          <p className="text-black items-center mt-4 md:mt-0">
          This is what viewing sports can be like; instead, we’re stuck with lists, the same old boring things we had during the days of newspaper sports reports. We didn’t truly make it digital; we’ve got these new mediums that can convey much more about the game, that can tell a story about a game just by glancing at them, the actions in the game, was it an evenly matched game, was it an action-packed game, telling us all that character without using any characters. How great is that? Of course, if you want the words to say to you precisely what it is that’s happening, you can get them. There was no way we’d eliminate them.
          </p>
          <p className="text-black items-center mt-4 md:mt-4">
          This is Studio 82 for you; that’s the cool stuff we do.

          </p>
          <p className="text-black items-center mt-4 md:mt-4">
          *viewing sports here is about cases where one can’t catch the actual video of the game because of blackouts or the streaming service hoodwinking.


          </p>
        </div>
      </div>
    </div>
  );
};

export default Note00;
