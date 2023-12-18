import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Note = () => {
  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-2xl font-bold text-center mb-6">Timeline Thoughts</h1>
     

     
      <h2 className='text-xl md:text-left text-center mb-6'>Problem Statement </h2>
      <p>
      I've been busy cooking during the first half of this game, and I'd really like to catch up on the match after halftime. I'm not just talking about watching the match, but really getting into it with an understanding of what it's been like so far. The halftime stats, like possession and shots, give me an extremely abstract impression of the game, but they don't paint a complete picture of the experience so far. What would a good picture of the game look like? One that would allow me to see everything about the game in detail, not just the stats. I'm looking for something that would make me feel something about the action I've missed, something that would let me experience it as well. The current play-by-play text options are too long to consume in a glance.
  </p>

    
      <div className="grid grid-cols-1 mt-5 md:grid-cols-3 gap-4">
        <div>
          <Image src="/timeline1.png" alt="Description of first image" width={500} height={300} layout="responsive"/>
        </div>
        <div>
          <Image src="/timeline2.png" alt="Description of second image" width={500} height={300} layout="responsive"/>
        </div>
        <div>
          <Image src="/timeline3.png" alt="Description of third image" width={500} height={300} layout="responsive"/>
        </div>
        
       
      </div>

      <div className="text-black mt-4 mb-8">
  <p>
    This is the problem that sparked up everything and it got me thinking about timelines.
  </p>
  <p>
    What is a timeline like? Or rather what is a reimagined timeline like? 
    What are the problems that a timeline answers? 
    What are the purposes of a timeline?
  </p>
  
<p>
  Before I could answer these questions, the circular form saved in <span />
  <Link href="/stadium/note-10" legacyBehavior>
    <a className="text-blue-600 hover:text-blue-800">“Disclosure - Where Angels Fear to Tread”</a>
  </Link>
  came back to mind but I didn’t want to force it onto the problem without answering the questions posed above. In doing my research, I came across this interesting statement from an educator's website (colorincolorado) which had this to say about timelines:
</p>
  <p>
    “Educators may find timelines a useful strategy for a variety of educational purposes. They can be used to record events from a story or a history lesson in a sequential format. They can help students keep events in chronological order as they write summaries. But most important of all, they can also provide comprehension support to English language learners (ELLs), helping them make connections and recognize patterns in a series or process. Because numerical markers such as hours, years, days or months are placed apart with plenty of space in between, timelines can appear visually less complex than pure text, helping ELLs more easily relate events to their corresponding times. Both educators and parents can use timelines to help students organize information in a chronological sequence so that they can better understand growth, change, recurring events, cause and effect, and key events of historical, social, and scientific.”
  </p>
  <p>
    It’s when I read this statement, that I was confident that the circle could work to solve this issue.
  </p>
  <p>
    During the experiments we ended up landing on this one
  </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div >
          <Image src="/timeline4.png" alt="First image description" width={400} height={300} layout="responsive"/>
        </div>
        <div >
          <Image src="/timeline5.png" alt="Second image description" width={400} height={300} layout="responsive"/>
        </div>
        <div >
          <Image src="/timeline6.png" alt="Third image description" width={400} height={300} layout="responsive"/>
        </div>
      </div>
      <p className="text-black  mt-4 mb-8">
      First sketches of what this would be like with all the lines originating from the center. 
</p>


    


      
    </div>
  )
}

export default Note;
