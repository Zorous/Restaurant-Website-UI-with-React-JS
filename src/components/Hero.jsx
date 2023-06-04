import React from "react";

function Hero({title, about, image}) {
  return (
    <div className="container-xxl py-5 bg-dark hero-header mb-5">
      <div className="container my-5 py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-3 text-white animated slideInLeft">
            {title}
            </h1>
            <p className="text-white animated slideInLeft mb-4 pb-2">
            {about}
            </p>
            <a
              href="#menu"
              className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
            >
              Voir notre Menu
            </a>
          </div>
          <div className="col-lg-6 text-center text-lg-end overflow-hidden">
            <img className="img-fluid" src={image} alt="plate" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
