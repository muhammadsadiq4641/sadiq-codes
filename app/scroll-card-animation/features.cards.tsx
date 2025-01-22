import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import Logo from "@assets/features-card-logo.png";

const FeaturesData = [
  {
    id: 1,
    HeaderLogo: Logo,
    Header: "Built on enhanced",
    txt: "Built on enhanced EVM architecture, our network delivers unparalleled speed, security, and scalability through intelligent consensus.",
  },
  {
    id: 2,
    HeaderLogo: Logo,
    Header: "Optimized Performance",
    txt: "Leverage the power of optimization for greater efficiency and unmatched transaction speeds.",
  },
  {
    id: 3,
    HeaderLogo: Logo,
    Header: "Robust asdasd Security",
    txt: "Experience state-of-the-art security protocols designed to safeguard your assets.",
  },
  {
    id: 4,
    HeaderLogo: Logo,
    Header: "Scalable Solutions",
    txt: "Our scalable solutions ensure seamless growth and uninterrupted performance.",
  },
];

const FeaturesCards = () => {
  return (
    <div className="flex items-center md:gap-x-10 gap-x-2 text-white ">
      {FeaturesData.map((feature) => (
        <TiltCard key={feature.id} header={feature.Header} text={feature.txt} />
      ))}
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ header, text }: { header: string; text: string }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative md:h-[526px] h-[440px] max-[410px]:h-[360px] md:w-[456px] w-[360px] max-[410px]:w-[280px] rounded-xl hover:bg-FeaturesCardBG bg-opacity-10 shadow-lg group border-[#00a4eb] border-opacity-5 border hover:border-opacity-100"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute overflow-clip inset-4 flex flex-col justify-center rounded-xl bg-[#001322] p-6 shadow-lg"
      >
        <Image
          src={Logo}
          alt="logo"
          className=" group-hover:animate-spin-slow absolute top-10 max-[410px]:top-3 left-10 max-[410px]:left-3 max-[410px]:w-[50px]"
        />
        <h2
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-start w-full max-[410px]:text-xl text-white text-[26px] font-HelixaBold"
        >
          {header}
        </h2>
        <p
          style={{
            transform: "translateZ(25px)",
          }}
          className="text-start text-white text-base font-HelixaRegular mt-6"
        >
          {text}
        </p>
        <div className="w-[250px] hidden group-hover:block h-[250px] bg-blue-btn-Gradient rounded-full blur-3xl opacity-70 absolute bottom-0 right-0 transition-all duration-300" />
        <div className="absolute right-0 bottom-0 hidden group-hover:block transition-all duration-1000">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="239"
            height="239"
            viewBox="0 0 279 279"
            fill="none"
            className="animate-spin-slow"
          >
            <path
              d="M139.5 0C111.91 0 84.9387 8.18153 61.998 23.51C39.0574 38.8384 21.1773 60.6254 10.6189 86.1156C0.0604432 111.606 -2.70212 139.655 2.68052 166.715C8.06315 193.775 21.3492 218.632 40.8587 238.141C60.3681 257.651 85.2246 270.937 112.285 276.319C139.345 281.702 167.394 278.94 192.884 268.381C218.375 257.823 240.162 239.943 255.49 217.002C270.818 194.061 279 167.09 279 139.5C278.961 102.514 264.251 67.0546 238.098 40.9017C211.945 14.7489 176.486 0.0390576 139.5 0ZM191.96 33.7885C196.158 80.0918 175.716 101.191 148.889 120.198C145.871 87.3619 137.568 53.399 97.422 29.2279C112.644 23.4113 128.906 20.8135 145.182 21.5984C161.459 22.3834 177.396 26.5341 191.987 33.7885H191.96ZM21.703 146.931C59.7168 120.104 88.1936 127.24 118.106 141.043C91.2116 160.076 65.9809 184.247 65.0822 231.06C52.4329 220.794 42.0478 208.018 34.5818 193.539C27.1157 179.059 22.7306 163.19 21.703 146.931ZM204.797 237.78C162.611 218.264 154.537 190.055 151.532 157.3C168.594 165.16 186.823 171.719 206.93 171.719C222.127 171.719 238.397 167.963 256.063 158.198C253.457 174.278 247.558 189.646 238.737 203.341C229.915 217.035 218.36 228.759 204.797 237.78Z"
              fill="#000E19"
              fill-opacity="0.2"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesCards;
