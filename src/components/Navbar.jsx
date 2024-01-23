import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
function Navbar() {
  return (
    <header className="Navbar fixed my-4 z-40">
      <Link to="/" className="flex items-center gap-4">
        <img
          src="/logos/invader4000.png"
          alt="invader logo"
          className="w-16 h-16 "
        />
        <span className="text-white text-xl font-semibold hidden md:block">Invader's World</span>
      </Link>
      <nav className="space-x-4">
        <Link className="text-white hover:underline" to="/World">
          World
        </Link>

        <Link className="text-white hover:underline" to="/about">
          About
        </Link>
        <Link className="text-white hover:underline" to="#">
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
