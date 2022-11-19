import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container min-h-screen" data-testid="app-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
