import React from 'react';
import Image from 'next/image';

const Note = () => {
  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-2xl font-bold text-center mb-6">Extra Time</h1>

      <p className="text-black mt-4 mb-8">
      Anyone who has watched a game of soccer knows that the last couple of minutes of a half usually have a lot of action. We wanted to make sure that we captured the extra time madness and highlight it so that someone looking at the stadium view would be able to tell quickly if something had happened in extra time. Here are some of the experiments that came up during the process:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <Image src="/extra1.png" alt="Description of first image" width={500} height={300} layout="responsive"/>
        </div>
        <div>
          <Image src="/extra2.png" alt="Description of second image" width={500} height={300} layout="responsive"/>
        </div>
        <div>
          <Image src="/extra3.png" alt="Description of third image" width={500} height={300} layout="responsive"/>
        </div>
        <div>
          <Image src="/extra4.png" alt="Description of third image" width={500} height={300} layout="responsive"/>
        </div>
       
      </div>
      <p className="text-black text-center mt-4 mb-8">
      The last two reminded me of a Wassily Kadinsky piece
</p>
<div className="flex justify-center">
        <Image src="/extra5.png" alt="Kandinsky inspired image" width={200} height={150} />
      </div>
      <p className="text-black text-center mt-4 mb-8">
      During the experiments we ended up landing on this one

</p>
<div className="flex justify-center">
        <Image src="/extra6.png" alt="Kandinsky inspired image" width={200} height={150} />
      </div>
      <p className="text-black  mt-4 mb-8">
      It did the job of showing the extra time without interfering too much with the rest of the scene. Only problem with is that we could not easily convey what those thick borders at the top and bottom of the circle meant. That’s when it hit us, what if the entire outer outline was the time indicator showing match progress? That way a person could only look at the stadium view and have all the information about the game without even having to look at the timer label.

</p>
<div className="flex justify-center">
        <Image src="/extra7.png" alt="Kandinsky inspired image" width={200} height={150} />
      </div>
      <p className="text-black  mt-4 mb-8">
      At this point, the outlines showing the time were good but there was no way of easily explaining to the people what the significance of the different colours on the outline was. Problem stayed on my mind for a while and ended up getting inspiration for the solution from one of the most random places ever, NYC Subway train.
</p>
<div className="flex justify-center">
        <Image src="/extra8.png" alt="Kandinsky inspired image" width={200} height={150} />
      </div>
        <p className="text-black  mt-4 mb-8">
        Looking at this plate on the floor sparked some ideas of what it would be like to have the labels on the lines itself. Started experimenting with the concept and eventually ended up with the current setup.
</p>
<div className="flex justify-center">
        <Image src="/extra9.png" alt="Kandinsky inspired image" width={200} height={150} />
      </div>

      
    </div>
  )
}

export default Note;
