import React from 'react'
import Hero from '../../components/Hero'

function boissons() {
  return (
    <div>
    <Hero
    title="Profitez de notre délicieux repas"
    about="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
    diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
    lorem sit clita duo justo magna dolore erat amet"
    image={`${process.env.PUBLIC_URL}/img/sauces-hero.png`}
     />  
    </div>
  )
}

export default boissons
