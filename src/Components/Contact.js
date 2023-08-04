import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import contactBG from "../Images/contactbg.jpg";
import contactBG1 from "../Images/contactbg1.jpg";

const Contact = () => {
  const topRef = useRef();

  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className="contact" ref={topRef}>
      <Navbar />
      <div className="sub-navbar">
        <h3>Services</h3>
        <h3>
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
          <span>/</span>
          <NavLink to="/contact" className="navlink">
            Contact
          </NavLink>
        </h3>
      </div>
      <div className="contact-details">
        <img src={contactBG} alt="" className="bg" />
        <div className="details">
          <div>
            <i className="fas fa-map-marker-alt"></i>
            <h3>A-43, Sector 63 Noida UP - 201301</h3>
          </div>
          <div>
            <i className="far fa-envelope"></i>
            <h3>bhoomitechzoneservices@gmail.com</h3>
          </div>
          <div>
            <i className="fas fa-mobile-alt"></i>
            <h3>+91 9988776655</h3>
          </div>
        </div>
      </div>
      <div className="contact-form-outer">
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
        <img src={contactBG1} alt="" className="bg" />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
