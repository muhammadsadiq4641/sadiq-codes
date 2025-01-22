"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import ballIcon from "@assets/ballIcon.svg";
import FeaturesCards from "./features.cards";

interface RoadmapItem {
  id: number;
  txt: string;
  txt2: string;
  txt3: string;
  footer: string;
  header: string;
}

const roadmapData: RoadmapItem[] = [
  {
    id: 1,
    header: "Research and Development",
    txt: "Conduct market research and design the core architecture.",
    txt2: "Develop the testnet for node and validator participation.",
    txt3: "Initiate partnerships for early integrations.",
    footer: "Cloud Storage",
  },
  {
    id: 2,
    header: " Token Launch and Testnet Expansion",
    txt: "Launch $TSOR and secure liquidity.",
    txt2: "Expand the testnet and attract more participants.",
    txt3: "Implement governance and release API tools.",
    footer: "Cloud Storage",
  },
  {
    id: 3,
    header: " Mainnet Launch and Ecosystem Growth",
    txt: "Launch the mainnet and enable storage services.",
    txt2: "Onboard partners and expand validator participation.",
    txt3: "Introduce staking for long-term engagement.",
    footer: "Cloud Storage",
  },
  {
    id: 4,
    header: "Scaling and Global Adoption",
    txt: "Scale the network for enterprise-level storage.",
    txt2: "Integrate advanced privacy features and new services.",
    txt3: "Drive adoption through partnerships and marketing.",
    footer: "Cloud Storage ",
  },
];

const Features: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [screenSize, setScreenSize] = useState<
    "extraLarge" | "large" | "medium" | "small"
  >("large");
  const [currentPhase, setCurrentPhase] = useState<number>(1);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "0%",
      screenSize === "extraLarge"
        ? "-70%"
        : screenSize === "large"
        ? "-160%"
        : screenSize === "medium"
        ? "-170%"
        : "-260%",
    ]
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1292) {
        setScreenSize("extraLarge");
      } else if (window.innerWidth > 992) {
        setScreenSize("large");
      } else if (window.innerWidth > 540) {
        setScreenSize("medium");
      } else {
        setScreenSize("small");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={targetRef} className="md:h-[200vh] h-[300vh] pt-20 pb-12">
      <div className="sticky top-0 min-h-screen overflow-hidden max-sm:pt-14">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="bg-whiteGradient w-fit mx-auto block relative lg:mt-20 md:mt-44 mt-24 max-[376px]:mt-14 bg-clip-text text-transparent max-[410px]:text-6xl text-7xl lg:text-8xl xl:text-9xl font-HelixaRegular text-center"
        >
          Features
          <Image
            src={ballIcon}
            alt="ballIcon"
            draggable={false}
            className="absolute top-6 -right-10 max-xl:hidden animate-spin duration-1000 "
          />
        </motion.h2>
        <motion.div
          style={{ x }}
          className="flex flex-nowrap items-center mt-14 gap-10 max-[500px]:gap-3 w-full md:ms-[10.5rem] max-md:ms-[5%]"
        >
          <FeaturesCards />
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
