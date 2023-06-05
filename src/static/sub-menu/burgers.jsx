import React from 'react'
import Hero from '../../components/Hero'
import SubMenuItem from '../../components/Menu/SubMenuItem';
import FixedMenuItem from '../../components/Menu/FixedMenuItem';

function burgers() {
  return (
    <div>
    <Hero
    title="Profitez de notre délicieux repas"
    about="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
    diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
    lorem sit clita duo justo magna dolore erat amet"
    image={`${process.env.PUBLIC_URL}/img/burger-hero.png`}
     />  

     
     <div className='Menu-image'>
     <img src={`${process.env.PUBLIC_URL}/images/Menu/Burger.jpg`} alt="pizza-menu" />
     </div>



     <div class="container mt-5" style={{margin:"auto"}}>
     <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
       <h5 class="section-title ff-secondary text-center text-primary fw-normal">
         Burgers & Sandwiches
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
               <h6 class="mt-n1 mb-0">Burgers</h6>
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
               <h6 class="mt-n1 mb-0">Sandwiches</h6>
             </div>
           </a>
         </li>
       </ul>
       <div class="tab-content">
         <div id="tab-1" class="tab-pane fade show p-0 active">
           <div class="row g-4">
             <SubMenuItem
               title="Cheese Burger"
               image="/images/sous-menu/burger1.jpeg"
               price="$115"
               description="Ipsum ipsum clita erat amet dolor justo diam"
             />
             <SubMenuItem
               title="Chicken Burger"
               image="/images/sous-menu/burger2.jpeg"
               price="$115"
               description="Ipsum ipsum clita erat amet dolor justo diam"
             />
             <SubMenuItem
               title="Kebab Burger"
               image="/images/sous-menu/burger3.jpeg"
               price="$115"
               description="Ipsum ipsum clita erat amet dolor justo diam"
             />
             <SubMenuItem
               title="Fish Burger"
               image="/images/sous-menu/burger4.jpeg"
               price="$115"
               description="Ipsum ipsum clita erat amet dolor justo diam"
             />
             <SubMenuItem
               title="Orientale Burger"
               image="/images/sous-menu/burger5.jpeg"
               price="$115"
               description="Ipsum ipsum clita erat amet dolor justo diam"
             />

           </div>
         </div>
         <div id="tab-2" class="tab-pane fade show p-0">
           <div class="row g-4">
             <SubMenuItem
               title="Sandwich"
               image="/images/sous-menu/sandwitch_dinde.jpeg"
               price="$115"
               description="Ipsum ipsum clita erat amet dolor justo diam"
             />
             <SubMenuItem
               title="Sandwich"
               image="/images/sous-menu/Sandwich.jpg"
               price="$115"
               description="Ipsum ipsum clita erat amet dolor justo diam"
             />
             <SubMenuItem
               title="Sandwich"
               image="img/menu-7.jpg"
               price="$115"
               description="Ipsum ipsum clita erat amet dolor justo diam"
             />
             <SubMenuItem
               title="Sandwich"
               image="img/menu-5.jpg"
               price="$115"
               description="Ipsum ipsum clita erat amet dolor justo diam"
             />
           </div>
         </div>
       </div>
   </div>
 </div>
<FixedMenuItem />
    </div>
  )
}

export default burgers
