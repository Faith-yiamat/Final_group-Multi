
import React from 'react';
import './App.css';
import Footer from './Footer'
import LandingPage from './LandingPage';
import NavBar from './NavBar';
import Blog from './Blog Article';
import Trevor from './Born a Crime';
import BlogPost from './Multimedia';
import CaseStudies from './CaseStudies';
import Portfolio from './Portfolios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <LandingPage/>
        <Footer/>
        <Blog/>
        <Trevor/>
        <BlogPost/>
        <CaseStudies/>
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/" element={<Footer />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
