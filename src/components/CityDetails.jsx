import React from "react";

function CityDetails() {
  return (
    <article className="h-screen flex justify-around items-center text-left text-justify	">
      <div className="h-5/6 shadow-lg  ">
        <img
          className="h-full"
          src="/backgrounds/Invader_Portrait.jpg"
          alt="Invader Portrait"
        />
      </div>
      <div className="border border-blue h-5/6 w-2/6 p-6 flex flex-col justify-around text-deepGreen font-medium">
        <h2 className="text-3xl text-center py-6 font-bold">
          Who the f*ck is Invader ?
        </h2>
        <p>
          Invader, the elusive French street artist, is like the superhero of
          pixel art. Imagine him as the Clark Kent of Space Invaders, swooping
          down to transform dull walls into vibrant, mosaic masterpieces. But
          who is this artistic superhero? It's a mystery - he's the Batman of
          anonymity, keeping his true identity under a pixelated mask.
        </p>
      </div>
    </article>
  );
}

export default CityDetails;
