"use client";
import React from "react";
import Reveal from "./reveal-animation";
import RevealLeft from "./reveal-left-animation";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <div className="w-[80%] h-[80%] rounded-lg bg-[#ffffff25] flex flex-col items-center justify-center">
        <Reveal>
          <h1 className="pointer-events-auto text-4xl sm:text-6xl font-black text-zinc-100 md:text-8xl">
            Hi, I'm Bob<span className="text-indigo-500">.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className="pointer-events-auto my-2 text-xl sm:text-2xl text-zinc-300 md:my-4 md:text-4xl">
            I'm a{" "}
            <span className="font-semibold text-indigo-500">
              Full Stack Developer
            </span>
          </h2>
        </Reveal>
        <RevealLeft>
          <p className="pointer-events-auto leading-relaxed md:leading-relaxed max-w-xl text-sm text-zinc-300 md:text-base">
            I've spent the last 5 years building and scaling software for some
            pretty cool companies. I also teach people to paint online (incase
            you've got an empty canvas layin' around 🎨). Let's connect!
          </p>
        </RevealLeft>
      </div>
    </div>
  );
};

export default Home;
