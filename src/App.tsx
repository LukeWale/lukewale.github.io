import React from 'react';
// import logo from './logo.svg';
import logo from './logo.mp4';
import './App.css';

function App() {
  return (
    <div className="App font-sans">
      <header className="App-header">
        <video autoPlay muted>
          <source src={logo} type="video/mp4" />
        </video>
        <p className="text-3xl font-bold">
          Luke Wale
        </p>
        <a className="flex flex-col justify-start items-center h-14 relative space-y-[0px]"
          href="https://lukewale.github.io/js-qr-code-generator/" target="_blank" rel="noopener noreferrer">
          <div className="flex-grow-0 flex-shrink-0 w-72 h-14 rounded-[10px] bg-[#5e17eb]"
            style={{ boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)" }}>
            <p className="self-stretch flex-grow inline-block w-72 h-14 text-2xl font-bold text-center align-middle text-white">
              JS QR Code Generator
            </p>
          </div>
        </a>
      </header>
    </div>
  );
}

export default App;
