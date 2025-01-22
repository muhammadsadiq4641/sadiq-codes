"use client";
import React from "react";
import Image from "next/image";
import ballIcon from "@assets/ballIcon.svg";
import { motion } from "framer-motion";
import RoadmapCards from "./roadmap.-cards";

const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className="container min-h-[90vh] max-lg:min-h-[140vh] max-sm:min-h-[122vh]"
    >
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="bg-whiteGradient w-fit mx-auto block relative lg:mt-20 md:mt-44 mt-24 max-[376px]:mt-14 bg-clip-text text-transparent max-[410px]:text-6xl text-7xl lg:text-8xl xl:text-9xl font-HelixaRegular text-center"
      >
        Roadmap
        <Image
          src={ballIcon}
          alt="ballIcon"
          draggable={false}
          className="absolute top-6 -right-10 max-xl:hidden animate-spin duration-1000 "
        />
      </motion.h1>
      <div className="mt-14">
        <RoadmapCards />
      </div>
    </div>
  );
};

export default Roadmap;
