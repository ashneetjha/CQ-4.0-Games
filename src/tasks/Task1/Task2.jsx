import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Task2() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center', marginTop: '10vh' }}>
      <h1>Task 2</h1>
      <p>This is Task 2. Complete the task to proceed.</p>
      <button onClick={() => navigate('/congratulations')} style={{ padding: '1em 2em', fontSize: '1.2em' }}>
        Finish Task 2
      </button>
    </div>
  );
}
