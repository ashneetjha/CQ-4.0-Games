import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// ✅ Import assets as modules (Vite will bundle them)
//import bgImg from "./public/Background.png";
import headingImg   from "../../public/Main.png";
import timerFrame   from "../../public/timer.png";
import newspaperImg from "../../public/MissionariesandCannibals Newspaper.png";
import startBtn     from "../../public/start.png";
import skipBtn      from "../../public/skip.png";
import bgImg        from "../../public/Background.png"; // if you use it for background


export default function WaterJug() {
  // 1-hour countdown
  const [timeLeft, setTimeLeft] = useState(3600);
  useEffect(() => {
    const id = setInterval(() => setTimeLeft(t => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const formatTime = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;
  };

  return (
    <div
      className="waterjug-wrap"
      role="img"
      aria-label="Campus Quest background"
      style={{ backgroundImage: `url(${bgImg})` }}  // ✅ responsive background
    >
      {/* top-left logo */}
      <img className="waterjug-heading" src={headingImg} alt="Campus Quest 4.0" />

      {/* top-right timer (frame image + live digits) */}
      <div className="timer-wrap">
        <div className="timer-frame">
          <img className="timer-img" src={timerFrame} alt="Timer" />
          <div className="timer-eraser" aria-hidden="true"></div>
          <span className="timer-digits">{formatTime(timeLeft)}</span>
        </div>
      </div>

      {/* centered newspaper + overlay buttons */}
      <div className="waterjug-center">
        <div className="paper-wrap">
          <img className="waterjug-paper" src={newspaperImg} alt="Missionaries & Cannibals — Instructions" />
          <div className="paper-buttons">
            <Link to="/start" aria-label="Start">
              <img className="btn-image" src={startBtn} alt="" />
            </Link>
            <Link to="/skip" aria-label="Skip">
              <img className="btn-image" src={skipBtn} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
