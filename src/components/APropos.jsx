import React from "react";

function APropos() {
  const serviceItems = [
    {
      icon: "fa fa-3x fa-user-tie text-primary mb-4",
      title: "Chefs Maîtres",
      description: "Profitez de plats exquis préparés par nos Chefs Maîtres talentueux qui mettent leur expertise et leur passion dans chaque création culinaire.",
    },
    {
      icon: "fa fa-3x fa-utensils text-primary mb-4",
      title: "Qualité des Repas",
      description: "Appréciez des repas de haute qualité préparés avec soin, en utilisant des ingrédients frais et sélectionnés avec rigueur, pour une expérience gustative exceptionnelle.",
    },
    {
      icon: "fa fa-3x fa-headset text-primary mb-4",
      title: "Service 7/7J",
      description: "Profitez d'un service client disponible 7 jours sur 7, pour répondre à vos besoins et vous offrir une expérience agréable et sans interruption.",
    },
  ];

  return (
    <div>
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          {serviceItems.map((item, index) => (
            <div
              className="col-lg-4 col-sm-6 wow fadeInUp"
              data-wow-delay={`${index * 0.2}s`}
              key={index}
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className={item.icon}></i>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default APropos;
