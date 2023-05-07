import React from "react";

function Footer() {
  return (
    <div>
      <div
        class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-lg-4 col-md-6">
              <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Company
              </h4>
              <a class="btn btn-link" href="">
                About Us
              </a>
              <a class="btn btn-link" href="">
                Contact Us
              </a>
              <a class="btn btn-link" href="">
                Reservation
              </a>
              <a class="btn btn-link" href="">
                Privacy Policy
              </a>
              <a class="btn btn-link" href="">
                Terms & Condition
              </a>
            </div>
            <div class="col-lg-4 col-md-6">
              <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Contact
              </h4>
              <p class="mb-2">
                <i class="fa fa-map-marker-alt me-3"></i>
                <span class="logo-style">Maison Orientale</span>

              </p>
              <p class="mb-2">
                <i class="fa fa-phone-alt me-3"></i>04 69 70 77 35
              </p>
              <p class="mb-2">
                <i class="fa fa-envelope me-3"></i>contact-@maison-orientale.fr
              </p>
              <div class="d-flex pt-2">
                <a class="btn btn-outline-light btn-social" href="">
                  <i class="fab fa-twitter"></i>
                </a>
                <a class="btn btn-outline-light btn-social" href="">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="btn btn-outline-light btn-social" href="">
                  <i class="fab fa-youtube"></i>
                </a>
                <a class="btn btn-outline-light btn-social" href="">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <h4 class="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Opening
              </h4>
              <h5 class="text-light fw-normal">Monday - Saturday</h5>
              <p>09AM - 09PM</p>
              <h5 class="text-light fw-normal">Sunday</h5>
              <p>10AM - 08PM</p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            <div class="row">
              <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a class="border-bottom" href="#">
                  Maison Orientale
                </a>
                , All Right Reserved. Made By{" "}
                <a class="border-bottom" href="https://htmlcodex.com">
                  Oussama Belhadi
                </a>
              </div>
              <div class="col-md-6 text-center text-md-end">
                <div class="footer-menu">
                  <a href="">Home</a>
                  <a href="">Cookies</a>
                  <a href="">Help</a>
                  <a href="">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i class="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}

export default Footer;
