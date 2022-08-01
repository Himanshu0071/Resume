import React from "react";
import "./ContactForm.css";
import Bounce from "react-reveal/Bounce";
export default function ContactForm({ sRef }) {
  return (
    <Bounce left>
      <div className="contact-container" id="contactContainer">
        <div className="about-text">
          <h2>Contact Us</h2>
        </div>
        <div className="contact-card">
          <div className="get-in-touch">
            {" "}
            Get in Touch📧
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100084055715939">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://www.instagram.com/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://github.com/Himanshu0071"> 
                    <i className="fa fa-github"></i>
                        </a>
                    <a href="https://twitter.com/Himanshu0071ss"> 
                        <i className="fa fa-twitter"/>
              </a>
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
                  className="email"
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
                  className="email"
                  name="message"
                  placeholder="Your message"
                  style={{
                    width: "100%",
                  }}
                ></textarea>
              </div>
              <button className="button" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </Bounce>
  );
}
