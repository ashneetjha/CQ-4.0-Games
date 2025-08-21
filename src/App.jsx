import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Task1 from './tasks/Task1/Task1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/task1" element={<Task1 />} />
      </Routes>
    </Router>
  );
}

export default App;
