import './index.css';
import NavBar from '../NavBar';


function Footer() {
  return (

    
    <div>
      <NavBar/>

      <div id="main">
        <img src="/Imagefol/DeWatermark.png" alt="" className="mainImage" />
        <h3 className="pod">New PodCast</h3>
        <div className="podcast-container">
      <div className="podtext">
      
        <audio controls>
          <source src="/Images/podcast.m4a"type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
        
      
       
        
    
      </div>
{/* 
      <div className="footer">
        <div className="multi">
          <h2 className="multimedia">Multimedia</h2>
          <div className="footertext">
            <p>Home</p>
            <p>Blog</p>
            <p>portfolio</p>
          </div>
        </div>

        <div className="contact">
          <h2 className="heading">Contact</h2>
          <p>616,Korongo Road</p>
          <p>+254 789 007 224</p>
        </div>
      </div> */}

    </div>
  );
}

export default Footer;