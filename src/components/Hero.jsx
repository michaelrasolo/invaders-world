import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe } from 'lucide-react';

function Hero() {
  return (
    <main className="h-screen flex flex-col justify-center items-end text-center bg-cover bg-center bg-hero1 text-deepGreen">
      <div className="mx-16">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-deepGreen">
          Invader's World
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl mb-6 px-4 text-deepGreen">
          Follow the street artist accross the globe
        </p>
        <Button className="text-white">
          <Link to="/World">See the world</Link>
        </Button>
      </div>
    </main>
  );
}

export default Hero;
