
import React from 'react';
import Footer from './Footer';
import LandingPage from './LandingPage';
import Navbar from './NavBar';
import Video from './Video';
import {BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import Portfolio from './Portfolios';



import BlogPost from './Multimedia';
import Blog from './Blog Article';
import Trevor from './Born a Crime';


function App() {
  return (
     
    <div>
   <Router>

     <Routes>
      <Route exact path= "/" element= {
        <>
           <LandingPage/>
            </>

      }
      />
      <Route path= "/Video" element= {<Video/>}/>
      <Route path = "/Home" element ={ <LandingPage/> } />
      <Route path = "/READ" element = {<Trevor/>}/>
      <Route path = "/Writing" element = { <Blog/>}/>
      <Route path = "portfolio" element= { <Portfolio/> }/>
      <Route path="/Back" element= {<LandingPage/>}/>
      <Route path = "/portfolios" element= { <Portfolio/> }/>
      <Route path='/View Blog'  element= { <Blog/>}/>
      <Route path='/Read'  element= { <BlogPost/>}/>
      <Route path="/podcast" element = { <Footer/> }/>

      








 
      </Routes>
      </Router> 

     </div>
      
 
    
  );
}

export default App;
