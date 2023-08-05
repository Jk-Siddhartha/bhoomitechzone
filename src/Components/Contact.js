import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import contactBG from "../Images/contactbg.jpg";
import contactBG1 from "../Images/contactbg1.jpg";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const topRef = useRef();

  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const sendMessage = async () => {
    try {
      const res = await window.Email.send({
        Host: "smtp.elasticemail.com",
        Username: "sidvir123@gmail.com",
        Password: "A5D64349E08A8308BB5B5F557FF56D9133C7",
        To: "sidvir123@gmail.com",
        From: "sidvir123@gmail.com",
        Subject: userData.subject,
        Body: `${userData.name} <br/><br/> ${userData.message} <br/><br/> Email : ${userData.email}`,
      });

      if (res) {
        alert("Message Sent Successfully...");
        setUserData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send email.");
    }
  };

  return (
    <div className="contact" ref={topRef}>
      <Navbar />
      <div className="sub-navbar">
        <h3>Services</h3>
        <h3>
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
          <span> / </span>
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
            <h3>+91 8130787194, +91 9650017061</h3>
          </div>
        </div>
      </div>
      <div className="contact-form-outer">
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userData.name}
                onChange={(e) => handleInput(e)}
                required
              />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={(e) => handleInput(e)}
                required
              />
            </div>
            <div className="form-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={userData.subject}
                onChange={(e) => handleInput(e)}
                required
              />
            </div>
            <div className="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={userData.message}
                onChange={(e) => handleInput(e)}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <button onClick={sendMessage}>Send Message</button>
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
