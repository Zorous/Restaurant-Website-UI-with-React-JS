import React from "react";
import MenuItem from "../components/Menu/MenuItem";
import MostPopularItem from "../components/Menu/MostPopularItem";
import { Link } from "react-router-dom";
import MenuItems from "../components/MenuItems";

function Menu() {
  return (
    <div>
    
    <div class="container-xxl py-5 bg-dark hero-header mb-5">
    <div class="container text-center my-5 pt-5 pb-4">
        <h1 class="display-3 text-white mb-3 animated slideInDown">Maison Orientale</h1>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center text-uppercase">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item"><a href="#">Pages</a></li>
                <li class="breadcrumb-item text-white active" aria-current="page">Menu</li>
            </ol>
        </nav>
    </div>
</div>
<div className="text-center mt-5">
<h1 className="cool-title ff-secondary text-primary m-5">
  Découvrez Notre Menu
</h1>
<p className="description m-5">
  Explorez notre délicieux menu rempli de saveurs exotiques et de plats
  authentiques préparés avec amour et passion. Découvrez une expérience
  culinaire exceptionnelle qui vous transportera vers les merveilles de
  la cuisine orientale.
</p>
</div>
<MenuItems />

      <div class="container-xxl py-5">
        <div class="container mt-5">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 class="section-title ff-secondary text-center text-primary fw-normal">
              Plats Populaires
            </h5>
          </div>
          <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
            <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li class="nav-item">
                <a
                  class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                  data-bs-toggle="pill"
                  href="#tab-1"
                >
                  <i class="fa fa-coffee fa-2x text-primary"></i>
                  <div class="ps-3">
                    <small class="text-body">Popular</small>
                    <h6 class="mt-n1 mb-0">Breakfast</h6>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="d-flex align-items-center text-start mx-3 pb-3"
                  data-bs-toggle="pill"
                  href="#tab-2"
                >
                  <i class="fa fa-hamburger fa-2x text-primary"></i>
                  <div class="ps-3">
                    <small class="text-body">Special</small>
                    <h6 class="mt-n1 mb-0">Launch</h6>
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="d-flex align-items-center text-start mx-3 me-0 pb-3"
                  data-bs-toggle="pill"
                  href="#tab-3"
                >
                  <i class="fa fa-utensils fa-2x text-primary"></i>
                  <div class="ps-3">
                    <small class="text-body">Lovely</small>
                    <h6 class="mt-n1 mb-0">Dinner</h6>
                  </div>
                </a>
              </li>
            </ul>
            <div class="tab-content">
              <div id="tab-1" class="tab-pane fade show p-0 active">
                <div class="row g-4">
                  <MostPopularItem
                    title="Chicken Burger"
                    image="img/menu-1.jpg"
                    price="$115"
                    description="Ipsum ipsum clita erat amet dolor justo diam"
                  />
                  <MostPopularItem
                    title="Chicken Burger"
                    image="img/menu-1.jpg"
                    price="$115"
                    description="Ipsum ipsum clita erat amet dolor justo diam"
                  />
                  <MostPopularItem
                    title="Chicken Burger"
                    image="img/menu-2.jpg"
                    price="$115"
                    description="Ipsum ipsum clita erat amet dolor justo diam"
                  />
                  <MostPopularItem
                    title="Chicken Burger"
                    image="img/menu-2.jpg"
                    price="$115"
                    description="Ipsum ipsum clita erat amet dolor justo diam"
                  />
                  <MostPopularItem
                    title="Chicken Burger"
                    image="img/menu-3.jpg"
                    price="$115"
                    description="Ipsum ipsum clita erat amet dolor justo diam"
                  />
                  <MostPopularItem
                    title="Chicken Burger"
                    image="img/menu-4.jpg"
                    price="$115"
                    description="Ipsum ipsum clita erat amet dolor justo diam"
                  />
                </div>
              </div>
              <div id="tab-2" class="tab-pane fade show p-0">
                <div class="row g-4">
                  <MostPopularItem
                    title="Chicken Burger"
                    image="img/menu-5.jpg"
                    price="$115"
                    description="Ipsum ipsum clita erat amet dolor justo diam"
                  />
                  <MostPopularItem
                    title="Chicken Burger"
                    image="img/menu-6.jpg"
                    price="$115"
                    description="Ipsum ipsum clita erat amet dolor justo diam"
                  />
                  <MostPopularItem
                    title="Chicken Burger"
                    image="img/menu-7.jpg"
                    price="$115"
                    description="Ipsum ipsum clita erat amet dolor justo diam"
                  />
                  <MostPopularItem
                    title="Chicken Burger"
                    image="img/menu-5.jpg"
                    price="$115"
                    description="Ipsum ipsum clita erat amet dolor justo diam"
                  />
                </div>
              </div>
              <div id="tab-3" class="tab-pane fade show p-0">
                <div class="row g-4">
                  <MostPopularItem
                    title="Chicken Burger"
                    image="img/menu-4.jpg"
                    price="$115"
                    description="Ipsum ipsum clita erat amet dolor justo diam"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
