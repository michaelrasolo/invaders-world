import React from 'react'
import { Link } from "react-router-dom";
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
            <Link
              className="inline-flex h-10	items-center justify-center rounded-md bg-deepGreen text-white px-8 text-sm font-medium text-deepGreen shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              to="#"
            >
              Check
            </Link>
          </div>
        </main>
          )
}

export default Hero