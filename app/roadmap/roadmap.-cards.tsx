"use client";
import React, { useState } from "react";
import Image from "next/image";
import Bullets from "@assets/roadmap-logo.png";

interface FAQItem {
  id: string;
  number: string;
  title: string;
  txt1: string;
  txt2: string;
  txt3: string;
  txt4: string;
}

const RoadmapCards = () => {
  const [openId, setOpenId] = useState("01"); // Default active is the first card

  const faqItems: FAQItem[] = [
    {
      id: "01",
      number: "01",
      title: "Platform Launch",
      txt1: "Enhancing AI's d Perception",
      txt2: "Initial Token Distribution And Integration Of Payment Options.",
      txt3: "Enhancing AI's Perception",
      txt4: "Enhancing AI's Perception",
    },
    {
      id: "02",
      number: "02",
      title: "lorem ipsum",
      txt1: "Enhancing AI's dd Perception",
      txt2: "Initial Token Distribution And Integration Of Payment Options.",
      txt3: "Enhancing AI's Perception",
      txt4: "Enhancing AI's Perception",
    },
    {
      id: "03",
      number: "03",
      title: "Platform Launch",
      txt1: "Enhancing AI's asd Perception",
      txt2: "Initial Token Distribution And Integration Of Payment Options.",
      txt3: "Enhancing AI's ddd Perception",
      txt4: "Enhancing AI's Perception",
    },
    {
      id: "04",
      number: "04",
      title: "Platform Launch",
      txt1: "Enhancing AI's Perception",
      txt2: "Initial Token dddd Distribution And Integration Of Payment Options.",
      txt3: "Enhancing AI's Perception",
      txt4: "Enhancing AI's Perception",
    },
  ];

  return (
    <div className="flex gap-4 max-lg:flex-col sm:p-6 text-gray-100 h-[533px]">
      {faqItems.map((item) => (
        <div
          key={item.id}
          className={`rounded-lg sm:p-6 p-3 transition-all duration-1000 cursor-pointer border border-[#00a4eb]
            ${
              openId === item.id
                ? "bg-gray-800 lg:w-[670px] max-lg:h-[670px] border-opacity-100"
                : "bg-gray-800/50 hover:bg-gray-800/70 lg:w-[186px] max-lg:h-[186px] border-opacity-25"
            }`}
          onMouseEnter={() => setOpenId(item.id)}
        >
          <div className="h-full flex flex-col">
            <div
              className={`flex items-start  transition-all duration-300
              ${
                openId === item.id
                  ? "flex-col mb-4 gap-0"
                  : "flex-col h-full lg:gap-32"
              }`}
            >
              <span
                className={`text-8xl txt-blue-gradient font-HelixaBlack transition-all duration-300 
                ${openId === item.id ? "opacity-100" : "opacity-30"}`}
              >
                {item.number}
              </span>
              <h2
                className={`text-3xl font-HelixaBold transition-all txt-silver-gradient duration-500 whitespace-nowrap
                ${
                  openId === item.id
                    ? "lg:transform lg:rotate-0 mt-0"
                    : "lg:transform lg:-rotate-90 lg:mt-44 lg:origin-left lg:translate-x-8"
                }`}
              >
                {item.title}
              </h2>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 xl:delay-500 lg:delay-1000 delay-500 
              ${openId === item.id ? "opacity-100" : "opacity-0 h-0"}`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={Bullets}
                    alt="Bullet"
                    className="animate-spin-slow min-w-[30px]"
                  />
                  <p className="text-white font-HelixaRegular xl:text-xl sm:text-base text-sm">
                    {item.txt1}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src={Bullets}
                    alt="Bullet"
                    className="animate-spin-slow min-w-[30px]"
                  />
                  <p className="text-white font-HelixaRegular xl:text-xl sm:text-base text-sm">
                    {item.txt2}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src={Bullets}
                    alt="Bullet"
                    className="animate-spin-slow min-w-[30px]"
                  />
                  <p className="text-white font-HelixaRegular xl:text-xl sm:text-base text-sm">
                    {item.txt3}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src={Bullets}
                    alt="Bullet"
                    className="animate-spin-slow min-w-[30px]"
                  />
                  <p className="text-white font-HelixaRegular xl:text-xl sm:text-base text-sm">
                    {item.txt4}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical;
          text-orientation: mixed;
        }
      `}</style>
    </div>
  );
};

export default RoadmapCards;
