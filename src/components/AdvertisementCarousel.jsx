import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AdvertisementCarousel = () => {
  const images = [
    "https://marketplace.canva.com/EAFK3pXWGg0/1/0/1600w/canva-Vo5fONg8bZ0.jpg",
    "https://i.pinimg.com/474x/ba/59/11/ba591105e793b9c05f78d502b0dfd330.jpg",
    "https://marketplace.canva.com/EAFK3pXWGg0/1/0/1600w/canva-Vo5fONg8bZ0.jpg",
    "https://i.pinimg.com/736x/ac/66/c9/ac66c9735b557f53a543938b3f17699f.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true,
    pauseOnHover: true,
    dotsClass: "slick-dots slick-thumb",
    customPaging: (i) => (
      <div className="dot-indicator"></div>
    ),
  };

  return (
    <motion.div 
      className="advertisement-container"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide-item">
            <div className="image-wrapper">
              <img
                src={image}
                alt={`Advertisement ${index + 1}`}
                className="carousel-image"
              />
            </div>
          </div>
        ))}
      </Slider>
      

    </motion.div>
  );
};

export default AdvertisementCarousel;