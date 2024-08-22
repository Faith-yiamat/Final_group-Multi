import './index.css';
import React, { useState } from "react";
import NavBar from '../NavBar';


function Portfolio () {
    return(
    <div>
        <NavBar/>
        {/* <div className='navigation'>
            <img src='./images/multimedia.png' alt ="logo" className="logo"></img>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Video</li>
                    <li>Writing</li>
                    <li>Podcast</li>
                    <li>Resume</li>
                </ul>
            </nav>
        </div> */}

        <div id='portfolios'>
            <h1>Portfolios</h1>
            <div id='resume'>
                <div id='bio'>
                    <div id='profile'>
                        <div id='photo'>
                            <img src='https://ca.slack-edge.com/T06G0419JUQ-U06GES6UNEM-341184734223-512' alt='Amanda'></img>
                        </div>
                        <div id='name'>
                            <b>Eyvone Oyella</b>
                        </div>
                    </div>
                    <br/>
                    <div id='statement'>
                        <h2>Personal Statement</h2>
                        <p>From a young age, Amanda has always found solace and inspiration in nature, driving her to address urban air pollution and sustainability. 
                            Defined by an unwavering commitment to accountability and meticulous attention to detail, every line of code and system design she creates
                            embodies precision and purpose, ensuring every architectural decision aligns seamlessly with the project’s objectives and end-user needs. 
                            Beyond technological proficiency, she embodies a dedication to fostering collaboration and driving impactful outcomes, shaping solutions 
                            that thrive in today's dynamic technological landscape.  She harnesses her software development skills to devise solutions that combat
                            climate change, fostering a healthier future.
                        </p>
                    </div>
                    <br/>
                    <br/>
                    <h2>Contact</h2>

                    <div id='contact'>
                        <div id='heading'>
                            <ul>
                                <li>Email</li>
                                <li>LinkedIn</li>
                                <li>Phone Number</li>
                            </ul>
                        </div>
                        <div id='details'>
                            <ul>
                                <li>eyvoneoyella@gmail.com</li>
                                <li>https://www.linkedin.com/in/amanda-ireri-a8694a2b3/</li>
                                <li>+254700891229</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id='skills-section'>
                    <div id='skills'>
                        <h2>Skills</h2>
                        <ul>
                            <li>Well-versed in  making HTTP requests</li>
                            <li>Proficient in breaking down complex problems by writing efficient algorithms</li>
                            <li>Competent in writing SQL queries and database management</li>
                            <li>Versed in applying the core principles of OOP to design and implement scalable software designs</li>
                            <li>Conversant with the GitHub workflow</li>
                            <li>Competent in developing responsive web applications using HTML/CSS, Javascript and React.JS</li>
                            <li>Applying Agile Project management methodologies such as Scrum using Jira</li>
                            <li>Well-versed in designing with Figma to create high-fidelity user interface designs and interactive prototypes</li>
                            <li>Knowledgeable in working with Adobe Illustrator and Photoshop to create visually striking and impactful designs</li>
                            <li>Experienced in following a user-centered design process starting from research and ideation, to prototyping and testing</li>
                        </ul>
                    </div>
                    <div id='education'>
                        <h2>Education</h2>
                        <h4>Akirachix - Diploma in Information Technology</h4>
                        <p>February 2024 - Present</p>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>


        <div id='portfolios'>
            <div id='resume'>
                <div id='bio2'>
                    <div id='profile'>
                        <div id='photo'>
                            <img src='https://ca.slack-edge.com/T06G0419JUQ-U06GRD7LMB2-2359d78aa7c1-512' alt='Shalom Keesi'></img>
                        </div>
                        <div id='name2'>
                            <b>Nancy Shimwe</b>
                        </div>
                    </div>
                    <br/>
                    <div id='statement2'>
                        <h2>Personal Statement</h2>
                        <p>Shalom's journey from the culinary world to software development reflects her passion for precision, experimentation, and creating seamless
                            experiences. With a background in cooking, she applies careful planning, rigorous testing, and smooth integration of code, similar to
                            balancing flavors in recipes. Drawing from her culinary skills, Shalom combines creativity with technical expertise to design 
                            user-friendly applications that meet diverse needs. Her attention to detail and innovative approach, developed in both cooking and 
                            software development, come together to deliver exceptional digital experiences, where each line of code is like a carefully chosen 
                            ingredient, playing a crucial role in ensuring user satisfaction.
                        </p>
                    </div>
                    <br/>
                    <br/>
                    <h2>Contact</h2>
                    <div id='contact2'>
                        <div id='heading2'>
                            <ul>
                                <li>Email</li>
                                <li>LinkedIn</li>
                                <li>Phone Number</li>
                            </ul>
                        </div>
                        <div id='details2'>
                            <ul>
                                <li>nacnyshimwe@gmail.com</li>
                                <li>https://www.linkedin.com/in/shalom-keesi-4411522b6/?originalSubdomain=ke</li>
                                <li>+254740331181</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id='skills-section2'>
                    <div id='skills2'>
                        <h2>Skills</h2>
                        <ul>
                            <li>Able to collect, analyze, and interpret large data sets to identify trends, patterns, and insights.</li>
                            <li>Expertise in using Git for version control and collaborative software development.</li>
                            <li>Expertise in both qualitative and quantitative research methods.</li>
                            <li>Strong analytical skills, with the ability to derive actionable insights from complex data.</li>
                            <li>Exceptional problem-solving skills and meticulous attention to detail, with a track record of delivering high-quality products.</li>
                            <li>Excellent communication skills, with the ability to present complex data insights to non-technical stakeholders.</li>
                            <li>Well-rounded in front-end technologies, including HTML, CSS, and JavaScript.</li>
                            <li>Knowledgeable of a range of modern web or mobile frameworks, e.g. React,  Django, and Android.</li>
                            <li>Proficient in designing, implementing, and maintaining database systems, with hands-on experience in PostgreSQL.</li>
                            <li>Experienced in following a user-centered design process starting from research and ideation, to prototyping and testing</li>
                        </ul>
                    </div>
                    <div id='education2'>
                        <h2>Education</h2>
                        <h4>Akirachix - Diploma in Information Technology</h4>
                        <p>February 2024 - Present</p>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        

        <div id='portfolios'>
            <div id='resume'>
                <div id='bio'>
                    <div id='profile'>
                        <div id='photo'>
                        <img src='./Images/Wanja.jpg' alt='Naomi Wanja'></img>
                        </div>
                        <div id='name'>
                            <b>Naomi Wanja</b>
                        </div>
                    </div>
                    <br/>
                    <div id='statement'>
                        <h2>Personal Statement</h2>
                        <p>As a lifelong creative story writer passionate about technology, Wanja is eager to bridge the gap between creativity and innovation.
                            With her previous experience crafting captivating narratives for video games and her newly gained tech skills, Wanja sees opportunities
                            in scripting AI chatbots with a personality demonstrating her ability to translate ideas into engaging digital experiences. She is eager
                            to learn and contribute to a dynamic, collaborative tech environment.
                        </p>
                    </div>
                    <br/>
                    <br/>
                    <h2>Contact</h2>

                    <div id='contact'>
                        <div id='heading'>
                            <ul>
                                <li>Email</li>
                                <li>LinkedIn</li>
                                <li>Phone Number</li>
                            </ul>
                        </div>
                        <div id='details'>
                            <ul>
                                <li>kayagonaomiwanja@gmail.com</li>
                                <li>https://www.linkedin.com/in/naomi-wanja-2a58162b4/</li>
                                <li>+254741816757</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id='skills-section'>
                    <div id='skills'>
                        <h2>Skills</h2>
                        <ul>
                            <li>Understanding of database schema design, normalization, and indexing for efficient data storage and retrieval.</li>
                            <li>Knowledge of Agile development methodologies to efficiently manage the product life cycle</li>
                            <li>Designing, documenting, and consuming APIs to allow other applications  interact with the data and functionalities</li>
                            <li>Familiarity with common data structures e.g., arrays, linked lists, trees, and algorithms e.g., sorting, searching for efficient app development.</li>
                            <li>Ability to conduct user interviews, surveys, and usability testing to understand user needs.</li>
                            <li>A keen understanding of user needs and market trends to craft a compelling product vision that guides development and resonates with target audiences.</li>
                            <li>Good understanding of code versioning tools, i.e. Git.</li>
                            <li>An understanding of JavaScript concepts i.e. closures, prototypes, asynchronous programming, and functional programming for cleaner and more maintainable code.</li>
                            <li>Knowledge of Android UI components and layouts includes views, ViewGroup, and different layout types like LinearLayout, RelativeLayout, and ConstraintLayout.</li>
                            <li>Using Android Studio's debugging tools (breakpoints, logcat) to identify and fix issues.</li>
                        </ul>
                    </div>
                    <div id='education'>
                        <h2>Education</h2>
                        <h4>Akirachix - Diploma in Information Technology</h4>
                        <p>February 2024 - Present</p>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>


        <div id='portfolios'>
            <div id='resume'>
                <div id='bio2'>
                    <div id='profile'>
                        <div id='photo'>
                            <img src='./Images/Yamat.jpg' alt='Shalom Keesi'></img>
                        </div>
                        <div id='name2'>
                            <b>Faith Yiamat</b>
                        </div>
                    </div>
                    <br/>
                    <div id='statement2'>
                        <h2>Personal Statement</h2>
                        <p>From a young age, cows weren't just livestock for her, they were a way of life. Yiamat spent countless hours helping her family manage 
                            the herd, but the traditional methods felt limiting. when she saw how much faster technology could handle tasks She was convinced that 
                            Technology can make cattle keeping more efficient. Yiamat is eager to use her software skills to develop tools that help herders track 
                            their animals, prevent disease, and run their farms smoothly.
                        </p>
                    </div>
                    <br/>
                    <br/>
                    <h2>Contact</h2>
                    <div id='contact2'>
                        <div id='heading2'>
                            <ul>
                                <li>Email</li>
                                <li>LinkedIn</li>
                                <li>Phone Number</li>
                            </ul>
                        </div>
                        <div id='details2'>
                            <ul>
                                <li> oloserianyiamat@gmail.com</li>
                                <li>https://www.linkedin.com/in/oloserian-yiamat-3610362b4/</li>
                                <li>+254745999139</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id='skills-section2'>
                    <div id='skills2'>
                        <h2>Skills</h2>
                        <ul>
                            <li>Ability to create designs across various devices and screen sizes using HTML and CSS</li>
                            <li>Knowledge of version control systems like git for managing code changes, collaboration, and maintaining codebase history.</li>
                            <li>Knowledge in conducting research and usability testing.</li>
                            <li>Knowledge of design tools like Adobe Illustrator, Photoshop, Figma, and Figjam.</li>
                            <li>Deep understanding of product lifecycle management and user-centered design</li>
                            <li>Knowledge of prioritization in the product management field.</li>
                            <li>Proficiency in using Object Oriented Programming.</li>
                            <li>Knowledge in manipulating database data using SQL.</li>
                            <li>Knowledge of hosting projects using hosting platforms like Versel and Netlify.</li>
                            <li>Ability to use Postman to test APIs. </li>
                            <li>Knowledge of how to use Django to connect with the server. </li>
                        </ul>
                    </div>
                    <div id='education2'>
                        <h2>Education</h2>
                        <h4>Akirachix - Diploma in Information Technology</h4>
                        <p>February 2024 - Present</p>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <br/>


        <div id='portfolios'>
            <div id='resume'>
                <div id='bio'>
                    <div id='profile'>
                        <div id='photo'>
                        <img src='./Images/Laura.jpg' alt='Naomi Wanja'></img>
                        </div>
                        <div id='name'>
                            <b>Laura Nyaaga</b>
                        </div>
                    </div>
                    <br/>
                    <div id='statement'>
                        <h2>Personal Statement</h2>
                        <p>From a young age, Laura has been captivated by the transformative power of education and its limitless opportunities. Her strong commitment
                         to leveraging technology to enhance educational experiences has led her to develop an application that engagingly integrates interactive 
                         learning and provides real-time feedback for teachers who work with underprivileged students. By creating such innovative solutions, Laura 
                         aims to significantly improve educational outcomes and bridge the gap between traditional teaching methods and modern technology. She looks
                          forward to being part of a team where technology revolutionizes education and significantly impacts students’ lives
                        </p>
                    </div>
                    <br/>
                    <br/>
                    <h2>Contact</h2>

                    <div id='contact'>
                        <div id='heading'>
                            <ul>
                                <li>Email</li>
                                <li>LinkedIn</li>
                                <li>Phone Number</li>
                            </ul>
                        </div>
                        <div id='details'>
                            <ul>
                                <li>nyaagaaluoch@gmail.com</li>
                                <li>https://www.linkedin.com/in/laura-nyaaga-434b8b307</li>
                                <li>+254796063321</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id='skills-section'>
                    <div id='skills'>
                        <h2>Skills</h2>
                        <ul>
                            <li>Skilled in SQL and Python programming language which enables me to perform complex data queries and develop robust applications.</li>
                            <li>Expertise in mobile development using the Kotlin programming language that allows me to create responsive Android applications</li>
                            <li>Ability to develop React apps for external users, enhancing my ability to build interactive and dynamic web applications.</li>
                            <li>Knowledgeable in REST API development, capable of designing and implementing efficient and scalable web services.</li>
                            <li>Expertise in  HTML, CSS, and JavaScript which allows the creation of well-structured and visually appealing web pages.</li>
                            <li>A solid foundation of relational databases including MySQL which enables the ability to manage and optimize database operation.</li>
                            <li>Excellent communication and enjoys working with others which facilitates effective teamwork and problem-solving skills.</li>
                            <li>Familiar with product management tools such as Jira for writing user stories which promotes teamwork and manages sprints.</li>
                        </ul>
                    </div>
                    <div id='education'>
                        <h2>Education</h2>
                        <h4>Akirachix - Diploma in Information Technology</h4>
                        <p>February 2024 - Present</p>
                    </div>
                </div>
            </div>


            <div className='footer'>
                <div className='multi'>
                    <img src='/Imagefol/Logo.png' alt=''/>
                    <div className='footertext'>
                   <p>Home</p>
                   <p>Blog</p>
                   <p>portfolio</p>
                   </div>
                </div>

                <div className='contact'>
                    <h2 className='heading'>Contact</h2>
                    <p>616,Korongo Road</p>
                    <p>+254 789 007 224</p>
                </div>

                
            </div>
        </div>
    </div>
        
    )
}



export default Portfolio ;