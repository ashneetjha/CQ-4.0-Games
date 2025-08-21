import { Routes, Route, Navigate } from "react-router-dom";
import WaterJug from "./pages/WumpusWorld.jsx";
import Start from "./pages/Start.jsx";
import Skip from "./pages/Skip.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WaterJug />} />
      <Route path="/start" element={<Start />} />
      <Route path="/skip" element={<Skip />} />
      {/* fallback for unknown routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
