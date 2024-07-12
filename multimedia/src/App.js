
import React from 'react';
import './App.css';
import Footer from './Footer'
import LandingPage from './LandingPage';
import NavBar from './NavBar';
import Blog from './Blog Article';
import Trevor from './Born a Crime';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <LandingPage/>
      <Footer/>
      <Blog/>
      <Trevor/>
    </div>
  );
}

export default App;
