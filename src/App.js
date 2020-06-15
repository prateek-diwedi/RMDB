import React from 'react';
import Landing from './components/Landing Page/LandingPage'
import DarkModeToggle from './components/DarkMode/DarkModeToggle';
import './App.scss'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <DarkModeToggle />
      <Landing />
    </div>
  );
}

export default App;
