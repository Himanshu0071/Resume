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
                <div className='about-right-top '>Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.</div>
                <div className='about-right-middle'>
                    <div className='heading'>Here are a Few Highlights:</div>
                    <div className='do1'>Full Stack web and mobile development</div>
                    <div className='do1'>Interactive Front End as per the design</div>
                    <div className='do1'>React and React Native</div>
                    <div className='do1'>Redux for State Mnanagement</div>
                    <div className='do1'>Building REST API</div>
                    <div className='do1'>Managing database</div>
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
