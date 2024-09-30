// src/App.js
import React from 'react';
import Calculator from './components/Calculator'; // Import the Calculator component
import './styles/App.css'; // Optional: Import general styles if you have them

function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <Calculator />
    </div>
  );
}

export default App;
