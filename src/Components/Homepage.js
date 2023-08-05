import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image1 from "../Images/image1.jpg";
import Image2 from "../Images/image2.jpg";
import Image3 from "../Images/image3.jpg";
import Goku from "../Images/goku.jpg";
import FeedbackCarousel from "./FeedbackCard";
import Footer from "./Footer";

const Homepage = ({ courseData }) => {
  const topRef = useRef();

  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const testimonialData = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5.0,
      feedback:
        "I am extremely impressed with the service provided by this company. The team was responsive, professional, and delivered a top-notch product. I highly recommend their services!",
      image: Goku, // Replace with the actual image path for the first testimonial
    },
    {
      id: 2,
      name: "Michael Smith",
      rating: 4.8,
      feedback:
        "Working with this team has been a fantastic experience. They exceeded my expectations and delivered an outstanding website that perfectly matches my vision.",
      image: Goku, // Replace with the actual image path for the second testimonial
    },
    {
      id: 3,
      name: "Emily Lee",
      rating: 4.7,
      feedback:
        "I couldn't be happier with the results. Their attention to detail and creative approach made a significant difference in the success of my project. I will definitely work with them again.",
      image: Goku, // Replace with the actual image path for the third testimonial
    },
    {
      id: 4,
      name: "David Rodriguez",
      rating: 4.9,
      feedback:
        "I highly recommend this team for their expertise and professionalism. They were able to deliver exactly what I wanted and provided excellent support throughout the development process.",
      image: Goku, // Replace with the actual image path for the fourth testimonial
    },
    {
      id: 5,
      name: "Jessica Chen",
      rating: 4.6,
      feedback:
        "The team's dedication and creativity were exceptional. They took the time to understand my requirements and delivered a website that exceeded my expectations. I am thrilled with the final product!",
      image: Goku, // Replace with the actual image path for the fifth testimonial
    },
  ];

  return (
    <div className="main-div" ref={topRef}>
      <Navbar />
      <div className="homepage-intro">
        <Carousel
          showArrows={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          transitionTime={500}
        >
          <div className="carousel-slide">
            <img src={Image1} alt="1" />
            <div className="overlay">
              <h2>Welcome to Bhoomi Techzone Services</h2>
              <p>
                At Bhoomi Techzone, we offer top-notch tech services and
                unparalleled industry expertise to our customers. Our dedicated
                support system ensures their success in overcoming key business
                challenges with real-world application solutions. Choose Bhoomi
                Techzone for a faster path to success.
              </p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={Image2} alt="2" />
            <div className="overlay">
              <h2>
                Bhoomi Techzone Services: Your Gateway to Exceptional Tech
                Services and Industry Expertise.
              </h2>
              <p>
                At Bhoomi Techzone Services, we pride ourselves on delivering
                the best-in-class tech services and unwavering customer support
                to help you excel in your industry. With our industry-leading
                expertise, we assist our customers in overcoming key business
                challenges and realizing their goals through real-world
                application solutions. Join us on the path to accelerated
                success.
              </p>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={Image3} alt="3" />
            <div className="overlay">
              <h2>
                Bhoomi Techzone Services: Delivering Top-notch Tech Services and
                Expert Support
              </h2>
              <p>
                At Bhoomi Techzone Services, we pride ourselves on offering
                industry-leading tech services and unparalleled expertise. Our
                dedicated support system ensures seamless solutions for our
                valued customers, helping them overcome key business challenges
                and achieve their goals. With real-world application solutions,
                we pave the way to faster success for all our clients.
              </p>
            </div>
          </div>
        </Carousel>
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
      <div className="our-services">
        <h1>OUR SERVICES</h1>
        <div className="icon-boxes">
          {courseData.slice(0, 6).map((curr) => {
            return (
              <div class="icon-box">
                <i class={curr.icon}></i>
                <h3>{curr.title}</h3>
                <p>{curr.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="top-feedbacks">
        <h1>TOP FEEDBACKS</h1>
        <div className="top-feedbacks-slider">
          <div className="top-feedbacks-slider-text">
            <h2>Happy Users' Feedback</h2>
            <p>
              Read the inspiring stories and glowing testimonials from our
              valued users who have embarked on a remarkable journey with our
              platform. Delve into the heartfelt experiences and candid insights
              they've shared, shedding light on the exceptional services,
              support, and products they've encountered. We take pride in our
              commitment to ensuring a seamless and delightful experience for
              every user, and these testimonials reflect the success of our
              mission. Join us as we showcase the joy and satisfaction our users
              have found in partnering with our platform.
            </p>
          </div>
          <FeedbackCarousel testimonialData={testimonialData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
