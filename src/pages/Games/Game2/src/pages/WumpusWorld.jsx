import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css"; // Ensure you have the correct CSS file for styles
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
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="waterjug-wrap" role="img" aria-label="Campus Quest background">
      {/* top-left logo (exact filename) */}
      <img
        className="waterjug-heading"
        src="src\pages\Games\Game2\public\Main CQ heading.png"
        alt="Campus Quest 4.0"
      />

      {/* top-right timer (frame image + blackout patch + live digits) */}
      <div className="timer-wrap">
        <div className="timer-frame">
          <img className="timer-img" src="src\pages\Games\Game2\public\timer.png" alt="Timer" />
          <div className="timer-eraser" aria-hidden="true"></div>
          <span className="timer-digits">{formatTime(timeLeft)}</span>
        </div>
      </div>

      {/* centered newspaper + overlay buttons (exact filenames) */}
      <div className="waterjug-center">
        <div className="paper-wrap">
          <img
            className="waterjug-paper"
            src="src\pages\Games\Game2\public\WumpusWorld Newspaper.png"
            alt="Wumpus World — Instructions"
          />

          <div className="paper-buttons">
            <Link to="https://wumpus-seven.vercel.app/" aria-label="Start">
              <img className="btn-image" src="src\pages\Games\Game2\public\start.png" alt="" />
            </Link>
            <Link to="/game3" aria-label="Skip">
              <img className="btn-image" src="src\pages\Games\Game2\public\skip.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
