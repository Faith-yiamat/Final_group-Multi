
import React from 'react';
import './App.css';
import Footer from './Footer'
import LandingPage from './LandingPage';
import NavBar from './NavBar';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <LandingPage/>
      <Footer/>
    </div>
  );
}

export default App;
