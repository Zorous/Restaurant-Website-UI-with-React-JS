import React from "react";
import Hero from "../components/Hero";
import MenuItems from "../components/MenuItems";
import Video from "../components/Video";
import APropos from "../components/APropos";
import AboutUs from "../components/AboutUs";

function Home() {
  return (
    <div>
      <Hero
        title="Bienvenue aux maison orientale"
        about="Savourez notre délicieux repas préparé avec soin, avec des ingrédients frais et de qualité. Laissez-vous séduire par nos saveurs exquises et profitez d'une expérience culinaire exceptionnelle"
        image={"img/hero.png"}
      />
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
      <hr style={{color:"#f5b500",height:"5px"}}></hr>

      <div className="text-center mt-5"><h1 className="text-primary text-center">Notre Services</h1></div>
      <APropos />

      <hr style={{color:"#f5b500",height:"5px"}}></hr>
      <AboutUs />
      {/*<Video />*/}
    </div>
  );
}

export default Home;
