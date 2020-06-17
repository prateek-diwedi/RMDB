import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Landing from './components/Landing Page/LandingPage'
import SearchPage from './components/searchPage/SearchPage'
import DarkModeToggle from './components/DarkMode/DarkModeToggle';
import './App.scss'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <div className="App">
      <DarkModeToggle />
      <Route exact path='/' component={Landing} />
      <Route exact path='/search/:movie' component={SearchPage} />
    </div>
    </Router>
  );
}

export default App;
