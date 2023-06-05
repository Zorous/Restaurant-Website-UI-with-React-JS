import React from 'react'
import Hero from '../../components/Hero'
import SubMenuItem from '../../components/Menu/SubMenuItem'

function Pizza() {
  return (
    <div>
    <Hero
    title="Pizza"
    about="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
    diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
    lorem sit clita duo justo magna dolore erat amet"
    image={`${process.env.PUBLIC_URL}/img/pizza-hero.png`}
     /> 

     <div className='Menu-image'>
     <img src={`${process.env.PUBLIC_URL}/images/Menu/Pizzas.jpg`} alt="pizza-menu" />
     </div>

     <div class="container mt-5" style={{margin:"auto"}}>
       <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
         <h5 class="section-title ff-secondary text-center text-primary fw-normal">
           Pizzas
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
               <div class="ps-3">
                 <small class="text-body">avec</small>
                 <h6 class="mt-n1 mb-0">crème fraiche</h6>
               </div>
             </a>
           </li>
           <li class="nav-item">
             <a
               class="d-flex align-items-center text-start mx-3 pb-3"
               data-bs-toggle="pill"
               href="#tab-2"
             >
               <div class="ps-3">
                 <small class="text-body">avec</small>
                 <h6 class="mt-n1 mb-0">sauce tomate</h6>
               </div>
             </a>
           </li>
         </ul>
         <div class="tab-content">
           <div id="tab-1" class="tab-pane fade show p-0 active">
             <div class="row g-4">
               <SubMenuItem
                 title="Pizza"
                 image="/images/sous-menu/pizza1.jpeg"
                 price="$115"
                 description="Ipsum ipsum clita erat amet dolor justo diam"
               />
               <SubMenuItem
                 title="Chicken Burger"
                 image="/images/sous-menu/pizza2.jpeg"
                  price="$115"
                 description="Ipsum ipsum clita erat amet dolor justo diam"
               />
             </div>
           </div>
           <div id="tab-2" class="tab-pane fade show p-0">
             <div class="row g-4">
               <SubMenuItem
                 title="Chicken Burger"
                 image="img/menu-5.jpg"
                 price="$115"
                 description="Ipsum ipsum clita erat amet dolor justo diam"
               />
               <SubMenuItem
                 title="Chicken Burger"
                 image="img/menu-6.jpg"
                 price="$115"
                 description="Ipsum ipsum clita erat amet dolor justo diam"
               />
               <SubMenuItem
                 title="Chicken Burger"
                 image="img/menu-7.jpg"
                 price="$115"
                 description="Ipsum ipsum clita erat amet dolor justo diam"
               />
               <SubMenuItem
                 title="Chicken Burger"
                 image="img/menu-5.jpg"
                 price="$115"
                 description="Ipsum ipsum clita erat amet dolor justo diam"
               />
             </div>
           </div>
         </div>
     </div>
     </div>
    </div>
  )
}

export default Pizza;
