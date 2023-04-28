import React from 'react'
import Hero from '../../components/Hero'

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

    </div>
  )
}

export default burgers
