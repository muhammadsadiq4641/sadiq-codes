"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const NumberCounter: React.FC = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 5, {
      duration: 2,
    });

    return animation.stop; // Cleanup animation on unmount
  }, [count]);

  return (
    <motion.h1 className="text-center text-white text-5xl">{rounded}</motion.h1>
  );
};

export default NumberCounter;
