import React from "react";

function Home() {
  return (
    <div>
      <img
        src="/public/sinanface.JPG"
        alt="face"
        className="h-80 w-60 object-cover rounded-2xl"
      />
      <h1 className="flex items-center text-6xl font-medium text-neutral-400">
        Dive Into
        <span className="relative ml-3 h-[1em] w-36 overflow-hidden">
          <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white">
            Ideas
          </span>
          <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:0.83s]">
            Tech
          </span>
          <span className="absolute h-full w-full -translate-y-full animate-slide leading-none text-white [animation-delay:1.83s]">
            Art
          </span>
        </span>
      </h1>
    </div>
  );
}

export default Home;
