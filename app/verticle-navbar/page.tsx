"use client";
import React from "react";
import { SideBar } from "./SideBar";
import { Header } from "./Header";

const Home = () => {
  return (
    <div className="grid grid-cols-[54px_1fr] bg-black">
      <SideBar />
      <main>
        <Header />
        <div className="mx-auto max-w-5xl px-4 md:px-8 space-y-32 pb-24 flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-6 h-[80vh]">
            <h4 className="sm:text-4xl text-2xl text-white font-medium text-center">
              Hello This is custom navbar code
            </h4>
            <p className="text-gray-300 text-center max-sm:text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              repellat, assumenda quia culpa minima aspernatur. Eos dolor quidem
              quaerat, quisquam fugit sapiente. Eius, voluptatem! Maiores
              suscipit provident illum voluptas ullam ipsa dignissimos voluptate
              laboriosam nemo, iste ad vitae aut veniam quaerat labore eos
              optio, quod magni eius rem magnam dolores temporibus placeat?
              Velit veniam debitis provident doloremque tenetur recusandae
              itaque asperiores ipsa dolore blanditiis illum labore, voluptates
              a eligendi cupiditate exercitationem laudantium error voluptas
              vitae aspernatur nobis nesciunt ex corporis. Et animi quas placeat
              deserunt qui, rem, consequatur, possimus laborum autem officia
              eaque reiciendis numquam tempora. Voluptatem autem veniam quaerat.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
