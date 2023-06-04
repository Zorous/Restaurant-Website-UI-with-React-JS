import React from "react";

function Footer() {
  return (
    <div>
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              Plus d'informations
              </h4>
              <a className="btn btn-link" href="">
                About Us
              </a>
              <a className="btn btn-link" href="">
                Contact Us
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Contact
              </h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>
                <span className="logo-style">Maison Orientale</span>

              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>04 69 70 77 35
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>contact-@maison-orientale.fr
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              Horaire d'ouverture
              </h4>
              <p><span className="text-primary">7j/7</span> | 11h00AM - 23h00</p>
              <p><span className="text-primary">Vendredi & Samedi</span> | jusqu'a minuit</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a className="border-bottom" href="#">
                  Maison Orientale
                </a>
                , All Right Reserved. Made By{" "}
                <a className="border-bottom" href="https://github.com/Zorous">
                  Oussama Belhadi
                </a>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="">Home</a>
                  <a href="">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}

export default Footer;
