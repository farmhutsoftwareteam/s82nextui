import React from 'react';
import Image from 'next/image';

const Note = () => {
  return (
    <div className="container mx-auto p-4 max-w-3xl">

      <h1 className="text-2xl font-bold text-center mb-6">Soccer Player</h1>
      <div className="text-black mt-4 mb-8">
  <p>The simplicity of the music player is quite admirable. With the music player, everything about the song is self-contained on one screen. To get to a certain part of a song, all one has to do is pan on the scrubber. When someone is interacting with the scrubber, it also gives the feedback (expands) to show that something is happening.</p>
  
  <p>With this project, we wanted to bring that simplicity to the act of following a game. This meant that we built it with the scrubbing gesture in mind as the primary way of skipping to certain parts of the game.</p>
  
  <p>When we started testing it out though, we noticed that people wanted to tap the event markers instead of scrubbing. Even after explaining the scrub, they would still default to tapping. The problem with tapping is that it was difficult to select the desired marker. People would miss or end up pressing the wrong one altogether.</p>
  
  <p>For a bit, we were about to fall in the trap of blaming the person using the feature. We were now designing based on what we wanted instead of what the person using it would have wanted. BIG MISTAKE.</p>
  
  <p>Luckily this is a problem that has existed since the invention of the touchscreen keyboard. The fat finger error. We went back to the drawing board and ended up designing an algorithm that would make the tapping of the markers easier. Brought it back to testing and people were now able to use the app with ease. They were happy, we were happy.</p>
  
  <p className="font-bold">Moral of the story: Design for the people using the item, not for your own wishes.</p>
</div>


    

      
</div>


   


    


      
    
  )
}

export default Note;
