import React from 'react'
import './AboutMe.css'
import Zoom from 'react-reveal/Zoom';


export default function AboutMe() {
  return (
    <div className='about-container'>
        <div className='about-text'>
            <h2>About Me</h2>
            <p>Why choose Me?</p>
        </div>
        <Zoom>
        <div className='about-card'>
            <div className='about-left'>
               
            </div>
            <div className='about-right'>
                <div className='about-right-top '>My technical proficiency extends to utilizing state management libraries, integrating RESTful APIs, and employing best practices in code optimization and maintenance. I am well-versed in debugging and problem-solving, ensuring smooth functionality throughout the development lifecycle. Additionally, I stay abreast of industry trends and emerging technologies to continually enhance my skill set.
                Over the past year, I have honed my skills in React.js through various projects, enabling me to develop dynamic and responsive user interfaces. My experience includes collaborating with cross-functional teams to design and implement web applications that meet both functional and aesthetic requirements. I have successfully delivered high-quality code on time and have a keen eye for identifying and resolving potential issues.
                </div>
                <div className='about-right-middle'>
                    <div className='heading'>Skills:</div>
                    <div className='do1'>HTML</div>
                    <div className='do1'>CSS</div>
                    <div className='do1'>ReactJS</div>
                    <div className='do1'>Redux for State Mnanagement</div>
                    <div className='do1'>Building REST API</div>
                    <div className='do1'>Git and Github</div>
                </div>
                <div className='about-right-bottom'>
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
            </div>
        </div>
        </Zoom>

    </div>
  )
}
