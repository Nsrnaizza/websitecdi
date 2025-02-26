import React from 'react';
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const TestimoniComponent = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="testimoni-section text-center py-5">
      <h2 className="mb-3" style={{ color: "#330369" }}>Testimoni</h2>
      <p className="text-muted mb-5">Apa yang mereka katakan tentang kami?</p>
      <div className="container">
        <Slider {...sliderSettings}>
          <div className="testimoni-item">
            <div className="video-wrapper shadow-sm rounded">
              <iframe src="https://www.youtube.com/embed/9or8bE9KxPc" title="Video Testimoni 1" allowFullScreen></iframe>
            </div>
          </div>
          <div className="testimoni-item">
            <div className="video-wrapper shadow-sm rounded">
              <iframe src="https://www.youtube.com/embed/9or8bE9KxPc" title="Video Testimoni 2" allowFullScreen></iframe>
            </div>
          </div>
          <div className="testimoni-item">
            <div className="video-wrapper shadow-sm rounded">
              <iframe src="https://www.youtube.com/embed/9or8bE9KxPc" title="Video Testimoni 3" allowFullScreen></iframe>
            </div>
          </div>
          <div className="testimoni-item">
            <div className="video-wrapper shadow-sm rounded">
              <iframe src="https://www.youtube.com/embed/9or8bE9KxPc" title="Video Testimoni 4" allowFullScreen></iframe>
            </div>
          </div>
          <div className="testimoni-item">
            <div className="video-wrapper shadow-sm rounded">
              <iframe src="https://www.youtube.com/embed/9or8bE9KxPc" title="Video Testimoni 5" allowFullScreen></iframe>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default TestimoniComponent;
