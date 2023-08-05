import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import officeImg from "../Images/office.jpg";

const Career = () => {
  const topRef = useRef();

  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className="career" ref={topRef}>
      <Navbar />
      <div className="sub-navbar">
        <h3>Careers</h3>
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
      <div className="join-team">
        <h2>JOIN OUR TEAM</h2>
        <div className="join-team-text">
          <div>
            <h3>Be a part of our dynamic team.</h3>
            <p>
              Be a part of our dynamic team at Bhoomi Techzone Services, an
              innovative IT company paving the way for cutting-edge solutions
              and technological advancements. We are on a mission to
              revolutionize the digital landscape, and we believe that the key
              to our success lies in the passion, skills, and dedication of our
              team members. Join us in this exhilarating journey of creativity,
              collaboration, and growth, where you will have the opportunity to
              work with the latest technologies, tackle complex challenges, and
              make a significant impact in the world of IT. At Bhoomi Techzone
              Services, we foster a culture of continuous learning, providing
              ample resources and training to nurture your talents and boost
              your career to new heights. Together, let's shape the future of
              technology and create a lasting impact on businesses and
              individuals worldwide. Come, explore your potential, and be a part
              of the force that's shaping the future of IT.
            </p>
          </div>
          <img src={officeImg} alt="" />
        </div>
      </div>
      <div className="current-openings">
        <h2>Current Openings</h2>
        <div className="openings">No openings</div>
      </div>
      <Footer />
    </div>
  );
};

export default Career;
