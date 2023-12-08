import React from 'react';

const Note = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Muriel Cooper - Information Landscapes</h1>

      <p className="text-black mt-4">
      There are moments in life when you encounter a collection of works that completely transform your thinking. Muriel Cooper's work is definitely one such example. It has been almost three decades since she introduced the concept of information landscapes, and now, with the mainstream advent of spatial computing, her ideas are more relevant than ever.

      </p>

      <h2 className="text-xl font-bold mt-6 mb-4">Information Landscape</h2>
      <p className="text-black">
      Information landscape suggested an electronic environment that extends from the user’s screen in all directions. In an information landscape, this was made both explicit and literal. The user’s graphic interface became a virtual window, a windshield, to peer into and navigate through the information landscape within.

An information landscape dispenses with these proxies in favour of a more immediate relationship to its data. There are no onscreen buttons, no objects, menus, or control panels. Instead, a concrete three dimensional “landscape” of its data is presented for the user to navigate directly.

        {/* Include more text as needed */}
      </p>
      <div className="text-center mt-4 md:text-left">
        <p>Why should text [visual elements] move or change? We see at least five reasons:</p>
        <ol className="list-decimal list-inside">
          <li>To convey information itself that is changing</li>
          <li>To pace the observer</li>
          <li>To save “real-estate”</li>
          <li>To amplify</li>
          <li>To be attention getting</li>
        </ol>
        <p>Each reason can be addressed in terms of kinds of change; which include (but are not limited to): 2D / 3D translation and rotation; colour changes; shape transformations; transparency; and transfigurations between icons and symbols.</p>
        <p>The gap between a person’s decisions and their consequences was more or less removed, and the tightness of this loop offered the possibility of continuous feedback and adjustment. Perhaps the most radical consequence of this work was its collapse of the user interface with its display. These two pieces become one in an information landscape — a person is completely immersed in the data they’re manipulating.</p>
      </div>

      {/* Additional paragraphs and lists */}
      {/* ... */}


      <p className="text-black italic mt-4">
        Quotes taken from a book titled Muriel.
        David Reinfurt, Muriel, MIT Press, 2017, pp. 32-33.
      </p>

      <p className="text-blue-500 hover:text-blue-700 mt-4">
        <a href="http://www.revue-backoffice.com/en/issues/01-making-do-making-with/nolwenn-maudet-muriel-cooper-information-landscapes" target="_blank" rel="noopener noreferrer">
          Learn more about Muriel Cooper's work
        </a>
      </p>
    </div>
  )
}

export default Note;
