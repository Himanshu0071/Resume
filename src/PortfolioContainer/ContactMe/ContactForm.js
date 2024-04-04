import React from "react";
import "./ContactForm.css";
import { Zoom } from "react-reveal";
// import Bounce from "react-reveal/Bounce";
// import Zoom from 'react-reveal/Zoom';
export default function ContactForm({ sRef }) {
  return (
    <Zoom>
      <div className="contact-container" id="contactContainer">
        <div className="about-text">
          <h2>Contact Us</h2>
        </div>
        <div className="contact-card">
          <div className="get-in-touch">
            {" "}
            Get in Touch📧
            <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/himanshu-sharma-10a8871a9">
                <i className="fa fa-linkedin" />
              </a>
              <a href="https://www.instagram.com/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://github.com/Himanshu0071"> 
                    <i className="fa fa-github"></i>
                        </a>
                    <a href="https://twitter.com/HimanshuSH2001"> 
                        <i className="fa fa-twitter"/>
              </a>
            </div>
            </div>
          </div>

          <div className="contact-details">
            <form action="https://formspree.io/f/xvoleqgd" method="POST">
              {" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label>Your email: </label>

                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  style={{
                    width: "100%",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label>Your message:</label>

                <textarea
                  className="input"
                  name="message"
                  placeholder="Your message"
                  style={{
                    width: "100%",
                  }}
                ></textarea>
              </div>
              {/* <button className="button" type="submit">
                Send
              </button> */}
              <button className="button-send">
  <div className="svg-wrapper-1">
    <div className="svg-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
      </svg>
    </div>
  </div>
  <span>Send</span>
</button>
            </form>
          </div>
        </div>
      </div>
      </Zoom>
  );
}
