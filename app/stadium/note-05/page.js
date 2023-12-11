import React from 'react';
import Image from 'next/image';

const Note = () => {
  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-2xl font-bold text-center mb-6">Level Of Detail</h1>

      <p className="text-black mt-4 mb-8">
        The experience of watching a soccer game varies greatly among fans. While some prefer to immerse themselves in the full match, absorbing every detail, others opt for quick highlights. This diversity in viewing preferences has been acknowledged by major sports reporting platforms like The Athletic, ESPN, and even Google. Their match-following features offer users a choice between accessing key moments or delving into comprehensive game details.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Image src="/levelofdetail1.png" alt="Description of first image" width={500} height={300} layout="responsive"/>
        </div>
        <div>
          <Image src="/levelofdetail2.png" alt="Description of second image" width={500} height={300} layout="responsive"/>
        </div>
        <div>
          <Image src="/levelofdetail3.png" alt="Description of third image" width={500} height={300} layout="responsive"/>
        </div>
       
      </div>
      <p className="text-black mt-4 mb-8">
      In designing Gibhe, we aimed to mirror this functionality but with a visually driven approach. The advantage of using the stadium view, a graphic object, is that we could tap into behaviors that people have gotten accustomed to when it comes to interacting with graphical elements. A key interaction we focused on was zooming. This allowed users to control the level of detail they received: zooming in for more comprehensive information and zooming out for a broader, less detailed view. This approach not only made the information more accessible but also more engaging, aligning with the intuitive behaviors of modern touchscreen interaction.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
        <div className="text-center">
          <h2 className="font-bold mb-2">Maximum Detail</h2>
          <Image src="/levelofdetail4.png" alt="Maximum Detail" width={300} height={200} layout="responsive"/>
        </div>

        <div className="text-center md:mt-12">
          <h2 className="font-bold mb-2">vs</h2>
        </div>

        <div className="text-center">
          <h2 className="font-bold mb-2">Minimum Detail</h2>
          <Image src="/levelofdetail5.png" alt="Minimum Detail" width={300} height={200} layout="responsive"/>
        </div>
      </div>
    </div>
  )
}

export default Note;
