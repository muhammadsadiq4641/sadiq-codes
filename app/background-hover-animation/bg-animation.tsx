"use client";
import { useRef, useEffect, useState } from "react";

const HexGrid = () => {
  const lightRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [lightX, setLightX] = useState(0);
  const [lightY, setLightY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth interpolation for light movement
  useEffect(() => {
    const easeFactor = 0.2;
    const animate = () => {
      setLightX((prev) => prev + (mouseX - prev) * easeFactor);
      setLightY((prev) => prev + (mouseY - prev) * easeFactor);
      requestAnimationFrame(animate);
    };
    animate();
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full h-[160vh] bg-gray-900 overflow-hidden">
      {/* Hex Grid Background */}
      <div
        id="hex-grid"
        ref={gridRef}
        className="relative w-full h-screen bg-black"
      >
        <div
          ref={lightRef}
          className="absolute w-[200px] h-[200px] opacity-100 bg-Hex-Gradient rounded-full blur-[40px] pointer-events-none"
          style={{
            left: `${lightX}px`,
            top: `${lightY}px`,
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* Background Grid */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-HexGrid bg-repeat"
          style={{ backgroundSize: "500px" }}
        />
      </div>
    </div>
  );
};

export default HexGrid;
