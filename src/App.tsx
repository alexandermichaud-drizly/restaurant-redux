import React from 'react';
import Cuisine from './features/cuisine/Cuisine';
import Menu from './features/menu/Menu';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cuisine />
        <Menu />
      </header>
    </div>
  );
}

export default App;
