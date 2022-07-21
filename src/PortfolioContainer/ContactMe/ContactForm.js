import React from "react";
import "./ContactForm.css";
import Bounce from 'react-reveal/Bounce';
export default function ContactForm() {
  return (
    <Bounce left>
    <div className="contact-container">
         <div className='about-text'>
            <h2>Contact Us</h2>
            
        </div>
      <div className="contact-card">
  
        <div className="get-in-touch"> Get in Touch📧
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
        
        
        <div className="contact-details">
        

          <form action="https://formspree.io/f/xvoleqgd" method="POST">
            {" "}
            <label>
              Your email:
              <input type="email" name="email" />
            </label>
            <label>
              Your message:
              <textarea name="message"></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
          </div>
        </div>
       
      </div>
      </Bounce>
  );
}
