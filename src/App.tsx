import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Header from './components/Header';
import Resume from './components/Resume';
import Academic from './components/Academic';
import Professional from './components/Professional';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
      <Header/>
      <Resume/>
      <AboutMe/>
      <Professional/>
      <Academic/>
    </div>
  );
}

export default App;
