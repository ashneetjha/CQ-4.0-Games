import React, { useEffect, useState } from "react";
import '../index.css'; // Ensure you have the correct CSS file for styles
const Congratulations = ({ children }) => {
  const [handlesOpen, setHandlesOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const handleTimer = setTimeout(() => setHandlesOpen(true), 500);
    const confettiTimer = setTimeout(() => setShowConfetti(true), 1500);
    return () => {
      clearTimeout(handleTimer);
      clearTimeout(confettiTimer);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 w-screen h-screen flex items-center justify-center m-0 p-0"
      style={{
        backgroundImage: "url('/Background.png')", // 👈 from your screenshot
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Confetti */}
      <div className="fixed inset-0 z-10 pointer-events-none flex items-center justify-center">
        <img
          src="src\pages\Congratualtions\public\confetti.png"
          alt="Confetti"
          className={`absolute left-1/2 top-1/2 w-full h-full object-cover transition-all duration-700
            ${showConfetti ? "opacity-100 scale-100 animate-firework" : "opacity-0 scale-0"}`}
          style={{
            zIndex: 10,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Campus Quest heading */}
      <img
        src="/Main CQ heading.png"
        alt="Campus Quest"
        className="absolute top-16 left-1/2 -translate-x-1/2 z-20 w-[300px] max-w-[80vw]"
      />

      <div className="relative flex items-center justify-center mt-30 w-[1240px] h-[2000px]">
        {/* Left Handle */}
        <img
          src="src\pages\Congratualtions\public\left_handle.png"
          alt="Left Handle"
          className={`absolute left-1/2 z-30 w-16 h-[500px] mt-190 transition-transform duration-1000 ${
            handlesOpen ? "-translate-x-[700px]" : "-translate-x-1/2"
          }`}
          style={{ top: 0 }}
        />
        {/* Right Handle */}
        <img
          src="src\pages\Congratualtions\public\right_handle.png"
          alt="Right Handle"
          className={`absolute left-1/2 z-30 w-16 h-[500px] mt-190 transition-transform duration-1000 ${
            handlesOpen ? "translate-x-[620px]" : "translate-x-1/2"
          }`}
          style={{ top: 0 }}
        />

        {/* Background panel */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 z-10 w-[1200px] h-[200px] mt-150 flex items-center justify-center rounded-3xl overflow-hidden"
          style={{
            backgroundImage: "url('src\pages\Congratualtions\public\ContentBackground.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Reveal animation */}
        <div
          className={`relative z-20 w-[98%] max-w-[1200px] h-auto flex items-center justify-center rounded-3xl transition-[clip-path] duration-1000`}
          style={{
            backgroundImage: "url('src/pages/Congratualtions/public/blurbg.png')", // 👈 directly in public
            backgroundSize: "cover",
            backgroundPosition: "center",
            clipPath: handlesOpen ? "inset(0% 0% 0% 0%)" : "inset(0% 50% 0% 50%)",
          }}
        >
          <img
            src="src/pages/Congratualtions/public/blurbg.png"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <img
            src="src\pages\Congratualtions\public\CongoBG.png"
            alt="Congratulations"
            className="relative z-10 w-500 h-100"
          />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Congratulations;
