import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="bg-black flex gap-5 flex-col justify-center items-center h-screen">
      <Link href="/roadmap">
        <button className="min-w-[300px] uppercase min-h-[70px] text-white bg-blue-500 px-4 py-2 hover:bg-gray-300">
          hover roadmap animation
        </button>
      </Link>
    </div>
  );
};

export default Page;
