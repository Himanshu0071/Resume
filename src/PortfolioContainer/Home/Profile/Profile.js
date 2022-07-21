import "./Profile.css"
import Typical from 'react-typical'
import React from 'react'


export default function Profile({nRef}) {
  return (
    <div className="profile-container">
        <div className="profile-parent">
            <div className="profile-detials">
                <div className="colz">
                    <div className="colz-icon">
                    <a href="https://www.facebook.com"> 
                        <i className="fa fa-facebook-square"/>
                        </a>
                    <a href="https://www.google.co.in/"> 
                        <i className="fa fa-google-plus-square"/>
                        </a>
                    <a href="https://www.instagram.com/"> 
                        <i className="fa fa-instagram"/>
                        </a>
                    <a href="https://www.youtube.com/"> 
                        <i className="fa fa-youtube-square"/>
                        </a>
                    <a href="https://twitter.com/login"> 
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
                   <span className="profile-role-tagline">
                    Knack of building applications with front and back end operations.
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
                <a href="Resume.pdf" download={'himanshu Resume.pdf'}>
                    <button className="btn highlighted-btn">Get Resume</button>
                </a>
            </div>
            </div>
            <div className="profile-picture">
            <div className="profile-picture-background"></div>
            </div>
        </div>
    </div>
  )
}
