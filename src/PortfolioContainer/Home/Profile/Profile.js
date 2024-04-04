import "./Profile.css"
import Typical from 'react-typical'
import React from 'react'
import { Bounce } from "react-reveal"

export default function Profile({nRef}) {
  return (
    <div className="profile-container">
        <div className="profile-parent">
            <div className="profile-detials">
                <div className="colz">
                    <div className="colz-icon">
                    <a href="https://www.linkedin.com/in/himanshu-sharma-10a8871a9/"> 
                        <i class="fa fa-linkedin"/>
                        </a>
                    
                    <a href="https://www.instagram.com/himanshu00.71/"> 
                        <i className="fa fa-instagram"/>
                        </a>
                    <a href="https://github.com/Himanshu0071"> 
                    <i className="fa fa-github"></i>
                        </a>
                    <a href="https://twitter.com/HimanshuSH2001"> 
                        <i className="fa fa-twitter"/>
                        </a>

                    </div>

                    
                </div>
            
            <div className="profile-details-name">
                <span className="primary-text">
                {""}
                Hello,I'M <span className="highlighted-text">Himanshu Sharma</span>
                </span>
            </div>
            <div className="profile-details-role">
                <span className="primary-text">
                   <h1>
                        <Typical
                        loop={Infinity}
                    
                        steps={[
                            "Modern Websites  🔴",
                            1000,
                            "Front End  💻",
                            1000,
                            "Bootstrap 🧑‍💻",
                            1000,
                            "ReactJs 🕸️",
                            1000,
                            "Git & GitHub 🐈‍⬛",
                            1000,

                        ]}/>
                   </h1>
                   <span className="profile-role-tagline" >
                   Creating websites is my passion!
                    </span>
                </span>
            </div>
            <div className="profile-options">
                <button className="btn primary-btn"
                onClick={
                    ()=>{
                      
                    const section = document.querySelector("#contactContainer");
                    section.scrollIntoView({
                        behavior:'smooth',
                        block:'start'
                    })
                    }
                }
                >
                    {""}
                    Hire Me{""}
                </button>
                <a href="/Resume/Resume.pdf" download={'himanshu Resume.pdf'}>
                    <button className="btn highlighted-btn">Get Resume</button>
                </a>
            </div>
            </div>
            <div className="profile-picture">
          <Bounce><div className="profile-picture-background"></div></Bounce>  
            </div>
        </div>
    </div>
  )
}
