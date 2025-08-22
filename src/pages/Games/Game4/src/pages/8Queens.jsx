import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function EightQueensPage() {
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
    <div className="waterjug-wrap" role="img" aria-label="Campus Quest background">
      {/* top-left logo (exact filename) */}
      <img
        className="waterjug-heading"
        src="src\pages\Games\Game4\public\Main CQ heading.png"
        alt="Campus Quest 4.0"
      />

      {/* top-right timer (frame + live digits) */}
      <div className="timer-wrap">
        <div className="timer-frame">
          <img className="timer-img" src="src\pages\Games\Game4\public\timer.png" alt="Timer" />
          <div className="timer-eraser" aria-hidden="true"></div>
          <span className="timer-digits">{formatTime(timeLeft)}</span>
        </div>
      </div>

      {/* centered newspaper + overlay buttons */}
      <div className="waterjug-center">
        <div className="paper-wrap">
          <img
            className="waterjug-paper"
            src="src\pages\Games\Game4\public\8QueensProblem Newspaper.png"
            alt="8 Queens Problem — Instructions"
          />

          <div className="paper-buttons">
            <Link to="https://cq8queens.vercel.app/" aria-label="Start">
              <img className="btn-image" src="src\pages\Games\Game4\public\start.png" alt="" />
            </Link>
            <Link to="https://game-page-chi.vercel.app/" aria-label="Skip">
              <img className="btn-image" src="src\pages\Games\Game4\public\skip.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
