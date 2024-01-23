import React from "react";

function About() {
  return (
    <main className="h-screen flex justify-around items-center text-left text-white text-justify	">
      <div className="h-5/6 ">
        <img
          className="h-full"
          src="/backgrounds/Invader_Portrait.jpg"
          alt="Invader Portrait"
        />
      </div>
      <div className="h-5/6 w-2/3 p-6 flex flex-col justify-around">
        <h2 className="text-3xl text-center py-6 font-bold">Who the f*ck is Invader ?</h2>
        <p>
          Invader, the elusive French street artist, is like the superhero of
          pixel art. Imagine him as the Clark Kent of Space Invaders, swooping
          down to transform dull walls into vibrant, mosaic masterpieces. But
          who is this artistic superhero? It's a mystery - he's the Batman of
          anonymity, keeping his true identity under a pixelated mask.
        </p>

        <p>
          Since the late '90s, Invader's been on a quest, not for hidden
          treasure, but for the perfect wall to conquer. Armed with mosaic tiles
          and a pixel-powered imagination, he turns cities into his 8-bit
          canvas. It's like a video game where the only power-up is a dose of
          nostalgia, and each piece boasts a secret score, turning the streets
          into a quirky leaderboard.
        </p>

        <p>
          In a world full of blank walls, Invader is the caped crusader
          injecting humor and retro vibes. It's a fun rebellion, a guerrilla war
          fought with tiles, and he invites you to be a part of the adventure.
          So, put on your pixelated cape, hit the streets, and let the invasion
          begin!
        </p>
      </div>
    </main>
  );
}

export default About;
