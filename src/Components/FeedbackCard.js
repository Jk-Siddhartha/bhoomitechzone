import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = ({ testimonialData }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const Rating = ({ rating }) => {
    // Generate an array of length 'rating' filled with 'faStar' icons
    const stars = Array.from({ length: rating }, (_, index) => (
      <FontAwesomeIcon key={index} icon={faStar} />
    ));

    return <div>{stars}</div>;
  };

  return (
    <div className="testimonial">
      <Slider {...settings}>
        {testimonialData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt="" />
            <h3>{testimonial.name}</h3>
            <p className="rating">{<Rating rating={testimonial.rating} />}</p>
            <div style={{ marginTop: "2%" }}>
              <i class="fas fa-quote-left"></i>
              <p>{testimonial.feedback}</p>
              <i class="fas fa-quote-right"></i>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
