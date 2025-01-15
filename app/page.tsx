"use client";

import Link from "next/link";
import React, { useState } from "react";

const Home: React.FC = () => {
  return (
    <>
      <div className="h-screen w-screen bg-black flex flex-col items-center justify-center gap-4">
        <Link href="/text-animations">
          <button className="px-10 py-4 rounded-lg bg-blue-500 text-gray-200 font-semibold">
            text animation
          </button>
        </Link>
        <Link href="/verticle-navbar">
          <button className="px-10 py-4 rounded-lg bg-blue-500 text-gray-200 font-semibold">
            Verticle Navbar
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
