import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Services = ({ courseData }) => {
  const topRef = useRef();

  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className="services" ref={topRef}>
      <Navbar />
      <div className="sub-navbar">
        <h3>Services</h3>
        <h3>
          <NavLink to="/" className="navlink">
            Home
          </NavLink>
          <span> / </span>
          <NavLink to="/services" className="navlink">
            Services
          </NavLink>
        </h3>
      </div>
      <div className="icon-boxes">
        {courseData.map((curr) => {
          return (
            <div class="icon-box">
              <i class={curr.icon}></i>
              <h3>{curr.title}</h3>
              <p>{curr.description}</p>
            </div>
          );
        })}
      </div>
      <div className="why-to-choose-us">
        <h1>WHY TO CHOOSE US</h1>
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

export default Services;
