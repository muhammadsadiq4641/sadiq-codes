"use client";

import React, { useEffect, useState, useRef } from "react";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 50,
  className,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          setShowCursor(true);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (hasStarted) {
      let currentIndex = 0;
      setIsTyping(true);

      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText((prev) => prev + text.charAt(currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          setTimeout(() => {
            setShowCursor(false);
          }, 1000);
        }
      }, speed);

      return () => clearInterval(interval);
    }
  }, [hasStarted, text, speed]);

  return (
    <div
      ref={containerRef}
      className={`${className} relative inline`}
      style={{ display: "inline" }}
    >
      <span className="whitespace-pre-wrap break-words inline">
        {displayedText}
      </span>
      {showCursor && (
        <span
          className={`inline-block align-baseline ${
            isTyping ? "animate-blink" : ""
          }`}
          style={{
            width: "8px",
            height: "1.2em",
            backgroundColor: "currentColor",
            marginLeft: "1px",
            position: "relative",
            top: "2px",
          }}
        ></span>
      )}
    </div>
  );
};

export default TypingAnimation;
