import React from 'react'

function AboutUs() {
  return (
    <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6">
          <div class="row g-3">
            <div class="col-6 text-start">
              <img
                class="img-fluid rounded w-100 wow zoomIn"
                data-wow-delay="0.1s"
                src="img/about-1.jpg"
              />
            </div>
            <div class="col-6 text-start">
              <img
                class="img-fluid rounded w-75 wow zoomIn"
                data-wow-delay="0.3s"
                src="img/about-2.jpg"
                style={{ marginTop: "25%" }}
              />
            </div>
            <div class="col-6 text-end">
              <img
                class="img-fluid rounded w-75 wow zoomIn"
                data-wow-delay="0.5s"
                src="img/about-3.jpg"
              />
            </div>
            <div class="col-6 text-end">
              <img
                class="img-fluid rounded w-100 wow zoomIn"
                data-wow-delay="0.7s"
                src="img/about-4.jpg"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <h5 class="section-title ff-secondary text-start text-primary fw-normal">
            About Us
          </h5>
          <h1 class="mb-4">
            Welcome to <i class="fa fa-utensils text-primary me-2"></i>
            Maison Orientale
          </h1>
          <p class="mb-4">
            Implantée depuis 2007 aux alentours de la place Charpennes, La
            Maison Orientale est un restaurant qui propose un large choix de
            menus.
            <br />
            Il saura satisfaire les adeptes de salade, assiette, kebab,
            tacos, burger, pâte et pizza grâce à sa carte complète et
            variée! Notre restaurant met l'accent sur la qualité de ses
            produits et l'hygiène de son point de vente.
            <br />
            <br />
            Nos cuisiniers portent une attention toute particulière à
            l’élaboration des plats qui vous sont proposés. Notre personnel
            est courtois, souriant et s’investit dans le but de vous servir
            au mieux. Nous accueillons notre clientèle dans un contexte
            convivial, décoré de tableaux orientaux, accompagné d’une
            musique agréable vous transportant dans un univers oriental.
            Nous espérons vous recevoir très bientôt chez La Maison
            Orientale.
          </p>
          <div class="row g-4 mb-4">
            <div class="col-sm-6">
              <div class="d-flex align-items-center border-start border-5 border-primary px-3">
                <h1
                  class="flex-shrink-0 display-5 text-primary mb-0"
                  data-toggle="counter-up"
                >
                  15
                </h1>
                <div class="ps-4">
                  <p class="mb-0">Years of</p>
                  <h6 class="text-uppercase mb-0">Experience</h6>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="d-flex align-items-center border-start border-5 border-primary px-3">
                <h1
                  class="flex-shrink-0 display-5 text-primary mb-0"
                  data-toggle="counter-up"
                >
                  50
                </h1>
                <div class="ps-4">
                  <p class="mb-0">Popular</p>
                  <h6 class="text-uppercase mb-0">Master Chefs</h6>
                </div>
              </div>
            </div>
          </div>
          <a class="btn btn-primary py-3 px-5 mt-2" href="">
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutUs
