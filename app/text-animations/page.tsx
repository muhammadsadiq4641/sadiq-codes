import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="bg-black flex gap-5 flex-col justify-center items-center h-screen">
      <Link href="/text-reveal">
        <button className="w-[300px] uppercase h-[70px] text-white bg-gray-600">
          text reveal animation
        </button>
      </Link>
      <Link href="/hacker-text-animation">
        <button className="w-[300px] uppercase h-[70px] text-white bg-gray-600">
          hacking text animation
        </button>
      </Link>
      <Link href="/shine-txt-animation">
        <button className="w-[300px] uppercase h-[70px] text-white bg-gray-600">
          Shining animation
        </button>
      </Link>
      <Link href="/number-count">
        <button className="w-[300px] uppercase h-[70px] text-white bg-gray-600">
          number counter
        </button>
      </Link>
    </div>
  );
};

export default Page;
