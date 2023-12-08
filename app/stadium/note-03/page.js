import React from 'react';
import Image from 'next/image';

const Note00 = () => {
  return (
    <div className="container mx-auto p-4">
      
      <div className="flex flex-col md:flex-row items-center md:items-start">
        
        {/* Image container */}
        <div className="w-full order-2 mt-4 md:mt-0 md:w-1/2 max-w-xs md:order-1 md:max-w-md mx-auto">
          <Image
              src="/tottenham.png" // Replace with your image path
              alt="Stadium"
             className='justify-end'
              width={300} // Adjust the width as needed
              height={300} // Adjust the height as needed
          />
        </div>
        
        {/* Text container */}
        <div className="w-full md:w-1/2 md:pl-4 order-1 md:order-2">
        <h1 className="text-2xl font-bold text-center md:text-left  mb-6">History of the Tottenham (Small Multiples)</h1>
        <div className="container mx-auto p-4">
  <div className="text-center md:text-left">
    <p>
      This is a famous statement that was made by Giorgio Chiellini in a post-match interview after beating Tottenham Hotspurs. There are two reasons why I loved that statement:
    </p>
    <ol className="list-decimal list-inside">
      <li>Made it easy to diss a Spurs supporter</li>
      <li>Made me curious about what the “History of the Tottenham” actually was</li>
    </ol>
    <p>
      To answer the 2nd part, it’s easy to look at the previous league standings or trophy cabinet, but that doesn’t really give one a good picture of what their play was like. As an alternative, someone could dig into the statistics websites but who wants to go through tables of numbers.
    </p>
    <p>
      What if there was a graphic first way of getting this information? There’s a concept popularized by Edward Tufte called Small Multiples. A small multiple is a series of similar graphs or charts using the same scale and axes, allowing them to be easily compared. The visual nature of a stadium view enables us to use the concept of small multiples.
    </p>
    <p className='mt-4'>
    For instance, these are the last 4 games that Tottenham played in the 22/23 season. A person who has knowledge of how to read a stadium view can make the observation that in those games, Tottenham scored their goals close to the beginning and end of a half. Rarely in the middle of a half. One can also see that with the exception of the game against Leeds, which Spurs won comfortably, the number of yellow cards they got in the match was on par with the number of cards that the opponent also got. Now of course this is a very small sample size to make deductions about the entire club’s history, but one can begin to see the power of small multiples at work and how they may ultimately verify Giorgio Chiellini’s statement.
    </p>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Note00;
