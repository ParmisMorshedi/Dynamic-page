import React, { useState, useEffect } from 'react';
import resumeData from './data.json'; 

export default function Resume() {
  const [data, setData] = useState(null);



  useEffect(() => {
    setData(resumeData); 
 }, []);






  if (!data) {
    return null;
  }
    return(
        <div className='resume'>
               
                <section id="des" >
                    <div className="vertical-line" />
                    <div className="container">
                        <div className="circle-1"></div>  
                        <div className="text-1">
                        
                            <h2>Experience</h2>
                            {data.experience.map((exp, index) => (
                            <div key={index}>
                                <p className="sub">{exp.position}</p>
                                <span>{exp.dates}</span>
                                <p className="paragraph">{exp.description}</p>
                            </div>
                            ))}
                        </div>

                        <div className="circle-2"></div>
                        <div className="text-2">
                            <h2>Education</h2>
                            {data.education.map((edu, index) => (
                            <div key={index}>
                                <p className="sub">{edu.degree}</p>
                                <span>{edu.dates}</span>
                                <p className="paragraph">{edu.description}</p>
                            </div>
                            ))}
                        </div>

                        <div className="circle-3"></div>                        
                        <div className="text-3">
                            <h2>Languages</h2>
                            <ul>
                                {data.languages.map((language, index) => (
                                <li key={index}>
                                    <p className="sub">{language.language}</p>
                                    <p>{language.proficiency}</p>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
                <section id="graph" >

                <h1>My Knowledge Level in Software</h1>
                <div className="text_oerlay">
                    <ul>
                    <li>
                        <span className="subject1">
                        {" "}
                        DATABASE
                        <div className="div1" style={{ backgroundColor: "#0bf350" }}>
                            <span className="percentage">70%</span>
                        </div>
                        </span>
                    </li>
                    <li>
                        <span className="subject2">
                        .NET
                        <div className="div2" style={{ backgroundColor: "#0bf350" }}>
                            <span className="percentage">75%</span>
                        </div>
                        </span>
                    </li>
                    <li>
                        <span className="subject3">
                        PHOTOSHOP
                        <div className="div3" style={{ backgroundColor: "#0bf350" }} >
                            <span className="percentage">50%</span>
                        </div>
                        </span>
                    </li>
                    <li>
                        <span className="subject4">
                        JAVASCRIPT
                        <div className="div4" style={{ backgroundColor: "#0bf350" }}>
                            <span className="percentage">20%</span>
                        </div>
                        </span>
                    </li>
                    <li>
                        <span className="subject5">
                        HTML &amp; CSS
                        <div className="div5" style={{ backgroundColor: "#0bf350" }}>
                            <span className="percentage">55%</span>
                        </div>
                        </span>
                    </li>
                    </ul>
                </div>
                </section>                          
        </div>
   );
}
           
        