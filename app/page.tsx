"use client";
import React, { useState, useEffect } from "react";
import LeftSection from "./components/leftSection";
import RightSection from "./components/rightSection";

interface GradientPosition {
  x: number;
  y: number;
}

const Home = () => {
  const [gradientPosition, setGradientPosition] = useState<GradientPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateGradientPosition = (event: MouseEvent) => {
      setGradientPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", updateGradientPosition);

    return () => {
      document.removeEventListener("mousemove", updateGradientPosition);
    };
  }, []);

  useEffect(() => {
    // Apply radial gradient to the body
    document.body.style.background = `radial-gradient(600px at ${gradientPosition.x}px ${gradientPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%), #0f172a`;
    document.body.style.backgroundAttachment = "fixed";

    // Cleanup on component unmount
    return () => {
      document.body.style.background = ""; // Reset to default or remove this line if not needed
      document.body.style.backgroundAttachment = "";
    };
  }, [gradientPosition]);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:py-0 lg:px-24 lg:flex lg:justify-between lg:gap-4 relative">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default Home;
