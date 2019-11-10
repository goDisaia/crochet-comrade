import React from 'react';
import logo from './logo.svg';
import './App.css';
import Blanket from './Blanket'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          hello root.
        </p>
        <div className="App-logo">
          <Blanket></Blanket>
        </div>
      </header>
    </div>
  );
}

export default App;
