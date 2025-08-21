import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Task1 from './tasks/Task1/Task1';
import Game2 from './pages/Games/Game2/src/App';
import Game3 from './pages/Games/Game3/src/App';
import Game4 from './pages/Games/Game4/src/App';
import Game5 from './pages/Games/Game5/src/App';
import GameMap from './pages/Task2/src/App';
import Congratulations from './pages/Congratualtions/src/App';
import TimeOverPage from './pages/TimeOverPage/src/App';

function App() {
  return (
    <Router>
      <Routes>
    <Route path="/" element={<Login />} />
  <Route path="/task1" element={<Task1 />} />
  <Route path="/game2/*" element={<Game2 />} />
  <Route path="/game3/*" element={<Game3 />} />
  <Route path="/game4/*" element={<Game4 />} />
  <Route path="/game5/*" element={<Game5 />} />
  <Route path="/gamemap" element={<GameMap />} />
    <Route path="/congratulations" element={<Congratulations />} />
    <Route path="/timeout" element={<TimeOverPage />} />
      </Routes>
    </Router>
  );
}

export default App;
