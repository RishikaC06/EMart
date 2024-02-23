import React, { useState, useEffect } from 'react';

const images = [
  `${process.env.PUBLIC_URL}/shoeshp.png`,
  `${process.env.PUBLIC_URL}/clotheshp2.png`,
  `${process.env.PUBLIC_URL}/watchhp.png`,
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="d-none d-md-block mb-20"> {/* Hide on mobile */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`} style={{ backgroundColor: index === 0 ? '#f4eafb' : index === 1 ? '#EBE8FC' : '#fbf0f4' }}>
              <div className="card" style={{ backgroundColor: 'transparent', color: 'black', border: 'none' }}>
                <div className="row g-0">
                  <div className="col-md-6">
                    <img src={image} className="card-img" alt={`Slide ${index + 1}`} style={{ width: '100%', height: '550px' }} />
                  </div>
                  <div className="col-md-6 flex items-center">
                    <div className="card-body d-flex flex-column justify-content-center align-items-start" style={{ marginRight: index === 0 ? '20%' : '0' }}>
                      <h5 className="card-title display-3 fw-bolder mb-0">Seasonal Arrivals</h5>
                      <p className="card-text lead fs-2">Enjoy our trending designs on watches, clothes, accessories, and much more.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <i className="fa fa-chevron-circle-left" aria-hidden="true" style={{ fontSize: '4rem', opacity: 0.8, color: '#b4b4b6' }}></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <i className="fa fa-chevron-circle-right" aria-hidden="true" style={{ fontSize: '4rem', opacity: 0.8, color: '#b4b4b6' }}></i>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
