import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const About = ({ courseData }) => {
  const topRef = useRef();

  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="about" ref={topRef}>
      <Navbar />
      <div className="sub-navbar">
        <h3>Services</h3>
        <h3>
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
          <span> / </span>
          <NavLink to="/about" className="navlink">
            About
          </NavLink>
        </h3>
      </div>
      <div className="who-we-are">
        <h1>WHO WE ARE</h1>
        <div className="who-we-are-text">
          <div>
            <h2>WE ARE BHOOMI TECHZONE</h2>
            <p>
              At Bhoomi Techzone, we offer top-notch tech services and
              unparalleled industry expertise to our customers. Our dedicated
              support system ensures their success in overcoming key business
              challenges with real-world application solutions. Choose Bhoomi
              Techzone for a faster path to success.
            </p>
          </div>
          <div>
            <h3>Empowering Progress through Innovation and Expertise</h3>
            <p>
              Our company is built on the principles of leadership, integrity,
              and accountability. With our high-caliber engineers and
              finely-tuned software development processes, we provide reliable
              and efficient delivery. We take pride in our ability to imagine,
              engineer, modernize, and manage solutions that drive growth,
              improve efficiency, and reduce costs. Embrace innovation and
              experience the transformation your organization deserves.
            </p>
            <ul>
              <li>
                <h4>
                  <span>&#62;</span> Innovation & Creativity
                </h4>
              </li>
              <li>
                <h4>
                  <span>&#62;</span> Continuous Learning
                </h4>
              </li>
              <li>
                <h4>
                  <span>&#62;</span> Precision & Quality
                </h4>
              </li>
              <li>
                <h4>
                  <span>&#62;</span> Collaboration & Teamwork
                </h4>
              </li>
              <li>
                <h4>
                  <span>&#62;</span> Ethical Conduct
                </h4>
              </li>
              <li>
                <h4>
                  <span>&#62;</span> Customer-Centric Approach
                </h4>
              </li>
              <li>
                <h4>
                  <span>&#62;</span> Efficiency & Timeliness
                </h4>
              </li>
              <li>
                <h4>
                  <span>&#62;</span> Adaptability
                </h4>
              </li>
              <li>
                <h4>
                  <span>&#62;</span> Passion for Technology
                </h4>
              </li>
              <li>
                <h4>
                  <span>&#62;</span> Problem Solvers
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="why-to-choose-us">
        <h1>WHAT WE PROVIDE</h1>
        <div className="why-to-choose-us-cards">
          {courseData.slice(0, 12).map((curr) => {
            return (
              <div className="why-to-choose-us-card">
                <i class={curr.icon}></i>
                <h3>{curr.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
