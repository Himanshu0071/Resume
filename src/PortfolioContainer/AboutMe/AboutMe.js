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
                <div className='about-right-top '>A Front-end web developer with good skills in JavaScript, ReactJs, Git and Github, CSS. A graduate of BCA from GD Goenka University . Strongly professional with a willing to be an asset for an organization.</div>
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
                <button className="btn primary-btn">
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
