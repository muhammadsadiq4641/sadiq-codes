"use client";

import Link from "next/link";
import React, { useState } from "react";

const Home: React.FC = () => {
  return (
    <>
      <div className="h-screen w-screen bg-black flex flex-col items-center justify-center gap-4">
        <Link href="/text-reveal">
          <button className="px-10 py-4 rounded-lg bg-blue-400 text-gray-200">
            Text reveal animation
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
