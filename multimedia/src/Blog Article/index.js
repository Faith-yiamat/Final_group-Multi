import './index.css';
import React from 'react';
import R1 from '../Images/born a crime.jpg';
import R2 from '../Images/R1.jpg'
import multimedia from '../Images/multimedia.png'


const Blog = () => {

    return(
        <div className='container'>
            <div className='navigation'>
                <img src ={multimedia} alt ="" className="logo"></img>
            <nav>
                <ul>
                <li>Home</li>
                <li>Video</li>
                <li className='write'>Writing</li>
                <li>Podcast</li>
                <li>Resume</li>
                </ul>
            </nav>
           </div>
                <h1 className='header'>Blog Post</h1>
            <div className='blog-content'>
             <img className='blog-image' src={R1} alt=''/>
                <div className='blog-text'>
                    <p>Imagine a childhood where your existence is a crime, <br/>
                        a hilarious and heartbreaking paradox in the segregated South Africa of apartheid. <br/>
                        Trevor Noah, a mixed-race boy, straddles two worlds – <br/>
                        his Xhosa mother's vibrant black township life and his white Swiss father's forbidden one. <br/>
                        "Born a Crime" is his story, a poignant coming-of-age tale filled with humor, resilience, <br/>
                         and a powerful message about finding your place in a world obsessed with dividing lines.</p>
                     <button>READ</button>
                         
               </div>
               </div>
               <div className='containerr'>
               <h1 className='header'>Case Study Review</h1>
            <div className='blog-content'>
                <div className='blog-text'>
                    <p>Imagine a childhood where your existence is a crime, <br/>
                        a hilarious and heartbreaking paradox in the segregated South Africa of apartheid. <br/>
                        Trevor Noah, a mixed-race boy, straddles two worlds – <br/>
                        his Xhosa mother's vibrant black township life and his white Swiss father's forbidden one. <br/>
                        "Born a Crime" is his story, a poignant coming-of-age tale filled with humor, resilience, <br/>
                         and a powerful message about finding your place in a world obsessed with dividing lines.</p>
                         <button> Read</button>
               </div>
               <img className='blog-image' src={R2} alt=''/>
               </div>
        </div>
        <div className='footer'>
                <div className='multi'>
                <img src ={multimedia} alt ="" className="logo"></img>
                    <div className='footertext'>
                   <p>Home</p>
                   <p>Blog</p>
                   <p>Portfolio</p>
                   </div>
                </div>
                <div className='contact'>
                    <h2 className='heading'>Contact</h2>
                    <p>616,Korongo Road</p>
                    <p>+254 789 007 224</p>
                </div>
            </div>
        </div>
        
    )
   
}
export default Blog